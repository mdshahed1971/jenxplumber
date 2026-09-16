import { BRAND, SECTIONS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="h-8 w-1.5 shrink-0 bg-primary" aria-hidden />
              <span className="min-w-0">
                <span className="block font-display text-3xl tracking-wide text-foreground">
                  {BRAND.name}
                </span>
                <span className="block text-[0.6rem] tracking-[0.3em] text-primary uppercase">
                  {BRAND.tagline}
                </span>
              </span>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">{BRAND.location}</p>
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-2 block text-sm break-all text-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              {BRAND.email}
            </a>
            <a
              href={BRAND.messenger}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 block text-sm text-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              Messenger
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow mb-5">Sections</p>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {BRAND.name}
          </span>
          <span className="tracking-[0.25em] uppercase">{BRAND.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
