// Site content, kept in step with the CV. Text inside **double asterisks** renders bold.

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
  "Aerospace engineer at **Airbus** working on **A320 cabin design**, with experience in **engineering automation, machine learning, robotics, scientific computing, and data-driven materials research**. Built **ML-assisted tools for aircraft-system analysis and design reuse**, while also contributing to **open-source robotics and scientific computing projects**. Interested in applied research at the intersection of **robotics, dynamics, control, and mechatronics**, with a focus on **mechanical design and intelligent engineering systems**.";

export const education: Entry[] = [
  {
    title: "Bachelor of Engineering in Aerospace Engineering",
    org: "Pulchowk Engineering Campus, Tribhuvan University",
    period: "May 2021 – Apr 2025",
    location: "Lalitpur, Nepal",
    bullets: [
      "**Overall: 74.16% (First Division), 3.75/4 (Scholaro Estimate)** | **Final Semester: 83.8%** | **All Nepal Engineering Entrance Rank: 419/18,000+ (Top 2.5%)**",
      "**Relevant Coursework:** Control Systems, Engineering Dynamics, Theory of Machines, Numerical Methods, Finite Element Method, Continuum Mechanics, Instrumentation & Sensors, Fault Monitoring & Diagnosis, Unmanned Air Vehicle Synthesis, Computer Aided Design & Manufacturing",
    ],
  },
  {
    title: "Higher Secondary Education (+2), Science",
    org: "Kantipur Higher Secondary School",
    period: "2016 – 2018",
    location: "Biratnagar, Nepal",
    bullets: [
      "**GPA: 3.78 / 4.00** | Awarded a **National Examinations Board (NEB) scholarship**",
    ],
  },
];

