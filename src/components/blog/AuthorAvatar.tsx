import Image from "next/image";
import type { Author } from "@/components/blog/blogData";

interface AuthorAvatarProps {
  author: Author;
  /** Visual size of the avatar */
  size?: "xs" | "sm" | "md";
  className?: string;
}

// Size presets — complete Tailwind classes (no dynamic construction)
const SIZES = {
  xs: { wrapper: "w-6 h-6", text: "text-[10px]", px: 24 },
  sm: { wrapper: "w-8 h-8", text: "text-xs", px: 32 },
  md: { wrapper: "w-10 h-10", text: "text-sm", px: 40 },
} as const;

/** Returns up to 2 uppercase initials from a name */
function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function AuthorAvatar({
  author,
  size = "sm",
  className = "",
}: AuthorAvatarProps) {
  const { wrapper, text, px } = SIZES[size];
  const abbr = getInitials(author.name);

  if (author.avatarUrl) {
    return (
      <div
        className={`${wrapper} rounded-full overflow-hidden shrink-0 ${className}`}
      >
        <Image
          src={author.avatarUrl}
          alt={author.name}
          width={px}
          height={px}
          className="object-cover w-full h-full"
        />
      </div>
    );
  }

  // Initials fallback — brand navy background
  return (
    <div
      className={`${wrapper} rounded-full bg-[#000048] flex items-center justify-center shrink-0 ${className}`}
      aria-label={author.name}
      role="img"
    >
      <span className={`${text} font-bold text-white leading-none select-none`}>
        {abbr}
      </span>
    </div>
  );
}
