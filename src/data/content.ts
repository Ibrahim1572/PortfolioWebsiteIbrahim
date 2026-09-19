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
  shortDescription: string; 
  caseStudy?: string;  // 1-liner description (used in More Projects section)
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
    "Built a hybrid ML pipeline to classify philosophical text passages into branches and schools of thought using a multi-tier Hierarchical MLP in PyTorch. Combines a deterministic SVM baseline, probabilistic Neural Network predictions, and unsupervised K-Means clustering for multi-perspective analysis. Uses TF-IDF vectorization across 10,000 features with NLTK preprocessing, PCA-based 2D visualization of philosophical distance between texts, and supports dual inference modes (Fast / Full-accuracy) via serialized model artifacts.",
  shortDescription: "A hybrid ML pipeline classifying philosophical texts using SVM, Neural Networks, and clustering.",
  caseStudy:'',
  status: "featured",
  tech: ["Python", "PyTorch", "scikit-learn", "FastAPI", "Docker", "NLTK"],
  github: 'https://github.com/maffanz47/Philosophical-Engine',
  live: null,
},
{
  id: "proj-6",
  title: "Full-Stack Auth App — Next.js",
  description:
    "A full-stack web application built during a software engineering internship to learn production-grade development practices. Implements Google Authentication, MongoDB integration for data persistence, and form validation, built using Next.js, React, and Tailwind CSS, and deployed on Vercel.",
  shortDescription: "A full-stack Next.js app with Google Auth and MongoDB, built during an internship.",
  caseStudy:'',
  status: "featured",
  tech: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Google Auth"],
  github: 'https://github.com/Ibrahim1572/next_js_app',
  live: 'https://next-js-app-seven-murex.vercel.app/login',
 },
  {
  id: "proj-2",
  title: "Smart Saver — Grocery Substitution Engine",
  description:
    "An anomaly detection system using first-principles statistical analysis instead of Deep Learning, purpose-built for production lines where only 10-100 sample images exist per defect type, far too few to train a neural network. Flags pixel-level anomalies based on deviation from mean/standard deviation thresholds, with isolated R/G/B channel maps for defect-type isolation. Runs at O(N) complexity with millisecond-range inference latency, achieving zero-shot crack detection with no labeled training data required.",
  shortDescription: "An AI-powered receipt scanner that recommends local grocery substitutes to cut spending.",
  caseStudy:'',
  status: "featured",
  tech: ["FastAPI", "Gemini API", "React", "Recharts", "Docker"],
  github: 'https://github.com/Ibrahim1572/micathon_2026_v2.1',
  live: 'https://micathon-2026-v2-1.vercel.app/',
  },
  {
  id: "proj-3",
  title: "Anomaly Detection via Statistical Intensity Analysis",
  description:
    "An anomaly detection system using first-principles statistical analysis instead of Deep Learning, addressing the rare-event problem in computer vision. Flags pixel-level anomalies based on deviation from mean/standard deviation thresholds, with isolated R/G/B channel maps for defect-type isolation. Optimized to O(N) complexity for real-time performance, achieving zero-shot crack detection without labeled training data.",
  shortDescription: "A statistics-based anomaly detector for computer vision, no deep learning required.",
  caseStudy: `**The problem:** Deep learning anomaly detection needs large volumes of defect examples to train on. But on a real production line, defects are rare by definition — you might only have 10-100 example images of a given defect out of millions of units produced. That's not enough data to train a neural network reliably.

                **The approach:** Instead of a model, I used statistical analysis directly on pixel data. Each image is split into sections, and every pixel's RGB values are analyzed against a threshold derived from the mean and standard deviation of "normal" samples. For example, if a defect shows up as an unexpected spike in the green channel while other channels stay low, that region gets flagged as an anomaly, no training required, just a defined statistical rule applied per pixel.

                **Why it works:** This sidesteps the "too little data" problem entirely, since there's no model to train in the first place. It also runs at O(N) pixel complexity, so it scales linearly and processes images in milliseconds, on hardware that couldn't realistically run a real-time neural network anomaly detector.

                **Trade-off:** This approach only works when the anomaly has a definable statistical signature (like a color deviation). It wouldn't generalize to defects that don't show up as clear statistical outliers, which is where a data-hungry deep learning approach would eventually become necessary.`,
  status: "featured",
  tech: ["Python", "NumPy", "Pillow", "Streamlit"],
  github: 'https://github.com/Ibrahim1572/Visual-Anomaly-Detection-via-Image-Intensity-Heatmaps',
  live: null,
  },
  {
    id: "proj-7",
    title: "Hospify — Enterprise Hospital Management System",
    description:
      "An enterprise-grade, relational database-backed Hospital Management System engineered to automate clinical operations, patient care lifecycle, bed occupancy, pharmacy inventory, itemized billing, and diagnostic reporting. Built on a fully normalized (3NF) PostgreSQL backend with PL/pgSQL stored procedures, autonomous triggers, and JSONB audit logging to guarantee ACID-compliant data integrity across 7 distinct role-based workflows — from patient admission and real-time bed allocation to automated vitals-breach alerts, pharmacy stock decrementing, and dynamic itemized billing. Integrates Google Gemini 2.5 Flash for synthetic diagnostic report generation and Firebase for hybrid cloud backup/disaster recovery.",
    shortDescription: "A full-stack Hospital Management System with a PL/pgSQL-driven PostgreSQL core, 7-role RBAC, real-time clinical automation, and Gemini-powered diagnostic reporting.",
    status: "archive",
    caseStudy: '',
    tech: ["React", "Vite", "Tailwind CSS", "Flask", "PostgreSQL", "Firebase", "Google Gemini"],
    github: 'https://github.com/Ibrahim1572/hospify',
    live: 'https://hospify-sigma.vercel.app/',
  },
  {
  id: "proj-4",
  title: "PC Parts Optimization Platform",
  description:
    "A budget-aware PC build recommendation platform using a heuristic scoring engine. Users specify a budget and use case (Gaming, ML, General) to receive top GPU/CPU pairings, with a weighted scoring system normalizing raw hardware benchmarks via min-max scaling and use-case-specific weights.",
  shortDescription: "A budget-aware PC build recommender using weighted hardware benchmark scoring.",
  caseStudy:'',
  status: "archive",
  tech: ["FastAPI", "Pandas", "React", "Tailwind CSS"],
  github: 'https://github.com/Ibrahim1572/PC-Parts-Optimization-Platform',
  live: null,
  },
  {
  id: "proj-5",
  title: "Music Playlist Management System",
  description:
    "A high-performance music management and playback system built without external databases. Implements AVL Trees for O(log n) lookups, a custom Polynomial Rolling Hash Table, and Merge Sort for ranking Most Liked songs, with a Graph Theory/BFS-based recommendation engine driven by listening patterns.",
  shortDescription: "A custom-built music playback engine using AVL Trees, hashing, and graph-based recommendations.",
  caseStudy:'',
  status: "archive",
  tech: ["C++", "SFML", "Data Structures & Algorithms"],
  github: 'https://github.com/Ibrahim1572/Music-Playlist-Management-System-DSA-Project',
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
