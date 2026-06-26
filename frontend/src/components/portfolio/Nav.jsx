import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 50);
    if (latest > prev && latest > 200) setHidden(true);
    else setHidden(false);
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-110%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
      data-testid="main-nav"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12 lg:px-24">
        <a href="#top" className="font-display text-xl font-bold tracking-tight text-white" data-testid="nav-logo">
          VKR<span className="text-[#F59E0B]">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="font-body text-xs uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-[#F59E0B]"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          data-testid="nav-cta"
          className="border border-white/20 px-5 py-2.5 font-body text-xs uppercase tracking-[0.2em] text-white transition-all hover:border-[#F59E0B] hover:bg-[#F59E0B] hover:text-black"
        >
          Hire me
        </a>
      </div>
    </motion.nav>
  );
}
