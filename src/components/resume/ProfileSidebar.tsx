import { Building2, Github, Link2, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { PROFILE } from "../../data/devResume";

type ProfileSidebarProps = {
  avatar: string;
  publicRepos: number;
  followers: number;
  following: number;
  githubUrl: string;
};

export function ProfileSidebar({
  avatar,
  publicRepos,
  followers,
  following,
  githubUrl,
}: ProfileSidebarProps) {
  return (
    <aside>
      <img src={avatar} alt={PROFILE.name} className="gh-sidebar-avatar" />
      <h1 className="gh-sidebar-name">{PROFILE.name}</h1>
      <p className="gh-sidebar-username">{PROFILE.username}</p>
      <p className="gh-sidebar-headline">{PROFILE.headline}</p>

      <p className="gh-sidebar-bio">{PROFILE.bio}</p>

      <div className="gh-sidebar-meta">
        <span>
          <Building2 size={16} />
          {PROFILE.title}
        </span>
        <span>
          <MapPin size={16} />
          {PROFILE.location}
        </span>
        <span>
          <Mail size={16} />
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        </span>
        <span>
          <Phone size={16} />
          <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>{PROFILE.phone}</a>
        </span>
        <span>
          <Link2 size={16} />
          <a href={PROFILE.website} target="_blank" rel="noreferrer">
            {PROFILE.website.replace("https://", "")}
          </a>
        </span>
      </div>

      <div className="gh-sidebar-actions">
        <a href={githubUrl} target="_blank" rel="noreferrer" className="gh-btn gh-btn-primary">
          <SiGithub size={16} />
          GitHub
        </a>
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="gh-btn">
          <Linkedin size={16} />
          LinkedIn
        </a>
        <a href={PROFILE.leetcode} target="_blank" rel="noreferrer" className="gh-btn">
          <SiLeetcode size={16} />
          LeetCode
        </a>
        <a
          href={`mailto:${PROFILE.email}?subject=CV%20Inquiry`}
          className="gh-btn"
        >
          <Mail size={16} />
          Email CV
        </a>
      </div>

      <div className="gh-sidebar-meta" style={{ marginTop: 20 }}>
        <span>
          <Github size={16} />
          <strong>{followers}</strong> followers · <strong>{following}</strong> following
        </span>
        <span>
          <strong>{publicRepos}</strong> public repositories
        </span>
        <span style={{ fontSize: 12, color: "var(--gh-fg-subtle)" }}>{PROFILE.availability}</span>
      </div>
    </aside>
  );
}
