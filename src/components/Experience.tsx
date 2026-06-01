import { experiences } from "@/data/experience";
import { companyBrands } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl md:text-5xl">
          Experience
        </h2>

        <div className="space-y-10 sm:space-y-12">
          {experiences.map((exp, i) => {
            const brand = companyBrands[exp.company] ?? {
              color: "#525252",
              abbr: exp.company.slice(0, 2).toUpperCase(),
            };

            return (
              <article
                key={i}
                className="grid gap-4 border-b border-neutral-900 pb-10 last:border-0 sm:grid-cols-[auto_1fr_auto] sm:gap-6 sm:pb-12"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
                  style={{ backgroundColor: brand.color }}
                >
                  {brand.abbr}
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {exp.role}{" "}
                    <span className="text-neutral-500">at {exp.company}</span>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {exp.highlights[0]}
                    {exp.highlights.length > 1 && (
                      <>
                        {" "}
                        {exp.highlights.slice(1, 2).join(" ")}
                      </>
                    )}
                  </p>
                  <p className="mt-1 text-xs text-neutral-600 sm:hidden">{exp.period}</p>
                </div>

                <p className="hidden shrink-0 self-start text-sm text-neutral-500 sm:block">
                  {exp.period}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
