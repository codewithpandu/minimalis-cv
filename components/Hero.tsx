import Image from "next/image";
import { ArrowRight, Download, Verified } from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <div>
      {/* Availability ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 pt-8">
        <div className="flex items-center gap-2 font-mono text-[13px] text-text-muted">
          <span>Curriculum Vitae</span>
        </div>
      </div>

      {/* Hero section */}
      <section className="flex flex-col gap-12 py-8" id="tentang">
        <div className="flex flex-col gap-1">
          <p className="font-mono text-[13px] uppercase tracking-wide text-text-muted">
            Portofolio &amp; Ringkasan Profesional
          </p>
          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-text sm:text-[56px]">
            {profile.name}
          </h1>
          <p className="text-lg font-semibold text-text-muted">
            {profile.headline}
          </p>
        </div>

        {/* Two-column editorial split */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left column */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <p className="text-[15px] leading-relaxed text-text text-balance">
              Web developer yang berfokus pada pengembangan aplikasi web modern,
              responsif, dan mudah digunakan. Saat ini memperluas kemampuan ke
              pengembangan aplikasi mobile dan backend untuk memahami proses
              pengembangan produk secara end-to-end. Terbiasa membangun
              antarmuka web dengan teknologi modern serta terus mengembangkan
              kemampuan dalam API, database, autentikasi, dan aplikasi mobile.
            </p>

            <div className="flex flex-col gap-2 rounded-xl bg-surface p-6 shadow-card">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-medium uppercase text-text-muted">
                  Fokus Inti Saat Ini
                </span>
                <Verified className="h-4.5 w-4.5 text-text-muted" />
              </div>
              <p className="text-sm text-on-surface">
                Memperkuat kemampuan web development sambil mendalami
                pengembangan mobile apps dan backend. Fokus pada pembangunan
                aplikasi yang terintegrasi mulai dari antarmuka pengguna, REST
                API, autentikasi, database, hingga deployment.
              </p>
            </div>

            {/* <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#kontak"
                className="inline-flex items-center gap-1 rounded-xl bg-primary px-5 py-3 font-mono text-[13px] text-on-primary shadow-sm transition-all hover:bg-surface-tint"
              >
                <span>Hubungi Saya</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#download-cv"
                className="inline-flex items-center gap-1 rounded-xl bg-surface px-5 py-3 font-mono text-[13px] text-text shadow-sm transition-colors hover:bg-surface-container"
              >
                <Download className="h-4.5 w-4.5" />
                <span>Unduh CV (PDF)</span>
              </a>
            </div> */}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="group relative rounded-2xl bg-surface p-2 shadow-sm">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-surface-container">
                <Image
                  src="/profile.jpg"
                  alt={`${profile.name} — ${profile.headline}`}
                  fill
                  className="object-cover object-top contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent opacity-30" />
              </div>
              <div className="flex flex-col gap-1 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-text">
                    {profile.name}
                  </span>
                  {/* <span className="font-mono text-[11px] text-text-muted">
                    {profile.id}
                  </span> */}
                </div>
                {/* <p className="font-mono text-[13px] text-text-muted">
                  {profile.currentRole}
                </p> */}
              </div>
            </div>

            {/* <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1 rounded-xl bg-surface p-4 shadow-card">
                <span className="font-mono text-[11px] font-medium uppercase text-text-muted">
                  Lokasi
                </span>
                <span className="text-[15px] font-medium text-text">
                  {profile.location}
                </span>
              </div>
              <div className="flex flex-col gap-1 rounded-xl bg-surface p-4 shadow-card">
                <span className="font-mono text-[11px] font-medium uppercase text-text-muted">
                  Pengalaman
                </span>
                <span className="text-[15px] font-medium text-text">
                  {profile.experienceLabel}
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
