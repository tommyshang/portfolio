const links = ["Skills", "Projects", "Contact"];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-line">
      <nav
        aria-label="Main navigation"
        className="max-w-[1080px] mx-auto px-6 h-16 flex items-center justify-between"
      >
        <span className="font-display text-xl font-bold tracking-tight">NS</span>
        <div className="flex gap-7">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-muted hover:text-accent2 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
