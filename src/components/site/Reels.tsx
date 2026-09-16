import { Play } from "lucide-react";

import { Reveal } from "./Reveal";

const REELS = [
  { id: "reel-1", label: "Reel 01" },
  { id: "reel-2", label: "Reel 02" },
  { id: "reel-3", label: "Reel 03" },
];

export function Reels() {
  return (
    <section id="reels" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow rule-red mb-6">Facebook Reels</p>
          <h2 className="text-[clamp(2rem,7vw,4.5rem)] text-foreground uppercase">
            Work in motion
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Reels will be added here. Each slot below is ready for a Facebook Reel embed.
          </p>
        </Reveal>
      </div>

      <Reveal className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:gap-6 sm:px-8 lg:mx-auto lg:max-w-7xl lg:overflow-visible">
        {REELS.map((r) => (
          <figure
            key={r.id}
            data-reel-slot={r.id}
            className="group relative aspect-[9/16] w-[78vw] max-w-[320px] shrink-0 snap-center overflow-hidden border border-border bg-card lg:w-full lg:max-w-none"
          >
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08),transparent_60%)]"
              aria-hidden
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary transition-transform duration-500 group-hover:scale-110">
                <Play className="h-6 w-6 translate-x-0.5 text-primary-foreground" fill="currentColor" />
              </span>
              <figcaption className="text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
                {r.label} — coming soon
              </figcaption>
            </div>
            <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
          </figure>
        ))}
      </Reveal>
      <p className="mx-auto mt-4 max-w-7xl px-5 text-xs text-muted-foreground sm:px-8 lg:hidden">
        Swipe to browse
      </p>
    </section>
  );
}
