import { Bot, Brain, Sparkles, Zap } from "lucide-react";
import { aiCapabilities } from "@/data/profile";

const icons = [Sparkles, Brain, Bot, Zap];

export default function AISection() {
  return (
    <section id="ai" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-950/20 via-transparent to-violet-950/20" />

      <div className="container-max relative">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-sky-400">
            AI Expertise
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {aiCapabilities.title}
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">{aiCapabilities.subtitle}</p>
        </div>

        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          {aiCapabilities.tooling.map((tool, i) => {
            const Icon = icons[i] ?? Sparkles;
            return (
              <div
                key={tool.name}
                className="glass-card group p-6 transition-all hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/5"
              >
                <div className="mb-4 inline-flex rounded-xl bg-sky-500/10 p-3 text-sky-400 transition-colors group-hover:bg-sky-500/20">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-100">{tool.name}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{tool.description}</p>
              </div>
            );
          })}
        </div>

        <div className="glass-card p-8">
          <h3 className="mb-6 text-center text-lg font-semibold text-slate-200">
            AI Engineering Practices
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aiCapabilities.practices.map((practice) => (
              <div
                key={practice}
                className="flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-800/30 px-4 py-3"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                <span className="text-sm text-slate-300">{practice}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
