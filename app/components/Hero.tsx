export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-10">
      <div>
        <div className="inline-block border border-[#1e1e1e] rounded-full px-4 py-1.5 text-[11px] text-[#555] tracking-widest uppercase mb-8">
          Software Engineer
        </div>
        <h1 className="text-[72px] font-extrabold tracking-[-0.04em] leading-none text-[#ededed]">
          Niu Shang
        </h1>
        <p className="text-lg text-[#444] mt-6 leading-relaxed max-w-md mx-auto">
          Building mobile experiences, scalable backends,
          <br />
          and intelligent systems.
        </p>
        <div className="flex gap-3 mt-10 justify-center">
          <a
            href="https://github.com/tommyshang"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ededed] text-[#0a0a0a] text-[13px] font-medium px-5 py-2.5 rounded-lg hover:bg-white transition-colors duration-150"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/niu-shang/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#222] text-[#666] text-[13px] px-5 py-2.5 rounded-lg hover:border-[#333] hover:text-[#888] transition-colors duration-150"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
