const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript", "Dart", "HTML", "CSS"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Riverpod", "SQLite", "ML Kit"],
  },
  {
    category: "Web & Backend",
    items: ["React", "Node.js", "Express.js"],
  },
  {
    category: "AI / LLM",
    items: ["LLM / RAG", "Claude API", "Ollama", "MCP"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    category: "Testing",
    items: ["JUnit5", "TestNG", "REST Assured", "Selenium", "Appium", "Patrol"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "GitHub Actions", "Jenkins", "AWS", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-[1080px] mx-auto px-6 pb-4">
      <div className="bg-surface border border-line rounded-[20px] p-7">
        <h2 className="font-display text-sm font-bold tracking-widest uppercase text-accent2 mb-4">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
          {skills.map(({ category, items }) => (
            <div key={category} className="flex flex-col text-[15px]">
              <b className="font-semibold">{category}</b>
              <span className="text-muted">{items.join(", ")}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
