import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { BRAND, SECTIONS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid ? "bg-charcoal/90 backdrop-blur-md border-b border-border" : "bg-transparent",
      )}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <a href="#hero" className="flex min-w-0 items-center gap-3">
          <span className="h-8 w-1.5 shrink-0 bg-primary" aria-hidden />
          <span className="min-w-0">
            <span className="block truncate font-display text-2xl leading-none tracking-wide text-foreground">
              {BRAND.name}
            </span>
            <span className="block truncate text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
              {BRAND.tagline}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {SECTIONS.slice(1, 7).map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {s.label}
            </a>
          ))}
          <a
            href={`mailto:${BRAND.email}`}
            className="bg-primary px-5 py-2.5 text-xs font-semibold tracking-[0.18em] text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 shrink-0 items-center justify-center border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="fixed inset-0 top-[68px] z-40 overflow-y-auto bg-charcoal px-5 pt-6 pb-12 lg:hidden">
          <ul className="space-y-1">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 font-display text-3xl tracking-wide text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <a
              href={`mailto:${BRAND.email}`}
              className="bg-primary px-5 py-4 text-center text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase"
            >
              Email us
            </a>
            <a
              href={BRAND.messenger}
              target="_blank"
              rel="noreferrer noopener"
              className="border border-border px-5 py-4 text-center text-xs font-semibold tracking-[0.2em] text-foreground uppercase"
            >
              Messenger
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
