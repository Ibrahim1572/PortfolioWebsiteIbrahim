import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { RiGithubFill } from 'react-icons/ri';
import { projects} from '../../data/content';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

function MoreProjectCard({ project }: { project: typeof projects[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: COLORS.surface,
        border: `1px solid ${hovered ? COLORS.accent : COLORS.border}`,
        borderRadius: '4px',
        padding: '18px 22px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'border-color 150ms ease-out, transform 150ms ease-out',
      }}
    >
      {/* Top row: Title + 1-liner description on the same line */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'baseline',
          gap: 14,
          flexWrap: 'wrap',
        }}
      >
        <h3
          style={{
            ...FONTS.presets.subHeading,
            color: COLORS.textPrimary,
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            ...FONTS.presets.bodySm,
            color: COLORS.textSecondary,
            margin: 0,
            flex: 1,
            minWidth: '200px',
          }}
        >
          {project.shortDescription}
        </p>
      </div>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {project.tech.map(tag => (
          <span
            key={tag}
            style={{
              ...FONTS.presets.tag,
              padding: '3px 8px',
              background: COLORS.surfaceRaised,
              border: `1px solid ${COLORS.border}`,
              borderRadius: '4px',
              color: COLORS.textSecondary,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Icon links */}
      <div style={{ display: 'flex', gap: 12, paddingTop: 2 }}>
        {project.github && (
          <IconLink href={project.github} label="View on GitHub">
            <RiGithubFill size={18} />
          </IconLink>
        )}
        {project.live && (
          <IconLink href={project.live} label="Live demo">
            <ExternalLink size={18} strokeWidth={1.75} />
          </IconLink>
        )}
      </div>
    </article>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        color: COLORS.textSecondary,
        display: 'flex',
        alignItems: 'center',
        transition: 'color 150ms ease-out',
      }}
      onMouseEnter={e => (e.currentTarget.style.color = COLORS.accent)}
      onMouseLeave={e => (e.currentTarget.style.color = COLORS.textSecondary)}
    >
      {children}
    </a>
  );
}

export function MoreProjects() {
  const archiveProjects = projects.filter(p => p.status === 'archive');

  return (
    <section
      id="more-projects"
      aria-labelledby="more-projects-heading"
      style={{ marginBottom: 80 }}
    >
      <h2
        id="more-projects-heading"
        style={{
          ...FONTS.presets.sectionHeading,
          color: COLORS.textPrimary,
          margin: '0 0 28px',
        }}
      >
        More Projects.
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        {archiveProjects.map(project => (
          <MoreProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
