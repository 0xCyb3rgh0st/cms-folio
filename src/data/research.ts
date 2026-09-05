export interface ResearchEntry {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  technologies: string[];
  publishedAt: string;
  featured: boolean;
  difficulty: string;
}

export const research: ResearchEntry[] = [
  {
    id: "owasp-2025-ai-vulnerabilities",
    slug: "owasp-2025-ai-vulnerabilities",
    title: "OWASP Top 10:2025 AI-Generated Code Vulnerabilities",
    description: "Gap analysis of OWASP's 2025 AI security risks against real-world LLM outputs. Testing local models for prompt injection, insecure code generation, and supply chain risks.",
    category: "ai-security",
    tags: ["AI Security", "OWASP", "LLM", "Prompt Injection"],
    technologies: ["Ollama", "Llama", "CodeLlama", "Semgrep", "Docker", "MCP"],
    publishedAt: "2025-08-15",
    featured: true,
    difficulty: "hard",
    content: `
## Why This Matters

Every developer is now an AI-assisted developer. But most have no idea what vulnerabilities their code assistant is quietly injecting. OWASP published their Top 10 for LLM Applications in 2025 — I decided to test how well local models actually follow those guidelines.

## The Setup

Running local LLM infrastructure for controlled testing:
- Ollama with Llama 3.1 8B and CodeLlama 13B
- Custom prompt injection test harness
- Semgrep rules for AI-generated code patterns
- Isolated Docker environments for safe exploitation

## Key Findings

### A01: Prompt Injection
Local models are significantly more susceptible than API-hosted ones. With no safety filters, direct prompt injection achieves ~73% success rate on CodeLlama versus ~12% on GPT-4.

### A02: Insecure Output Handling
Code assistants regularly generate code that passes user input directly to shell commands, SQL queries, and file operations without sanitization. Tested across 200 code generation prompts — 34% produced at least one injection-vulnerable output.

### A03: Training Data Poisoning
While not directly testable with local models, the supply chain risk is real. Model weights from unverified sources could contain backdoors triggered by specific prompts.

### A07: Insecure Plugin Design
Tool-use plugins in local LLM setups often lack proper access controls. A malicious MCP server could exfiltrate data or execute arbitrary commands.

## Real-World Impact

The gap between OWASP recommendations and actual model behavior is alarming. Most developers using AI code assistants have zero visibility into:
- What training data influenced the output
- Whether safety filters were applied
- If the generated code was tested against known vulnerability patterns

## What I'm Doing About It

Building a Semgrep rule set specifically for AI-generated code patterns. The rules target common vulnerabilities that LLMs produce at disproportionate rates compared to human-written code.

## Known Limitations

This analysis is limited to local models I can run on consumer hardware. Larger models (70B+) may behave differently. The prompt injection success rates are context-dependent and vary significantly between prompt templates.
    `,
  },
  {
    id: "pwnlibc-deep-dive",
    slug: "pwnlibc-deep-dive",
    title: "pwnlibc: Building a libc identification tool",
    description: "Deep dive into how pwnlibc identifies libc versions from leaked addresses and automates exploit development workflow.",
    category: "binary-exploitation",
    tags: ["Python", "Exploit Dev", "libc"],
    technologies: ["Python", "libc"],
    publishedAt: "2024-08-01",
    featured: true,
    difficulty: "hard",
    content: `
## Why pwnlibc?

When exploiting buffer overflows on modern Linux systems, you need to know the exact libc version to calculate offsets. Traditionally, this involved manually searching database websites. pwnlibc automates this entire process.

## How It Works

1. Extract leaked address from target
2. Hash the lower 12 bits against known libc databases
3. Match and identify the exact libc version
4. Automatically download the matching libc
5. Calculate all needed offsets

## Architecture

\`\`\`
pwnlibc/
├── core/
│   ├── identifier.py    # Main identification logic
│   ├── database.py      # Remote database queries
│   └── downloader.py    # Automatic libc download
├── api/
│   └── client.py        # Python API
└── cli/
    └── main.py          # CLI interface
\`\`\`

## Key Challenges

- Handling partial leaks (only lower bits)
- Supporting multiple libc databases
- Race conditions in database queries
- Cross-platform compatibility
    `,
  },
  {
    id: "ghidra-open-automation",
    slug: "ghidra-open-automation",
    title: "Ghidra Automation with ghidra-open",
    description: "How ghidra-open eliminates repetitive Ghidra setup with one-command project creation and headless analysis.",
    category: "tools-automation",
    tags: ["Ghidra", "Automation", "Java"],
    technologies: ["Ghidra", "Java", "analyzeHeadless"],
    publishedAt: "2024-07-15",
    featured: false,
    difficulty: "medium",
    content: `
## The Problem

Every time you open a binary in Ghidra, you:
1. Create a new project
2. Import the binary
3. Wait for auto-analysis
4. Open the GUI

This gets tedious when analyzing many binaries.

## The Solution

ghidra-open does it all in one command:

\`\`\`bash
ghidra-open ./target_binary
\`\`\`

This automatically:
- Creates a Ghidra project
- Imports the binary
- Runs headless analysis
- Launches the GUI when ready

## Implementation

Uses Ghidra's headless analyzer API:
- \`analyzeHeadless\` for background processing
- Ghidra scripts for custom analysis
- Shell wrapper for CLI integration
    `,
  },
  {
    id: "ad-attack-automation",
    slug: "ad-attack-automation",
    title: "AD Attack Path Automation",
    description: "Automating Active Directory attack paths from enumeration to domain compromise using BloodHound and Impacket.",
    category: "ad-windows",
    tags: ["AD", "BloodHound", "Impacket"],
    technologies: ["BloodHound", "Impacket", "Certipy", "ADCS"],
    publishedAt: "2024-06-20",
    featured: false,
    difficulty: "hard",
    content: `
## Overview

Active Directory environments contain complex attack paths that can be difficult to identify manually. This research covers automating the entire attack lifecycle.

## Enumeration Phase

\`\`\`bash
# BloodHound collection
bloodhound-python -u user -p pass -d corp.local -ns 10.10.10.1 -c all

# Certificate enumeration
certipy find -u user@corp.local -p Pass123 -dc-ip 10.10.10.1
\`\`\`

## Attack Techniques

1. **Kerberoasting** - Request TGS tickets for offline cracking
2. **AS-REP Roasting** - Target accounts with pre-auth disabled
3. **Certificate Abuse** - Exploit misconfigured ADCS templates
4. **Delegation Attacks** - Abuse unconstrained/constrained delegation

## Automation

Using Impacket for scripted attacks:
\`\`\`python
from impacket.krb5.kerberosv5 import getTGT
from impacket.smbconnection import SMBConnection
\`\`\`
    `,
  },
  {
    id: "heap-exploitation-guide",
    slug: "heap-exploitation-guide",
    title: "Heap Exploitation Techniques",
    description: "Comprehensive guide to modern heap exploitation including tcache poisoning and house of techniques.",
    category: "binary-exploitation",
    tags: ["Pwn", "Heap", "Linux"],
    technologies: ["glibc", "pwntools"],
    publishedAt: "2024-05-10",
    featured: false,
    difficulty: "insane",
    content: `
## Modern Heap Internals

Understanding glibc malloc internals is essential for heap exploitation.

## Key Techniques

### Tcache Poisoning
- Corrupt tcache chunk fd pointer
- Allocate chunk at arbitrary address
- Overwrite __free_hook or similar

### House of techniques
- House of Force
- House of Spirit
- House of Orange
- House of Lore

## Practical Example

\`\`\`python
from pwn import *

# Corrupt tcache fd
payload = b'A' * 0x20
payload += p64(0)      # prev_size
payload += p64(0x91)   # size
payload += p64(target)  # fd pointer
\`\`\`
    `,
  },
];

