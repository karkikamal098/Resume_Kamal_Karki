import { ComponentType } from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EntryList, Rich, Section, bodyText } from "@/components/ResumeBlocks";
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

const PageTitle = ({ title, intro }: { title: string; intro: string }) => (
  <header className="pt-10 sm:pt-14 pb-8">
    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-brand">{title}</h1>
    <p className="mt-2 max-w-3xl text-muted-foreground">{intro}</p>
  </header>
);

const About = () => (
  <>
    <header className="pt-10 sm:pt-16 pb-10">
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-brand">{contact.name}</h1>
      <p className="mt-2 text-lg text-muted-foreground">Aerospace Engineer · Airbus</p>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-foreground">
          <Mail className="w-4 h-4" />
          <span className="break-all">{contact.email}</span>
        </a>
        <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-foreground">
          <Phone className="w-4 h-4" />
          <span>{contact.phone}</span>
        </a>
        <span className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{contact.location}</span>
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
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

    <Section id="profile" title="Profile">
      <p className={`max-w-4xl ${bodyText}`}>
        <Rich text={profile} />
      </p>
    </Section>

    <Section id="education" title="Education">
      <EntryList entries={education} />
    </Section>

    <Section id="awards" title="Scholarships & Awards">
      <ul className="grid gap-x-12 gap-y-5 md:grid-cols-3">
        {awards.map((a) => (
          <li key={a.title}>
            <h3 className="text-[15px] font-semibold leading-snug text-foreground">{a.title}</h3>
            <p className={`mt-1 ${bodyText}`}>
              <Rich text={a.detail} />
            </p>
          </li>
        ))}
      </ul>
    </Section>
  </>
);

const Research = () => (
  <>
    <PageTitle
      title="Research & Projects"
      intro="Open-source contributions to robotics and scientific-computing libraries, and selected research and engineering projects."
    />
    <Section id="open-source" title="Open-Source Contributions">
      <EntryList entries={openSource} />
    </Section>
    <Section id="projects" title="Selected Research & Engineering Projects">
      <EntryList entries={projects} />
    </Section>
  </>
);

const Experience = () => (
  <>
    <PageTitle title="Experience" intro="Industry roles and internships in aerospace design, aircraft systems and software, most recent first." />
    <Section id="experience" title="Engineering Experience">
      <EntryList entries={experience} />
    </Section>
  </>
);

const Leadership = () => (
  <>
    <PageTitle title="Leadership & Ventures" intro="Start-ups I co-founded and the student and social organizations I led." />
    <Section id="entrepreneurship" title="Entrepreneurship & Technology Initiatives">
      <EntryList entries={entrepreneurship} />
    </Section>
    <Section id="leadership" title="Leadership">
      <EntryList entries={leadership} />
    </Section>
  </>
);

const Skills = () => (
  <>
    <PageTitle title="Skills & Training" intro="Technical skills across robotics, mechanical design, software and aerospace systems." />
    <Section id="skills" title="Technical Skills">
      <dl className="grid gap-x-12 gap-y-5 md:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group}>
            <dt className="text-[15px] font-semibold text-foreground">{s.group}</dt>
            <dd className={bodyText}>{s.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
    <Section id="training" title="Selected Training & Achievements">
      <ul className="space-y-2">
        {training.map((t) => (
          <li key={t.title} className="flex flex-col sm:flex-row sm:justify-between gap-x-6">
            <span className={bodyText}>
              <strong className="font-semibold text-foreground">{t.title}</strong> – {t.detail}
            </span>
            {t.date && <span className="shrink-0 text-sm tabular-nums text-muted-foreground">{t.date}</span>}
          </li>
        ))}
      </ul>
    </Section>
  </>
);

// Site pages in menu order. A new path also needs adding to scripts/spa-fallback.mjs.
export const sitePages: { path: string; label: string; title: string; page: ComponentType }[] = [
  { path: "/", label: "About", title: "Kamal Karki – Aerospace Engineer", page: About },
  { path: "/research", label: "Research", title: "Research & Projects – Kamal Karki", page: Research },
  { path: "/experience", label: "Experience", title: "Experience – Kamal Karki", page: Experience },
  { path: "/leadership", label: "Leadership", title: "Leadership & Ventures – Kamal Karki", page: Leadership },
  { path: "/skills", label: "Skills", title: "Skills & Training – Kamal Karki", page: Skills },
];
