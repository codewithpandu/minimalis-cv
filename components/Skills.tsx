import { Layers, Terminal, Wrench } from "lucide-react";
import { skillGroups } from "@/lib/data";

const icons = {
  layers: Layers,
  handyman: Wrench,
  terminal: Terminal,
};

export function Skills() {
  return (
    <section id="keahlian" className="flex flex-col gap-8 py-12">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-end">
        <div>
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-text-muted">
            Kompetensi &amp; Perangkat
          </span>
          <h2 className="text-2xl font-semibold text-text">
            Keahlian &amp; Tech Stack
          </h2>
        </div>
        {/* <p className="font-mono text-[13px] text-text-muted">
          T-shaped skill profile
        </p> */}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon];
          return (
            <div
              key={group.title}
              className="flex flex-col gap-4 rounded-2xl bg-surface p-8 shadow-sm"
            >
              <div className="flex items-center gap-1">
                <Icon className="h-5 w-5 text-text" />
                <h3 className="text-lg font-semibold text-text">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-surface-container px-3 py-1.5 font-mono text-[11px] text-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
