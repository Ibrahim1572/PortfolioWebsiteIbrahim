import { personal } from '../../data/content';

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
        padding: '10px 24px',
        border: '1px solid var(--color-accent)',
        borderRadius: '4px',
        color: 'var(--color-accent)',
        background: 'transparent',
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'background 150ms ease-out, color 150ms ease-out',
        letterSpacing: '0.02em',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.background = 'var(--color-accent)';
        el.style.color = 'var(--color-canvas)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.background = 'transparent';
        el.style.color = 'var(--color-accent)';
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
        style={{ fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 28px' }}
      >
        Contact.
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
        <ContactButton href={`mailto:${personal.email}`}>Email Me</ContactButton>
        <ContactButton href={personal.linkedin}>LinkedIn</ContactButton>
        <ContactButton href={personal.resume} download>View Résumé</ContactButton>
      </div>
    </section>
  );
}
