import { Mail } from "lucide-react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.42-5.27 5.7.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56C20.21 21.39 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
  </svg>
);
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.7a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM20 19h-3v-5.6c0-1.34-.5-2.4-1.85-2.4-1 0-1.6.67-1.85 1.32-.1.23-.13.55-.13.87V19h-3V8h3v1.5c.4-.62 1.1-1.5 2.7-1.5 2 0 3.5 1.3 3.5 4.1V19z"/>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden border-t border-border">
      <div className="container relative z-10 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
          ◆ 04 / Let's build
        </p>
        <h2 className="font-display text-[clamp(3rem,10vw,10rem)] leading-[0.9] font-medium">
          Let's make AI <br />
          <em className="italic text-primary">that matters</em>.
        </h2>
        <a
          href="mailto:mahamaqboolsethi@gmail.com"
          className="inline-block mt-12 font-display text-2xl md:text-3xl underline underline-offset-8 decoration-foreground/30 hover:decoration-foreground transition-all"
        >
          mahamaqboolsethi@gmail.com
        </a>

        <div className="mt-10">
          <a
            href="/maha-saad-resume.pdf"
            download
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-foreground text-background px-6 py-3 rounded-full hover:bg-primary transition-colors duration-500"
          >
            ↓ Download Resume
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-6">
          {[
            { icon: Github, href: "https://github.com/MahaSaad12", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/mahasaad91/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:mahamaqboolsethi@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-500 hover:scale-110"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <footer className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span>© 2025 Maha Saad</span>
          <span>Erlangen, Germany · Open to opportunities</span>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
