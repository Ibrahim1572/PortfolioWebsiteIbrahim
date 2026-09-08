// ─────────────────────────────────────────────────────────────────────────────
// LINK & ASSET CONSTANTS
// All external/internal URLs, live demo links, and asset paths in one place.
// Update these when deploying.
// ─────────────────────────────────────────────────────────────────────────────

export const LINKS = {
  // Personal and social links
  github:   'https://github.com/ibrahim',
  linkedin: 'https://linkedin.com/in/ibrahim',
  email:    'ibrahim@example.com',
  resume:   '/resume.pdf',

  // Profile image path: set to a URL or a public asset path (e.g., '/profile.jpg')
  // If empty or if loading fails, the profile picture automatically falls back to an avatar illustration
  profileImage: '',

  // Live links & repos for projects
  projects: {
    contexto: {
      live: 'https://contexto.example.com',
      github: 'https://github.com/ibrahim/contexto',
    },
    synapseUi: {
      live: 'https://synapse-ui.example.com',
      github: 'https://github.com/ibrahim/synapse-ui',
    },
    llmEval: {
      live: null as string | null,
      github: 'https://github.com/ibrahim/llm-eval',
    },
    trailMapper: {
      live: 'https://trailmapper.example.com',
      github: 'https://github.com/ibrahim/trailmapper',
    },
  },
} as const;
