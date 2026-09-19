import { useState } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { RiGithubFill } from 'react-icons/ri';
import { projects } from '../../data/content';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

function ProjectCard({ project }: { project: typeof projects[number] }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

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
        style={{
          ...FONTS.presets.subHeading,
          color: COLORS.textPrimary,
          margin: 0,
        }}
      >
        {project.title}
      </h3>

      {/* Description (full description used for Featured Projects) */}
      <p
        style={{
          ...FONTS.presets.body,
          color: COLORS.textSecondary,
          margin: 0,
          flex: 1,
        }}
      >
        {project.description}
      </p>

      {/* Case study toggle — only renders if caseStudy exists */}
      {project.caseStudy && (
        <div>
          <button
            onClick={() => setExpanded(prev => !prev)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: 'none',
              border: 'none',
              padding: 0,
              color: COLORS.accent,
              ...FONTS.presets.tag,
              cursor: 'pointer',
            }}
            aria-expanded={expanded}
          >
            {expanded ? 'Hide case study' : 'Read the full case study'}
            <ChevronDown
              size={14}
              style={{
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 150ms ease-out',
              }}
            />
          </button>

          {expanded && (
            <div
              style={{
                marginTop: 12,
                paddingTop: 12,
                borderTop: `1px solid ${COLORS.border}`,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              {project.caseStudy.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  style={{
                    ...FONTS.presets.body,
                    color: COLORS.textSecondary,
                    margin: 0,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: paragraph.replace(/\*\*(.*?)\*\*/g, `<strong style="color:${COLORS.textPrimary}">$1</strong>`),
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}

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
  const featuredProjects = projects.filter(p => p.status === 'featured');

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      style={{ marginBottom: 80 }}
    >
      <h2
        id="projects-heading"
        style={{
          ...FONTS.presets.sectionHeading,
          color: COLORS.textPrimary,
          margin: '0 0 28px',
        }}
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
        {featuredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}