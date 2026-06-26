import { motion } from "framer-motion";
import { EDUCATION } from "@/data/portfolio";

export default function Education() {
  return (
    <section className="relative bg-[#0a0a0a] py-24 md:py-32" data-testid="education-section">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-white/40"
        >
          <span className="h-px w-12 bg-[#F59E0B]" />
          08 — Education
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mb-16 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tighter text-white sm:text-5xl lg:text-6xl"
        >
          A foundation built on <span className="text-[#F59E0B]">continuous learning</span>.
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {EDUCATION.map((ed, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative flex items-start justify-between border border-white/10 bg-[#141414] p-8 transition-all duration-500 hover:border-[#F59E0B]"
              data-testid={`edu-${i}`}
            >
              <div className="flex-1">
                <div className="font-body text-xs uppercase tracking-[0.3em] text-[#F59E0B]">{ed.period}</div>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white">{ed.title}</h3>
                <div className="mt-1 font-body text-sm text-white/60">{ed.sub}</div>
                <div className="mt-6 font-body text-sm font-medium text-white/80">{ed.org}</div>
              </div>
              <div className="font-display text-5xl font-extrabold text-white/10 transition-colors duration-500 group-hover:text-[#F59E0B]/40">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
