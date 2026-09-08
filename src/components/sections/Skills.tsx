import { skills } from '../../data/content';

function SkillTag({ label }: { label: string }) {
  return (
    <span
      className="font-mono text-micro"
      style={{
        display: 'inline-block',
        padding: '5px 10px',
        background: 'var(--color-surface-raised)',
        border: '1px solid var(--color-border)',
        borderRadius: '4px',
        color: 'var(--color-text-primary)',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      style={{ marginBottom: 80 }}
    >
      <h2
        id="skills-heading"
        className="font-display text-2xl-port"
        style={{
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          margin: '0 0 32px',
          textAlign: 'center',
        }}
      >
        Skills.
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
              color: 'var(--color-text-muted)',
              margin: '0 0 16px',
              fontWeight: 500,
            }}
          >
            Web Development
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
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
            background: 'var(--color-border-subtle)',
            flexShrink: 0,
            minHeight: 120,
          }}
        />

        {/* AI / ML column */}
        <div style={{ flex: 1, paddingLeft: 28 }}>
          <h3
            className="font-body text-sm-port"
            style={{
              color: 'var(--color-text-muted)',
              margin: '0 0 16px',
              fontWeight: 500,
            }}
          >
            AI / ML
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {skills.aiMl.map(skill => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
