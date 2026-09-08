import { Briefcase } from 'lucide-react';
import { history } from '../../data/content';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

export function History() {
  return (
    <section
      id="career-history"
      aria-labelledby="history-heading"
      style={{ marginBottom: 80 }}
    >
      <h2
        id="history-heading"
        style={{
          ...FONTS.presets.sectionHeading,
          color: COLORS.textPrimary,
          margin: '0 0 36px',
        }}
      >
        Career History.
      </h2>

      {/* Timeline container */}
      <div style={{ position: 'relative', paddingLeft: 56 }}>
        {/* Vertical line */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 19,
            top: 0,
            bottom: 0,
            width: 2,
            background: COLORS.borderSubtle,
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {history.map((job) => (
            <div key={job.id} style={{ position: 'relative' }}>
              {/* Node: background is job card surface color, briefcase icon is amber (accent) color */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: -56,
                  top: 16,
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: COLORS.surface,
                  border: `1px solid ${COLORS.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: COLORS.accent,
                  zIndex: 1,
                }}
              >
                <Briefcase size={18} strokeWidth={1.75} />
              </div>

              {/* Job Card */}
              <article
                style={{
                  background: COLORS.surface,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: '4px',
                  padding: '20px 24px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <h3
                    style={{
                      ...FONTS.presets.subHeading,
                      color: COLORS.textPrimary,
                      margin: 0,
                    }}
                  >
                    {job.role}
                  </h3>
                  <span
                    style={{
                      ...FONTS.presets.dateMono,
                      color: COLORS.textMuted,
                      flexShrink: 0,
                    }}
                  >
                    {job.dateRange}
                  </span>
                </div>
                <p
                  style={{
                    ...FONTS.presets.bodySm,
                    color: COLORS.textMuted,
                    margin: '0 0 10px',
                  }}
                >
                  {job.company} · {job.location}
                </p>
                <p
                  style={{
                    ...FONTS.presets.body,
                    color: COLORS.textSecondary,
                    margin: 0,
                  }}
                >
                  {job.focus}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
