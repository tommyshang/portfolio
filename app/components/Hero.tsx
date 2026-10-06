export default function Hero() {
  return (
    <section className="max-w-[1080px] mx-auto px-6 pt-20 pb-12">
      <span className="inline-block border border-line rounded-full px-4 py-1.5 text-sm text-accent2 tracking-[0.08em] uppercase">
        Software Engineer
      </span>
      <h1 className="font-display text-[clamp(44px,8vw,84px)] font-bold leading-none tracking-[-0.03em] mt-6 bg-gradient-to-r from-fg from-30% to-accent bg-clip-text text-transparent">
        Niu Shang
      </h1>
      <p className="text-[22px] leading-[1.65] text-muted max-w-[720px] mt-6">
        Software engineer with a focus on mobile development, backend systems,
        and AI-powered applications. Passionate about building products that
        are fast, reliable, and thoughtfully designed. Currently exploring the
        intersection of large language models and real-world product
        experiences.
      </p>
      <div className="flex flex-wrap gap-3 mt-8">
        <a
          href="https://github.com/tommyshang"
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-12 inline-flex items-center px-6 rounded-xl font-semibold bg-accent text-on-accent hover:brightness-110 transition duration-200"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/niu-shang/"
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-12 inline-flex items-center px-6 rounded-xl font-semibold border border-line hover:border-accent2 hover:text-accent2 transition duration-200"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
