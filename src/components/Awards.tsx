import { Award as AwardIcon } from "lucide-react";
import { awards } from "@/data/profile";

export default function Awards() {
  const featured = awards.find((a) => a.featured);
  const list = awards.filter((a) => !a.featured);

  return (
    <section id="awards" className="section-padding bg-neutral-950/50">
      <div className="container-max">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-violet-400 sm:text-4xl md:text-5xl">
          Awards Received
        </h2>

        {featured && (
          <article className="mx-auto mb-12 max-w-3xl rounded-2xl border border-neutral-800 bg-black p-6 sm:p-8">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
              Latest Award · {featured.year}
            </p>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              {featured.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-400">{featured.org}</p>
            {featured.detail && (
              <p className="mt-1 text-sm font-medium text-neutral-300">
                {featured.detail}
              </p>
            )}
            {featured.citation && (
              <p className="mt-4 text-sm italic leading-relaxed text-neutral-500">
                &ldquo;{featured.citation}&rdquo;
              </p>
            )}
          </article>
        )}

        <ul className="mx-auto max-w-3xl space-y-5">
          {list.map((award, i) => (
            <li
              key={i}
              className="flex items-start gap-4 border-b border-neutral-900 pb-5 last:border-0 last:pb-0"
            >
              <AwardIcon
                size={20}
                className="mt-0.5 shrink-0 text-violet-400"
                aria-hidden
              />
              <div className="flex-1">
                <p className="text-sm text-neutral-200 sm:text-base">
                  <span className="font-medium">{award.title}</span>
                  {", "}
                  <span className="text-neutral-400">{award.org}</span>{" "}
                  <span className="text-neutral-500">({award.year})</span>
                </p>
                {award.detail && (
                  <p className="mt-1 text-xs text-neutral-600 sm:text-sm">
                    {award.detail}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
