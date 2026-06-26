import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { STATS } from "@/data/portfolio";

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, to, count]);

  return (
    <span ref={ref} className="font-display text-7xl font-extrabold tracking-tighter text-white md:text-8xl lg:text-9xl">
      <motion.span>{rounded}</motion.span>
      <span className="text-[#F59E0B]">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[#0a0a0a] py-24 md:py-32" data-testid="stats-section">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-white/40"
        >
          <span className="h-px w-12 bg-[#F59E0B]" />
          02 — Impact in Numbers
        </motion.div>

        <div className="grid grid-cols-2 gap-y-16 md:grid-cols-4 md:gap-y-0 md:gap-x-8">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col items-start border-l border-white/10 pl-6 md:pl-8"
              data-testid={`stat-item-${i}`}
            >
              <Counter to={s.value} suffix={s.suffix} />
              <span className="mt-4 max-w-[180px] font-body text-xs uppercase tracking-[0.2em] text-white/50 md:text-sm">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
