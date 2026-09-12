import { profile } from "@/lib/data";

const links = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Read.cv", href: "#" },
  { label: "Email", href: `mailto:${profile.email}` },
];

export function Footer() {
  return (
    <footer className="mt-24 w-full bg-surface-bright">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 py-12 text-left md:flex-row md:px-12">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-text">{profile.name}</p>
          <p className="font-mono text-[11px] text-text-muted">
            © 2024 {profile.name}. Seluruh hak cipta dilindungi undang-undang.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 font-mono text-[13px]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
