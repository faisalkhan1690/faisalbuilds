import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="home" className="section-padding flex min-h-screen flex-col items-center justify-center pt-24 text-center">
      <div className="container-max flex flex-col items-center">
        <div className="relative mb-8">
          <div className="gradient-ring absolute -inset-1 rounded-full opacity-90 blur-[2px]" />
          <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-black sm:h-44 sm:w-44">
            <Image
              src={profile.photo}
              alt={profile.fullName}
              width={176}
              height={176}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="mb-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
          I do code and build{" "}
          <span className="gradient-hero">AI-powered products!</span>
        </h1>

        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
          Software Consultant with 12+ years shipping mobile, web & enterprise
          solutions. 5+ years leading core teams and managing clients, alongside
          hands-on work in React Native, React, AI platforms, and generative AI
          tooling with Claude, Gemini, and Cursor.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#contact" className="btn-primary min-w-[160px] text-center">
            Get In Touch
          </a>
          <a
            href="/cv.pdf"
            download="Faisal-Khan-CV.pdf"
            className="btn-outline min-w-[160px] text-center"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
