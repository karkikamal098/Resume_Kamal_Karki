// Site content, kept in step with the CV. Text inside **double asterisks** renders bold.

export type Link = { label: string; href: string; internal?: boolean };

export type GallerySlug = "robotics" | "maps";

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
  "Aerospace engineer at **Airbus** working on **A320 cabin design**, with experience in **engineering automation, machine learning, robotics, scientific computing, and data-driven materials research**. Built ML-assisted engineering tools that improved analysis efficiency by **23%** and are estimated to save **3,500+ engineering hours annually**. Open-source contributor to the **Robotics Toolbox for Python** and **PyBaMM**.";

export const education: Entry[] = [
  {
    title: "Bachelor of Engineering in Aerospace Engineering – Full Scholarship",
    org: "Pulchowk Engineering Campus, Tribhuvan University",
    period: "May 2021 – Apr 2025",
    location: "Lalitpur, Nepal",
    bullets: [
      "**Overall:** 74.5% · **Final semester:** 84% · **National Engineering Entrance Rank:** 419 / 18,000+ (top 2.3%)",
      "**Relevant coursework:** Control Systems, Engineering Dynamics, Theory of Machine, Numerical Methods, Finite Element Method, Continuum Mechanics, Instrumentation & Sensors, Fault Monitoring & Diagnosis, Unmanned Air Vehicle Synthesis, Computer Aided Design & Manufacturing",
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
      "Contributing to the **design and development of the Airspace cabin** for the next-generation **A320** family, including research on **improving the attachment of shell partitions**.",
      "Leading a **sub-team of two engineers** through feasibility studies, design, and drawings end-to-end to resolve manufacturing issues.",
      "Developed an **ML-based design-reuse system for aircraft customization**, using unsupervised **DBSCAN clustering** and priority-based ranking to retrieve and reuse prior designs, with an estimated saving of **3,500+ engineering hours annually**.",
    ],
  },
  {
    title: "Engineering Intern – Flight Warning Systems",
    org: "Airbus India Private Limited",
    period: "Aug 2025 – Jan 2026",
    location: "India",
    bullets: [
      "Analyzed system failures on single-aisle and long-range aircraft using **TSAS**, and supported verification and validation of **A320/A321 Flight Warning Systems**, including test requirements and procedures.",
      "Built a **computer-vision tool** that converts legacy **SAO logic-circuit PDFs** used in aircraft fault analysis into **interactive web-based circuits**, using PyMuPDF and a **YOLOv5** object-detection model, improving defect-analysis efficiency by **23%**.",
    ],
  },
  {
    title: "Backend Engineer",
    org: "Cloud Pro AI",
    period: "Feb 2025 – Jul 2025",
    location: "Remote",
    bullets: [
      "Designed and built the **complete backend system from scratch** using **FastAPI and PostgreSQL**, covering database schema design, API development, session management, and production deployment.",
      "Implemented secure **authentication and authorization** with JWT and OAuth2 scopes, and managed database schema evolution through **Alembic migrations**.",
      "Reduced query latency through **database indexing and asynchronous SQLAlchemy**, improving API responsiveness.",
    ],
  },
  {
    title: "Aircraft Maintenance Intern",
    org: "Buddha Air Pvt. Ltd.",
    period: "Dec 2024",
    location: "Kathmandu, Nepal",
    bullets: [
      "Analyzed **ATR-42/72 flight and engine-monitoring data** across hundreds of recorded parameters to identify abnormal trends and system deviations supporting **preventive maintenance**.",
      "Performed **technical inspection, fault isolation, and corrective maintenance** on aircraft systems, including wheel/brake assemblies and pneumatic de-icing systems.",
    ],
  },
  {
    title: "Research Engineering Intern",
    org: "ORION Space",
    period: "May 2023 – Jun 2023",
    location: "Bhaktapur, Nepal",
    bullets: [
      "Designed mechanical components for a modular **PocketQube Training Kit**, translating satellite-system concepts into a hands-on platform for space-engineering education in Nepal.",
      "Developed and iterated **CATIA V5 designs**, fabricated prototypes through **3D printing**, and performed fit, assembly, and functional testing to refine geometry and manufacturability.",
    ],
  },
];

