import { Github, Linkedin, Mail } from "./Icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Josh Duffy
        </h1>
        <p className="text-lg sm:text-xl text-neutral-400 mb-8">
          Transformation & Integration Leader • Technical Builder
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/joshduffy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/changeleadership/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:josh@changemanaged.io"
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <div className="mt-16">
          <a
            href="#projects"
            className="text-neutral-500 hover:text-neutral-300 transition-colors text-sm"
          >
            View Projects ↓
          </a>
        </div>
      </div>
    </section>
  );
}
