import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROFILE, HERO_VIDEO, HERO_FALLBACK } from "@/data/portfolio";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-black" data-testid="hero-section">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_FALLBACK}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          data-testid="hero-video"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]" />
      </motion.div>

      {/* <div className="pointer-events-none relative z-10 flex items-center justify-end px-6 pt-8 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hidden font-body text-xs uppercase tracking-[0.3em] text-white/70 md:block"
        >
          Portfolio — 2026
        </motion.div>
      </div> */}

      <motion.div style={{ opacity }} className="relative z-10 flex h-[calc(100%-6rem)] flex-col justify-end px-6 pb-20 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 flex items-center gap-3 font-body text-xs uppercase tracking-[0.3em] text-white/60"
        >
          <span className="h-px w-12 bg-[#F59E0B]" />
          {PROFILE.title}
        </motion.div>

        <h1 className="font-display text-[14vw] font-extrabold leading-[0.85] tracking-tighter text-white md:text-[10vw] lg:text-[9rem]">
          {PROFILE.name.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="block overflow-hidden md:inline-block md:mr-6"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-md font-body text-base text-white/70 md:text-lg"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            href="#about"
            data-testid="hero-scroll-cta"
            className="group flex items-center gap-3 font-body text-xs uppercase tracking-[0.3em] text-white"
          >
            <span>Scroll to explore</span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-10 w-10 items-center justify-center border border-white/30 group-hover:border-[#F59E0B] group-hover:text-[#F59E0B]"
            >
              <ArrowDown size={16} />
            </motion.span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
