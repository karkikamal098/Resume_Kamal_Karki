import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { EntryCard, Rich, Section } from "@/components/ResumeBlocks";
import {
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

const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Open Source", href: "#open-source" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Skills", href: "#skills" },
];

const EntryList = ({ entries }: { entries: typeof experience }) => (
  <div className="space-y-6">
    {entries.map((e) => (
      <EntryCard key={e.org + e.title} entry={e} />
    ))}
  </div>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-semibold text-foreground mb-2">{contact.name}</h1>
          <p className="text-lg text-muted-foreground">Aerospace Engineer · Airbus</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mt-6">
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

          <div className="flex flex-wrap gap-4 mt-4">
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

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm mt-8 pt-4 border-t border-border">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-muted-foreground hover:text-foreground">
                {n.label}
              </a>
            ))}
            <Link to="/robotics" className="text-accent hover:underline">
              Robotics
            </Link>
            <Link to="/maps" className="text-accent hover:underline">
              MAPS
            </Link>
          </nav>
        </header>

        <Section id="profile" title="Profile">
          <Card>
            <CardContent className="p-6">
              <p className="text-foreground leading-relaxed">
                <Rich text={profile} />
              </p>
            </CardContent>
          </Card>
        </Section>

        <Section id="education" title="Education">
          <EntryList entries={education} />
        </Section>

        <Section id="experience" title="Research & Engineering Experience">
          <EntryList entries={experience} />
        </Section>

        <Section id="open-source" title="Open-Source Contributions">
          <EntryList entries={openSource} />
        </Section>

        <Section id="projects" title="Selected Research & Technical Projects">
          <EntryList entries={projects} />
        </Section>

        <Section id="entrepreneurship" title="Entrepreneurship & Technology Initiatives">
          <EntryList entries={entrepreneurship} />
        </Section>

        <Section id="leadership" title="Leadership & Engineering Activities">
          <EntryList entries={leadership} />
        </Section>

        <Section id="skills" title="Technical Skills">
          <Card>
            <CardContent className="p-6 space-y-4">
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
            <CardContent className="p-6">
              <ul className="space-y-3">
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
                <CardContent className="p-6">
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

        <Separator className="my-8" />

        <footer className="text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Kamal Karki. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
