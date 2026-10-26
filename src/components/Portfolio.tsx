import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { EntryCard, Rich, Section } from "@/components/ResumeBlocks";
import { cn } from "@/lib/utils";
import {
  awards,
  contact,
  education,
  entrepreneurship,
  experience,
  leadership,
  openSource,
  profile,
  projects,
  skills,
  training,
} from "@/data/resume";

const EntryList = ({ entries }: { entries: typeof experience }) => (
  <div className="space-y-3">
    {entries.map((e) => (
      <EntryCard key={e.org + e.title} entry={e} />
    ))}
  </div>
);

// Menu entries; each id must match a <Section id> below.
const navItems = [
  { id: "profile", label: "Profile" },
  { id: "education", label: "Education" },
  { id: "awards", label: "Awards" },
  { id: "open-source", label: "Open Source" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "entrepreneurship", label: "Entrepreneurship" },
  { id: "leadership", label: "Leadership" },
  { id: "skills", label: "Skills" },
  { id: "training", label: "Training" },
];

// Sticky menu that jumps to a section and highlights the one being read.
const SectionNav = () => {
  const [active, setActive] = useState(navItems[0].id);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      let current = navItems[0].id;
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 80) current = id;
      }
      // The last sections are short and may never reach the top, so the page bottom selects the last one.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = navItems[navItems.length - 1].id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On narrow screens the menu scrolls sideways; bring the active item into view only when it is off-screen.
  useEffect(() => {
    const list = listRef.current;
    const item = list?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!list || !item) return;
    const listBox = list.getBoundingClientRect();
    const itemBox = item.getBoundingClientRect();
    if (itemBox.left < listBox.left || itemBox.right > listBox.right) {
      list.scrollBy({ left: itemBox.left - listBox.left - 16, behavior: "smooth" });
    }
  }, [active]);

  return (
    <nav aria-label="Sections" className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div
        ref={listRef}
        className="no-scrollbar max-w-6xl mx-auto px-2 sm:px-4 flex [justify-content:safe_center] overflow-x-auto"
      >
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            data-id={id}
            aria-current={active === id ? "true" : undefined}
            className={cn(
              "relative shrink-0 whitespace-nowrap px-3 py-3 text-sm transition-colors",
              "after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:rounded-full after:transition-colors",
              active === id
                ? "text-foreground after:bg-accent"
                : "text-muted-foreground after:bg-transparent hover:text-foreground",
            )}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-4xl font-semibold text-foreground mb-2">{contact.name}</h1>
          <p className="text-lg text-muted-foreground">Aerospace Engineer · Airbus</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mt-4">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-foreground">
              <Mail className="w-4 h-4" />
              <span className="break-all">{contact.email}</span>
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-foreground">
              <Phone className="w-4 h-4" />
              <span>{contact.phone}</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{contact.location}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-3">
            <Button variant="outline" size="sm" asChild>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            {/* Not in the CV – hidden for now (re-add Github to the lucide-react import).
            <Button variant="outline" size="sm" asChild>
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            */}
          </div>
        </header>
      </div>

      <SectionNav />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-8">
        <Section id="profile" title="Profile">
          <Card>
            <CardContent className="p-4 sm:p-5">
              <p className="text-foreground leading-relaxed">
                <Rich text={profile} />
              </p>
            </CardContent>
          </Card>
        </Section>

        <Section id="education" title="Education">
          <EntryList entries={education} />
        </Section>

        <Section id="awards" title="Scholarships & Awards">
          <Card>
            <CardContent className="p-4 sm:p-5">
              <ul className="list-disc pl-5 space-y-1.5 text-foreground">
                {awards.map((a) => (
                  <li key={a.title}>
                    <span className="font-semibold">{a.title}</span>, <Rich text={a.detail} />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Section>

        <Section id="open-source" title="Open-Source Contributions">
          <EntryList entries={openSource} />
        </Section>

        <Section id="projects" title="Selected Research & Engineering Projects">
          <EntryList entries={projects} />
        </Section>

        <Section id="experience" title="Engineering Experience">
          <EntryList entries={experience} />
        </Section>

        <Section id="entrepreneurship" title="Entrepreneurship & Technology Initiatives">
          <EntryList entries={entrepreneurship} />
        </Section>

        <Section id="leadership" title="Leadership">
          <EntryList entries={leadership} />
        </Section>

        <Section id="skills" title="Technical Skills">
          <Card>
            <CardContent className="p-4 sm:p-5 space-y-3">
              {skills.map((s) => (
                <div key={s.group}>
                  <h3 className="text-sm font-medium text-foreground mb-2">{s.group}</h3>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span key={item} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </Section>

        <Section id="training" title="Selected Training & Achievements">
          <Card>
            <CardContent className="p-4 sm:p-5">
              <ul className="space-y-2">
                {training.map((t) => (
                  <li key={t.title} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-foreground">
                      <span className="font-semibold">{t.title}</span> – {t.detail}
                    </span>
                    {t.date && <span className="text-sm text-muted-foreground shrink-0">{t.date}</span>}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Section>

        {/* Not in the CV – hidden for now (re-enable `articles` in resume.ts and ExternalLink in the imports).
        <Section id="articles" title="Articles & Writing">
          <div className="space-y-4">
            {articles.map((a) => (
              <Card key={a.href}>
                <CardContent className="p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-foreground mb-2">{a.title}</h3>
                      <p className="text-muted-foreground mb-3">{a.summary}</p>
                      <span className="text-sm text-muted-foreground">{a.meta}</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={a.href} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read Article
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
        */}

        <Separator className="my-6" />

        <footer className="text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Kamal Karki. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
