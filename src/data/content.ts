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
      "Learned full-stack web development from the ground up, picked up JavaScript, Next.js, React, and Tailwind CSS, along with Flask backend. Built practice projects implementing Google Authentication using OAuth 2.0, MongoDB integration, and RBAC, and deployed applications on Vercel to gain hands on exposure to production grade development workflows.",
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

export interface ProjectItem {
  id: string;
  title: string;
  description: string;       // Full detailed description (used in Featured Projects section)
  shortDescription: string;  // 1-liner description (used in More Projects section)
  status: 'featured' | 'archive'; // Set to 'featured' to show in Projects, or 'archive' to show in More Projects
  tech: string[];
  github: string;
  live: string | null;
}

export const projects = [
  {
  id: "proj-1",
  title: "Philosophical Text Engine",
  description:
    "Built a hybrid ML pipeline to classify philosophical text passages into branches and schools of thought using a multi-tier Hierarchical MLP in PyTorch. Combines a deterministic SVM baseline, probabilistic Neural Network predictions, and unsupervised K-Means clustering for multi-perspective analysis, with TF-IDF vectorization, NLTK preprocessing, and PCA-based 2D visualization of philosophical distance between texts.",
  shortDescription: "A hybrid ML pipeline classifying philosophical texts using SVM, Neural Networks, and clustering.",
  status: "featured",
  tech: ["Python", "PyTorch", "scikit-learn", "FastAPI", "Docker", "NLTK"],
  github: null,
  live: null,
},
{
  id: "proj-6",
  title: "Full-Stack Auth App — Next.js",
  description:
    "A full-stack web application built during a software engineering internship to learn production-grade development practices. Implements Google Authentication, MongoDB integration for data persistence, and form validation, built using Next.js, React, and Tailwind CSS, and deployed on Vercel.",
  shortDescription: "A full-stack Next.js app with Google Auth and MongoDB, built during an internship.",
  status: "featured",
  tech: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Google Auth"],
  github: null,
  live: null,
 },
  {
  id: "proj-2",
  title: "Smart Saver — Grocery Substitution Engine",
  description:
    "A full-stack web app built independently at Micathon 2026 that uses AI-powered OCR to scan grocery receipts, identify imported products, and recommend local alternatives. Integrates Gemini 2.5 Flash Vision API on a FastAPI backend to extract item details, cross-referenced against a curated substitutions database, with a React frontend featuring Recharts-powered savings dashboards.",
  shortDescription: "An AI-powered receipt scanner that recommends local grocery substitutes to cut spending.",
  status: "featured",
  tech: ["FastAPI", "Gemini API", "React", "Recharts", "Docker"],
  github: null,
  live: null,
  },
  {
  id: "proj-3",
  title: "Anomaly Detection via Statistical Intensity Analysis",
  description:
    "An anomaly detection system using first-principles statistical analysis instead of Deep Learning, addressing the rare-event problem in computer vision. Flags pixel-level anomalies based on deviation from mean/standard deviation thresholds, with isolated R/G/B channel maps for defect-type isolation. Optimized to O(N) complexity for real-time performance, achieving zero-shot crack detection without labeled training data.",
  shortDescription: "A statistics-based anomaly detector for computer vision, no deep learning required.",
  status: "archive",
  tech: ["Python", "NumPy", "Pillow", "Streamlit"],
  github: null,
  live: null,
  },
  {
  id: "proj-4",
  title: "PC Parts Optimization Platform",
  description:
    "A budget-aware PC build recommendation platform using a heuristic scoring engine. Users specify a budget and use case (Gaming, ML, General) to receive top GPU/CPU pairings, with a weighted scoring system normalizing raw hardware benchmarks via min-max scaling and use-case-specific weights.",
  shortDescription: "A budget-aware PC build recommender using weighted hardware benchmark scoring.",
  status: "archive",
  tech: ["FastAPI", "Pandas", "React", "Tailwind CSS"],
  github: null,
  live: null,
  },
  {
  id: "proj-5",
  title: "Music Playlist Management System",
  description:
    "A high-performance music management and playback system built without external databases. Implements AVL Trees for O(log n) lookups, a custom Polynomial Rolling Hash Table, and Merge Sort for ranking Most Liked songs, with a Graph Theory/BFS-based recommendation engine driven by listening patterns.",
  shortDescription: "A custom-built music playback engine using AVL Trees, hashing, and graph-based recommendations.",
  status: "featured",
  tech: ["C++", "SFML", "Data Structures & Algorithms"],
  github: null,
  live: null,
},
 {
  id: "proj-7",
  title: "Full-Stack Auth App — Flask & React",
  description:
    "A full-stack web application built during the same internship, using a Flask backend as an alternative to Next.js to broaden exposure to different stacks. Implements the same core features: Google Authentication, MongoDB integration, and form validation, with a React (Vite) frontend, deployed on Vercel.",
  shortDescription: "A Flask + React (Vite) counterpart to the Next.js auth app, built for stack comparison.",
  status: "archive",
  tech: ["Flask", "React", "Vite", "MongoDB", "Google Auth"],
  github: null,
  live: null,
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
