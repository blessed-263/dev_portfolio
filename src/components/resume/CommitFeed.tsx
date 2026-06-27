import { useMemo, useState } from "react";
import type { LearningCommit } from "../../data/devResume";

const FILTERS = [
  { id: "all", label: "All activity" },
  { id: "csharp", label: "C#" },
  { id: "cpp", label: "C++" },
  { id: "dsa", label: "DSA" },
  { id: "python", label: "Python" },
] as const;

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

function trackLabel(track: LearningCommit["track"]) {
  if (track === "csharp") return "C#";
  if (track === "cpp") return "C++";
  if (track === "dsa") return "DSA";
  if (track === "python") return "Python";
  return "Other";
}

type CommitFeedProps = {
  commits: LearningCommit[];
  loading: boolean;
};

export function CommitFeed({ commits, loading }: CommitFeedProps) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return commits;
    return commits.filter((commit) => commit.track === filter);
  }, [commits, filter]);

  return (
    <div className="gh-card">
      <div className="gh-card-header">
        <span>Learning activity</span>
        <span style={{ fontSize: 12, color: "var(--gh-fg-muted)", fontWeight: 400 }}>
          commit-style progress log
        </span>
      </div>
      <div className="gh-filter-row">
        {FILTERS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`gh-filter-btn ${filter === item.id ? "active" : ""}`}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="gh-card-body" style={{ padding: 0 }}>
        {loading && <p className="gh-loading" style={{ padding: "12px 16px" }}>Syncing from GitHub…</p>}
        <ul className="gh-commit-list">
          {filtered.map((commit) => (
            <li key={`${commit.repo}-${commit.sha}`} className="gh-commit-item">
              <a href={commit.commitUrl} target="_blank" rel="noreferrer" className="gh-commit-sha">
                {commit.sha}
              </a>
              <div>
                <a href={commit.commitUrl} target="_blank" rel="noreferrer" className="gh-commit-msg">
                  {commit.message}
                </a>
                <div className="gh-commit-repo">
                  <a href={commit.repoUrl} target="_blank" rel="noreferrer">
                    {commit.repo}
                  </a>
                  {" · "}
                  {commit.language}
                  <span className="gh-track-pill">{trackLabel(commit.track)}</span>
                </div>
              </div>
              <time className="gh-commit-date" dateTime={commit.date}>
                {formatDate(commit.date)}
              </time>
            </li>
          ))}
        </ul>
        {filtered.length === 0 && (
          <p className="gh-loading" style={{ padding: "12px 16px" }}>
            No commits for this filter yet.
          </p>
        )}
      </div>
    </div>
  );
}

export function ContributionGraph({ commits }: { commits: LearningCommit[] }) {
  const cells = useMemo(() => {
    const counts = new Map<string, number>();
    commits.forEach((commit) => {
      const key = commit.date.slice(0, 10);
      counts.set(key, (counts.get(key) ?? 0) + 1);
    });

    const today = new Date();
    return Array.from({ length: 26 * 7 }, (_, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() - (26 * 7 - 1 - index));
      const key = date.toISOString().slice(0, 10);
      const count = counts.get(key) ?? 0;
      const level = count === 0 ? 0 : count === 1 ? 1 : count === 2 ? 2 : count === 3 ? 3 : 4;
      return level;
    });
  }, [commits]);

  return (
    <div className="gh-card">
      <div className="gh-card-header">
        <span>Contribution activity</span>
        <span style={{ fontSize: 12, color: "var(--gh-fg-muted)", fontWeight: 400 }}>
          last 6 months
        </span>
      </div>
      <div className="gh-card-body">
        <div className="gh-contrib-grid">
          {cells.map((level, index) => (
            <div
              key={index}
              className={`gh-contrib-cell ${level ? `l${level}` : ""}`}
              title={level ? `${level} activities` : "No activity"}
            />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 4, marginTop: 8, fontSize: 12, color: "var(--gh-fg-subtle)" }}>
          <span>Less</span>
          <div className="gh-contrib-cell" style={{ width: 12, height: 12 }} />
          <div className="gh-contrib-cell l1" style={{ width: 12, height: 12 }} />
          <div className="gh-contrib-cell l2" style={{ width: 12, height: 12 }} />
          <div className="gh-contrib-cell l3" style={{ width: 12, height: 12 }} />
          <div className="gh-contrib-cell l4" style={{ width: 12, height: 12 }} />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
