import { Sun, Moon } from 'lucide-react';

interface TopBarProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

export function TopBar({ theme, onToggle }: TopBarProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center px-6"
      style={{
        height: '60px',
        backgroundColor: 'color-mix(in srgb, var(--color-canvas) 92%, transparent)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--color-border-subtle)',
      }}
    >
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
          color: 'var(--color-text-secondary)',
          borderRadius: '4px',
          transition: 'color 150ms ease-out',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
      >
        {theme === 'light' ? <Sun size={20} strokeWidth={1.75} /> : <Moon size={20} strokeWidth={1.75} />}
      </button>
    </header>
  );
}
