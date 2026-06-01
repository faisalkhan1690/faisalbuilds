import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-900/30">
      <div className="container-max">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-sky-400">
            Tech Stack
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sky-400">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700/60 bg-slate-800/40 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-sky-500/40 hover:text-sky-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
