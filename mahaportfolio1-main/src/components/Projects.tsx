import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  num: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  category: string;
};

const projects: Project[] = [
  {
    num: "01",
    title: "ResolDepMirror — Smart Mirror",
    description:
      "Smart mirror system designed to help resolve depression through ambient interaction and computer-vision based mood detection. Published research project.",
    tags: ["Computer Vision", "Healthcare AI", "IoT"],
    href: "https://github.com/MahaSaad12/Dep_Mirror_Smart_Mirror",
    category: "Research",
  },
  {
    num: "02",
    title: "RAG Workflow Engine",
    description:
      "End-to-end retrieval-augmented generation pipeline orchestrating embeddings, vector retrieval and LLM synthesis for grounded, accurate answers.",
    tags: ["LLM", "RAG", "Python"],
    href: "https://github.com/MahaSaad12/RAG_Workflow",
    category: "GenAI",
  },
  {
    num: "03",
    title: "Forest Growth — TUM Shiny App",
    description:
      "R Shiny dashboard predicting forest growth and deforestation trends over 10 years. Real-time ML inference improved processing efficiency by 40%.",
    tags: ["R Shiny", "Random Forest", "Geospatial"],
    href: "https://github.com/MahaSaad12/Forest_TUM_app",
    category: "Data Science",
  },
  {
    num: "04",
    title: "AI Robotics Sandbox",
    description:
      "Python experiments around perception and control for autonomous robotic agents — bridging AI techniques with real-world embodied tasks.",
    tags: ["Robotics", "Python", "Perception"],
    href: "https://github.com/MahaSaad12/AI_Robotics",
    category: "Robotics",
  },
  {
    num: "05",
    title: "Watermark Segmentation",
    description:
      "Deep learning pipeline for detecting and segmenting watermarks in images using semantic segmentation networks.",
    tags: ["Computer Vision", "Segmentation", "Deep Learning"],
    href: "https://github.com/MahaSaad12/Watermark_segmentation",
    category: "Vision",
  },
  {
    num: "06",
    title: "Watermark Identification",
    description:
      "Classification system identifying watermark presence and origin across diverse image datasets — Jupyter research notebooks.",
    tags: ["Classification", "Jupyter", "ML"],
    href: "https://github.com/MahaSaad12/Water_mark_identification",
    category: "Vision",
  },
  {
    num: "07",
    title: "Sitar Notes Recognition",
    description:
      "Audio ML model recognising musical notes performed on the Asian sitar — exploring signal processing meets deep learning.",
    tags: ["Audio ML", "Signal Processing"],
    href: "https://github.com/MahaSaad12/-Notes_Recognition_in_Asian_sitar",
    category: "Audio",
  },
  {
    num: "08",
    title: "AI Bootcamp Notebooks",
    description:
      "Curated collection of Jupyter notebooks covering foundational AI concepts, model implementations, and experimentation.",
    tags: ["Education", "Jupyter", "ML"],
    href: "https://github.com/MahaSaad12/AI_boot",
    category: "Learning",
  },
  {
    num: "09",
    title: "Drum Kit · Web",
    description:
      "Interactive browser drum kit built with vanilla JavaScript — keyboard and click triggered samples with visual feedback.",
    tags: ["JavaScript", "Web", "Audio"],
    href: "https://github.com/MahaSaad12/Drum_kit-website",
    category: "Web",
  },
  {
    num: "10",
    title: "Dice Game",
    description:
      "Two-player browser dice game with random outcomes and dynamic UI updates — a clean JS interaction study.",
    tags: ["JavaScript", "Game", "UI"],
    href: "https://github.com/MahaSaad12/Webpage-for-Dice-game",
    category: "Web",
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-32">
      <div className="container">
        <div className="flex items-end justify-between mb-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              ◆ 02 / Selected Work
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Ten projects, <em className="italic text-primary">one obsession</em>.
            </h2>
          </div>
          <p className="hidden md:block max-w-xs text-muted-foreground text-sm">
            Research, code & creative experiments — pulled live from{" "}
            <a href="https://github.com/MahaSaad12" className="underline">github</a>.
          </p>
        </div>

        <div className="border-t border-border">
          {projects.map((p, i) => (
            <motion.a
              key={p.num}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.05 }}
              className="group block border-b border-border py-8 md:py-10 transition-colors hover:bg-muted/40"
            >
              <div className="container grid grid-cols-12 gap-4 items-start px-0">
                <div className="col-span-2 md:col-span-1 font-mono text-sm text-muted-foreground pt-2">
                  {p.num}
                </div>
                <div className="col-span-10 md:col-span-5">
                  <h3 className="font-display text-2xl md:text-4xl leading-tight transition-transform duration-500 group-hover:translate-x-2">
                    {p.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                  {p.description}
                </div>
                <div className="col-span-10 md:col-span-1 flex flex-wrap gap-1 font-mono text-[10px] uppercase tracking-wider">
                  {p.tags.slice(0, 2).map((t) => (
                    <span key={t} className="text-muted-foreground">{t}</span>
                  ))}
                </div>
                <div className="col-span-2 md:col-span-1 flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all duration-500 group-hover:bg-foreground group-hover:text-background group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
