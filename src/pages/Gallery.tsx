import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Rich } from "@/components/ResumeBlocks";
import { GallerySlug, galleries } from "@/data/resume";

const Gallery = ({ slug }: { slug: GallerySlug }) => {
  const g = galleries[slug];

  useEffect(() => {
    document.title = `${g.title} – Kamal Karki`;
    window.scrollTo(0, 0);
    return () => {
      document.title = "Kamal Karki – Aerospace Engineer";
    };
  }, [g.title]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <Button variant="ghost" size="sm" asChild className="-ml-3 mb-6">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to portfolio
          </Link>
        </Button>

        <header className="mb-10">
          <h1 className="text-4xl font-semibold text-foreground mb-2">{g.title}</h1>
          <p className="text-lg text-muted-foreground">{g.subtitle}</p>
        </header>

        <Card className="mb-10">
          <CardContent className="p-6">
            <ul className="list-disc pl-5 space-y-2 text-foreground">
              {g.highlights.map((h, i) => (
                <li key={i}>
                  <Rich text={h} />
                </li>
              ))}
            </ul>
            {g.links?.map((l) => (
              <Button key={l.href} variant="outline" size="sm" asChild className="mt-4 mr-2">
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {l.label}
                </a>
              </Button>
            ))}
          </CardContent>
        </Card>

        <section aria-label="Photos" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {g.photos.map((p, i) => (
            <figure key={p.src} className={i === 0 ? "md:col-span-2" : undefined}>
              <a href={p.src} target="_blank" rel="noopener noreferrer" title="Open full size">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="w-full aspect-[3/2] object-cover rounded-lg border border-border hover:opacity-95 transition-opacity"
                />
              </a>
              <figcaption className="text-sm text-muted-foreground mt-2">{p.caption}</figcaption>
            </figure>
          ))}
        </section>

        <Separator className="my-8" />

        <footer className="text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Kamal Karki. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Gallery;
