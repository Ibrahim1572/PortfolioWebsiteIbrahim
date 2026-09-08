// ─────────────────────────────────────────────────────────────────────────────
// FONT CONSTANTS
// All typography styles, families, sizes, line heights, and weights are defined
// here as the single source of truth. Components reference these constants directly.
// ─────────────────────────────────────────────────────────────────────────────

export const FONTS = {
  family: {
    display: "'Space Grotesk', sans-serif",
    body: "'IBM Plex Sans', system-ui, sans-serif",
    mono: "'IBM Plex Mono', monospace",
  },
  size: {
    micro: '12px',
    sm: '14px',
    base: '16px',
    lg: '20px',
    xl: '25px',
    heading: '31px',
    display: 'clamp(1.85rem, 3.2vw, 2.75rem)',
  },
  lineHeight: {
    tight: 1.1,
    snug: 1.2,
    moderate: 1.3,
    compact: 1.4,
    normal: 1.5,
    relaxed: 1.6,
  },
  weight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  // Ready-to-use style bundles for common UI typography
  presets: {
    displayTitle: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)',
      lineHeight: 1.1,
      fontWeight: 700,
    },
    nameHeading: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: 'clamp(1.35rem, 2.2vw, 1.65rem)',
      lineHeight: 1.15,
      fontWeight: 700,
    },
    sectionHeading: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: '31px',
      lineHeight: 1.2,
      fontWeight: 700,
    },
    subHeading: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: '20px',
      lineHeight: 1.5,
      fontWeight: 600,
    },
    roleTitle: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: '18px',
      lineHeight: 1.4,
      fontWeight: 500,
    },
    body: {
      fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
      fontSize: '16px',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    bodySm: {
      fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
      fontSize: '14px',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    navItem: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: '14px',
      lineHeight: 1.5,
      fontWeight: 500,
      textTransform: 'uppercase' as const,
      letterSpacing: '0.08em',
    },
    tag: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: '12px',
      lineHeight: 1.4,
      fontWeight: 400,
    },
    dateMono: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: '14px',
      lineHeight: 1.5,
      fontWeight: 400,
    },
  },
} as const;
