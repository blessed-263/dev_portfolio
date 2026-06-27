import { useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";
import { CommitFeed, ContributionGraph } from "../components/resume/CommitFeed";
import {
  CertificationsSection,
  CoreTracks,
  CvSummary,
  EducationSection,
  ExperienceSection,
  LanguagesSection,
  SkillsMatrix,
} from "../components/resume/CvSections";
import { PinnedRepositories } from "../components/resume/PinnedRepos";
import { ProfileSidebar } from "../components/resume/ProfileSidebar";
import { PROFILE } from "../data/devResume";
import { useGitHubResume } from "../hooks/useGitHubResume";
import "../resume-github.css";

type TabId = "cv" | "skills" | "activity";

function GitHubHeader() {
  return (
    <header className="gh-header">
      <a href={PROFILE.github} className="gh-header-logo" target="_blank" rel="noreferrer">
        <SiGithub size={32} />
        <span>GitHub</span>
      </a>
      <div className="gh-header-search">
        <input type="search" placeholder="Search or jump to..." readOnly aria-label="Search" />
      </div>
      <nav className="gh-header-nav" aria-label="GitHub">
        <a href={PROFILE.github} target="_blank" rel="noreferrer">
          Profile
        </a>
        <a href={`${PROFILE.github}?tab=repositories`} target="_blank" rel="noreferrer">
          Repositories
        </a>
        <a href={PROFILE.leetcode} target="_blank" rel="noreferrer">
          LeetCode
        </a>
      </nav>
    </header>
  );
}

export default function DevResumePage() {
  const { displayProfile, commits, loading } = useGitHubResume();
  const [tab, setTab] = useState<TabId>("cv");

  useEffect(() => {
    document.title = `${PROFILE.name} — CV`;
    const meta = document.querySelector('meta[name="robots"]');
    if (meta) {
      meta.setAttribute("content", "noindex, nofollow");
    } else {
      const tag = document.createElement("meta");
      tag.name = "robots";
      tag.content = "noindex, nofollow";
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <div className="gh-resume">
      <GitHubHeader />

      <div className="gh-profile-banner">
        <div className="gh-profile-banner-inner">
          <img
            src={displayProfile.avatar}
            alt=""
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              border: "1px solid var(--gh-border-muted)",
            }}
          />
          <h2 style={{ fontSize: 20, fontWeight: 600, marginTop: 12 }}>{PROFILE.username}</h2>
          <p style={{ color: "var(--gh-fg-muted)", fontSize: 13, marginTop: 4 }}>
            {PROFILE.headline}
          </p>
          <div className="gh-profile-tabs" role="tablist">
            <button
              type="button"
              className={`gh-tab ${tab === "cv" ? "active" : ""}`}
              role="tab"
              aria-selected={tab === "cv"}
              onClick={() => setTab("cv")}
            >
              CV
            </button>
            <button
              type="button"
              className={`gh-tab ${tab === "skills" ? "active" : ""}`}
              role="tab"
              aria-selected={tab === "skills"}
              onClick={() => setTab("skills")}
            >
              Skills
            </button>
            <button
              type="button"
              className={`gh-tab ${tab === "activity" ? "active" : ""}`}
              role="tab"
              aria-selected={tab === "activity"}
              onClick={() => setTab("activity")}
            >
              Learning Log
            </button>
            <a
              className="gh-tab"
              href={`${PROFILE.github}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              Repositories ↗
            </a>
          </div>
        </div>
      </div>

      <div className="gh-layout">
        <ProfileSidebar
          avatar={displayProfile.avatar}
          publicRepos={displayProfile.publicRepos}
          followers={displayProfile.followers}
          following={displayProfile.following}
          githubUrl={displayProfile.githubUrl}
        />

        <main>
          {tab === "cv" && (
            <>
              <CvSummary />
              <SkillsMatrix />
              <ExperienceSection />
              <EducationSection />
              <div className="gh-two-col">
                <CertificationsSection />
                <LanguagesSection />
              </div>
            </>
          )}

          {tab === "skills" && (
            <>
              <CoreTracks />
              <PinnedRepositories />
            </>
          )}

          {tab === "activity" && (
            <>
              <ContributionGraph commits={commits} />
              <CommitFeed commits={commits} loading={loading} />
            </>
          )}
        </main>
      </div>
    </div>
  );
}
