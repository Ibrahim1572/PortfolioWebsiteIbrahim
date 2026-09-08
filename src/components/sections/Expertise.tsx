import { skills } from '../../data/content';
import { COLORS } from '../../constants/colors';

function SkillTag({ label }: { label: string }) {
  return (
    <span
      className="font-mono text-micro"
      style={{
        display: 'inline-block',
        padding: '6px 12px',
        background: COLORS.surfaceRaised,
        border: `1px solid ${COLORS.border}`,
        borderRadius: '4px',
        color: COLORS.textPrimary,
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  );
}

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      style={{ marginBottom: 80 }}
    >
      {/* Left-aligned section heading */}
      <h2
        id="expertise-heading"
        className="font-display text-2xl-port"
        style={{
          fontWeight: 700,
          color: COLORS.textPrimary,
          margin: '0 0 32px',
          textAlign: 'left',
        }}
      >
        Expertise.
      </h2>

      <div
        style={{
          display: 'flex',
          gap: 0,
          alignItems: 'flex-start',
        }}
      >
        {/* Web Development column */}
        <div style={{ flex: 1, paddingRight: 28 }}>
          <h3
            className="font-body text-sm-port"
            style={{
              color: COLORS.textMuted,
              margin: '0 0 16px',
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            Web Development
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
            }}
          >
            {skills.webDev.map(skill => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>

        {/* Vertical divider */}
        <div
          aria-hidden="true"
          style={{
            width: 2,
            alignSelf: 'stretch',
            background: COLORS.borderSubtle,
            flexShrink: 0,
            minHeight: 120,
          }}
        />

        {/* AI / ML column */}
        <div style={{ flex: 1, paddingLeft: 28 }}>
          <h3
            className="font-body text-sm-port"
            style={{
              color: COLORS.textMuted,
              margin: '0 0 16px',
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            AI / ML
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
            }}
          >
            {skills.aiMl.map(skill => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