export const awards: { title: string; detail: string }[] = [
  {
    title: "IOE TU Merit Full Scholarship",
    detail: "Tribhuvan University – Awarded for B.E. in Aerospace Engineering at Pulchowk Engineering Campus.",
  },
  {
    title: "NEB Scholarship for Academic Excellence",
    detail: "National Examinations Board, Nepal – Awarded for higher secondary education (+2 Science).",
  },
  {
    title: "Nagase Award for Best Engineering Performance",
    detail: "ABU Robocon 2022, New Delhi – Team placed **3rd overall** in the Asia-Pacific region.",
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
      "Developed an **ML-based design-reuse system for aircraft customization**, using unsupervised **DBSCAN clustering** and priority-based ranking to retrieve and reuse prior designs, with an estimated savings of **3,500+ engineering hours annually**.",
      "Working across the aircraft component lifecycle using **VPM and ENOVIA PLM tools**, including **PASS and TREND**, supporting configuration management, engineering-change workflows, assembly checks, and weight-related analyses.",
    ],
  },
  {
    title: "Engineering Intern – Flight Warning Systems",
    org: "Airbus India Private Limited",
    period: "Aug 2025 – Jan 2026",
    location: "India",
    bullets: [
      "Contributed to the development and validation of **A320/A321 Flight Warning System logic**, evaluating warning activation, suppression, clearing, sequencing, and priority across operating conditions and combinations of aircraft-system inputs.",
      "Prepared validation scenarios and analyzed system responses against expected behavior, investigating discrepancies across multiple **Flight Warning System functions** and their interfaces with other aircraft systems.",
      "Investigated **Flight Warning System defects** by reproducing anomalous warning behavior and examining associated input conditions and system logic to support failure analysis and technical investigation.",
      "Contributed to the failure analysis of a critical aircraft electrical-system issue in the lavatory area, examining associated **Flight Warning System indications** and warning logic to support the technical investigation.",
      "Developed a **YOLOv5 object-detection tool** to recognize logic-gate symbols in legacy **SAO logic-circuit diagrams** and convert them into **interactive web-based circuits**, improving defect-analysis efficiency by **13%**.",
    ],
  },
  {
    title: "Backend Engineer",
    org: "Cloud Pro AI",
    period: "Feb 2025 – Jul 2025",
    location: "Remote",
    bullets: [
      "Designed and deployed the **backend system from scratch** using **FastAPI and PostgreSQL**, implementing database schemas, APIs, session management, and secure **JWT/OAuth2 authentication and authorization**.",
      "Improved API responsiveness through **database indexing and asynchronous SQLAlchemy**, managing database schema evolution with **Alembic migrations**.",
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
      "Contributor to the open-source companion library to Peter Corke's *Robotics, Vision and Control*, covering manipulator kinematics, dynamics, and motion planning; pull requests reviewed and merged by the author.",
      "Fixed **rigid-body dynamics** for URDF robot models with rotated inertial frames by transforming inertia tensors into the link frame (Iₗᵢₙₖ = R I Rᵀ), correcting inverse dynamics, mass-matrix, and Coriolis computations.",
      "Corrected the **Gauss–Newton inverse-kinematics solver** to solve the weighted normal equations (JᵀWJ)⁻¹JᵀWe, restoring task-space error weighting.",
      "Redesigned **URDF/xacro robot-model loading** to report the failing stage, XML element, and line through a structured exception, backed by **13 regression tests**.",
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
    title: "Investigation of the Effects of Printing Parameters and Reinforcement on the Mechanical Properties of 3D-Printed PLA+ Composites",
    period: "Jun 2024 – Feb 2025",
    tags: ["FDM", "Materials Testing", "Machine Learning"],
    bullets: [
      "Tested how nozzle temperature, infill pattern, and infill density affect 3D-printed PLA+ (**ASTM D638** tensile, compression, and damping tests); rule-of-mixtures analysis indicated negligible load transfer from embedded steel-wire reinforcement (η ≈ 0 for two- and three-wire configurations).",
      "Built an **ML pipeline** pooling **9 open FDM datasets (172 specimens)** and benchmarked **20 regressors** under nested cross-validation; an **ARD Gaussian process** predicted tensile strength with **RMSE 6.2 MPa (R² 0.90)**.",
      "Model interpretation (**SHAP**, partial dependence) identified **infill density** as the dominant process effect; cross-laboratory validation showed published data captured strength trends but required calibration specimens for absolute predictions.",
    ],
  },
  {
    title: "SWIFT: Conceptual Design of a Mid-Range Commercial Aircraft",
    period: "Mar 2024 – Apr 2024",
    tags: ["Plane-Maker", "X-Plane"],
    bullets: [
      "Co-designed a **30-passenger, twin-turbofan aircraft** with a **5,000 km design range**, performing preliminary weight estimation, wing and tail sizing, airfoil selection, and landing-gear configuration.",
      "Evaluated flight performance and dynamic stability using analytical calculations and simulation, analyzing short-period, phugoid, Dutch-roll, and spiral modes and assessing handling qualities with a **Cooper–Harper rating of 3**.",
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
      "Designed and modeled a **blended-wing-body UAV** airframe using **CATIA V5**, integrating power systems, motors, and an engine for optimal aerodynamic stability.",
      "Configured custom **Arduino-based flight controllers and avionics**, conducting extensive ground and flight testing to validate control response and system performance.",
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
      "Developed and launched an **EdTech mobile app** focused on government service examinations using **Flutter and Node.js**.",
      "Delivered a **low-latency video service**, growing the platform to **3,000+ users**.",
      "Secured an institutional sale of **NPR 500K** to one of Nepal's largest educational institutes.",
    ],
    links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.sandhi_education&hl=en" }],
  },
  {
    title: "Co-Founder / Product Developer",
    org: "Beemalaya",
    period: "2024",
    location: "Nepal",
    bullets: [
      "Co-founded **Beemalaya**, an **insurance aggregator platform for Nepal** that lets users compare and access insurance products in one place.",
      "Raised **NPR 1.1M in angel funding** to build and scale the platform.",
      "Led technical execution, implementation, and user-oriented product iterations.",
    ],
  },
];

const saaksharFacebook = "https://www.facebook.com/people/%E0%A4%B8%E0%A4%BE%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%B0-%E0%A4%A8%E0%A5%87%E0%A4%AA%E0%A4%BE%E0%A4%B2/100088403617028/";

