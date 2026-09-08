import { Briefcase } from 'lucide-react';
import { history } from '../../data/content';

export function History() {
  return (
    <section
      id="history"
      aria-labelledby="history-heading"
      style={{ marginBottom: 80 }}
    >
      <h2
        id="history-heading"
        className="font-display text-2xl-port"
        style={{ fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 36px' }}
      >
        History.
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
            background: 'var(--color-border-subtle)',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {history.map((job) => (
            <div key={job.id} style={{ position: 'relative' }}>
              {/* Node */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: -56,
                  top: 16,
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  zIndex: 1,
                }}
              >
                <Briefcase size={18} strokeWidth={1.75} />
              </div>

              {/* Card */}
              <article
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  padding: '20px 24px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                  <h3
                    className="font-display text-lg-port"
                    style={{ fontWeight: 600, color: 'var(--color-text-primary)', margin: 0 }}
                  >
                    {job.role}
                  </h3>
                  <span
                    className="font-mono text-sm-port"
                    style={{ color: 'var(--color-text-muted)', flexShrink: 0 }}
                  >
                    {job.dateRange}
                  </span>
                </div>
                <p
                  className="font-body text-sm-port"
                  style={{ color: 'var(--color-text-muted)', margin: '0 0 10px' }}
                >
                  {job.company} · {job.location}
                </p>
                <p
                  className="font-body text-base-port"
                  style={{ color: 'var(--color-text-secondary)', margin: 0 }}
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
