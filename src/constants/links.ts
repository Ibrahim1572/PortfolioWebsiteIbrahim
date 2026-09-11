// ─────────────────────────────────────────────────────────────────────────────
// LINK & ASSET CONSTANTS
// All external/internal URLs, live demo links, and asset paths in one place.
// Update these when deploying.
// ─────────────────────────────────────────────────────────────────────────────
import profilePic from '../data/IbrahimProfilePic.jpg'
import cv from '../data/Resume.pdf'

export const LINKS = {
  // Personal and social links
  github:   'https://github.com/Ibrahim1572',
  linkedin: 'https://www.linkedin.com/in/muhammad-ibrahim-umar-06010b325/',
  email:    '1brahimumar1572@gmail.com',
  resume:   cv,

  // Profile image path: set to a URL or a public asset path (e.g., '/profile.jpg')
  // If empty or if loading fails, the profile picture automatically falls back to an avatar illustration
  profileImage: profilePic,
  // Live links & repos for projects
  projects: {
    contexto: {
      live: 'https://contexto.example.com',
      github: 'https://github.com/Ibrahim1572/contexto',
    },
    synapseUi: {
      live: 'https://synapse-ui.example.com',
      github: 'https://github.com/Ibrahim1572/synapse-ui',
    },
    docuVision: {
      live: 'https://docuvision.example.com',
      github: 'https://github.com/Ibrahim1572/docuvision',
    },
    llmEval: {
      live: 'https://llmeval.example.com',
      github: 'https://github.com/Ibrahim1572/llm-eval',
    },
    trailMapper: {
      live: 'https://trailmapper.example.com',
      github: 'https://github.com/Ibrahim1572/trailmapper',
    },
    microFlow: {
      live: null as string | null,
      github: 'https://github.com/Ibrahim1572/microflow',
    },
  },
} as const;
