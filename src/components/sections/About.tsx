import { about } from '../../data/content';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{ marginBottom: 80 }}
    >
      <h2
        id="about-heading"
        style={{
          ...FONTS.presets.sectionHeading,
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
            style={{
              ...FONTS.presets.body,
              color: COLORS.textSecondary,
              margin: 0,
            }}
          >
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
