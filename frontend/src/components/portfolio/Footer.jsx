import { PROFILE } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0a] py-12" data-testid="footer">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-12 lg:px-24">
        <div>
          <div className="font-display text-2xl font-extrabold tracking-tight text-white">
            {PROFILE.name}<span className="text-[#F59E0B]">.</span>
          </div>
          <div className="mt-2 font-body text-xs uppercase tracking-[0.25em] text-white/40">
            {PROFILE.title} — {PROFILE.location}
          </div>
        </div>
        <div className="font-body text-xs uppercase tracking-[0.25em] text-white/40">
          © {new Date().getFullYear()} — Designed & engineered with care.
        </div>
      </div>
    </footer>
  );
}
