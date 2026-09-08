// ─────────────────────────────────────────────────────────────────────────────
// COLOR CONSTANTS & THEMES
// All color data is defined here in this constants file as the single source of truth.
// Modify the hex values below to change colors across the entire website.
// ─────────────────────────────────────────────────────────────────────────────

export interface ThemeColors {
  canvas: string;
  surface: string;
  surfaceRaised: string;
  border: string;
  borderSubtle: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accent: string;
  accentHover: string;
  accentText: string;
  accentSubtleBg: string;
}

export const THEME_PALETTES: { light: ThemeColors; dark: ThemeColors } = {
  light: {
    canvas: '#C1C9CA',
    surface: '#E7EAEA',
    surfaceRaised: '#F4F5F5',
    border: '#A9B3B4',
    borderSubtle: '#B7BFC0',
    textPrimary: '#12151C',
    textSecondary: '#454C53',
    textMuted: '#6D757B',
    accent: '#CC310E',
    accentHover: '#A6280B',
    accentText: '#A6280B',
    accentSubtleBg: '#F3D9D2',
  },
  dark: {
    canvas: '#12151C',
    surface: '#1B1F29',
    surfaceRaised: '#242A38',
    border: '#2C3240',
    borderSubtle: '#232833',
    textPrimary: '#C1C9CA',
    textSecondary: '#8B93A0',
    textMuted: '#5B6270',
    accent: '#CC310E',
    accentHover: '#A6280B',
    accentText: '#FF7A52',
    accentSubtleBg: '#3A1B14',
  },
};

/**
 * Applies the selected theme palette to document.documentElement CSS variables.
 * Call this whenever the active theme changes.
 */
export function applyThemeColors(theme: 'light' | 'dark'): void {
  if (typeof document === 'undefined') return;
  const palette = THEME_PALETTES[theme];
  const root = document.documentElement;

  root.style.setProperty('--color-canvas', palette.canvas);
  root.style.setProperty('--color-surface', palette.surface);
  root.style.setProperty('--color-surface-raised', palette.surfaceRaised);
  root.style.setProperty('--color-border', palette.border);
  root.style.setProperty('--color-border-subtle', palette.borderSubtle);
  root.style.setProperty('--color-text-primary', palette.textPrimary);
  root.style.setProperty('--color-text-secondary', palette.textSecondary);
  root.style.setProperty('--color-text-muted', palette.textMuted);
  root.style.setProperty('--color-accent', palette.accent);
  root.style.setProperty('--color-accent-hover', palette.accentHover);
  root.style.setProperty('--color-accent-text', palette.accentText);
  root.style.setProperty('--color-accent-subtle-bg', palette.accentSubtleBg);
}

// Immediately apply the theme colors upon script load in browser
if (typeof document !== 'undefined') {
  const initialTheme = (localStorage.getItem('theme') as 'light' | 'dark' | null) ||
    (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyThemeColors(initialTheme);
}

// React component references: these map to the dynamic variables populated by applyThemeColors
export const COLORS = {
  canvas: 'var(--color-canvas)',
  surface: 'var(--color-surface)',
  surfaceRaised: 'var(--color-surface-raised)',
  border: 'var(--color-border)',
  borderSubtle: 'var(--color-border-subtle)',
  textPrimary: 'var(--color-text-primary)',
  textSecondary: 'var(--color-text-secondary)',
  textMuted: 'var(--color-text-muted)',
  accent: 'var(--color-accent)',
  accentHover: 'var(--color-accent-hover)',
  accentText: 'var(--color-accent-text)',
  accentSubtleBg: 'var(--color-accent-subtle-bg)',
} as const;
