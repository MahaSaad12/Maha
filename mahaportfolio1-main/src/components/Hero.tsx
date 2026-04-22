import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Glow + stars */}
      <div className="absolute inset-0 bg-aurora pointer-events-none" />
      <div className="absolute inset-0 starfield opacity-70 pointer-events-none" />
      <div className="absolute inset-x-0 top-1/3 h-[60vh] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary-glow)/0.25),transparent_60%)] pointer-events-none" />

      <div className="container relative z-10 pt-32 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 text-center"
        >
          ✦ Maha Saad · AI Engineer & Researcher · Erlangen, Germany
        </motion.p>

        <h1 className="font-display text-[clamp(3rem,11vw,11rem)] leading-[0.9] font-medium tracking-tight text-center">
          {["Crafting", "Intelligent"].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.25em] text-glow"
            >
              {word}
            </motion.span>
          ))}
          <br />
          {["Digital", "Worlds"].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-[0.25em] text-glow"
            >
              {i === 1 ? <em className="italic text-primary">{word}</em> : word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 max-w-2xl mx-auto text-center text-muted-foreground text-base md:text-lg leading-relaxed"
        >
          Portfolio of <span className="text-foreground">Maha Saad</span> — MSc Artificial Intelligence
          at FAU Erlangen-Nürnberg, specializing in computer vision, LLMs, RAG, and robotics that
          turn complex data into meaningful experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest bg-primary text-primary-foreground px-7 py-4 rounded-full hover:shadow-[0_0_40px_hsl(var(--primary-glow)/0.6)] transition-all duration-500"
          >
            View Selected Work
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="/maha-saad-resume.pdf"
            download
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-border px-7 py-4 rounded-full hover:border-primary hover:text-primary transition-all duration-500"
          >
            ↓ Download Resume
          </a>
        </motion.div>
      </div>

      {/* marquee */}
      <div className="absolute bottom-0 inset-x-0 border-t border-border/60 py-4 overflow-hidden bg-background/40 backdrop-blur-sm">
        <div className="flex gap-12 marquee whitespace-nowrap font-display text-2xl italic text-muted-foreground/70">
          {Array(2).fill(null).map((_, k) => (
            <div key={k} className="flex gap-12">
              {["Computer Vision", "✦", "LLMs & RAG", "✦", "Robotics", "✦", "3D Pose Estimation", "✦", "R Shiny", "✦", "Healthcare AI", "✦"].map((w, i) => (
                <span key={i}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