export const openSource: Entry[] = [
  {
    title: "Open-Source Contributor",
    org: "Robotics Toolbox for Python",
    orgHref: "https://github.com/petercorke/robotics-toolbox-python",
    period: "2026 – Present",
    bullets: [
      "Contributor to the open-source companion library to Peter Corke's *Robotics, Vision and Control*, covering manipulator kinematics, dynamics and motion planning; pull requests reviewed and merged by the author.",
      "Fixed **rigid-body dynamics** for URDF robot models with rotated inertial frames by transforming inertia tensors into the link frame (Iₗᵢₙₖ = R I Rᵀ), correcting inverse dynamics, mass-matrix and Coriolis computations.",
      "Corrected the **Gauss–Newton inverse-kinematics solver** to solve the weighted normal equations (JᵀWJ)⁻¹JᵀWe, restoring task-space error weighting.",
      "Redesigned **URDF/xacro robot-model loading** to report the failing stage, XML element and line through a structured exception, backed by 13 regression tests.",
    ],
  },
  {
    title: "Open-Source Contributor",
    org: "PyBaMM – Python Battery Mathematical Modelling",
    orgHref: "https://github.com/pybamm-team/PyBaMM",
    period: "2026 – Present",
    bullets: [
      "Diagnosed defects in the **battery degradation models** (SEI growth, lithium plating), including a numerical failure affecting several published parameter sets; submitted fixes with regression tests.",
      "Worked with model authors and core maintainers on the fix design; the findings led to a package-wide redesign of model-option validation.",
    ],
  },
];

export const projects: Entry[] = [
  {
    title:
      "Investigation of the Effects of Printing Parameters and Reinforcement on the Mechanical Properties of 3D-Printed PLA+ Composites",
    period: "Jun 2024 – Feb 2025",
    tags: ["FDM", "Materials Testing", "Machine Learning"],
    bullets: [
      "Tested how nozzle temperature, infill pattern and infill density affect 3D-printed PLA+ (**ASTM D638** tensile, compression and damping tests), and showed by rule-of-mixtures analysis that embedded **steel-wire reinforcement** transferred no load (η ≈ 0).",
      "Built an **ML pipeline** pooling **9 open FDM datasets (172 specimens)** and benchmarked **20 regressors** under nested cross-validation; an **ARD Gaussian process** predicted tensile strength to **RMSE 6.2 MPa (R² 0.90)**.",
      "Model interpretation (SHAP, partial dependence) showed **infill density** has the largest effect on strength; cross-laboratory tests showed that published data predict **trends** for a new printer but not its **absolute strength**, which needs a few calibration specimens.",
    ],
  },
  {
    title: "SWIFT: Conceptual Design of a Mid-Range Commercial Aircraft",
    period: "Mar 2024 – Apr 2024",
    tags: ["Plane-Maker", "X-Plane"],
    bullets: [
      "Co-designed a **30-passenger twin-turbofan charter aircraft** (MTOW 21,000 kg, 5,000 km range), covering sizing, weight estimation, wing/tail and landing-gear design, and simulated flight performance.",
      "Evaluated longitudinal and lateral-directional **stability modes** and handling qualities, achieving a **Cooper–Harper rating of 3**; presented at the **IOE Paper Presentation**, Pulchowk Campus.",
    ],
  },
  {
    title: "Effect of Sweep Angle on Missile Canard Aerodynamics",
    period: "Oct 2023 – Dec 2023",
    tags: ["CATIA V5", "ANSYS CFD"],
    bullets: [
      "Conducted **CFD analysis in ANSYS** of canard fins modelled in CATIA V5 across sweep angles of **40°–80°** to characterize lift and drag behaviour.",
      "Identified an **optimal sweep-angle range** that maximizes lift without a disproportionate drag penalty.",
    ],
  },
  {
    title: "Blended-Wing-Body UAV: Design, Fabrication, and Flight Test",
    period: "Sep 2021 – Nov 2021",
    tags: ["CATIA V5"],
    bullets: [
      "Designed and fabricated a **blended-wing-body UAV** using **CATIA V5**, developing the aircraft geometry and preparing the airframe for flight.",
      "Conducted **ground and flight testing** of the fabricated prototype to evaluate its basic flight characteristics and control response.",
    ],
  },
];

