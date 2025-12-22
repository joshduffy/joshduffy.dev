import { Github, ExternalLink } from "./Icons";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  status: "Live" | "Planned" | "In Progress";
}

const projects: Project[] = [
  {
    title: "OrgChange",
    description:
      "Change management platform with interactive org charts (React Flow + dagre layouts), PowerPoint export via pptxgenjs with editable shapes, OAuth-ready HRIS integrations for Workday/SAP/Oracle/ADP/BambooHR, and a react-simple-maps global view. Built for M&A scenarios with change saturation scoring.",
    tech: ["React 19", "TypeScript", "React Flow", "pptxgenjs", "Tailwind CSS"],
    live: "https://orgchange.joshduffy.dev",
    status: "Live",
  },
  {
    title: "IntegrationOS (M&A Platform)",
    description:
      "Workforce integration platform for M&A deals with Silicon Valley-themed demo (Hooli acquiring Pied Piper). Modern React UI with gradient sidebar, colorful stat dashboards, natural language queries, and Excel/CSV import. Features RSA-signed licenses and IndexedDB persistence.",
    tech: ["React", "TypeScript", "Zustand", "IndexedDB", "Tailwind CSS", "Vite"],
    live: "https://ma.joshduffy.dev",
    status: "Live",
  },
  {
    title: "Local AI Stack",
    description:
      "Complete local AI infrastructure for Apple Silicon. Next.js dashboard with streaming LLM chat, SDXL image generation via ComfyUI, job queue, and gallery. Zero cloud dependencies.",
    tech: ["Next.js", "TypeScript", "SQLite", "Ollama", "ComfyUI"],
    github: "https://github.com/joshduffy/local-ai-stack",
    status: "Live",
  },
  {
    title: "Local LLM",
    description:
      "Minimal chat interface for Mistral and Mixtral models. Streaming responses via Ollama. Private by design — no data leaves your machine.",
    tech: ["Next.js", "TypeScript", "Mistral", "Mixtral", "Ollama"],
    github: "https://github.com/joshduffy/local-llm",
    status: "Live",
  },
  {
    title: "Learning Through Play",
    description:
      "Collection of interactive educational games for elementary students. Math, reading, science, coding - all browser-based with zero tracking.",
    tech: ["HTML", "CSS", "JavaScript", "Game Design"],
    status: "Live",
    github: "https://github.com/joshduffy/learning-through-play",
    live: "https://learn.joshduffy.dev",
  },
  {
    title: "Hostile Interfaces",
    description:
      "Anthology of 10 intentionally terrible UI games. Bad UX is the mechanic - consent dialogs, password hell, CAPTCHA nightmares, and more. Victory comes from understanding hidden rules.",
    tech: ["HTML", "CSS", "JavaScript", "Game Design"],
    status: "Live",
    github: "https://github.com/joshduffy/local-ai-stack/tree/main/hostile-interfaces",
    live: "https://hostile.joshduffy.dev",
  },
];

function StatusBadge({ status }: { status: Project["status"] }) {
  const colors = {
    Live: "bg-green-500/10 text-green-400 border-green-500/20",
    Planned: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    "In Progress": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  };

  return (
    <span
      className={`text-xs px-2 py-1 rounded border ${colors[status]}`}
    >
      {status}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <StatusBadge status={project.status} />
      </div>
      <p className="text-neutral-400 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 bg-neutral-800 rounded text-neutral-300"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        <p className="text-neutral-400 mb-8">
          Side projects. Things I&apos;m tinkering with. Mostly local LLMs and tools I actually use.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
