import { useSpring } from "motion/react";
import { useEffect, useState } from "react";

type CountUpProps = {
  value: number;
  className?: string;
  pad?: number;
};

export function CountUp({ value, className = "", pad = 2 }: CountUpProps) {
  const spring = useSpring(0, { stiffness: 80, damping: 20 });
  const [display, setDisplay] = useState("0".repeat(pad));

  useEffect(() => {
    spring.set(value);
    return spring.on("change", (v) => {
      setDisplay(String(Math.round(v)).padStart(pad, "0"));
    });
  }, [spring, value, pad]);

  return <span className={className}>{display}</span>;
}
