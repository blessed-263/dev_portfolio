import { Briefcase, GraduationCap, Languages } from "lucide-react";
import {
  CERTIFICATIONS,
  CV_EXPERIENCE,
  CV_SUMMARY,
  EDUCATION,
  PROFILE,
  SKILL_CATEGORIES,
  SKILL_TRACKS,
  SPOKEN_LANGUAGES,
  levelColor,
} from "../../data/devResume";

function LevelBadge({ level }: { level: string }) {
  return (
    <span
      className="gh-level-badge"
      style={{
        color: levelColor(level),
        borderColor: `${levelColor(level)}55`,
        background: `${levelColor(level)}18`,
      }}
    >
      {level}
    </span>
  );
}

export function CvSummary() {
  return (
    <div className="gh-readme">
      <h2>CV.md — Professional Summary</h2>
      <p style={{ color: "var(--gh-fg-muted)", marginBottom: 12, lineHeight: 1.7 }}>{CV_SUMMARY}</p>
      <div className="gh-cv-meta-row">
        <span>
          <strong>Focus:</strong> C# · C++ · ASP.NET Core · React · System Design
        </span>
        <span>
          <strong>Status:</strong> {PROFILE.availability}
        </span>
      </div>
    </div>
  );
}

export function SkillsMatrix() {
  return (
    <div className="gh-card">
      <div className="gh-card-header">
        <span>Technical Skills</span>
      </div>
      <div className="gh-card-body gh-skills-grid">
        {SKILL_CATEGORIES.map((group) => (
          <div key={group.category} className="gh-skill-group">
            <h3 className="gh-skill-group-title">{group.category}</h3>
            <ul className="gh-skill-list">
              {group.items.map((item) => (
                <li key={item.name} className="gh-skill-list-item">
                  <span>{item.name}</span>
                  <LevelBadge level={item.level} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CoreTracks() {
  return (
    <div className="gh-card">
      <div className="gh-card-header">
        <span>Core Learning Tracks</span>
        <a href={PROFILE.leetcode} target="_blank" rel="noreferrer" style={{ fontSize: 12 }}>
          LeetCode profile →
        </a>
      </div>
      <div className="gh-card-body">
        {SKILL_TRACKS.map((track) => (
          <div key={track.id} className="gh-track-block">
            <div className="gh-skill-label">
              <span>
                <strong>{track.name}</strong>
                <span className="gh-track-pill">{track.level}</span>
              </span>
              <span>{track.progress}%</span>
            </div>
            <div className="gh-skill-bar">
              <div
                className="gh-skill-fill"
                style={{ width: `${track.progress}%`, background: track.color }}
              />
            </div>
            <p className="gh-track-desc">{track.description}</p>
            <p className="gh-track-focus">
              <strong>Current focus:</strong> {track.currentFocus}
            </p>
            <ul className="gh-bullet-list">
              {track.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="gh-topics">
              {track.topics.map((topic) => (
                <span key={topic} className="gh-topic">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <div className="gh-card">
      <div className="gh-card-header">
        <span>
          <Briefcase size={16} style={{ display: "inline", marginRight: 6, verticalAlign: "text-bottom" }} />
          Experience & Selected Work
        </span>
      </div>
      <div className="gh-card-body" style={{ padding: 0 }}>
        {CV_EXPERIENCE.map((job) => (
          <article key={`${job.company}-${job.role}`} className="gh-exp-item">
            <div className="gh-exp-header">
              <div>
                <h3 className="gh-exp-role">
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noreferrer">
                      {job.role}
                    </a>
                  ) : (
                    job.role
                  )}
                  <span className="gh-track-pill">{job.type}</span>
                </h3>
                <p className="gh-exp-company">
                  {job.company} · {job.location}
                </p>
              </div>
              <time className="gh-exp-period">{job.period}</time>
            </div>
            <ul className="gh-bullet-list">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            {job.tech.length > 0 && (
              <div className="gh-topics" style={{ marginTop: 10 }}>
                {job.tech.map((t) => (
                  <span key={t} className="gh-topic">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export function EducationSection() {
  return (
    <div className="gh-card">
      <div className="gh-card-header">
        <span>
          <GraduationCap size={16} style={{ display: "inline", marginRight: 6, verticalAlign: "text-bottom" }} />
          Education
        </span>
      </div>
      <div className="gh-card-body">
        {EDUCATION.map((edu) => (
          <div key={edu.degree} className="gh-edu-block">
            <div className="gh-exp-header">
              <div>
                <h3 className="gh-exp-role">{edu.degree}</h3>
                <p className="gh-exp-company">
                  {edu.institution} · {edu.location}
                </p>
              </div>
              <time className="gh-exp-period">{edu.period}</time>
            </div>
            <p className="gh-track-desc">{edu.detail}</p>
            <div className="gh-topics">
              {edu.coursework.map((course) => (
                <span key={course} className="gh-topic">
                  {course}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CertificationsSection() {
  return (
    <div className="gh-card">
      <div className="gh-card-header">
        <span>Certifications & Credentials</span>
      </div>
      <div className="gh-card-body">
        {CERTIFICATIONS.map((cert) => (
          <div key={cert.title} className="gh-cert-item">
            <div className="gh-cert-title">
              {cert.title}
              <span
                className={`gh-badge ${
                  cert.status === "Completed" ? "gh-badge-done" : "gh-badge-progress"
                }`}
              >
                {cert.status}
              </span>
            </div>
            <div className="gh-cert-meta">
              {cert.issuer} · {cert.year}
              {cert.credentialUrl && (
                <>
                  {" · "}
                  <a href={cert.credentialUrl} target="_blank" rel="noreferrer">
                    Verify
                  </a>
                </>
              )}
            </div>
            {cert.detail && <p className="gh-track-desc">{cert.detail}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export function LanguagesSection() {
  return (
    <div className="gh-card">
      <div className="gh-card-header">
        <span>
          <Languages size={16} style={{ display: "inline", marginRight: 6, verticalAlign: "text-bottom" }} />
          Languages
        </span>
      </div>
      <div className="gh-card-body">
        <ul className="gh-skill-list">
          {SPOKEN_LANGUAGES.map((lang) => (
            <li key={lang.language} className="gh-skill-list-item">
              <span>{lang.language}</span>
              <span className="gh-track-pill">{lang.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
