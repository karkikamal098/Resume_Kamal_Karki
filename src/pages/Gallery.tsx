import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BulletList, Rich } from "@/components/ResumeBlocks";
import { cn } from "@/lib/utils";
import { GallerySlug, galleries } from "@/data/resume";

// Photo page in the tabbed layout: the description on the left, a one-photo-at-a-time viewer on the right.
const Gallery = ({ slug }: { slug: GallerySlug }) => {
  const g = galleries[slug];
  const [index, setIndex] = useState(0);
  const photo = g.photos[index];
  const count = g.photos.length;
  const go = (step: number) => setIndex((i) => (i + step + count) % count);

  useEffect(() => {
    document.title = `${g.title} – Kamal Karki`;
    return () => {
      document.title = "Kamal Karki – Aerospace Engineer";
    };
  }, [g.title]);

  // Left/right arrow keys move between photos.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count]);

  return (
    <div className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-12">
      <div>
        <Link
          to={g.section.path}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline underline-offset-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {g.section.label}
        </Link>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-brand">{g.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{g.subtitle}</p>

        <div className="mt-6">
          <BulletList>
            {g.highlights.map((h, i) => (
              <li key={i}>
                <Rich text={h} />
              </li>
            ))}
          </BulletList>
        </div>

        {g.links && (
          <div className="mt-5 flex flex-wrap gap-2">
            {g.links.map((l) => (
              <Button key={l.href} variant="outline" size="sm" asChild>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {l.label}
                </a>
              </Button>
            ))}
          </div>
        )}
      </div>

      <figure aria-label="Photos" className="min-w-0">
        <div className="relative flex items-center justify-center overflow-hidden rounded-lg bg-neutral-900 aspect-[4/3] lg:aspect-auto lg:h-[58vh]">
          <img key={photo.src} src={photo.src} alt={photo.alt} className="h-full w-full object-contain" />

          <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs tabular-nums text-white">
            {index + 1} / {count}
          </span>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-foreground shadow hover:bg-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-foreground shadow hover:bg-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <figcaption className="mt-3 flex items-start justify-between gap-4 text-sm text-muted-foreground">
          <span>{photo.caption}</span>
          <a
            href={photo.src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 hover:text-foreground"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            Full size
          </a>
        </figcaption>

        <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1">
          {g.photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className={cn(
                "shrink-0 overflow-hidden rounded-md ring-offset-2 ring-offset-background transition",
                i === index ? "ring-2 ring-brand" : "opacity-60 hover:opacity-100",
              )}
            >
              <img
                src={p.src}
                alt=""
                loading="lazy"
                style={p.position ? { objectPosition: p.position } : undefined}
                className="h-16 aspect-[3/2] object-cover"
              />
            </button>
          ))}
        </div>
      </figure>
    </div>
  );
};

export default Gallery;
