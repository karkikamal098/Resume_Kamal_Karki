// Site content, kept in step with the CV. Text inside **double asterisks** renders bold.
// Recommit to trigger CI/deploy: 2026-10-19T17:30:00Z

export type Link = { label: string; href: string; internal?: boolean };

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
  phone: "+977 9768448066",
  email: "077bas016.kamal@pcampus.edu.np",
  linkedin: "https://www.linkedin.com/in/kamal-karki-16a926213",
  github: "https://github.com/karkikamal098",
};

export const profile =
  "Aerospace engineer at **Airbus** working on **A320 cabin design**, with experience in **engineering automation, machine learning, robotics, scientific computing, and data-driven materials research**.";

export const education: Entry[] = [
  {
    title: "Bachelor of Engineering in Aerospace Engineering – Full Scholarship",
    org: "Pulchowk Engineering Campus, Tribhuvan University",
    period: "May 2021 – Apr 2025",
    location: "Lalitpur, Nepal",
    bullets: [
      "**Overall:** 74.5% · **Final semester:** 84% · **National Engineering Entrance Rank:** 419 / 18,000+ (top 2.3%)",
      "**Relevant coursework:** Control Systems, Engineering Dynamics, Theory of Machine, Numerical Methods, Finite Element Method, Continuum Mechanics, Instrumentation & Sensors, Fault Monitoring",
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
      "Contributing to the **design and development of the Airspace cabin** for the next-generation **A320** family, including research on attachment and manufacturability.",
      "Leading a **sub-team of two engineers** through feasibility studies and root-cause analysis to resolve manufacturing issues.",
      "Developed an **ML-based design-reuse system** using DBSCAN clustering to retrieve and reuse prior designs, saving engineering hours.",
    ],
  },
  {
    title: "Engineering Intern – Flight Warning Systems",
    org: "Airbus India Private Limited",
    period: "Aug 2025 – Jan 2026",
    location: "India",
    bullets: [
      "Contributed to development and validation of A320/A321 Flight Warning System logic and prepared validation scenarios.",
      "Built a YOLOv5-based tool to convert legacy SAO logic-circuit diagrams into interactive web circuits to aid failure analysis.",
    ],
  },
];

const saaksharFacebook = "https://www.facebook.com/people/%E0%A4%B8%E0%A4%BE%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%B0-%E0%A4%A8%E0%A5%87%E0%A4%AA%E0%A4%BE%E0%A4%B2/100088403617028/";

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  /** Span the full grid width at the photo's own aspect ratio (the first photo always does). */
  wide?: boolean;
  /** CSS object-position for the 3:2 crop, e.g. "center 30%" to keep a face in a portrait shot. */
  position?: string;
};

export type Gallery = {
  title: string;
  subtitle: string;
  highlights: string[];
  links?: Link[];
  photos: Photo[];
};

