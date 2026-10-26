import { Fragment, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Entry, GallerySlug, galleries } from "@/data/resume";

// Renders **bold** and *italic* markers from the resume data.
export const Rich = ({ text }: { text: string }) => (
  <>
    {text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
      if (part.startsWith("**")) return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
      if (part.startsWith("*") && part.length > 1) return <em key={i}>{part.slice(1, -1)}</em>;
      return <Fragment key={i}>{part}</Fragment>;
    })}
  </>
);

// Body copy is a step lighter than headings so the bold phrases stand out, as in the CV.
export const bodyText = "text-[15px] leading-relaxed text-foreground/80";

export const BulletList = ({ children }: { children: ReactNode }) => (
  <ul className={`list-disc pl-5 space-y-1 marker:text-muted-foreground/60 ${bodyText}`}>{children}</ul>
);

export const Section = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <section id={id} className="mb-10 scroll-mt-16">
    <h2 className="mb-5 border-b border-border pb-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand">
      {title}
    </h2>
    {children}
  </section>
);

// All photos in one sideways-scrolling row, so long galleries don't add height to the page.
export const GalleryStrip = ({ slug }: { slug: GallerySlug }) => (
  <Link
    to={`/${slug}`}
    className="no-scrollbar flex gap-2 mt-4 overflow-x-auto snap-x group"
    aria-label={`Open ${galleries[slug].title} photos`}
  >
    {galleries[slug].photos.map((p) => (
      <img
        key={p.src}
        src={p.src}
        alt={p.alt}
        loading="lazy"
        style={p.position ? { objectPosition: p.position } : undefined}
        className="h-24 sm:h-28 aspect-[3/2] shrink-0 snap-start object-cover rounded-md group-hover:opacity-90 transition-opacity"
      />
    ))}
  </Link>
);

// One CV entry: heading and dates on the first line, role (or project tags) and location on the second.
export const EntryCard = ({ entry }: { entry: Entry }) => {
  const heading = entry.org ?? entry.title;
  const subline = entry.org ? entry.title : entry.tags?.join(", ");

  return (
    <article className="min-w-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-x-6">
        <h3 className="text-[17px] font-semibold leading-snug text-foreground">
          {entry.orgHref ? (
            <a href={entry.orgHref} target="_blank" rel="noopener noreferrer" className="hover:text-brand hover:underline underline-offset-4">
              {heading}
            </a>
          ) : (
            heading
          )}
        </h3>
        <span className="shrink-0 text-sm tabular-nums text-muted-foreground">{entry.period}</span>
      </div>
      {(subline || entry.location) && (
        <div className="flex flex-col sm:flex-row sm:justify-between gap-x-6 text-sm text-muted-foreground">
          <span className="italic">{subline}</span>
          {entry.location && <span className="shrink-0">{entry.location}</span>}
        </div>
      )}

      {entry.stats && (
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
          {entry.stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-border px-4 py-3">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{s.label}</dt>
              <dd className="mt-0.5 text-lg font-semibold tabular-nums text-foreground">{s.value}</dd>
              {s.note && <dd className="text-xs text-muted-foreground">{s.note}</dd>}
            </div>
          ))}
        </dl>
      )}

      {entry.bullets.length > 0 && (
        <div className="mt-3">
          <BulletList>
            {entry.bullets.map((b, i) => (
              <li key={i}>
                <Rich text={b} />
              </li>
            ))}
          </BulletList>
        </div>
      )}

      {entry.gallery && <GalleryStrip slug={entry.gallery} />}

      {entry.links && (
        <div className="flex flex-wrap gap-2 mt-4">
          {entry.links.map((l) => (
            <Button key={l.href} variant="outline" size="sm" asChild>
              {l.internal ? (
                <Link to={l.href}>
                  {l.label}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              ) : (
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {l.label}
                </a>
              )}
            </Button>
          ))}
        </div>
      )}
    </article>
  );
};

// Two entries per row on wide screens keeps every bullet while roughly halving the page length.
export const EntryList = ({ entries }: { entries: Entry[] }) => (
  <div className="grid gap-x-12 gap-y-9 lg:grid-cols-2">
    {entries.map((e) => (
      <EntryCard key={e.org + e.title} entry={e} />
    ))}
  </div>
);

export const SectionLink =({ to, label }: { to: string; label: string }) => (
  <Link to={to} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
    {label}
    <ArrowRight className="ml-1 h-4 w-4" />
  </Link>
);
