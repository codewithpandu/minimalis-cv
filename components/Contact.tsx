import { ArrowUpRight, Code, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="kontak" className="my-8 py-12">
      <div className="flex flex-col justify-between gap-8 rounded-3xl bg-surface p-12 shadow-sm md:flex-row md:items-center">
        <div className="flex max-w-xl flex-col gap-1">
          <div className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-text-muted">
              Mari Terhubung
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-text [text-wrap:balance]">
            Tertarik berkolaborasi atau merekrut untuk kepemimpinan produk
            berikutnya?
          </h2>
          <p className="pt-2 text-[15px] text-on-surface-variant">
            Saya selalu menyambut diskusi mengenai design system, strategi
            antarmuka aplikasi, atau posisi kepemimpinan tim desain. Mari
            berbincang santai.
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row md:flex-col">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-1 rounded-xl bg-primary px-6 py-3.5 font-mono text-[13px] text-on-primary shadow-sm transition-all hover:bg-surface-tint"
          >
            <Mail className="h-[18px] w-[18px]" />
            <span>{profile.email}</span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl bg-surface-container px-4 py-3 font-mono text-[13px] text-text transition-colors hover:bg-surface-variant"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl bg-surface-container px-4 py-3 font-mono text-[13px] text-text transition-colors hover:bg-surface-variant"
            >
              <span>GitHub</span>
              <Code className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
