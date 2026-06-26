import { motion } from "framer-motion";
import { SKILLS } from "@/data/portfolio";

export default function Skills() {
  const loop = [...SKILLS, ...SKILLS];

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 md:py-32" data-testid="skills-section">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-white/40"
        >
          <span className="h-px w-12 bg-[#F59E0B]" />
          03 — Core Expertise
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mb-20 max-w-4xl font-display text-4xl font-extrabold leading-tight tracking-tighter text-white sm:text-5xl lg:text-6xl"
        >
          A toolkit built on{" "}
          <span className="text-[#F59E0B]">eight years</span> of running real-world service operations.
        </motion.h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {loop.map((s, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="font-display text-6xl font-extrabold tracking-tighter text-white/90 md:text-8xl">
                {s}
              </span>
              <span className="h-3 w-3 shrink-0 rounded-full bg-[#F59E0B]" />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-[1600px] px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative border border-white/10 bg-[#141414] p-5 transition-all duration-500 hover:border-[#F59E0B] hover:bg-[#1a1a1a]"
              data-testid={`skill-${i}`}
            >
              <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[#F59E0B] opacity-50 transition-opacity group-hover:opacity-100" />
              <div className="font-body text-xs uppercase tracking-[0.15em] text-white/40">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-3 font-display text-base font-bold text-white">{s}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
