export default function About() {
  return (
    <section
      id="about"
      className="max-w-[900px] mx-auto px-10 py-24 border-t border-[#161616]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
        <div className="text-[13px] font-semibold text-[#ededed] tracking-tight pt-1">
          About
        </div>
        <p className="text-base text-[#666] leading-[1.8]">
          Software engineer with a focus on mobile development, backend systems,
          and AI-powered applications. Passionate about building products that
          are fast, reliable, and thoughtfully designed. Currently exploring the
          intersection of large language models and real-world product
          experiences.
        </p>
      </div>
    </section>
  );
}
