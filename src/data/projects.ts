export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  technologies: string[];
  publishedAt: string;
  featured: boolean;
  github: string;
  whyItMatters: string;
  impact: string;
  features: string[];
  install: string;
  usage: string;
}

export const projects: Project[] = [
  {
    id: "h1cli",
    slug: "h1cli",
    title: "h1cli",
    description: "All-in-one HackerOne CLI for bug bounty hunters. Browse programs, filter by asset type, export recon-ready scopes, track reports and earnings.",
    category: "tools-automation",
    tags: ["Python", "Bug Bounty", "HackerOne", "CLI"],
    technologies: ["Python 3.7+", "requests", "keyring", "HackerOne API v1"],
    publishedAt: "2025-06-01",
    featured: false,
    github: "https://github.com/0xCyb3rgh0st/h1cli",
    whyItMatters: "Bug bounty hunters waste hours manually copying program scopes into recon tools. h1cli eliminates this friction entirely.",
    impact: "Used by bounty hunters to automate HackerOne program discovery and scope management.",
    features: ["Browse all HackerOne programs from terminal", "Filter by asset type (Domain, CIDR, URL, iOS, Android)", "Export scope to subfinder/httpx/nuclei-ready format", "Track reports, bounties, and earnings", "Diff mode for new programs since last run", "Filter presets and per-program notes", "Secure token storage via OS keyring", "Multiple output formats: Table, CSV, JSON"],
    install: "git clone https://github.com/0xCyb3rgh0st/h1cli && pip install requests keyring",
    usage: "python h1cli.py                          # interactive mode\npython h1cli.py list --bounty --asset DOMAIN  # CLI mode\npython h1cli.py export --bounty --combine targets.txt",
  },
  {
    id: "pwnlibc",
    slug: "pwnlibc",
    title: "pwnlibc",
    description: "Advanced libc identification toolkit for exploit development. Fast libc identification, automatic download, symbol lookup, Python API, and CLI.",
    category: "binary-exploitation",
    tags: ["Python", "Exploit Dev", "CLI"],
    technologies: ["Python 3.10+", "requests", "argparse", "rich"],
    publishedAt: "2024-08-01",
    featured: true,
    github: "https://github.com/0xCyb3rgh0st/pwnlibc.git",
    whyItMatters: "When exploiting buffer overflows on modern Linux, knowing the exact libc version is critical. Wrong offsets = crash. pwnlibc eliminates the guesswork.",
    impact: "Automates libc identification from leaked addresses, saving exploit developers hours of manual database lookups.",
    features: ["Fast libc identification from leaked addresses", "Automatic libc download from remote databases", "Symbol lookup and offset calculation", "Python API for integration", "CLI interface for quick usage"],
    install: "pip install pwnlibc",
    usage: "pwnlibc identify 0x7f123456\npwnlibc lookup system\npwnlibc download libc6_2.31",
  },
  {
    id: "HexSnare",
    slug: "hexsnare",
    title: "HexSnare",
    description: "Hexadecimal analysis and parsing toolkit for binary analysis, CTF challenges, and exploit development.",
    category: "binary-exploitation",
    tags: ["Python", "Binary", "Hex"],
    technologies: ["Python", "binascii", "struct"],
    publishedAt: "2024-07-15",
    featured: true,
    github: "https://github.com/0xCyb3rgh0st/HexSnare",
    whyItMatters: "Manual hex dances slow down binary analysis. HexSnare turns byte-level inspection into repeatable, scriptable workflows.",
    impact: "Speeds up parsing and inspection of binary data during CTF reverse engineering and exploit development.",
    features: ["Hex dump with structured annotations", "Byte pattern search and extraction", "Endian-aware integer parsing", "CTF-focused challenge helpers"],
    install: "git clone https://github.com/0xCyb3rgh0st/HexSnare",
    usage: "hexsnare dump ./binary\nhexsnare find '\\x89PNG' ./file\nhexsnare unpack '<I' 0xdeadbeef",
  },
  {
    id: "csrf-proc",
    slug: "csrf-proc",
    title: "csrf-proc",
    description: "CSRF vulnerability detection and exploitation framework for web application security testing.",
    category: "web-security",
    tags: ["Python", "Web", "CSRF"],
    technologies: ["Python", "requests", "BeautifulSoup"],
    publishedAt: "2024-06-20",
    featured: true,
    github: "https://github.com/0xCyb3rgh0st/csrf-proc.git",
    whyItMatters: "CSRF bugs hide in state-changing endpoints that lack proper token validation. csrf-proc automates the request analysis that finds them.",
    impact: "Helps web pentesters detect missing CSRF protections across application endpoints and reproduce them for reports.",
    features: ["State-changing endpoint discovery", "Token validation analysis", "CSRF PoC generation", "Request replay for verification"],
    install: "git clone https://github.com/0xCyb3rgh0st/csrf-proc.git && pip install -r requirements.txt",
    usage: "csrf-proc scan --url https://target.com --cookies session.txt\ncsrf-proc poc --url https://target.com/change-password",
  },
  {
    id: "ghidra-open",
    slug: "ghidra-open",
    title: "ghidra-open",
    description: "One-command launcher for Ghidra. Binary → Automatic Project → Headless Analysis → Launch GUI.",
    category: "reverse-engineering",
    tags: ["Ghidra", "Automation", "Java"],
    technologies: ["Bash", "Java", "Ghidra Scripts", "Python"],
    publishedAt: "2024-05-10",
    featured: false,
    github: "https://github.com/0xCyb3rgh0st/ghidra_autorun",
    whyItMatters: "Setting up Ghidra projects manually is tedious. ghidra-open turns a 5-step process into one command.",
    impact: "Used by reverse engineers to automate Ghidra project setup and headless analysis pipelines.",
    features: ["One-command Ghidra project creation", "Automatic headless analysis on import", "GUI launches after analysis completes", "Script integration support", "Cross-platform compatibility"],
    install: "git clone https://github.com/0xCyb3rgh0st/ghidra_autorun",
    usage: "ghidra-open ./target_binary\nghidra-open --headless-only ./binary\nghidra-open --script my_script.py ./binary",
  },
  {
    id: "CrackTheCode",
    slug: "crackthecode",
    title: "CrackTheCode",
    description: "Final year project - interactive cryptography and code-breaking challenge platform.",
    category: "web-security",
    tags: ["Python", "Crypto", "Education"],
    technologies: ["Python", "Flask", "Crypto", "SQLite"],
    publishedAt: "2024-03-01",
    featured: false,
    github: "https://github.com/0xCyb3rgh0st/crackthecode.git",
    whyItMatters: "Cryptography is best learned by breaking things. CrackTheCode turns classic ciphers into hands-on, interactive challenges.",
    impact: "Used as an educational platform for learning classical and modern cipher breaking hands-on.",
    features: ["Classic cipher challenges", "Interactive code-breaking interface", "Progress tracking across challenges", "Hints and solution walkthroughs"],
    install: "git clone https://github.com/0xCyb3rgh0st/crackthecode.git --recurse-submodules",
    usage: "python app.py                        # start the challenge platform\nopen http://localhost:5000",
  },
];

