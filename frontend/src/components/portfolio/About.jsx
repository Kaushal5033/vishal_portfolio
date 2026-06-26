import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ABOUT_PARAGRAPHS, PROFILE } from "@/data/portfolio";
import img1 from "@/assets/img1.PNG";
import img2 from "@/assets/img2.PNG";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
  const imageY2 = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <section id="about" ref={ref} className="relative bg-[#0a0a0a] py-24 md:py-32" data-testid="about-section">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-white/40"
        >
          <span className="h-px w-12 bg-[#F59E0B]" />
          01 — About
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl font-extrabold leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-7xl"
            >
              Turning chaotic field operations into{" "}
              <span className="text-[#F59E0B]">structured systems</span> that scale.
            </motion.h2>

            <div className="mt-12 space-y-6 max-w-2xl">
              {ABOUT_PARAGRAPHS.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="font-body text-base leading-relaxed text-white/70 md:text-lg"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 max-w-2xl"
            >
              <div>
                <div className="font-body text-xs uppercase tracking-[0.2em] text-white/40">Based in</div>
                <div className="mt-2 font-display text-xl font-bold text-white">{PROFILE.location}</div>
              </div>
              <div>
                <div className="font-body text-xs uppercase tracking-[0.2em] text-white/40">Currently</div>
                <div className="mt-2 font-display text-xl font-bold text-white">Sona Machinery</div>
              </div>
            </motion.div>
          </div>

          <div className="relative grid grid-cols-2 gap-4 lg:col-span-5">
            <motion.div style={{ y: imageY }} className="overflow-hidden">
              <img
                src={img1}
                alt="Teamwork"
                className="aspect-[3/4] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </motion.div>
            <motion.div style={{ y: imageY2 }} className="overflow-hidden mt-12">
              <img
                src={img2}
                alt="Strategy"
                className="aspect-[3/4] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
