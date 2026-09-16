import { MapPin } from "lucide-react";

import aboutImg from "@/assets/jenx-about.jpg";
import { BRAND } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img
                src={aboutImg}
                alt="Jenx plumber at work in a Cardiff home"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
              />
            </div>
            <div className="mt-4 inline-flex items-center gap-2 border border-border px-4 py-3 lg:absolute lg:-right-6 lg:bottom-8 lg:mt-0 lg:bg-charcoal">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-xs tracking-[0.2em] text-foreground uppercase">
                {BRAND.location}
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow rule-red mb-6">About + Service area</p>
              <h2 className="text-[clamp(2rem,7vw,4.5rem)] text-foreground uppercase">
                Plumb.
                <span className="text-primary"> Life.</span> Play.
              </h2>
            </Reveal>
            <Reveal delay={120} className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                {BRAND.name} is a plumbing service based in {BRAND.location}. The approach
                is simple: treat every home like it matters, do the work properly, and
                leave things better than they were found.
              </p>
              <p>
                Plumb-Life-Play is the balance behind the work — solid plumbing so life at
                home keeps running, and time left over for the things that matter.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${BRAND.email}`}
                className="bg-primary px-6 py-3.5 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
              >
                Email {BRAND.name}
              </a>
              <a
                href={BRAND.messenger}
                target="_blank"
                rel="noreferrer noopener"
                className="border border-border px-6 py-3.5 text-xs font-semibold tracking-[0.2em] text-foreground uppercase transition-colors hover:border-primary"
              >
                Messenger
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
