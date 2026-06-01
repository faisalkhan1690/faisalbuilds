import { projectDisplayTitles, projectGradients } from "@/data/site";

interface ProjectCoverProps {
  projectId: string;
  category: string;
  badge?: string;
}

export default function ProjectCover({ projectId, category, badge }: ProjectCoverProps) {
  const gradient = projectGradients[projectId] ?? "from-neutral-700 to-neutral-900";
  const title = projectDisplayTitles[projectId] ?? projectId.toUpperCase();

  return (
    <div
      className={`relative flex h-52 flex-col justify-between overflow-hidden bg-gradient-to-br ${gradient} p-6 sm:h-56`}
    >
      <ProjectArt projectId={projectId} category={category} />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      <div className="relative z-10 mt-auto">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
          {badge ?? category}
        </p>
        <h3 className="mt-1 text-lg font-bold leading-tight text-white sm:text-xl">
          {title}
        </h3>
      </div>
    </div>
  );
}

function ProjectArt({ projectId, category }: { projectId: string; category: string }) {
  if (category === "ai" || projectId.includes("ai")) {
    return (
      <svg
        className="absolute right-4 top-4 h-28 w-28 opacity-30 sm:h-32 sm:w-32"
        viewBox="0 0 120 120"
        aria-hidden
      >
        <circle cx="60" cy="40" r="8" fill="white" />
        <circle cx="30" cy="70" r="6" fill="white" />
        <circle cx="90" cy="70" r="6" fill="white" />
        <circle cx="60" cy="95" r="5" fill="white" />
        <line x1="60" y1="48" x2="30" y2="64" stroke="white" strokeWidth="1.5" opacity="0.6" />
        <line x1="60" y1="48" x2="90" y2="64" stroke="white" strokeWidth="1.5" opacity="0.6" />
        <line x1="30" y1="76" x2="60" y2="90" stroke="white" strokeWidth="1.5" opacity="0.6" />
        <line x1="90" y1="76" x2="60" y2="90" stroke="white" strokeWidth="1.5" opacity="0.6" />
      </svg>
    );
  }

  if (projectId === "emirates-nbd") {
    return (
      <div className="absolute right-6 top-6 opacity-25" aria-hidden>
        <div className="h-36 w-20 rounded-2xl border-2 border-white bg-white/10 p-2">
          <div className="mb-2 h-2 w-8 rounded bg-white/40" />
          <div className="mb-1 h-1.5 w-full rounded bg-white/30" />
          <div className="mb-1 h-1.5 w-3/4 rounded bg-white/30" />
          <div className="mt-4 h-8 w-full rounded-lg bg-white/20" />
        </div>
      </div>
    );
  }

  if (projectId === "pg-alpha" || projectId === "canopy") {
    return (
      <div className="absolute inset-x-6 top-6 flex justify-center gap-3 opacity-25" aria-hidden>
        <div className="h-32 w-16 rounded-xl border-2 border-white bg-white/10" />
        <div className="mt-4 h-24 w-36 rounded-lg border-2 border-white bg-white/10 p-2">
          <div className="mb-1 h-1.5 w-full rounded bg-white/30" />
          <div className="h-1.5 w-2/3 rounded bg-white/30" />
          <div className="mt-3 grid grid-cols-2 gap-1">
            <div className="h-6 rounded bg-white/20" />
            <div className="h-6 rounded bg-white/20" />
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "zoylo" || projectId === "access-health") {
    return (
      <svg
        className="absolute right-6 top-6 h-28 w-28 opacity-25"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="50" cy="50" r="4" fill="white" />
        <line x1="50" y1="20" x2="50" y2="35" stroke="white" strokeWidth="2" />
        <line x1="50" y1="65" x2="50" y2="80" stroke="white" strokeWidth="2" />
        <line x1="20" y1="50" x2="35" y2="50" stroke="white" strokeWidth="2" />
        <line x1="65" y1="50" x2="80" y2="50" stroke="white" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg
      className="absolute right-4 top-4 h-24 w-24 opacity-20 sm:h-28 sm:w-28"
      viewBox="0 0 100 100"
      aria-hidden
    >
      <text x="10" y="35" fill="white" fontSize="28" fontFamily="monospace" fontWeight="bold">
        {"<>"}
      </text>
      <text x="20" y="65" fill="white" fontSize="14" fontFamily="monospace" opacity="0.7">
        {"/>"}
      </text>
      <rect x="10" y="75" width="60" height="4" rx="2" fill="white" opacity="0.4" />
      <rect x="10" y="85" width="40" height="4" rx="2" fill="white" opacity="0.3" />
    </svg>
  );
}