// Photo pages at /<slug>. Photos live in public/images/<slug>. Edit captions here.
// A new slug also needs adding to GallerySlug above and to scripts/spa-fallback.mjs.
export const galleries: Record<GallerySlug, Gallery> = {
  robotics: {
    title: "Robotics Club, Pulchowk Campus",
    subtitle: "Robotics Engineer · Mar 2022 – Jan 2023 · Lalitpur, Nepal",
    highlights: [
      "Contributed to the university's **ABU Robocon 2022** team, designing Robot A's mechanical system, including a **dual-rotational mechanism**.",
      "Team secured **3rd place overall** and received the **Nagase Award** at ABU Robocon 2022 in New Delhi, India.",
    ],
    photos: [
      {
        src: "/images/robotics/team-with-robots.jpg",
        alt: "Robotics Club team posing on the practice field with two competition robots and rings",
        caption: "The Robotics Club team with two of our competition robots on the practice field, Pulchowk Campus.",
      },
      {
        src: "/images/robotics/robocon-2022-robot.jpg",
        alt: "Competition robot at ABU Robocon 2022 on the arena",
        caption: "Robot A during ABU Robocon 2022 competition runs.",
      },
      {
        src: "/images/robotics/robot-closeup.jpg",
        alt: "Close-up of a competition robot with omni wheels, twin rollers and on-board electronics",
        caption: "Close-up of the robot's launcher and electronics.",
      },
      {
        src: "/images/robotics/team-with-faculty.jpg",
        alt: "Team posing with faculty mentors",
        caption: "Our team with faculty mentors after a practice session.",
      },
      {
        src: "/images/robotics/club-group.png",
        alt: "Group photo of Robotics Club members in a campus hall",
        caption: "With fellow Robotics Club members, Pulchowk Campus.",
      },
    ],
  },
  maps: {
    title: "Maths and Physics Society (MAPS)",
    subtitle: "Pulchowk Campus · Vice President (Dec 2023 – Dec 2024) · Treasurer (Jul 2022 – Dec 2023)",
    highlights: [
      "Led strategic planning for society initiatives and organized the national-level **Math and Physics Olympiad and Integration Bee** with **400+ participants**.",
      "Raised **NPR 900K in sponsorship** from startups, companies, and organizations to fund the national-level Olympiad.",
    ],
    photos: [
      {
        src: "/images/maps/integration-bee-winners.jpg",
        alt: "Integration Bee 2023 winners holding certificates and trophies with the organizing team",
        caption: "Integration Bee 2023 winners with the MAPS organizing team.",
      },
      {
        src: "/images/maps/integration-bee-round.jpg",
        alt: "A contestant solving an integral on the whiteboard while a countdown timer runs on the projector",
        caption: "A contestant working an integral against the clock during the Integration Bee.",
      },
      {
        src: "/images/maps/integration-bee-dual-round.jpg",
        alt: "Contestants at the whiteboard during a timed head-to-head round",
        caption: "A timed head-to-head round.",
      },
      {
        src: "/images/maps/written-round.jpg",
        alt: "A full hall of participants writing a paper-based round",
        caption: "Participants sitting a written round.",
      },
      {
        src: "/images/maps/integration-bee-group.jpg",
        alt: "Group photo of Integration Bee 2023 participants and organizers",
        caption: "Participants and organizers of Integration Bee 2023, Pulchowk Campus.",
      },
    ],
  },
  "saakshar-nepal": {
    title: "Saakshar Nepal",
    subtitle: "Founding President · Mar 2023 – Mar 2024 · Lalitpur, Nepal",
    highlights: [
      "Founded Saakshar Nepal, a social organization delivering robotics and engineering education to **2,000+ students across 15+ schools in six districts**.",
      "Developed and led **hands-on robotics workshops** introducing fundamental engineering concepts, improving STEM accessibility for students below Class 8.",
      "Coordinated outreach to orphanages, providing books and stationery to children to promote **educational equity**.",
    ],
    links: [{ label: "Facebook page", href: saaksharFacebook }],
    photos: [
      {
        src: "/images/saakshar-nepal/robot-car-demo.jpg",
        alt: "Volunteer crouching in a classroom aisle to demonstrate a small robot car, with a 'How does a vehicle move?' slide on the screen",
        caption: "Demonstrating a robot car in a “How does a vehicle move?” session.",
      },
      {
        src: "/images/saakshar-nepal/robot-car-explained.jpg",
        alt: "Volunteer holding a robot car and explaining it to a class, with other volunteers standing by the whiteboard",
        caption: "Explaining how a robot car works, with the volunteer team.",
      },
      {
        src: "/images/saakshar-nepal/robot-car-to-class.jpg",
        alt: "Volunteer holding up a robot car in front of a full class of students",
        caption: "Showing a robot car to a class.",
      },
      {
        src: "/images/saakshar-nepal/balloon-car.jpg",
        alt: "Student holding a balloon-powered car made from a carton, straws and bottle caps",
        caption: "A student with the balloon-powered car made in a hands-on activity.",
      },
      {
        src: "/images/saakshar-nepal/robot-brain-session.jpg",
        alt: "Volunteer presenting to a class with a slide titled रोबोटको बुद्धि (the robot's brain)",
        caption: "A session on the robot’s “brain” (रोबोटको बुद्धि).",
      },
      {
        src: "/images/saakshar-nepal/volunteers-in-class.jpg",
        alt: "Volunteers laughing with students in a classroom during a workshop",
        caption: "Volunteers and students during a workshop.",
      },
      {
        src: "/images/saakshar-nepal/packed-classroom.jpg",
        alt: "A packed classroom of students watching a workshop",
        caption: "A packed classroom during a workshop.",
      },
      {
        src: "/images/saakshar-nepal/robot-car-closeup.jpg",
        alt: "Volunteer explaining the wiring and microcontroller on a robot car",
        caption: "Walking through the robot car’s microcontroller and wiring.",
        position: "center 30%",
      },
      {
        src: "/images/saakshar-nepal/session-with-children.jpg",
        alt: "Volunteers with a laptop leading a session for a group of young children",
        caption: "Volunteers leading a session with younger children.",
      },
      {
        src: "/images/saakshar-nepal/classroom-group.jpg",
        alt: "Volunteer seated with a group of primary-school students in blue uniforms in front of a chalkboard",
        caption: "With primary-school students after a class session.",
        wide: true,
      },
    ],
  },
};
