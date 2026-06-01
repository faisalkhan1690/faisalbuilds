import { MapPin } from "lucide-react";
import { profile, languages } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-sky-400">
            About Me
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Engineering leader with an AI-first mindset
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {profile.about.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-slate-400 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
                Quick Info
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-sky-400" />
                  {profile.location}
                </li>
                <li>
                  <span className="text-slate-300">Role:</span> Software Consultant
                </li>
                <li>
                  <span className="text-slate-300">Company:</span> GlobalLogic
                </li>
                <li>
                  <span className="text-slate-300">Experience:</span> 12+ Years
                </li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
                Languages
              </h3>
              <ul className="space-y-2 text-sm">
                {languages.map((lang) => (
                  <li key={lang.name} className="flex justify-between text-slate-400">
                    <span className="text-slate-300">{lang.name}</span>
                    <span>{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
