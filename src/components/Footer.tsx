import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">
      <div className="container-max flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500">
          © {year} {profile.fullName}. All rights reserved.
        </p>
        <p className="text-sm text-slate-600">
          Built with{" "}
          <span className="text-sky-400">Next.js</span> &{" "}
          <span className="text-sky-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