export const entrepreneurship: Entry[] = [
  {
    title: "Co-Founder / Product Developer",
    org: "Loksewa Sandhi",
    period: "2024",
    location: "Nepal",
    bullets: [
      "Developed and launched an **educational mobile application for Loksewa exam preparation**, available on the **Google Play Store**, taking the product from concept through deployment.",
      "Grew the platform to **850+ paid users**.",
      "Secured the product's first institutional sale for **NPR 500K** to one of Nepal's largest educational institutes.",
    ],
    links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.sandhi_education&hl=en" }],
  },
  {
    title: "Co-Founder / Product Developer",
    org: "Beemalaya",
    period: "2024",
    location: "Nepal",
    bullets: [
      "Co-founded Beemalaya, an **insurance aggregator platform for Nepal** that lets users compare and access insurance products in one place.",
      "Raised **NPR 1.1M in angel funding** to build and scale the platform.",
      "Led technical execution, implementation, and user-oriented product iterations.",
    ],
  },
  // Not in the CV – hidden for now.
  // {
  //   title: "Co-Founder",
  //   org: "Nebulaleap Technology Private Limited",
  //   period: "Feb 2023 – Feb 2025",
  //   location: "Nepal",
  //   bullets: [
  //     "Co-founded and ran a registered software development and SEO company, taking it from zero to paying international clients while still an undergraduate.",
  //     "Delivered software and SEO work for clients including JFire Energy, Sandhi Education Academy and Securiwiser.",
  //   ],
  // },
];

export const leadership: Entry[] = [
  {
    title: "Vice President (Dec 2023 – Dec 2024) · Treasurer (Jul 2022 – Dec 2023)",
    org: "Maths and Physics Society (MAPS), Pulchowk Campus",
    period: "Jul 2022 – Dec 2024",
    location: "Lalitpur, Nepal",
    bullets: [
      "Led strategic planning for society initiatives and organized the national-level **Math and Physics Olympiad and Integration Bee** with **400+ participants**.",
      "Raised **NPR 900K in sponsorship** from startups, companies, and organizations to fund the national-level Olympiad.",
    ],
    links: [{ label: "MAPS photos", href: "/maps", internal: true }],
    gallery: "maps",
  },
  {
    title: "Founding President",
    org: "Saakshar Nepal",
    orgHref: "https://www.facebook.com/profile.php?id=100088403617028",
    period: "Mar 2023 – Mar 2024",
    location: "Lalitpur, Nepal",
    bullets: [
      "Founded Saakshar Nepal, a social organization delivering robotics and engineering education to **2,000+ students across 15+ schools in six districts**.",
      "Developed and led **hands-on robotics workshops** introducing fundamental engineering concepts, improving STEM accessibility for students below Class 8.",
      "Coordinated outreach to orphanages, providing books and stationery to children to promote **educational equity**.",
    ],
  },
  {
    title: "Robotics Engineer",
    org: "Robotics Club, Pulchowk Campus",
    period: "Mar 2022 – Jan 2023",
    location: "Lalitpur, Nepal",
    bullets: [
      "Contributed to the university's **ABU Robocon 2022** team, designing Robot A's mechanical system, including a **dual-rotational mechanism**.",
      "Team secured **3rd place overall** and received the **Nagase Award** at ABU Robocon 2022 in New Delhi, India.",
    ],
    links: [{ label: "Robotics photos", href: "/robotics", internal: true }],
    gallery: "robotics",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Machine Learning & Data Science",
    items: ["scikit-learn", "Neural Networks", "Gaussian-Process Regression", "DBSCAN Clustering", "YOLOv5 Object Detection", "SHAP", "Nested Cross-Validation", "pandas"],
  },
  {
    group: "Robotics",
    items: ["Robotics Toolbox for Python", "Robot Kinematics & Dynamics", "URDF/xacro Robot Models", "Mechanism Design"],
  },
  {
    group: "Aerospace & Space Systems",
    items: ["Aircraft Systems", "Avionics", "Flight Warning Systems", "PocketQube Systems", "Verification & Validation", "Aircraft Maintenance"],
  },
  {
    group: "Programming & Scientific Computing",
    items: ["Python", "MATLAB", "FastAPI", "PostgreSQL", "PyBaMM", "Git/GitHub", "pytest", "LaTeX", "Numerical Modelling"],
  },
  {
    group: "Mechanical Design & Simulation",
    items: ["CATIA V5", "ANSYS", "3D Printing (FDM)", "Prototype Development", "Mechanical Fabrication"],
  },
];

