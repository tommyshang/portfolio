const links = [
  { label: "Email", href: "mailto:niushang1997@gmail.com", external: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/niu-shang/", external: true },
  { label: "GitHub", href: "https://github.com/tommyshang", external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-[1080px] mx-auto px-6">
      <div className="border-t border-line pt-16 pb-12">
        <h2 className="font-display text-[clamp(32px,5vw,44px)] font-bold tracking-tight leading-none text-accent2 mb-6">
          Contact
        </h2>
        <div className="flex flex-col items-start gap-3 text-lg font-medium text-muted">
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className="hover:text-accent2 transition-colors duration-200"
            >
              {label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
