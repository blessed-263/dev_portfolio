import { useEffect, useState } from "react";
import {
  CURATED_COMMITS,
  GITHUB_USERNAME,
  PROFILE,
  REPOS_TO_SYNC,
  inferTrack,
  type LearningCommit,
} from "../data/devResume";

type GitHubUser = {
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  created_at: string;
};

type GitHubCommit = {
  sha: string;
  commit: {
    message: string;
    author: { date: string };
  };
  html_url: string;
};

export function useGitHubResume() {
  const [profile, setProfile] = useState<GitHubUser | null>(null);
  const [commits, setCommits] = useState<LearningCommit[]>(CURATED_COMMITS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const headers = { Accept: "application/vnd.github+json" };
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers });
        if (userRes.ok) {
          const user = (await userRes.json()) as GitHubUser;
          if (!cancelled) setProfile(user);
        }

        const liveCommits: LearningCommit[] = [];

        await Promise.all(
          REPOS_TO_SYNC.map(async (repo) => {
            try {
              const res = await fetch(
                `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/commits?per_page=6`,
                { headers },
              );
              if (!res.ok) return;
              const data = (await res.json()) as GitHubCommit[];
              const langRes = await fetch(
                `https://api.github.com/repos/${GITHUB_USERNAME}/${repo}/languages`,
                { headers },
              );
              const langs = langRes.ok ? ((await langRes.json()) as Record<string, number>) : {};
              const primaryLang = Object.keys(langs)[0] ?? "Other";

              data.forEach((item) => {
                liveCommits.push({
                  sha: item.sha.slice(0, 7),
                  message: item.commit.message.split("\n")[0],
                  repo,
                  repoUrl: `https://github.com/${GITHUB_USERNAME}/${repo}`,
                  commitUrl: item.html_url,
                  date: item.commit.author.date,
                  track: inferTrack(repo, primaryLang),
                  language: primaryLang,
                });
              });
            } catch {
              // Keep curated fallback when API rate-limits or fails.
            }
          }),
        );

        if (!cancelled && liveCommits.length > 0) {
          const merged = [...CURATED_COMMITS, ...liveCommits]
            .filter(
              (item, index, arr) =>
                arr.findIndex((x) => x.sha === item.sha && x.repo === item.repo) === index,
            )
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 24);
          setCommits(merged);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return {
    profile,
    commits,
    loading,
    displayProfile: {
      ...PROFILE,
      avatar: profile?.avatar_url ?? `https://github.com/${GITHUB_USERNAME}.png`,
      publicRepos: profile?.public_repos ?? 7,
      followers: profile?.followers ?? 0,
      following: profile?.following ?? 0,
      githubUrl: profile?.html_url ?? `https://github.com/${GITHUB_USERNAME}`,
    },
  };
}
