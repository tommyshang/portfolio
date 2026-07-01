const projects = [
  {
    title: "Fridge",
    description:
      "iOS pantry tracker with a real-time OCR pipeline (ML Kit) that extracts expiry dates from live camera frames and barcode lookup via Open Food Facts — built on Flutter/Riverpod with local SQLite, push notifications, and an E2E test suite via Patrol.",
    stack: ["Flutter", "Dart", "Riverpod", "SQLite", "ML Kit", "Patrol"],
    github: "https://github.com/tommyshang",
  },
  {
    title: "FoodLingo",
    description:
      "Cross-platform app that photographs foreign-language restaurant menus and returns translated, allergy-filtered dish data in real time — with cart, scan history, and text-to-speech playback built on a feature-based clean architecture.",
    stack: ["Flutter", "Dart", "Riverpod", "Supabase", "flutter_tts"],
    github: "https://github.com/tommyshang",
  },
  {
    title: "Lumiflow",
    description:
      "Manifest V3 Chrome extension that extracts webpage content and renders it as a focused, sentence-by-sentence reading flow with two interchangeable word-coloring engines (grammar-based and semantic-based) to aid comprehension.",
    stack: ["TypeScript", "React", "Chrome Extension MV3", "Jest", "esbuild"],
    github: "https://github.com/tommyshang",
  },
  {
    title: "VaultMind",
    description:
      "Fully local RAG pipeline over a personal Obsidian vault — heading-aware chunking, hybrid vector + BM25 retrieval via Reciprocal Rank Fusion, and a RAGAS evaluation harness that improved Context Recall from 0.74 to 0.81 and Faithfulness from 0.79 to 0.85.",
    stack: ["Node.js", "TypeScript", "Express", "PostgreSQL", "PGVector", "Ollama", "Docker"],
    github: "https://github.com/tommyshang/vaultmind",
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