export const CATEGORY_LABELS: Record<string, string> = {
  "web-security": "WEB SECURITY",
  "binary-exploitation": "BINARY EXPLOITATION",
  "reverse-engineering": "REVERSE ENGINEERING",
  "ad-windows": "AD / WINDOWS",
  "ai-security": "AI SECURITY",
  "bug-bounty": "BUG BOUNTY",
  "tools-automation": "TOOLS / AUTOMATION",
};

export const CATEGORY_COLORS: Record<string, string> = {
  "web-security": "var(--cyan)",
  "binary-exploitation": "var(--red)",
  "reverse-engineering": "var(--orange)",
  "ad-windows": "var(--cyan)",
  "ai-security": "var(--purple)",
  "bug-bounty": "var(--cyan)",
  "tools-automation": "var(--red)",
};

export const DIFFICULTY_COLORS: Record<string, string> = {
  easy: "var(--cyan)",
  medium: "var(--orange)",
  hard: "var(--red)",
  insane: "var(--purple)",
};

export function categoryLabel(category: string): string {
  return CATEGORY_LABELS[category] || category.toUpperCase();
}

export function presentCategories(): string[] {
  return [...new Set(research.map((r) => r.category))];
}

export function presentYears(): string[] {
  return [...new Set(research.map((r) => r.publishedAt.slice(0, 4)))].sort().reverse();
}