export const training: { title: string; detail: string; date?: string }[] = [
  { title: "Neural Networks and Deep Learning", detail: "DeepLearning.AI", date: "Mar 2024" },
  { title: "Supervised Machine Learning: Regression and Classification", detail: "DeepLearning.AI", date: "Jan 2024" },
  { title: "Code Camp Finalist", detail: "Top 4 of 25 teams in Locus Code Camp; awarded Best Presentation Award" },
];

// Not in the CV – hidden for now (the Articles section in Portfolio.tsx is commented out too).
// export const articles = [
//   {
//     title: "How Dream Evolves",
//     summary:
//       "A personal essay on how my ambition moved from wanting to be a Nobel-winning researcher to wanting to build a billion-dollar company — the two sides of myself I hold together, what the failed insurance and software ventures taught me, and why I keep betting on the dream anyway.",
//     meta: "Published on Medium • May 2026",
//     href: "https://medium.com/@kamaljungkarki13579/how-dream-evolves-073ebe41f47c",
//   },
// ];

export type Photo = { src: string; alt: string; caption: string };

export type Gallery = {
  title: string;
  subtitle: string;
  highlights: string[];
  links?: Link[];
  photos: Photo[];
};

// Photo pages at /robotics and /maps. Photos live in public/images/<slug>. Edit captions here.
// A new slug also needs a route in App.tsx and an entry in scripts/spa-fallback.mjs.
export const galleries: Record<GallerySlug, Gallery> = {
  robotics: {
    title: "Robotics",
    subtitle: "Robotics Club, Pulchowk Campus · Mar 2022 – Jan 2023",
    highlights: [
      "**ABU Robocon 2022, New Delhi** – member of the Pulchowk Campus team; designed Robot A's mechanical system, including a **dual-rotational mechanism**. The team finished **3rd overall** and received the **Nagase Award**.",
      "**Saakshar Nepal** – founded a social organization that ran **hands-on robotics workshops** for **2,000+ students across 15+ schools** in six districts.",
      "**Robotics Toolbox for Python** – open-source fixes to URDF rigid-body dynamics, the Gauss–Newton IK solver and robot-model loading, reviewed and merged by the author.",
    ],
    links: [{ label: "Robotics Toolbox for Python", href: "https://github.com/petercorke/robotics-toolbox-python" }],
    photos: [
      {
        src: "/images/robotics/team-with-robots.jpg",
        alt: "Robotics Club team posing on the practice field with two competition robots and rings",
        caption: "The Robotics Club team with two of our competition robots on the practice field, Pulchowk Campus.",
      },
      {
        src: "/images/robotics/robot-closeup.jpg",
        alt: "Close-up of a competition robot with omni wheels, twin rollers and on-board electronics",
        caption: "Close-up of a competition robot: omni-wheel drive base, twin-roller launcher and on-board control electronics.",
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
};