export interface ProjectCategory {
  label: string;
  color: string;
}

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

export function categoryLabel(category: string): string {
  return CATEGORY_LABELS[category] || category.replace("-", " ");
}

export function categoryColor(category: string): string {
  return CATEGORY_COLORS[category] || "var(--red)";
}

export function presentCategories(): string[] {
  return [...new Set(projects.map((p) => p.category))];
}

export function presentYears(): string[] {
  return [...new Set(projects.map((p) => p.publishedAt.slice(0, 4)))].sort().reverse();
}

export function getFeatured(n = 3): Project[] {
  const featured = projects.filter((p) => p.featured);
  const fill = projects.filter((p) => !p.featured);
  return [...featured, ...fill].slice(0, n);
}

export function getBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelated(entry: Project, n = 3): Project[] {
  const scored = projects
    .filter((p) => p.slug !== entry.slug)
    .map((p) => {
      let score = 0;
      if (p.category === entry.category) score += 3;
      score += p.tags?.filter((t) => entry.tags.includes(t)).length;
      score += p.technologies?.filter((t) => entry.technologies.includes(t)).length;
      return { p, score };
    })
    .filter((s) => s.score > 0)
    .sort((a,b) => b.score - a.score || b.p.publishedAt.localeCompare(a.p.publishedAt))
    .slice(0,n)
    .map((s) => s.p);
  const pool = [...projects].filter((p) => p.slug !== entry.slug).sort((a,b) => b.publishedAt.localeCompare(a.publishedAt));
  while (scored.length < n && pool.length > 0) {
    const fill = pool.shift();
    if (fill && !scored.some((s) => s.slug === fill.slug)) scored.push(fill);
  }
  return scored;
}