import { Mail, ExternalLink } from 'lucide-react';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { COLORS } from '../../constants/colors';
import { LINKS } from '../../constants/links';

interface ContactButtonProps {
  href: string;
  children: React.ReactNode;
  download?: boolean;
}

function ContactButton({ href, children, download }: ContactButtonProps) {
  return (
    <a
      href={href}
      {...(download ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
      className="font-body text-sm-port"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 22px',
        border: `1px solid ${COLORS.accent}`,
        borderRadius: '4px',
        color: COLORS.accent,
        background: 'transparent',
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'background 150ms ease-out, color 150ms ease-out',
        letterSpacing: '0.02em',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.background = COLORS.accent;
        el.style.color = COLORS.canvas;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.background = 'transparent';
        el.style.color = COLORS.accent;
      }}
    >
      {children}
    </a>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{ marginBottom: 80 }}
    >
      <h2
        id="contact-heading"
        className="font-display text-2xl-port"
        style={{ fontWeight: 700, color: COLORS.textPrimary, margin: '0 0 28px' }}
      >
        Contact.
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
        <ContactButton href={`mailto:${LINKS.email}`}>
          <Mail size={16} />
          Mail Me
        </ContactButton>
        <ContactButton href={LINKS.linkedin}>
          <RiLinkedinBoxFill size={18} />
          LinkedIn
        </ContactButton>
        <ContactButton href={LINKS.resume} download>
          <ExternalLink size={16} />
          View Résumé
        </ContactButton>
      </div>
    </section>
  );
}
