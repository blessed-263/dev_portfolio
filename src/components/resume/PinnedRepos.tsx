import { SiGithub } from "react-icons/si";
import { PINNED_REPOS, PROFILE } from "../../data/devResume";

export function PinnedRepositories() {
  return (
    <div className="gh-card">
      <div className="gh-card-header">
        <span>Pinned repositories</span>
        <a href={`https://github.com/${PROFILE.username}?tab=repositories`} style={{ fontSize: 12 }}>
          View all →
        </a>
      </div>
      <div className="gh-card-body">
        <div className="gh-pinned-grid">
          {PINNED_REPOS.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="gh-repo-card"
            >
              <div className="gh-repo-name" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <SiGithub size={14} />
                {repo.name}
              </div>
              <p className="gh-repo-desc">{repo.description}</p>
              <div className="gh-repo-meta">
                <span>
                  <span className="gh-lang-dot" style={{ background: repo.languageColor }} />
                  {repo.language}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
