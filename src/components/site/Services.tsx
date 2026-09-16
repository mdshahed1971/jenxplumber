import aboutImg from "@/assets/jenx-about.jpg";
import afterImg from "@/assets/jenx-after.jpg";
import heroImg from "@/assets/jenx-hero.jpg";
import processImg from "@/assets/jenx-process.jpg";
import beforeImg from "@/assets/jenx-before.jpg";
import servicesImg from "@/assets/jenx-services.jpg";
import { Reveal } from "./Reveal";

const SERVICES = [
  { title: "Leak Repair", copy: "Tracing and sealing leaks before damage spreads.", img: heroImg },
  { title: "Drain Cleaning", copy: "Clearing slow and blocked drains properly.", img: servicesImg },
  { title: "Water Heater", copy: "Hot water systems checked and restored.", img: processImg },
  { title: "Pipe Repair", copy: "Neat repairs and replacement pipework.", img: afterImg },
  { title: "Sewer & Drain", copy: "Deeper drainage issues investigated.", img: beforeImg },
  { title: "Emergency Plumbing", copy: "Urgent problems handled calmly.", img: aboutImg },
];

export function Services() {
  const cards = [...SERVICES, ...SERVICES];

  return (
    <section id="services" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow rule-red mb-6">Services</p>
            <h2 className="text-[clamp(2rem,7vw,4.5rem)] text-foreground uppercase">
              What we take care of
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Domestic plumbing work, handled end to end — from small repairs to full
            replacements.
          </p>
        </Reveal>
      </div>

      <Reveal className="edge-mask mt-14 w-full overflow-hidden">
        <div className="marquee-track flex w-max gap-4 sm:gap-6">
          {cards.map((s, i) => (
            <article
              key={`${s.title}-${i}`}
              className="group relative h-[340px] w-[240px] shrink-0 overflow-hidden sm:h-[420px] sm:w-[300px]"
            >
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="h-full w-full object-cover brightness-[0.65] transition duration-700 group-hover:scale-105 group-hover:brightness-100"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="mb-3 block h-0.5 w-8 bg-primary" aria-hidden />
                <h3 className="text-2xl text-foreground uppercase sm:text-3xl">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {s.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
