export type GallerySlug = "robotics" | "maps" | "saakshar-nepal";

export type Entry = {
  title: string;
  org?: string;
  orgHref?: string;
  period: string;
  location?: string;
  bullets: string[];
  tags?: string[];
  links?: Link[];
  /** Show this gallery's photo strip under the entry, linking to its page. */
  gallery?: GallerySlug;
};

export const contact = {
  name: "Kamal Karki",
  location: "Morang, Nepal",
  phone: "+977 9804023531",
  email: "077bas016.kamal@pcampus.edu.np",
  linkedin: "https://www.linkedin.com/in/kamal-karki-16a926213",
  github: "https://github.com/karkikamal098",
};

export const profile =
  "Aerospace engineer at **Airbus** working on **A320 cabin design**, with experience in **engineering automation, machine learning, and robotics**. Built ML-assisted tools for aircraft-system analysis and design reuse that improved analysis efficiency by **23%** and are estimated to save **3,500+ engineering hours annually**. Open-source contributor to the **Robotics Toolbox for Python** (robot kinematics, dynamics and simulation) and **PyBaMM** (physics-based battery modelling).";

export const education: Entry[] = [
  {
    title: "Bachelor of Engineering in Aerospace Engineering – Full Scholarship",
    org: "Pulchowk Engineering Campus, Tribhuvan University",
    period: "May 2021 – Apr 2025",
    location: "Lalitpur, Nepal",
    bullets: [
      "**Overall:** 74.1% · **Final semester:** 84% · **National Engineering Entrance Rank:** 419 / 18,000+ (top 2.3%)",
      "**Relevant coursework:** Control Systems, Engineering Dynamics, Theory of Machines, Numerical Methods, Finite Element Method, Continuum Mechanics, Instrumentation & Sensors, Fault Monitoring & Diagnosis, Unmanned Air Vehicle Synthesis, Computer Aided Design & Manufacturing",
    ],
  },
  {
    title: "Higher Secondary Education (+2), Science",
    org: "Kantipur Higher Secondary School",
    period: "2016 – 2018",
    location: "Biratnagar, Nepal",
    bullets: [
      "**GPA:** 3.79 / 4.00 · Awarded a **National Examinations Board (NEB) scholarship** for academic excellence.",
    ],
  },
];

export const experience: Entry[] = [
  {
    title: "Associate Engineer – Cabin Design",
    org: "Airbus India Private Limited",
    period: "Feb 2026 – Present",
    location: "India",
    bullets: [
      "Contributing to the **design and development of the Airbus Airspace cabin** for the next-generation **A320** family, including research on **improving the attachment of shell partitions**.",
      "Leading a **sub-team of two engineers** through feasibility studies, design, and drawings end-to-end to resolve manufacturing issues.",
      "Developed an **ML-based design-reuse system for aircraft customization**, using unsupervised **DBSCAN clustering** and priority-based ranking to retrieve and reuse prior designs, with an estimated saving of **3,500+ engineering hours annually**.",
    ],
  },
  {
    title: "Engineering Intern – Flight Warning Systems",
    org: "Airbus India Private Limited",
    period: "Aug 2025 – Jan 2026",
