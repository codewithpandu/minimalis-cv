import { philosophy } from "@/lib/data";

export function Philosophy() {
  return (
    <section id="tentang" className="flex flex-col gap-8 py-12">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-end">
        <div>
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-text-muted">
            Prinsip &amp; Fondasi
          </span>
          <h2 className="text-2xl font-semibold text-text">
            Filosofi Perancangan
          </h2>
        </div>
        <p className="max-w-sm font-mono text-[13px] text-text-muted">
          Kerangka berpikir yang memandu setiap keputusan visual, struktural, dan
          teknis.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {philosophy.map((item) => (
          <div
            key={item.number}
            className="flex flex-col justify-between gap-6 rounded-2xl bg-surface p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex flex-col gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-container text-text">
                <span className="font-mono text-lg font-semibold">
                  {item.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="text-sm text-on-surface-variant">
                {item.description}
              </p>
            </div>
            <div className="flex items-center gap-1 pt-4 font-mono text-xs text-text-muted">
              <span>{item.tags[0]}</span>
              <span>•</span>
              <span>{item.tags[1]}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
