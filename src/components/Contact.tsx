import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact() {
  const whatsappNumber = "919717991893";

  return (
    <section id="contact" className="section-padding pb-8">
      <div className="container-max">
        <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Contact
        </h2>

        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
          I&apos;m open to consulting opportunities, leadership roles, and challenging
          projects in mobile, web, and AI engineering. With 5+ years managing core
          teams and handling clients directly, I bring both technical depth and
          strong project & team management — feel free to reach out.
        </p>

        <div className="mb-12 flex flex-col gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex w-fit items-center gap-3 text-neutral-300 transition-colors hover:text-white"
          >
            <Mail size={20} className="shrink-0 text-neutral-500" />
            <span className="text-sm sm:text-base">{profile.email}</span>
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-3 text-neutral-300 transition-colors hover:text-white"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0 text-neutral-500" />
            <span className="text-sm sm:text-base">+91-9717991893</span>
          </a>

          <a
            href="/cv.pdf"
            download="Faisal-Khan-CV.pdf"
            className="btn-outline w-fit px-8 py-2.5 text-sm"
          >
            Download CV
          </a>
        </div>

        <div className="flex items-center gap-5 border-t border-neutral-900 pt-8">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-500 transition-colors hover:text-white"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-500 transition-colors hover:text-white"
          >
            <Github size={22} />
          </a>
          <a
            href={profile.links.stackoverflow}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Stack Overflow"
            className="text-neutral-500 transition-colors hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-current" aria-hidden>
              <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zM12.29 4.28l-1.023 1.75 8.957 5.245 1.023-1.75L12.29 4.28zM9.294 8.577l-.687 1.825 10.038 3.773.686-1.825L9.294 8.577zM6.775 13.18l-.28 1.937 10.531 1.518.28-1.937L6.775 13.18zM5.19 18.016l.115 1.953 10.694-.629-.115-1.953L5.19 18.016zM4.55 22.875l10.635-.115-.01-1.96-10.635.115.01 1.96z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
