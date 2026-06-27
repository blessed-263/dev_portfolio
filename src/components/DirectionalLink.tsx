import { useRef, type MouseEvent, type ReactNode } from "react";

type DirectionalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export function DirectionalLink({
  href,
  children,
  className = "",
  target,
  rel,
  onClick,
}: DirectionalLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const fromLeft = x < rect.width / 2;
    const fromTop = y < rect.height / 2;

    el.style.setProperty("--dir-x", fromLeft ? "-4px" : "4px");
    el.style.setProperty("--dir-y", fromTop ? "-2px" : "2px");
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--dir-x", "0px");
    el.style.setProperty("--dir-y", "0px");
  };

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`directional-link ${className}`}
    >
      {children}
    </a>
  );
}
