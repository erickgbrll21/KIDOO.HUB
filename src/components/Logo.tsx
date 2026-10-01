import Image from "next/image";
import logo from "../../public/brand/kidoo-hub.png";

type LogoProps = {
  tone?: "dark" | "light";
  className?: string;
  priority?: boolean;
};

export function Logo({ tone = "dark", className = "h-8 w-auto", priority = false }: LogoProps) {
  return (
    <Image
      src={logo}
      alt="KIDOO HUB"
      priority={priority}
      className={`${tone === "light" ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}
