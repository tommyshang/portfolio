export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-[900px] mx-auto px-10 py-24 border-t border-[#161616]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
        <h2 className="text-[13px] font-semibold text-[#ededed] tracking-tight pt-1">
          Contact
        </h2>
        <div className="flex flex-col gap-4">
          <a
            href="mailto:niushang1997@gmail.com"
            aria-label="Send email to niushang1997@gmail.com"
            className="text-[15px] text-[#555] hover:text-[#888] transition-colors duration-150"
          >
            niushang1997@gmail.com ↗
          </a>
          <a
            href="https://www.linkedin.com/in/niu-shang/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-[#555] hover:text-[#888] transition-colors duration-150"
          >
            linkedin.com/in/niu-shang ↗
          </a>
        </div>
      </div>
    </section>
  );
}