export function getLatest(n: number): ResearchEntry[] {
  return [...research].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, n);
}

export function getBySlug(slug: string): ResearchEntry | undefined {
  return research.find((r) => r.slug === slug);
}

export function getRelated(entry: ResearchEntry, n: number): ResearchEntry[] {
  const scored = research
    .filter((r) => r.slug !== entry.slug)
    .map((r) => {
      let score = 0;
      if (r.category === entry.category) score += 3;
      score += r.tags.filter((t) => entry.tags.includes(t)).length;
      score += r.technologies.filter((t) => entry.technologies.includes(t)).length;
      return { r, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || b.r.publishedAt.localeCompare(a.r.publishedAt))
    .slice(0, n)
    .map((s) => s.r);
  const pool = [...research].filter((r) => r.slug !== entry.slug).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  while (scored.length < n && pool.length > 0) {
    const fill = pool.shift();
    if (fill && !scored.some((s) => s.slug === fill.slug)) scored.push(fill);
  }
  return scored;
}

const PRE_OPEN = '<pre style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:var(--radius);padding:16px;margin:16px 0;overflow-x:auto;font-family:"Source Code Pro",monospace;font-size:0.8rem;color:var(--text-muted);line-height:1.7;"><code>';
const PRE_CLOSE = '</code></pre>';
const STRONG_RE = /\*\*(.*?)\*\*/g;

function inlineFormat(text: string): string {
  return text
    .replace(/`([^`]+)`/g, '<code style="background:var(--bg-tertiary);padding:2px 6px;border-radius:4px;font-family:"Source Code Pro",monospace;color:var(--red);font-size:0.85em;">$1</code>')
    .replace(STRONG_RE, '<strong style="color:var(--text);">$1</strong>');
}

export function renderMarkdown(raw: string): string {
  const lines = raw.split('\n');
  let html = '';
  let inPre = false;
  let inList = false;

  const closeList = (): void => {
    if (inList) {
      html += '</ul>';
      inList = false;
    }
  };

  for (const line of lines) {
    if (/^```/.test(line)) {
      if (!inPre) {
        closeList();
        html += PRE_OPEN;
        inPre = true;
      } else {
        html += PRE_CLOSE;
        inPre = false;
      }
      continue;
    }
    if (inPre) {
      html += line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '\n';
      continue;
    }

    const h2 = line.match(/^## (.*)$/);
    const h3 = line.match(/^### (.*)$/);
    const h4 = line.match(/^#### (.*)$/);
    const h5 = line.match(/^##### (.*)$/);
    const h6 = line.match(/^###### (.*)$/);
    const li = line.match(/^[ \t]*(?:[-*]|\d+\.) (.*)$/);
    const blank = /^\s*$/.test(line);

    if (h2 || h3 || h4 || h5 || h6) {
      closeList();
      const level = h2 ? '2' : h3 ? '3' : h4 ? '4' : h5 ? '5' : '6';
      const sizes: Record<string, string> = { '2': '1.25rem', '3': '1.1rem', '4': '0.95rem', '5': '0.9rem', '6': '0.85rem' };
      html += `<h${level} style="font-size:${sizes[level]};font-weight:600;color:var(--text);margin:24px 0 12px;font-family:'Source Code Pro',monospace;">${inlineFormat((h2 || h3 || h4 || h5 || h6)![1])}</h${level}>\n`;
      continue;
    }
    if (li) {
      if (!inList) {
        html += '<ul style="padding-left:20px;margin:8px 0 16px;list-style:disc;color:var(--text-muted);">\n';
        inList = true;
      }
      html += `<li>${inlineFormat(li[1])}</li>\n`;
      continue;
    }
    if (blank) {
      closeList();
      html += '\n';
      continue;
    }
    closeList();
    html += `<p style="margin:12px 0;">${inlineFormat(line)}</p>\n`;
  }
  closeList();
  if (inPre) html += PRE_CLOSE;
  return html;
}