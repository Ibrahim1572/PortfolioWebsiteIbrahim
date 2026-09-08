import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { RiGithubFill } from 'react-icons/ri';
import { projects } from '../../data/content';
import { COLORS } from '../../constants/colors';

function ProjectCard({ project }: { project: typeof projects[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: COLORS.surface,
        border: `1px solid ${hovered ? COLORS.accent : COLORS.border}`,
        borderRadius: '4px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'border-color 150ms ease-out, transform 150ms ease-out',
      }}
    >
      {/* Title */}
      <h3
        className="font-display text-lg-port"
        style={{ fontWeight: 600, color: COLORS.textPrimary, margin: 0 }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="font-body text-base-port"
        style={{ color: COLORS.textSecondary, margin: 0, flex: 1 }}
      >
        {project.description}
      </p>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {project.tech.map(tag => (
          <span
            key={tag}
            className="font-mono text-micro"
            style={{
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
      <div style={{ display: 'flex', gap: 12, paddingTop: 4 }}>
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

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      style={{ marginBottom: 80 }}
    >
      <h2
        id="projects-heading"
        className="font-display text-2xl-port"
        style={{ fontWeight: 700, color: COLORS.textPrimary, margin: '0 0 28px' }}
      >
        Projects.
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
        }}
      >
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
