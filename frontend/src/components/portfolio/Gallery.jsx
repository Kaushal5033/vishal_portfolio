import { motion } from "framer-motion";
import { GALLERY } from "@/data/portfolio";

export default function Gallery() {
  return (
    <section id="work" className="relative bg-[#0a0a0a] py-24 md:py-32" data-testid="gallery-section">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-white/40"
        >
          <span className="h-px w-12 bg-[#F59E0B]" />
          05 — Selected Work
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mb-16 max-w-4xl font-display text-4xl font-extrabold leading-tight tracking-tighter text-white sm:text-5xl lg:text-6xl"
        >
          Operations, captured.
        </motion.h2>

        <div className="grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-6 md:gap-6">
          {GALLERY.map((item, i) => {
            const layouts = [
              "md:col-span-4 md:row-span-2",
              "md:col-span-2",
              "md:col-span-2 md:row-span-1",
              "md:col-span-3 md:row-span-2",
              "md:col-span-3",
              "md:col-span-6 md:row-span-1",
            ];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden bg-[#141414] ${layouts[i] || ""}`}
                data-testid={`gallery-item-${i}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 md:p-8">
                  <div>
                    <div className="font-body text-xs uppercase tracking-[0.2em] text-[#F59E0B]">{item.tag}</div>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                      {item.title}
                    </h3>
                  </div>
                  <div className="hidden h-10 w-10 items-center justify-center border border-white/30 text-white transition-all group-hover:border-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-black md:flex">
                    →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
