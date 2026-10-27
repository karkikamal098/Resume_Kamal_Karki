import { Fragment, ReactNode } from "react";
import { Link } from "react-router-dom";
import * as TabsPrimitive from "@radix-ui/react-tabs";
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

// Body copy is a shade lighter than headings so the bold phrases stand out, as in the CV.
export const bodyText = "text-[15px] leading-7 text-foreground/85";

export const BulletList = ({ children }: { children: ReactNode }) => (
  <ul className={`list-disc pl-5 space-y-1.5 marker:text-muted-foreground/60 ${bodyText}`}>{children}</ul>
);

export const SubHeading = ({ children }: { children: ReactNode }) => (
  <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand">{children}</h2>
);

// All photos in one sideways-scrolling row.
export const GalleryStrip = ({ slug }: { slug: GallerySlug }) => (
  <Link
    to={`/${slug}`}
    className="no-scrollbar flex gap-2 mt-5 overflow-x-auto snap-x group"
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

const heading = (e: Entry) => e.org ?? e.title;
const subline = (e: Entry) => (e.org ? e.title : e.tags?.join(", "));

// Everything about one entry: heading, role, dates, grade boxes, bullets, photos and links.
export const EntryDetail = ({ entry }: { entry: Entry }) => (
  <article className="min-w-0">
    <h3 className="text-xl font-semibold leading-snug tracking-tight text-foreground">
      {entry.orgHref ? (
        <a href={entry.orgHref} target="_blank" rel="noopener noreferrer" className="hover:text-brand hover:underline underline-offset-4">
          {heading(entry)}
        </a>
      ) : (
        heading(entry)
      )}
    </h3>
    {subline(entry) && <p className="mt-0.5 italic text-muted-foreground">{subline(entry)}</p>}
    <p className="mt-1 text-sm tabular-nums text-muted-foreground">
      {entry.period}
      {entry.location && <> · {entry.location}</>}
    </p>

    {entry.stats && (
      <dl className={`grid gap-2 mt-5 ${entry.stats.length > 1 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-[max-content]"}`}>
        {entry.stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-background px-4 py-3">
            <dt className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{s.label}</dt>
            <dd className="mt-0.5 whitespace-nowrap text-lg font-semibold tabular-nums text-foreground">{s.value}</dd>
            {s.note && <dd className="text-xs text-muted-foreground">{s.note}</dd>}
          </div>
        ))}
      </dl>
    )}

    {entry.bullets.length > 0 && (
      <div className="mt-4">
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
      <div className="flex flex-wrap gap-2 mt-5">
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

// A list of entries on the left (a row of chips on phones); the selected one is shown in full beside it.
export const EntryTabs = ({ entries }: { entries: Entry[] }) => (
  <TabsPrimitive.Root defaultValue="0" orientation="vertical" className="flex flex-col lg:flex-row gap-6 lg:gap-10">
    <TabsPrimitive.List
      aria-label="Entries"
      className="no-scrollbar -mx-5 px-5 flex gap-2 overflow-x-auto sm:mx-0 sm:px-0 lg:w-72 lg:shrink-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:border-r lg:border-border lg:pr-5"
    >
      {entries.map((e, i) => (
        <TabsPrimitive.Trigger
          key={e.org + e.title}
          value={String(i)}
          className="shrink-0 max-w-[15rem] rounded-lg border border-border px-3 py-2.5 text-left transition-colors hover:bg-secondary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=active]:border-brand data-[state=active]:bg-secondary lg:max-w-none lg:rounded-none lg:rounded-r-lg lg:border-0 lg:border-l-2 lg:border-transparent lg:pl-4 lg:data-[state=active]:border-brand"
        >
          <span className="block text-sm font-semibold leading-snug text-foreground">{e.short ?? heading(e)}</span>
          {e.org && <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">{e.title}</span>}
          <span className="mt-0.5 hidden lg:block text-xs tabular-nums text-muted-foreground">{e.period}</span>
        </TabsPrimitive.Trigger>
      ))}
    </TabsPrimitive.List>

    {entries.map((e, i) => (
      <TabsPrimitive.Content key={e.org + e.title} value={String(i)} className="flex-1 min-w-0 focus-visible:outline-none">
        <EntryDetail entry={e} />
      </TabsPrimitive.Content>
    ))}
  </TabsPrimitive.Root>
);
