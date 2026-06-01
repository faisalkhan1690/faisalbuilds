import { leadershipSkills, techStack } from "@/data/site";

function TechIcon({ id }: { id: string }) {
  const iconClass = "h-10 w-10 sm:h-12 sm:w-12";

  switch (id) {
    case "react-native":
      return (
        <svg viewBox="0 0 48 48" className={iconClass} aria-hidden>
          <circle cx="24" cy="24" r="4" fill="#61DAFB" />
          <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="#61DAFB" strokeWidth="2" />
          <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 24 24)" />
          <ellipse cx="24" cy="24" rx="20" ry="8" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 24 24)" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 48 48" className={iconClass} aria-hidden>
          <circle cx="24" cy="24" r="3.5" fill="#61DAFB" />
          <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="1.8" />
          <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(60 24 24)" />
          <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(120 24 24)" />
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 48 48" className={iconClass} aria-hidden>
          <circle cx="24" cy="24" r="22" fill="#fff" />
          <path d="M14 34 L24 14 L28 24 L34 34" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 28 L30 28" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "android":
      return (
        <svg viewBox="0 0 48 48" className={iconClass} aria-hidden>
          <path d="M12 20 L12 32 Q12 36 16 36 L32 36 Q36 36 36 32 L36 20" fill="#3DDC84" />
          <rect x="16" y="14" width="16" height="10" rx="3" fill="#3DDC84" />
          <circle cx="19" cy="18" r="1.5" fill="#1a1a1a" />
          <circle cx="29" cy="18" r="1.5" fill="#1a1a1a" />
          <line x1="10" y1="22" x2="6" y2="18" stroke="#3DDC84" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="38" y1="22" x2="42" y2="18" stroke="#3DDC84" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case "flutter":
      return (
        <svg viewBox="0 0 48 48" className={iconClass} aria-hidden>
          <path d="M8 28 L24 12 L32 20 L16 36 Z" fill="#54C5F8" />
          <path d="M16 36 L24 28 L32 36 L24 44 Z" fill="#01579B" />
          <path d="M24 12 L32 20 L24 28 L16 20 Z" fill="#29B6F6" opacity="0.8" />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 48 48" className={iconClass} aria-hidden>
          <rect width="48" height="48" rx="4" fill="#F7DF1E" />
          <text x="24" y="32" textAnchor="middle" fill="#000" fontSize="16" fontWeight="bold" fontFamily="sans-serif">JS</text>
        </svg>
      );
    case "java":
      return (
        <svg viewBox="0 0 48 48" className={iconClass} aria-hidden>
          <path d="M18 10 Q28 14 18 22 Q10 28 18 34 Q24 38 30 36" fill="none" stroke="#E76F00" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M22 38 Q30 40 34 36" fill="none" stroke="#5382A1" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="24" cy="8" rx="6" ry="3" fill="#E76F00" />
        </svg>
      );
    case "mongodb":
      return (
        <svg viewBox="0 0 48 48" className={iconClass} aria-hidden>
          <path d="M24 6 Q32 16 32 28 Q32 38 24 42 Q16 38 16 28 Q16 16 24 6" fill="#47A248" />
          <path d="M24 6 Q28 16 28 28 Q28 36 24 40" fill="none" stroke="#6DBE44" strokeWidth="1.5" opacity="0.6" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 48 48" className={iconClass} aria-hidden>
          <defs>
            <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <rect width="48" height="48" rx="10" fill="url(#aiGrad)" />
          <text x="24" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">AI</text>
        </svg>
      );
    default:
      return null;
  }
}

export default function TechStack() {
  return (
    <section className="section-padding pt-0">
      <div className="container-max text-center">
        <p className="mb-10 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
          Experience With
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-14">
          {techStack.map((tech) => (
            <div
              key={tech.id}
              className="group relative flex flex-col items-center gap-2 opacity-70 transition-opacity hover:opacity-100"
            >
              <span
                role="tooltip"
                className="pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-black opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 group-focus-within:opacity-100 sm:-top-11 sm:text-sm"
              >
                {tech.name}
                <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-white" />
              </span>
              <TechIcon id={tech.id} />
              <span className="text-[10px] text-neutral-500 sm:hidden">{tech.name}</span>
            </div>
          ))}
        </div>

        <p className="mb-8 mt-16 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
          Leadership Skills
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {leadershipSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2 text-xs text-neutral-300 sm:text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
