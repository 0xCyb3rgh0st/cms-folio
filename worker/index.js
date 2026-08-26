const CLIENT_ID = 'Ov23liQN44JIjBelbVgY';
const CLIENT_SECRET = '43936260f59d3201fae8198f39afc5c01db09468';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function handleCORS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

async function handleAuth() {
  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.set('client_id', CLIENT_ID);
  url.searchParams.set('scope', 'repo,user');
  return Response.redirect(url.toString(), 302);
}

async function handleCallback(request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return new Response('Missing code parameter', { status: 400, headers: corsHeaders });
  }

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
    }),
  });

  const data = await tokenRes.json();

  if (data.error) {
    return new Response(JSON.stringify(data), {
      status: 401,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const html = `<!DOCTYPE html><html><head><title>Authenticating...</title></head><body>
<script>
(function() {
  function sendMessage(provider, token) {
    var msg = "authorization:" + provider + ":success:" + JSON.stringify(token);
    if (window.opener) {
      window.opener.postMessage(msg, "*");
      window.close();
    } else {
      document.body.innerHTML = "<p>You can close this window.</p>";
    }
  }
  sendMessage("github", ${JSON.stringify(data)});
})();
</script>
<p>Authenticating...</p>
</body></html>`;

  return new Response(html, {
    headers: { ...corsHeaders, 'Content-Type': 'text/html' },
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return handleCORS();
    }

    if (url.pathname === '/auth') {
      return handleAuth();
    }

    if (url.pathname === '/callback') {
      return handleCallback(request);
    }

    return new Response('GitHub OAuth Proxy for Decap CMS', {
      headers: { ...corsHeaders, 'Content-Type': 'text/plain' },
    });
  },
};
