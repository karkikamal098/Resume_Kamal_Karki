import { ComponentType } from "react";
import { Briefcase, Code, FlaskConical, GraduationCap, Layers, LucideIcon, Rocket, User, Users } from "lucide-react";
import { EntryDetail, EntryTabs, Rich, SubHeading, bodyText } from "@/components/ResumeBlocks";
import {
  awards,
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

const About = () => (
  <div className="space-y-10">
    <p className="max-w-3xl text-[17px] leading-8 text-foreground/85">
      <Rich text={profile} />
    </p>

    <section>
      <SubHeading>Scholarships & Awards</SubHeading>
      <ul className="grid gap-4 md:grid-cols-3">
        {awards.map((a) => (
          <li key={a.title} className="rounded-lg border border-border bg-background p-5">
            <h3 className="text-[15px] font-semibold leading-snug text-foreground">{a.title}</h3>
            <p className="mt-2 text-sm leading-6 text-foreground/80">
              <Rich text={a.detail} />
            </p>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

// Only two short entries, so both are shown side by side.
const Education = () => (
  <div className="grid gap-4 lg:grid-cols-[3fr_2fr]">
    {education.map((e) => (
      <div key={e.org} className="rounded-lg border border-border bg-background p-6">
        <EntryDetail entry={e} />
      </div>
    ))}
  </div>
);

const Skills = () => (
  <div className="space-y-10">
    <dl className="grid gap-x-10 gap-y-6 md:grid-cols-2">
      {skills.map((s) => (
        <div key={s.group}>
          <dt className="text-[15px] font-semibold text-foreground">{s.group}</dt>
          <dd className={`mt-1 ${bodyText}`}>{s.items.join(", ")}</dd>
        </div>
      ))}
    </dl>

    <section>
      <SubHeading>Selected Training & Achievements</SubHeading>
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
    </section>
  </div>
);

const tab = (entries: typeof experience) => () => <EntryTabs entries={entries} />;

type SitePage = { path: string; label: string; heading: string; title: string; icon: LucideIcon; page: ComponentType };

// Tabs in menu order, following the CV. A new path also needs adding to scripts/spa-fallback.mjs.
export const sitePages: SitePage[] = [
  { path: "/", label: "About", heading: "About", title: "Kamal Karki – Aerospace Engineer", icon: User, page: About },
  { path: "/education", label: "Education", heading: "Education", title: "Education – Kamal Karki", icon: GraduationCap, page: Education },
  { path: "/open-source", label: "Open Source", heading: "Open-Source Contributions", title: "Open Source – Kamal Karki", icon: Code, page: tab(openSource) },
  { path: "/projects", label: "Projects", heading: "Selected Research & Engineering Projects", title: "Projects – Kamal Karki", icon: FlaskConical, page: tab(projects) },
  { path: "/experience", label: "Experience", heading: "Engineering Experience", title: "Experience – Kamal Karki", icon: Briefcase, page: tab(experience) },
  { path: "/ventures", label: "Ventures", heading: "Entrepreneurship & Technology Initiatives", title: "Ventures – Kamal Karki", icon: Rocket, page: tab(entrepreneurship) },
  { path: "/leadership", label: "Leadership", heading: "Leadership", title: "Leadership – Kamal Karki", icon: Users, page: tab(leadership) },
  { path: "/skills", label: "Skills", heading: "Technical Skills", title: "Skills – Kamal Karki", icon: Layers, page: Skills },
];
