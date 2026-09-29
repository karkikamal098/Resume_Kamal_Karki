import { Fragment, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Entry, GallerySlug, galleries } from "@/data/resume";

// Renders **bold** and *italic* markers from the resume data.
export const Rich = ({ text }: { text: string }) => (
  <>
    {text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
      if (part.startsWith("**")) return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
      if (part.startsWith("*") && part.length > 1) return <em key={i}>{part.slice(1, -1)}</em>;
      return <Fragment key={i}>{part}</Fragment>;
    })}
  </>
);

export const Section = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <section id={id} className="mb-12 scroll-mt-6">
    <h2 className="text-2xl font-medium text-foreground mb-6">{title}</h2>
    {children}
  </section>
);

export const GalleryStrip = ({ slug }: { slug: GallerySlug }) => (
  <Link to={`/${slug}`} className="grid grid-cols-3 gap-2 mt-4 group" aria-label={`Open ${galleries[slug].title} photos`}>
    {galleries[slug].photos.slice(0, 3).map((p) => (
      <img
        key={p.src}
        src={p.src}
        alt={p.alt}
        loading="lazy"
        className="aspect-[3/2] w-full object-cover rounded-md border border-border group-hover:opacity-90 transition-opacity"
      />
    ))}
  </Link>
);

export const EntryCard = ({ entry }: { entry: Entry }) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-3">
        <div>
          <h3 className="text-lg font-medium text-foreground">{entry.title}</h3>
          {entry.org && (
            <p className="text-accent font-medium">
              {entry.orgHref ? (
                <a href={entry.orgHref} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {entry.org}
                </a>
              ) : (
                entry.org
              )}
            </p>
          )}
        </div>
        <div className="text-sm text-muted-foreground sm:text-right shrink-0">
          <div>{entry.period}</div>
          {entry.location && <div>{entry.location}</div>}
        </div>
      </div>

      <ul className="list-disc pl-5 space-y-2 text-foreground">
        {entry.bullets.map((b, i) => (
          <li key={i}>
            <Rich text={b} />
          </li>
        ))}
      </ul>

      {entry.tags && (
        <div className="flex flex-wrap gap-2 mt-4">
          {entry.tags.map((t) => (
            <span key={t} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
              {t}
            </span>
          ))}
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
    </CardContent>
  </Card>
);
