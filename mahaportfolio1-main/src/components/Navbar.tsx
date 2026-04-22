import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/60" : ""
      }`}
    >
      <nav className="container flex items-center justify-between py-5">
        <a href="#top" className="font-display text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2">
          <span className="w-7 h-7 rounded-md bg-primary/15 border border-primary/40 flex items-center justify-center text-primary text-sm">◆</span>
          Maha Saad
        </a>
        <ul className="hidden md:flex items-center gap-10 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://github.com/MahaSaad12"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex font-mono text-xs uppercase tracking-widest border border-foreground/20 px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-all duration-500"
        >
          GitHub ↗
        </a>
      </nav>
    </motion.header>
  );
};

export default Navbar;
