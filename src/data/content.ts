import { LINKS } from '../constants/links';

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT — edit this file to populate your portfolio with your real details.
// ─────────────────────────────────────────────────────────────────────────────

export const personal = {
  name: "Muhammad Ibrahim Umar",
  role: "Full Stack AI/ML Engineer",
  tagline: "Building intelligent interfaces, one commit at a time.",
  email: LINKS.email,
  github: LINKS.github,
  linkedin: LINKS.linkedin,
  resume: LINKS.resume,
};

export const about = [
  "I'm a full stack AI/ML engineer in my third year of an Artificial Intelligence degree at Ghulam Ishaq Khan Institute. My coursework in machine learning, data structures, and software design has fed directly into independent projects spanning NLP, computer vision, and full stack development. A recent hands on internship gave me practical exposure to production style applications beyond the classroom. I'm interested in both web development and AI/ML, with a growing focus on DevOps and deployment.",
  "Outside academics, I've been part of IET on Campus at GIKI for over two years, now serving as Head after being promoted from Volunteer, and previously helped organize a nationwide innovation summit with over 300 attendees. I've also volunteered with Shaukat Khanum Memorial Cancer Hospital and play football regularly. I bring technical depth alongside genuine initiative to everything I take on, and I do this simply because I love the things I do and taking on new challenges.",
];

export const history = [
  {
    id: "job-1",
    role: "Software Engineering Intern",
    company: "CyberNest",
    location: "Lahore, Pakistan",
    dateRange: "JUN 2026 – AUG 2026",
    focus:
      "Learned full-stack web development from the ground up,  picked up JavaScript, Next.js, React, and Tailwind CSS, along with Flask backend. Built practice projects implementing Google Authentication using OAuth 2.0, MongoDB integration, and RBAC, and deployed applications on Vercel to gain hands on exposure to production grade development workflows.",
  },
  {
    id: "job-2",
    role: "Junior Year Artificial Intellegence Student",
    company: "Ghulam Ishaq Khan Institute",
    location: "Topi, Pakistan",
    dateRange: "2024 – Present",
    focus:
      "Building a strong foundation in AI/ML and software engineering through coursework in machine learning, data structures & algorithms, and software design. Applying these concepts through independent projects spanning NLP, computer vision, and full-stack development, with growing focus on practical, deployable AI systems.",
  },
];

export const projects = [
  {
    id: "proj-1",
    title: "Contexto — Semantic Search Engine",
    description:
      "A full-stack semantic search tool that embeds documents with sentence-transformers and retrieves them via FAISS. Features a React query interface with real-time result streaming.",
    tech: ["Python", "FastAPI", "React", "FAISS", "sentence-transformers", "Docker"],
    github: LINKS.projects.contexto.github,
    live: LINKS.projects.contexto.live,
  },
  {
    id: "proj-2",
    title: "Synapse UI — Component Library",
    description:
      "An accessible, design-token-driven React component library with full TypeScript types, Storybook documentation, and automated visual-regression tests via Chromatic.",
    tech: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Chromatic"],
    github: LINKS.projects.synapseUi.github,
    live: LINKS.projects.synapseUi.live,
  },
  {
    id: "proj-3",
    title: "LLM Eval Harness",
    description:
      "A configurable evaluation framework for benchmarking large language models on custom task suites. Supports parallel inference, metric aggregation, and a web-based results dashboard.",
    tech: ["Python", "PyTorch", "FastAPI", "SQLite", "React", "Vite"],
    github: LINKS.projects.llmEval.github,
    live: LINKS.projects.llmEval.live,
  },
  {
    id: "proj-4",
    title: "TrailMapper",
    description:
      "A Progressive Web App for offline trail navigation. Uses IndexedDB for tile caching, the Geolocation API for live tracking, and a custom React map renderer built on top of Leaflet.",
    tech: ["React", "TypeScript", "Leaflet", "IndexedDB", "PWA", "Node.js"],
    github: LINKS.projects.trailMapper.github,
    live: LINKS.projects.trailMapper.live,
  },
];

export const skills = {
  webDev: [
    "TypeScript",
    "React",
    "Next.js",
    "Vite",
    "Node.js",
    "Tailwind CSS",
    "REST APIs",
    "PostgreSQL",
    "Docker",
    "Vercel",
    "CI/CD",
  ],
  aiMl: [
    "Python",
    "PyTorch",
    "scikit-learn",
    "Pandas",
    "NumPy",
    "Fast API",
    "RAG",
    "Prompt Engineering",
    "LLM APIs", 
  ],
};
