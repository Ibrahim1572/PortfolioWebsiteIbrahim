// ─────────────────────────────────────────────────────────────────────────────
// COLOR CONSTANTS
// All values reference CSS custom properties defined in index.css.
// Light / dark switching is handled entirely via CSS variables — components
// always use these constants and never hard-code hex values.
// ─────────────────────────────────────────────────────────────────────────────

export const COLORS = {
  // Backgrounds
  canvas:         'var(--color-canvas)',
  surface:        'var(--color-surface)',
  surfaceRaised:  'var(--color-surface-raised)',

  // Borders
  border:         'var(--color-border)',
  borderSubtle:   'var(--color-border-subtle)',

  // Text
  textPrimary:    'var(--color-text-primary)',
  textSecondary:  'var(--color-text-secondary)',
  textMuted:      'var(--color-text-muted)',

  // Accent (interactive / brand)
  accent:         'var(--color-accent)',
  accentHover:    'var(--color-accent-hover)',
  accentText:     'var(--color-accent-text)',   // AA-safe for small text
  accentSubtleBg: 'var(--color-accent-subtle-bg)',
} as const;
