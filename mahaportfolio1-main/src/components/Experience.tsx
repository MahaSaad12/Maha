import { motion } from "framer-motion";

const items = [
  {
    period: "2024",
    role: "Student Assistant",
    org: "Technical University of Munich",
    detail: "Built an R Shiny app predicting forest growth & deforestation; integrated ML models, +40% efficiency.",
  },
  {
    period: "2023 — 2027",
    role: "MSc Artificial Intelligence",
    org: "FAU Erlangen-Nürnberg",
    detail: "Currently researching computer vision and 3D pose estimation at FAPS.",
  },
  {
    period: "2023",
    role: "Computer Trainer",
    org: "DIGI Training & Development · Dubai",
    detail: "Taught MS Office, advanced Excel, WordPress, Wix, JavaScript, HTML & CSS.",
  },
  {
    period: "2023",
    role: "ICT Teacher",
    org: "The Oxford School · Dubai",
    detail: "Curriculum delivery for Information & Communication Technology.",
  },
  {
    period: "2021 — 2022",
    role: "Lecturer in Computer Science",
    org: "City University · Peshawar",
    detail: "Undergraduate CS lectures and project supervision.",
  },
  {
    period: "2015 — 2020",
    role: "Computer Teacher",
    org: "The Educator School · Peshawar",
    detail: "Five years building foundational tech literacy with students.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-secondary/40 border-t border-border">
      <div className="container">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          ◆ 03 / Experience
        </p>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-20 max-w-3xl">
          A decade across <em className="italic text-primary">teaching</em>, research & code.
        </h2>

        <div className="space-y-1">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="grid grid-cols-12 gap-4 py-6 border-t border-border last:border-b"
            >
              <div className="col-span-12 md:col-span-2 font-mono text-sm text-muted-foreground">
                {it.period}
              </div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="font-display text-2xl">{it.role}</h3>
                <p className="text-muted-foreground text-sm mt-1">{it.org}</p>
              </div>
              <div className="col-span-12 md:col-span-6 text-muted-foreground leading-relaxed">
                {it.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
