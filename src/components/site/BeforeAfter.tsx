import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

import afterImg from "@/assets/jenx-after.jpg";
import beforeImg from "@/assets/jenx-before.jpg";
import { Reveal } from "./Reveal";

export function BeforeAfter() {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(50);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.buttons === 0 && e.pointerType === "mouse") return;
    setFromClientX(e.clientX);
  };

  return (
    <section id="before-after" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow rule-red mb-6">Before → After</p>
          <h2 className="text-[clamp(2rem,7vw,4.5rem)] text-foreground uppercase">
            Drag to see the difference
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Pull the handle across the image to compare the state of the work before and
            after.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div
            ref={frameRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            className="relative aspect-[4/5] w-full cursor-ew-resize touch-none overflow-hidden select-none sm:aspect-[16/9]"
          >
            <img
              src={afterImg}
              alt="Plumbing installation after the work was completed"
              loading="lazy"
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${pos}%` }}
              aria-hidden
            >
              <img
                src={beforeImg}
                alt=""
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover"
                style={{ width: frameRef.current?.clientWidth ?? "100%", maxWidth: "none" }}
              />
            </div>

            <span className="pointer-events-none absolute top-4 left-4 bg-charcoal/80 px-3 py-1.5 text-[0.6rem] tracking-[0.25em] text-foreground uppercase">
              Before
            </span>
            <span className="pointer-events-none absolute top-4 right-4 bg-primary px-3 py-1.5 text-[0.6rem] tracking-[0.25em] text-primary-foreground uppercase">
              After
            </span>

            <div
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary shadow-lg">
                <MoveHorizontal className="h-5 w-5 text-primary-foreground" />
              </span>
            </div>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label="Before and after comparison position"
            className="mt-6 w-full accent-[var(--brand-red)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
