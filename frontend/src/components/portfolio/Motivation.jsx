import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MOTIVATION_TEXT, MOTIVATION_HIGHLIGHTS } from "@/data/portfolio";

function ScrollWord({ children, progress, range, highlight }) {
  const opacity = useTransform(progress, range, [0.25, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className={`mr-[0.28em] inline-block ${highlight ? "text-[#F59E0B]" : "text-white"}`}
    >
      {children}
    </motion.span>
  );
}

export default function Motivation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.15"],
  });

  const words = MOTIVATION_TEXT.split(" ");
  const wordCount = words.length;

  const lineOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);
  const subtitleOpacity = useTransform(scrollYProgress, [0.82, 1], [0, 1]);

  return (
    <section
      ref={ref}
      id="motivation"
      className="relative bg-[#0a0a0a] py-24 md:py-32"
      data-testid="motivation-section"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <motion.div
          style={{ opacity: lineOpacity }}
          className="mb-12 flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-white/40"
        >
          <span className="h-px w-12 bg-[#F59E0B]" />
          07 — Philosophy
        </motion.div>

        <p className="w-full font-display text-[clamp(2rem,5.5vw,5rem)] font-extrabold leading-[1.06] tracking-tighter">
          {words.map((word, i) => {
            const start = i / wordCount;
            const end = (i + 1) / wordCount;
            const clean = word.replace(/[.,!?—]/g, "");
            const highlight = MOTIVATION_HIGHLIGHTS.includes(clean);

            return (
              <ScrollWord key={i} progress={scrollYProgress} range={[start, end]} highlight={highlight}>
                {word}
              </ScrollWord>
            );
          })}
        </p>

        <motion.p
          style={{ opacity: subtitleOpacity }}
          className="mt-10 w-full max-w-4xl font-body text-base text-white/50 md:text-lg"
        >
          The best service operations don't happen by accident — they're built one decision, one system and one team at a time.
        </motion.p>
      </div>
    </section>
  );
}