export const leadership: Entry[] = [
  {
    title: "Robotics Engineer",
    org: "Robotics Club, Pulchowk Campus",
    period: "Mar 2022 – Jan 2023",
    location: "Lalitpur, Nepal",
    bullets: [
      "Contributed across the end-to-end development of **Robot A (Thrower)** for **ABU Robocon 2022**, spanning mechanical design, fabrication, electronics, PCB development, and integration of the robot’s hardware and control systems.",
      "Designed and built a **dual-rotational throwing mechanism** and implemented **PID-based speed control** to regulate its rotational speed, combining mechanism design with feedback control.",
      "Developed and integrated electronic hardware and contributed to the robot’s leg-control and motion systems, using **Raspberry Pi** hardware as part of the robot’s control setup.",
      "Contributed to the team that secured **third place in the Asia-Pacific region** and received the **Nagase Award for Best Engineering Performance** at **ABU Robocon 2022** in New Delhi, India.",
    ],
    links: [{ label: "Robotics photos", href: "/robotics", internal: true }],
    gallery: "robotics",
  },
  {
    title: "Vice President (Dec 2023 – Dec 2024) · Treasurer (Jul 2022 – Dec 2023)",
    org: "Maths and Physics Society (MAPS), Pulchowk Campus",
    period: "Jul 2022 – Dec 2024",
    location: "Lalitpur, Nepal",
    bullets: [
      "Led strategic planning for society initiatives and organized the **Math and Physics Olympiad and Integration Bee**, attracting **400+ participants** from across Nepal.",
      "Raised **NPR 900K in sponsorship** from startups, companies, and organizations to fund the Olympiad.",
    ],
    links: [{ label: "MAPS photos", href: "/maps", internal: true }],
    gallery: "maps",
  },
  {
    title: "Founding President",
    org: "Saakshar Nepal",
    orgHref: "https://www.facebook.com/people/%E0%A4%B8%E0%A4%BE%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%B0-%E0%A4%A8%E0%A5%87%E0%A4%AA%E0%A4%BE%E0%A4%B2/100088403617028/",
    period: "Mar 2023 – Mar 2024",
    location: "Lalitpur, Nepal",
    bullets: [
      "Founded **Saakshar Nepal**, a social organization delivering robotics and engineering education to **2,000+ students across 15+ schools in six districts**.",
      "Developed and led **hands-on robotics workshops** introducing fundamental engineering concepts, improving STEM accessibility for students below Class 8.",
    ],
    links: [
      { label: "Saakshar Nepal photos", href: "/saakshar-nepal", internal: true },
      { label: "Facebook page", href: saaksharFacebook },
    ],
    gallery: "saakshar-nepal",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Robotics & Control",
    items: ["Robot Kinematics and Dynamics", "Mechanism Design", "PID-Based Speed Control", "URDF/xacro Parsing"],
  },
  {
    group: "Mechanical Design & PLM",
    items: ["CATIA V5", "VPM", "ENOVIA PLM", "Assembly Interference and Clearance Analysis", "Tolerance Checks", "Configuration Management"],
  },
  {
    group: "Embedded Systems & Hardware",
    items: ["Raspberry Pi", "PCB Development", "Electronics Integration", "Prototype Fabrication"],
  },
  {
    group: "Programming & Scientific Computing",
    items: ["Python", "MATLAB", "Git/GitHub", "pytest", "FastAPI", "PostgreSQL", "LaTeX"],
  },
  {
    group: "Machine Learning & Data Analysis",
    items: ["scikit-learn", "DBSCAN Clustering", "Gaussian Process Regression", "Neural Networks", "YOLOv5", "SHAP", "Nested Cross-Validation", "pandas"],
  },
  {
    group: "Aerospace Systems & Engineering Analysis",
    items: ["Aircraft Systems", "Avionics", "Flight Warning Systems", "System Verification and Validation", "Failure Analysis", "Aircraft Performance and Stability Analysis"],
  },
];

export const training: { title: string; detail: string; date?: string }[] = [
  { title: "Neural Networks and Deep Learning", detail: "DeepLearning.AI", date: "Mar 2024" },
  { title: "Supervised Machine Learning: Regression and Classification", detail: "DeepLearning.AI", date: "Jan 2024" },
  { title: "Code Camp Finalist", detail: "Top 4 of 25 teams in Locus Code Camp; awarded Best Presentation Award" },
];

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
      "Contributed across the end-to-end development of **Robot A (Thrower)** for **ABU Robocon 2022**, spanning mechanical design, fabrication, electronics, PCB development, and integration of the robot’s hardware and control systems.",
      "Designed and built a **dual-rotational throwing mechanism** and implemented **PID-based speed control** to regulate its rotational speed, combining mechanism design with feedback control.",
      "Contributed to the team that secured **third place** overall and received the **Nagase Award** at **ABU Robocon 2022** in New Delhi, India.",
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
