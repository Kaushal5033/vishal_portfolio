import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/data/portfolio";

function AnimatedQuote({ quote }) {
  const words = quote.split(" ");

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.035 } },
        exit: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
      }}
      className="inline"
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            },
            exit: {
              opacity: 0,
              y: -16,
              filter: "blur(4px)",
              transition: { duration: 0.25 },
            },
          }}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[active];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#0a0a0a] py-24 md:py-32" data-testid="testimonials-section">
      <div className="pointer-events-none absolute -right-24 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#F59E0B]/5 blur-3xl md:block" />

      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-white/40"
        >
          <span className="h-px w-12 bg-[#F59E0B]" />
          06 — Testimonials
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mb-16 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tighter text-white sm:text-5xl lg:text-6xl"
        >
          Trusted by teams who <span className="text-[#F59E0B]">deliver</span> on the ground.
        </motion.h2>

        <div className="relative border border-white/10 bg-[#141414] p-8 md:p-14 lg:p-20">
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-6 top-6 font-display text-7xl leading-none text-[#F59E0B]/20 md:left-10 md:top-8 md:text-8xl"
          >
            "
          </motion.span>

          <div className="relative min-h-[180px] md:min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="font-display text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
                data-testid={`testimonial-quote-${active}`}
              >
                <AnimatedQuote quote={current.quote} />
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col gap-1 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="font-display text-lg font-bold text-white md:text-xl">{current.author}</div>
                <div className="mt-1 font-body text-sm text-white/50">{current.role}</div>
              </div>
              <div className="font-body text-xs uppercase tracking-[0.25em] text-[#F59E0B]">{current.company}</div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                data-testid={`testimonial-dot-${i}`}
                className={`h-px transition-all duration-500 ${
                  i === active ? "w-12 bg-[#F59E0B]" : "w-6 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
