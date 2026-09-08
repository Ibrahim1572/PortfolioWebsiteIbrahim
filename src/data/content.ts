import { LINKS } from '../constants/links';

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT — edit this file to populate your portfolio with your real details.
// ─────────────────────────────────────────────────────────────────────────────

export const personal = {
  name: "Muhammad Ibrahim Umar",
  role: "Web Developer & AI-ML Engineer",
  tagline: "Building intelligent interfaces, one commit at a time.",
  email: LINKS.email,
  github: LINKS.github,
  linkedin: LINKS.linkedin,
  resume: LINKS.resume,
};

export const about = [
  "I'm a full-stack developer and machine-learning engineer with a passion for shipping products that sit at the intersection of elegant UX and intelligent systems. I write TypeScript by day, train models by night, and obsess over the milliseconds in between.",
  "Previously, I've led front-end architecture at early-stage startups, contributed to open-source ML tooling, and spent a year embedded with a research team working on large-language-model evaluation frameworks.",
  "When I'm not at a keyboard I'm usually trail-running, reading about cognitive science, or dismantling some perfectly functional piece of electronics to see what's inside.",
];

export const history = [
  {
    id: "job-1",
    role: "Senior Full-Stack Engineer",
    company: "Nexus AI",
    location: "San Francisco, CA (Remote)",
    dateRange: "2023 – Present",
    focus:
      "Led re-architecture of the core product dashboard from CRA to Vite + React, reduced bundle size by 62%, designed and shipped an AI-assisted data-annotation UI used by 40+ enterprise clients.",
  },
  {
    id: "job-2",
    role: "ML Engineer",
    company: "Orbital Labs",
    location: "London, UK",
    dateRange: "2021 – 2023",
    focus:
      "Built NLP pipelines for document classification and information extraction. Deployed fine-tuned transformer models to production via FastAPI and containerised inference on AWS ECS.",
  },
  {
    id: "job-3",
    role: "Front-End Developer",
    company: "Patchwork Studio",
    location: "Dubai, UAE",
    dateRange: "2019 – 2021",
    focus:
      "Delivered responsive React web apps for clients in fintech and e-commerce. Introduced TypeScript to the team's workflow and established component-library conventions still in use today.",
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
    "GraphQL",
    "REST APIs",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "CI/CD",
    "Webpack",
  ],
  aiMl: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "Hugging Face",
    "LangChain",
    "FAISS",
    "scikit-learn",
    "Pandas",
    "NumPy",
    "FastAPI",
    "MLflow",
    "RAG",
    "Prompt Engineering",
  ],
};
