import { Mail, MessageCircle } from "lucide-react";

import heroImg from "@/assets/jenx-hero.jpg";
import { BRAND } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border">
      <img
        src={heroImg}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/85 to-charcoal" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <Reveal className="max-w-4xl">
          <p className="eyebrow rule-red mb-6">Get in touch</p>
          <h2 className="text-[clamp(2.25rem,9vw,6rem)] text-foreground uppercase">
            Need a plumbing
            <span className="text-primary"> solution?</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-lg">
            Send the details of the job and we'll take it from there.
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-10 grid gap-4 sm:max-w-2xl sm:grid-cols-2">
          <a
            href={`mailto:${BRAND.email}`}
            className="group flex items-center justify-between gap-4 bg-primary px-6 py-6 transition-transform hover:-translate-y-1"
          >
            <span className="min-w-0">
              <span className="block text-[0.6rem] tracking-[0.25em] text-primary-foreground/80 uppercase">
                Email
              </span>
              <span className="block truncate font-display text-xl tracking-wide text-primary-foreground">
                {BRAND.email}
              </span>
            </span>
            <Mail className="h-5 w-5 shrink-0 text-primary-foreground" />
          </a>
          <a
            href={BRAND.messenger}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center justify-between gap-4 border border-border bg-card/50 px-6 py-6 transition-transform hover:-translate-y-1 hover:border-primary"
          >
            <span className="min-w-0">
              <span className="block text-[0.6rem] tracking-[0.25em] text-muted-foreground uppercase">
                Messenger
              </span>
              <span className="block truncate font-display text-xl tracking-wide text-foreground">
                Chat with us
              </span>
            </span>
            <MessageCircle className="h-5 w-5 shrink-0 text-primary" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
