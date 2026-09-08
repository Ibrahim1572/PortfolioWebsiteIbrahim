import { RiGithubFill } from 'react-icons/ri';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { personal } from '../data/content';

const NAV_ITEMS = [
  { id: 'about',    label: 'About' },
  { id: 'skills',   label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'history',  label: 'History' },
  { id: 'contact',  label: 'Contact' },
];

interface LeftColumnProps {
  activeSection: string;
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Simple SVG avatar placeholder
function AvatarPlaceholder() {
  return (
    <svg
      viewBox="0 0 140 140"
      width="140"
      height="140"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <circle cx="70" cy="70" r="70" fill="var(--color-surface)" />
      <circle cx="70" cy="56" r="26" fill="var(--color-border)" />
      <ellipse cx="70" cy="120" rx="40" ry="30" fill="var(--color-border)" />
    </svg>
  );
}

export function LeftColumn({ activeSection }: LeftColumnProps) {
  return (
    <aside
      aria-label="Identity and navigation"
      style={{
        position: 'fixed',
        top: '60px',
        left: 0,
        width: 'min(38%, 420px)',
        height: 'calc(100vh - 60px)',
        backgroundColor: 'var(--color-canvas)',
        display: 'flex',
        flexDirection: 'column',
        padding: '48px 40px',
        overflowY: 'auto',
        zIndex: 40,
      }}
    >
      {/* Photo */}
      <div
        className="anim-photo"
        style={{
          width: 154,
          height: 154,
          borderRadius: '50%',
          padding: 3,
          background: 'transparent',
          boxShadow: '0 0 0 2px var(--color-accent)',
          marginBottom: 28,
          flexShrink: 0,
        }}
      >
        <div style={{ borderRadius: '50%', overflow: 'hidden', width: 148, height: 148 }}>
          <AvatarPlaceholder />
        </div>
      </div>

      {/* Name + Role + Tagline */}
      <div className="anim-name" style={{ marginBottom: 24 }}>
        <h1
          className="font-display text-display"
          style={{ color: 'var(--color-text-primary)', fontWeight: 700, margin: '0 0 8px' }}
        >
          {personal.name}
        </h1>
        <p
          className="font-display text-lg-port"
          style={{ color: 'var(--color-text-secondary)', fontWeight: 500, margin: '0 0 6px' }}
        >
          {personal.role}
        </p>
        <p
          className="font-body text-base-port"
          style={{ color: 'var(--color-text-secondary)', margin: 0 }}
        >
          {personal.tagline}
        </p>
      </div>

      {/* Social icons */}
      <div
        className="anim-social"
        style={{ display: 'flex', gap: 10, marginBottom: 48 }}
      >
        {[
          { href: personal.github,   Icon: RiGithubFill,      label: 'GitHub' },
          { href: personal.linkedin, Icon: RiLinkedinBoxFill, label: 'LinkedIn' },
        ].map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              color: 'var(--color-text-secondary)',
              background: 'transparent',
              transition: 'color 150ms ease-out, background 150ms ease-out, border-color 150ms ease-out',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.background = 'var(--color-accent)';
              el.style.borderColor = 'var(--color-accent)';
              el.style.color = 'var(--color-canvas)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.background = 'transparent';
              el.style.borderColor = 'var(--color-border)';
              el.style.color = 'var(--color-text-secondary)';
            }}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      {/* Section nav */}
      <nav aria-label="Page sections">
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '6px 0',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 14,
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                    transition: 'color 150ms ease-out',
                    width: '100%',
                    textAlign: 'left',
                  }}
                >
                  {/* Active indicator bar */}
                  <span
                    style={{
                      display: 'block',
                      width: isActive ? 20 : 0,
                      height: 2,
                      background: 'var(--color-accent)',
                      transition: 'width 150ms ease-out',
                      flexShrink: 0,
                    }}
                  />
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
