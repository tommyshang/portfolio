const skills = [
  {
    category: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Python", "Docker"],
  },
  {
    category: "AI",
    items: ["LLM / RAG", "Claude API", "MCP"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-[900px] mx-auto px-10 py-24 border-t border-[#161616]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
        <div className="text-[13px] font-semibold text-[#ededed] tracking-tight pt-1">
          Skills
        </div>
        <div className="flex flex-col gap-7">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <div className="text-[12px] text-[#333] mb-3 font-medium tracking-wide">
                {category}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="border border-[#1e1e1e] rounded-full px-3 py-1 text-[12px] text-[#555]"
                  >
                    {item}
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
