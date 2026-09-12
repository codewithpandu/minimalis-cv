import { Award, GraduationCap, ShieldCheck } from "lucide-react";
import { education } from "@/lib/data";

const icons = {
  school: GraduationCap,
  verified: ShieldCheck,
  premium: Award,
};

export function Education() {
  return (
    <section className="flex flex-col gap-8 py-12">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-end">
        <div>
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-text-muted">
            Kualifikasi Akademis
          </span>
          <h2 className="text-2xl font-semibold text-text">
            Pendidikan &amp; Sertifikasi
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {education.map((item) => {
          const Icon = icons[item.icon];
          return (
            <div
              key={item.degree}
              className="flex flex-col justify-between gap-4 rounded-2xl bg-surface p-8 shadow-sm"
            >
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[11px] text-text-muted">
                  {item.period}
                </span>
                <h3 className="text-lg font-semibold text-text">
                  {item.degree}
                </h3>
                <p className="text-sm text-on-surface-variant">
                  {item.institution}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="rounded bg-surface-container px-2 py-0.5 font-mono text-[11px] font-semibold text-text">
                  {item.badge}
                </span>
                <Icon className="h-[18px] w-[18px] text-text-muted" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
