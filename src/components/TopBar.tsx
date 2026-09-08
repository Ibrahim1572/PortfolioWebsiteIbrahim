import { Sun, Moon } from 'lucide-react';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';

const HEADER_NAV = [
  { id: 'expertise',      label: 'Expertise' },
  { id: 'career-history', label: 'Career History' },
  { id: 'projects',       label: 'Projects' },
  { id: 'contact',        label: 'Contact' },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

interface TopBarProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

export function TopBar({ theme, onToggle }: TopBarProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6"
      style={{
        height: '60px',
        backgroundColor: `color-mix(in srgb, ${COLORS.canvas} 92%, transparent)`,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${COLORS.borderSubtle}`,
      }}
    >
      {/* Theme toggle — left */}
      <button
        onClick={onToggle}
        aria-label="Toggle color theme"
        style={{
          width: 36,
          height: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: COLORS.textSecondary,
          borderRadius: '4px',
          transition: 'color 150ms ease-out',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = COLORS.accent)}
        onMouseLeave={e => (e.currentTarget.style.color = COLORS.textSecondary)}
      >
        {theme === 'light' ? <Sun size={20} strokeWidth={1.75} /> : <Moon size={20} strokeWidth={1.75} />}
      </button>

      {/* Nav links — right */}
      <nav aria-label="Quick navigation">
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 28,
          }}
        >
          {HEADER_NAV.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: FONTS.family.display,
                  fontSize: FONTS.size.sm,
                  fontWeight: FONTS.weight.medium,
                  color: COLORS.textSecondary,
                  letterSpacing: '0.04em',
                  padding: 0,
                  transition: 'color 150ms ease-out',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = COLORS.accent)}
                onMouseLeave={e => (e.currentTarget.style.color = COLORS.textSecondary)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
