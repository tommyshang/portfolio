const projects = [
  {
    title: "Project Alpha",
    description:
      "A cross-platform mobile application for real-time data tracking with an offline-first architecture.",
    stack: ["Flutter", "Dart", "Spring Boot"],
    github: "https://github.com/tommyshang",
  },
  {
    title: "Project Beta",
    description:
      "A RAG-powered knowledge assistant that indexes private documents and answers questions in natural language.",
    stack: ["Python", "Claude API", "Docker"],
    github: "https://github.com/tommyshang",
  },
  {
    title: "Project Gamma",
    description:
      "A microservices backend platform with authentication, event streaming, and containerized deployment.",
    stack: ["Java", "Spring Boot", "Docker"],
    github: "https://github.com/tommyshang",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-[900px] mx-auto px-10 py-24 border-t border-[#161616]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
        <h2 className="text-[13px] font-semibold text-[#ededed] tracking-tight pt-1">
          Projects
        </h2>
        <div className="flex flex-col gap-4">
          {projects.map(({ title, description, stack, github }) => (
            <div
              key={title}
              className="border border-[#161616] rounded-[10px] p-7 hover:border-[#2a2a2a] transition-colors duration-200"
            >
              <div className="flex items-start justify-between mb-2.5">
                <div className="text-[15px] font-semibold text-[#ededed] tracking-tight">
                  {title}
                </div>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-[#333] hover:text-[#666] transition-colors duration-150 ml-4 shrink-0"
                >
                  GitHub ↗
                </a>
              </div>
              <p className="text-[14px] text-[#555] leading-[1.65] mb-4">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-[#1e1e1e] rounded-full px-3 py-1 text-[12px] text-[#555]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
