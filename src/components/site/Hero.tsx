import { ArrowRight, MessageCircle } from "lucide-react";

import heroPoster from "@/assets/jenx-hero.jpg";
import heroVideo from "@/assets/jenx-hero.mp4.asset.json";
import { BRAND } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo.url}
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />
      <div className="absolute inset-0 bg-charcoal/70" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/70"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pt-28 pb-20 sm:px-8 sm:pb-24">
        <p
          className="hero-rise eyebrow rule-red mb-5"
          style={{ animationDelay: "120ms" }}
        >
          {BRAND.location}
        </p>

        <h1
          className="hero-rise max-w-4xl text-[clamp(2.75rem,12vw,8rem)] leading-[0.88] text-foreground uppercase"
          style={{ animationDelay: "220ms" }}
        >
          Plumbing done
          <br />
          with <span className="text-primary">precision</span>
        </h1>

        <p
          className="hero-rise mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "340ms" }}
        >
          {BRAND.name} — careful, professional plumbing work across Cardiff. Clean
          installs, honest explanations, and craftsmanship you can see.
        </p>

        <div
          className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: "440ms" }}
        >
          <a
            href={`mailto:${BRAND.email}`}
            className="group inline-flex items-center justify-center gap-3 bg-primary px-7 py-4 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
          >
            Request a job
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={BRAND.messenger}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-3 border border-border bg-charcoal/40 px-7 py-4 text-xs font-semibold tracking-[0.2em] text-foreground uppercase backdrop-blur-sm transition-colors hover:border-primary"
          >
            <MessageCircle className="h-4 w-4" />
            Message on Messenger
          </a>
        </div>

        <div className="mt-14 hidden items-center gap-3 sm:flex">
          <span className="relative h-10 w-px bg-border">
            <span className="scroll-dot absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary" />
          </span>
          <span className="eyebrow">Scroll</span>
        </div>
      </div>
    </section>
  );
}
