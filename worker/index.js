const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

async function handleAuth(env) {
  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
  url.searchParams.set('scope', 'repo,user');
  return Response.redirect(url.toString(), 302);
}

async function handleCallback(request, env) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return new Response('Error: No code provided', { status: 400, headers: corsHeaders });
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id: env.GITHUB_CLIENT_ID,
        client_secret: env.GITHUB_CLIENT_SECRET,
        code: code,
      }),
    });

    const data = await tokenRes.json();

    if (data.error) {
      return new Response('GitHub Error: ' + data.error_description, { status: 401, headers: corsHeaders });
    }

    const token = data.access_token;
    if (!token) {
      return new Response('Error: No token received', { status: 500, headers: corsHeaders });
    }

    const msg = 'authorization:github:success:' + JSON.stringify({ token: token });

    const html = `<!DOCTYPE html>
<html>
<head><title>Authorizing...</title></head>
<body>
<script>
(function() {
  try {
    var msg = ${JSON.stringify(msg)};
    if (window.opener) {
      window.opener.postMessage(msg, "*");
      setTimeout(function() { window.close(); }, 100);
    } else {
      document.body.innerHTML = "<p>Login successful! You can close this window and return to the CMS.</p>";
    }
  } catch(e) {
    document.body.innerHTML = "<p>Error: " + e.message + "</p>";
  }
})();
</script>
<p>Authorizing...</p>
</body>
</html>`;

    return new Response(html, {
      headers: { ...corsHeaders, 'Content-Type': 'text/html; charset=utf-8' },
    });

  } catch (err) {
    return new Response('Error: ' + err.message, { status: 500, headers: corsHeaders });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (url.pathname === '/auth') {
      return handleAuth(env);
    }

    if (url.pathname === '/callback' || (url.pathname === '/' && url.searchParams.has('code'))) {
      return handleCallback(request, env);
    }

    return new Response('OAuth Proxy - Ready', { headers: corsHeaders });
  },
};
