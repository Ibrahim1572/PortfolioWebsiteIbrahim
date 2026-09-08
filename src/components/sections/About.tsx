import { about } from '../../data/content';
import { COLORS } from '../../constants/colors';

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{ marginBottom: 80 }}
    >
      <h2
        id="about-heading"
        className="font-display text-2xl-port"
        style={{
          fontWeight: 700,
          color: COLORS.textPrimary,
          margin: '0 0 28px',
        }}
      >
        About.
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: '68ch' }}>
        {about.map((para, i) => (
          <p
            key={i}
            className="font-body text-base-port"
            style={{ color: COLORS.textSecondary, margin: 0 }}
          >
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
