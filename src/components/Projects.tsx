"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCover from "@/components/ProjectCover";

const INITIAL_COUNT = 6;

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl md:text-5xl">
          Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          {displayed.map((project) => {
            const isExpanded = expanded === project.id;
            const badge = project.badges?.filter((b) => b !== "Featured")[0];

            return (
              <article
                key={project.id}
                className="group overflow-hidden rounded-2xl bg-neutral-950 ring-1 ring-neutral-800 transition-all hover:ring-neutral-600"
              >
                <ProjectCover
                  projectId={project.id}
                  category={project.category}
                  badge={badge}
                />

                <div className="p-5 sm:p-6">
                  <p className="text-xs font-medium text-neutral-500">{project.name}</p>
                  <p
                    className={`mt-2 text-sm leading-relaxed text-neutral-400 ${isExpanded ? "" : "line-clamp-2"}`}
                  >
                    {project.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, isExpanded ? undefined : 5).map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-neutral-900 px-2 py-0.5 text-[11px] text-neutral-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setExpanded(isExpanded ? null : project.id)}
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-neutral-300 transition-colors hover:text-white"
                  >
                    {isExpanded ? "Show Less" : "View Details"}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {!showAll && projects.length > INITIAL_COUNT && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="btn-outline inline-block px-10"
            >
              View All {projects.length} Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
