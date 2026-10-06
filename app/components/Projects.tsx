const projects = [
  {
    title: "Fridge",
    description:
      "iOS pantry tracker with a real-time OCR pipeline (ML Kit) that extracts expiry dates from live camera frames and barcode lookup via Open Food Facts — built on Flutter/Riverpod with local SQLite, push notifications, and an E2E test suite via Patrol.",
    stack: ["Flutter", "Dart", "Riverpod", "SQLite", "ML Kit", "Patrol"],
    link: "https://play.google.com/store/apps/details?id=com.nshang.fridge",
    linkLabel: "Google Play",
  },
  {
    title: "FoodLingo",
    description:
      "Cross-platform app that photographs foreign-language restaurant menus and returns translated, allergy-filtered dish data in real time — with cart, scan history, and text-to-speech playback built on a feature-based clean architecture.",
    stack: ["Flutter", "Dart", "Riverpod", "Supabase", "flutter_tts"],
    link: "https://github.com/tommyshang",
  },
  {
    title: "Lumiflow",
    description:
      "Manifest V3 Chrome extension that extracts webpage content and renders it as a focused, sentence-by-sentence reading flow with two interchangeable word-coloring engines (grammar-based and semantic-based) to aid comprehension.",
    stack: ["TypeScript", "React", "Chrome Extension MV3", "Jest", "esbuild"],
    link: "https://github.com/tommyshang",
  },
  {
    title: "VaultMind",
    description:
      "Fully local RAG pipeline over a personal Obsidian vault — heading-aware chunking, hybrid vector + BM25 retrieval via Reciprocal Rank Fusion, and a RAGAS evaluation harness that improved Context Recall from 0.74 to 0.81 and Faithfulness from 0.79 to 0.85.",
    stack: ["Node.js", "TypeScript", "Express", "PostgreSQL", "PGVector", "Ollama", "Docker"],
    link: "https://github.com/tommyshang/vaultmind",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-[1080px] mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {projects.map(({ title, description, stack, link, linkLabel = "GitHub" }) => (
        <article
          key={title}
          className="bg-surface border border-line rounded-[20px] p-7 transition duration-200 hover:border-accent hover:-translate-y-0.5"
        >
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-2xl font-bold">{title}</h3>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] text-accent hover:text-accent2 transition-colors duration-200 whitespace-nowrap"
            >
              {linkLabel}
            </a>
          </div>
          <p className="text-base text-muted mt-2.5 mb-[18px]">{description}</p>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="border border-line bg-accent/10 rounded-full px-3 py-[3px] text-sm text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
