import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import Image from "next/image";

function ProjectVisual({ kind }: { kind: Project["kind"] }) {
  if (kind === "chart") {
    return (
      <svg
        className="h-12 w-full text-text opacity-40"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 200 40"
      >
        <path
          d="M0 35 C 30 35, 45 15, 80 20 C 115 25, 140 5, 200 10"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (kind === "wireframe") {
    return (
      <div className="grid w-full grid-cols-3 gap-2 pt-4">
        <div className="flex h-14 flex-col justify-end gap-1 rounded-lg bg-surface p-2">
          <div className="h-1 w-6 rounded bg-surface-variant" />
        </div>
        <div className="flex h-14 flex-col justify-end gap-1 rounded-lg bg-text p-2">
          <div className="h-1 w-8 rounded bg-surface-container" />
        </div>
        <div className="flex h-14 flex-col justify-end gap-1 rounded-lg bg-surface p-2">
          <div className="h-1 w-6 rounded bg-surface-variant" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 pt-4">
      {["01", "02", "03", "04"].map((n, i) => (
        <div
          key={n}
          className={`flex h-8 w-8 items-center justify-center rounded-full font-mono text-[10px] ${
            i === 0
              ? "bg-primary text-on-primary"
              : i === 1
                ? "bg-secondary text-on-secondary"
                : i === 2
                  ? "bg-surface-container-high text-text"
                  : "bg-surface-dim text-text"
          }`}
        >
          {n}
        </div>
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <section id="proyek" className="flex flex-col gap-8 py-12">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-end">
        <div>
          {/* <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-text-muted">
            Karya Kurasi
          </span> */}
          <h2 className="text-2xl font-semibold text-text">Showcase</h2>
        </div>
        {/* <a
          href="#kontak"
          className="inline-flex items-center gap-1 font-mono text-[13px] text-text transition-colors hover:text-text-muted"
        >
          <span>Arsip Lengkap</span>
          <ArrowUpRight className="h-4 w-4" />
        </a> */}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col justify-between gap-6 rounded-2xl bg-surface p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex flex-col gap-4">
              <div className="relative flex h-44 w-full flex-col justify-between overflow-hidden rounded-xl bg-surface-container p-4">
                <div className="absolute z-10 flex items-center justify-between">
                  <span className="rounded bg-surface-bright px-2 py-1 font-mono text-[11px] font-medium text-text">
                    {project.category}
                  </span>
                  <ArrowUpRight className="text-text-muted transition-colors group-hover:text-text" />
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover "
                />
              </div>

              <div>
                <span className="font-mono text-[11px] text-text-muted">
                  {project.meta}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-text transition-colors group-hover:text-text-muted">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm text-on-surface-variant">
                {project.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2">
              {/* <span className="font-mono text-[11px] text-text-muted">
                {project.result}
              </span> */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] font-semibold text-text underline-offset-4 group-hover:underline"
              >
                {project.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
