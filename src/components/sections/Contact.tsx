import { Mail, ExternalLink } from 'lucide-react';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { COLORS } from '../../constants/colors';
import { LINKS } from '../../constants/links';
import { FONTS } from '../../constants/fonts';

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
      style={{
        ...FONTS.presets.bodySm,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 22px',
        border: `1px solid ${COLORS.border}`,
        borderRadius: '4px',
        color: COLORS.textSecondary,
        background: 'transparent',
        fontWeight: FONTS.weight.medium,
        textDecoration: 'none',
        transition: 'color 150ms ease-out, border-color 150ms ease-out',
        letterSpacing: '0.02em',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.borderColor = COLORS.accent;
        el.style.color = COLORS.accent;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.borderColor = COLORS.border;
        el.style.color = COLORS.textSecondary;
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
        style={{
          ...FONTS.presets.sectionHeading,
          color: COLORS.textPrimary,
          margin: '0 0 28px',
        }}
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
