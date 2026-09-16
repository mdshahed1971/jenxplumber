import { Droplets, Flame, ShieldCheck, Waves, Wrench } from "lucide-react";

import servicesImg from "@/assets/jenx-services.jpg";
import { Reveal } from "./Reveal";

const PROBLEMS = [
  { icon: Droplets, label: "Dripping taps & hidden leaks" },
  { icon: Waves, label: "Blocked, slow-draining pipes" },
  { icon: Flame, label: "No hot water or boiler trouble" },
  { icon: Wrench, label: "Burst, corroded or ageing pipework" },
];

const TRUST = [
  "Careful, tidy workmanship",
  "Clear explanations before work starts",
  "Respect for your home",
];

export function TrustProblems() {
  return (
    <section id="trust" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow rule-red mb-6">Trust + Problems</p>
          <h2 className="text-[clamp(2rem,7vw,4.5rem)] text-foreground uppercase">
            When plumbing goes wrong,
            <span className="text-primary"> the right hands matter</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src={servicesImg}
                alt="Plumbing work in progress on copper pipework"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/25" aria-hidden />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {TRUST.map((t) => (
                <div
                  key={t}
                  className="flex min-w-0 items-start gap-2 border-t border-border pt-4"
                >
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0 text-sm text-muted-foreground">{t}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="space-y-4">
            {PROBLEMS.map((p, i) => (
              <Reveal
                key={p.label}
                delay={i * 90}
                className="group flex items-center gap-4 border-l-2 border-border bg-card/40 px-5 py-6 transition-colors hover:border-primary"
              >
                <span className="font-display text-2xl text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p.icon className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                <span className="min-w-0 text-base text-foreground sm:text-lg">
                  {p.label}
                </span>
              </Reveal>
            ))}
            <Reveal delay={400} className="pt-2 text-sm leading-relaxed text-muted-foreground">
              Every job starts the same way: understand the problem properly, then fix it
              properly. No guesswork, no mess left behind.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
