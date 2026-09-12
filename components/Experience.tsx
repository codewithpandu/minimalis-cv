import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="pengalaman" className="flex flex-col gap-8 py-12">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-end">
        <div>
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-text-muted">
            Rekam Jejak Karir
          </span>
          <h2 className="text-2xl font-semibold text-text">
            Pengalaman Profesional
          </h2>
        </div>
        {/* <span className="font-mono text-[13px] text-text-muted">
          2017 — Sekarang
        </span> */}
      </div>

      <div className="flex flex-col gap-4">
        {experiences.map((exp) => (
          <article
            key={exp.role}
            className="rounded-2xl bg-surface p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-12">
              <div className="flex flex-col gap-1 md:col-span-4">
                <span className="font-mono text-[13px] text-text-muted">
                  {exp.period}
                </span>
                <span className="font-mono text-[11px] font-semibold uppercase text-text">
                  {exp.company}
                </span>
                <span className="font-mono text-xs text-text-muted">
                  {exp.location}
                </span>
              </div>

              <div className="flex flex-col gap-2 md:col-span-8">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h3 className="text-lg font-semibold text-text">
                    {exp.role}
                  </h3>
                  <span className="rounded-full bg-surface-container px-2.5 py-0.5 font-mono text-[11px] text-text">
                    {exp.type}
                  </span>
                </div>
                <p className="text-[15px] text-on-surface-variant">
                  {exp.description}
                </p>

                {exp.highlights.length > 0 && (
                  <ul className="flex flex-col gap-2 pt-2">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-text"
                      >
                        <span className="mt-0.5 font-mono text-text-muted">
                          —
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-1 pt-1">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-surface-container px-2.5 py-1 font-mono text-[11px] text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
