import { motion } from "framer-motion";
import { EXPERIENCE } from "@/data/portfolio";
import { MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative bg-[#0a0a0a] py-24 md:py-32" data-testid="experience-section">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-white/40"
        >
          <span className="h-px w-12 bg-[#F59E0B]" />
          04 — Experience
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9 }}
                className="font-display text-4xl font-extrabold leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-6xl"
              >
                A timeline of <span className="text-[#F59E0B]">service</span> & growth.
              </motion.h2>
              <p className="mt-6 max-w-md font-body text-base text-white/60">
                From distributor on the ground to leading a 20+ engineer team — the through-line has always been
                customers, systems and outcomes.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative border-l border-white/10 pl-8 md:pl-12">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="relative mb-16 last:mb-0"
                  data-testid={`exp-${i}`}
                >
                  <div className="absolute -left-[42px] top-2 flex h-4 w-4 items-center justify-center md:-left-[54px]">
                    <div className="h-4 w-4 rotate-45 border border-[#F59E0B] bg-[#0a0a0a]" />
                    <div className="absolute h-1.5 w-1.5 rotate-45 bg-[#F59E0B]" />
                  </div>

                  <div className="font-body text-xs uppercase tracking-[0.3em] text-[#F59E0B]">{exp.year}</div>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {exp.role}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-body text-sm text-white/70">
                    <span className="font-medium text-white/90">{exp.company}</span>
                    <span className="flex items-center gap-1 text-white/50">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 font-body text-sm text-white/65 md:text-base">
                        <span className="mt-2 h-px w-4 shrink-0 bg-[#F59E0B]/60" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
