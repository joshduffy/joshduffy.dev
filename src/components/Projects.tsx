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
    title: "Local AI Stack",
    description:
      "Complete local AI infrastructure for Apple Silicon - Ollama + ComfyUI with zero cloud dependencies.",
    tech: ["Python", "PyTorch", "Apple Silicon"],
    github: "https://github.com/joshduffy/local-ai-stack",
    status: "Live",
  },
  {
    title: "Bones Brigade Control Deck",
    description:
      "Custom web UI for local LLMs and Stable Diffusion with retro skateboard aesthetic.",
    tech: ["Next.js", "TypeScript", "WebSockets"],
    status: "Planned",
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
        <h2 className="text-2xl font-bold mb-8">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
