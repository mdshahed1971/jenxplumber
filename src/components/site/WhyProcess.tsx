import { useEffect, useRef, useState } from "react";

import processImg from "@/assets/jenx-process.jpg";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    copy: "We listen to what's happening, when it started and what you've already tried.",
  },
  {
    n: "02",
    title: "Inspect",
    copy: "The system is checked properly so the real cause is found, not just the symptom.",
  },
  {
    n: "03",
    title: "Explain",
    copy: "You hear what needs doing and why, in plain language, before anything starts.",
  },
  {
    n: "04",
    title: "Solve",
    copy: "The work is carried out carefully and the space is left clean and tidy.",
  },
];

const WHY = [
  "Careful work over rushed work",
  "Straight answers, no jargon",
  "Tidy finish, every time",
];

export function WhyProcess() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = railRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height + window.innerHeight * 0.6;
      const passed = window.innerHeight * 0.8 - rect.top;
      setProgress(Math.min(1, Math.max(0, passed / total)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="process" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow rule-red mb-6">Why us + Process</p>
            <h2 className="text-[clamp(2rem,7vw,4.5rem)] text-foreground uppercase">
              A calm, ordered
              <span className="text-primary"> way of working</span>
            </h2>
          </div>
          <ul className="space-y-3">
            {WHY.map((w) => (
              <li key={w} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" aria-hidden />
                <span className="min-w-0">{w}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div ref={railRef} className="relative pl-10">
            <div className="absolute top-0 bottom-0 left-2 w-px bg-border" aria-hidden />
            <div
              className="absolute top-0 left-2 w-px origin-top bg-primary transition-[height] duration-300 ease-out"
              style={{ height: `${progress * 100}%` }}
              aria-hidden
            />
            <div className="space-y-12">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 80} className="relative">
                  <span
                    className="absolute top-2 -left-[2.1rem] h-2.5 w-2.5 rounded-full bg-primary"
                    aria-hidden
                  />
                  <p className="font-display text-sm tracking-[0.3em] text-primary">{s.n}</p>
                  <h3 className="mt-2 text-3xl text-foreground uppercase sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {s.copy}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="relative lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <img
                src={processImg}
                alt="Plumber working methodically on a pipe installation"
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ transform: `scale(${1.05 + progress * 0.06})`, transition: "transform 300ms ease-out" }}
              />
              <div className="absolute inset-0 bg-charcoal/30" aria-hidden />
              <div className="absolute bottom-0 left-0 bg-primary px-5 py-3 font-display text-xl tracking-wide text-primary-foreground uppercase">
                Plumb-Life-Play
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
