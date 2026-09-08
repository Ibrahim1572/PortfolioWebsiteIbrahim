import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { RiGithubFill } from 'react-icons/ri';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { personal } from '../data/content';
import { COLORS } from '../constants/colors';
import { LINKS } from '../constants/links';
import { FONTS } from '../constants/fonts';

const NAV_ITEMS = [
  { id: 'about',          label: 'About' },
  { id: 'expertise',      label: 'Expertise' },
  { id: 'projects',       label: 'Projects' },
  { id: 'career-history', label: 'Career History' },
  { id: 'contact',        label: 'Contact' },
];

interface LeftColumnProps {
  activeSection: string;
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// SVG avatar placeholder (100x100)
function AvatarPlaceholder() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <circle cx="50" cy="50" r="50" fill={COLORS.surface} />
      <circle cx="50" cy="40" r="20" fill={COLORS.border} />
      <ellipse cx="50" cy="88" rx="30" ry="22" fill={COLORS.border} />
    </svg>
  );
}

export function LeftColumn({ activeSection }: LeftColumnProps) {
  const [imgError, setImgError] = useState(false);
  const showCustomImage = Boolean(LINKS.profileImage && !imgError);

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
        borderRight: `2px solid ${COLORS.borderSubtle}`,
        display: 'flex',
        flexDirection: 'column',
        padding: '36px 36px',
        overflow: 'hidden',
        zIndex: 40,
      }}
    >
      {/* Profile photo with 2px accent ring */}
      <div
        className="anim-photo"
        style={{
          width: 106,
          height: 106,
          borderRadius: '50%',
          padding: 3,
          boxShadow: `0 0 0 2px ${COLORS.accent}`,
          marginBottom: 18,
          flexShrink: 0,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            borderRadius: '50%',
            overflow: 'hidden',
            width: 100,
            height: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.surface,
          }}
        >
          {showCustomImage ? (
            <img
              src={LINKS.profileImage}
              alt={personal.name}
              onError={() => setImgError(true)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          ) : (
            <AvatarPlaceholder />
          )}
        </div>
      </div>

      {/* Name: placed below the profile picture */}
      <div className="anim-name" style={{ marginBottom: 6, flexShrink: 0 }}>
        <h1
          style={{
            ...FONTS.presets.nameHeading,
            color: COLORS.textPrimary,
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
            Muhammad Ibrahim
          </span>
          <span style={{ display: 'block' }}>
            Umar
          </span>
        </h1>
      </div>

      {/* Role / Title */}
      <div style={{ marginBottom: 14, flexShrink: 0 }}>
        <p
          style={{
            ...FONTS.presets.roleTitle,
            color: COLORS.textSecondary,
            margin: 0,
          }}
        >
          {personal.role}
        </p>
      </div>

      {/* Social links row: LinkedIn, GitHub, and Resume (borderless with ExternalLink icon) */}
      <div
        className="anim-social"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          marginBottom: 32,
          flexShrink: 0,
        }}
      >
        {/* LinkedIn */}
        <a
          href={LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
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
          <RiLinkedinBoxFill size={22} />
        </a>

        {/* GitHub */}
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
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
          <RiGithubFill size={22} />
        </a>

        {/* Resume: External link icon before text, border removed, clean hover transition */}
        <a
          href={LINKS.resume}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: 'transparent',
            border: 'none',
            padding: 0,
            color: COLORS.textSecondary,
            fontFamily: FONTS.family.mono,
            fontSize: FONTS.size.sm,
            fontWeight: FONTS.weight.medium,
            textDecoration: 'none',
            letterSpacing: '0.04em',
            transition: 'color 150ms ease-out',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = COLORS.accent)}
          onMouseLeave={e => (e.currentTarget.style.color = COLORS.textSecondary)}
        >
          <ExternalLink size={15} strokeWidth={1.75} />
          Resume
        </a>
      </div>

      {/* Section nav */}
      <nav aria-label="Page sections">
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
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
                    ...FONTS.presets.navItem,
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
