import { RiGithubFill } from 'react-icons/ri';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { personal } from '../data/content';
import { COLORS } from '../constants/colors';
import { LINKS } from '../constants/links';

const NAV_ITEMS = [
  { id: 'about',     label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projects',  label: 'Projects' },
  { id: 'history',   label: 'History' },
  { id: 'contact',   label: 'Contact' },
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
      <circle cx="70" cy="70" r="70" fill={COLORS.surface} />
      <circle cx="70" cy="56" r="26" fill={COLORS.border} />
      <ellipse cx="70" cy="120" rx="40" ry="30" fill={COLORS.border} />
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
        backgroundColor: COLORS.canvas,
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 40px',
        overflow: 'hidden',
        zIndex: 40,
      }}
    >
      {/* Photo + Social icons row */}
      <div
        className="anim-photo"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          marginBottom: 24,
          flexShrink: 0,
        }}
      >
        {/* Circular photo with accent ring */}
        <div
          style={{
            width: 154,
            height: 154,
            borderRadius: '50%',
            padding: 3,
            boxShadow: `0 0 0 2px ${COLORS.accent}`,
            flexShrink: 0,
          }}
        >
          <div style={{ borderRadius: '50%', overflow: 'hidden', width: 148, height: 148 }}>
            <AvatarPlaceholder />
          </div>
        </div>

        {/* Social icon links — no border, no box */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { href: LINKS.github,   Icon: RiGithubFill,      label: 'GitHub' },
            { href: LINKS.linkedin, Icon: RiLinkedinBoxFill, label: 'LinkedIn' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                color: COLORS.textSecondary,
                textDecoration: 'none',
                transition: 'color 150ms ease-out',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = COLORS.accent)}
              onMouseLeave={e => (e.currentTarget.style.color = COLORS.textSecondary)}
            >
              <Icon size={26} />
            </a>
          ))}
        </div>
      </div>

      {/* Name + Role (no tagline) */}
      <div className="anim-name" style={{ marginBottom: 36, flexShrink: 0 }}>
        <h1
          className="font-display text-display"
          style={{ color: COLORS.textPrimary, fontWeight: 700, margin: '0 0 8px' }}
        >
          {personal.name}
        </h1>
        <p
          className="font-display text-lg-port"
          style={{ color: COLORS.textSecondary, fontWeight: 500, margin: 0 }}
        >
          {personal.role}
        </p>
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
                    color: isActive ? COLORS.textPrimary : COLORS.textMuted,
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
                      background: COLORS.accent,
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
