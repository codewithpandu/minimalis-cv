import { User } from "lucide-react";
import { profile } from "@/lib/data";

const navItems = [
  { label: "Tentang", href: "#tentang" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Proyek", href: "#proyek" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6 md:px-12">
        <a href="#" className="group flex items-center gap-2 text-left">
          <span className="text-2xl font-semibold tracking-tight text-text transition-colors group-hover:text-text-muted">
            {profile.name}
          </span>
          <span className="hidden font-mono text-[13px] text-text-muted sm:inline">
            / {profile.role}
          </span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[13px] text-on-surface-variant transition-colors hover:text-on-surface"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#download-cv"
              className="inline-flex items-center justify-center rounded-xl bg-text px-4 py-2 font-mono text-[13px] text-on-primary transition-all hover:bg-surface-tint"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
