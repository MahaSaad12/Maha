import { motion } from "framer-motion";

const skills = [
  "Large Language Models",
  "Retrieval-Augmented Generation",
  "Computer Vision",
  "3D Pose Estimation",
  "Python · PyTorch",
  "R · Shiny",
  "Machine Learning",
  "Robotics",
];

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-secondary/40 overflow-hidden border-t border-border">
      <div className="container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            ◆ 01 / About
          </p>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
            Curiosity into <em className="italic text-primary">complexity</em>.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            I didn't stumble into AI by accident. I followed curiosity into complexity and never
            looked back. It started with a fascination for how machines <em>"see."</em> The moment
            I built my first computer vision model and watched it detect features in an image, I
            was hooked.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Currently pursuing my Master's in Artificial Intelligence at FAU Erlangen-Nürnberg.
            I've enhanced 3D pose estimation at FAPS and built an R Shiny dashboard tracking
            forest growth at TUM — turning messy data into decisions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-foreground"
          >
            In 10 years? Leading a team building AI that doesn't just compute — it understands,
            supports, and transforms how we live and heal.
          </motion.p>

          <div className="pt-10 grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-sm">
            {skills.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="flex items-center gap-3 border-t border-border pt-3"
              >
                <span className="text-primary">→</span>
                <span className="text-foreground">{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
