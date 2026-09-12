import { metrics } from "@/lib/data";

export function Metrics() {
  return (
    <section className="py-8">
      <div className="grid grid-cols-2 gap-4 rounded-2xl bg-surface p-6 shadow-sm md:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-1">
            <span className="text-5xl font-bold leading-none text-text">
              {metric.value}
            </span>
            <span className="font-mono text-[11px] font-medium uppercase text-text-muted">
              {metric.label}
            </span>
            <p className="font-mono text-[11px] text-text-muted">{metric.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
