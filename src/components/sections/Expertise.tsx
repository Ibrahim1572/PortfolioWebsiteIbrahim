import { skills } from '../../data/content';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

function SkillTag({ label }: { label: string }) {
  return (
    <span
      style={{
        ...FONTS.presets.tag,
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
        style={{
          ...FONTS.presets.sectionHeading,
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
            style={{
              ...FONTS.presets.bodySm,
              color: COLORS.textMuted,
              margin: '0 0 16px',
              fontWeight: FONTS.weight.medium,
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
            style={{
              ...FONTS.presets.bodySm,
              color: COLORS.textMuted,
              margin: '0 0 16px',
              fontWeight: FONTS.weight.medium,
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
