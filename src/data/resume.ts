export type GallerySlug = "robotics" | "maps" | "saakshar-nepal";

export type Link = {
  href: string;
  label: string;
  internal?: boolean;
};

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
  website: "https://kamalkarki1.com.np",
};

export const profile = `Aerospace engineer at Airbus with research interests in robotics, robot dynamics, motion control, and mechatronic systems. Active open-source contributor (Robotics Toolbox for Python, PyBaMM) with work on manipulator inverse kinematics, rigid-body dynamics fixes, and regression tests. Hands-on experience across mechanism design, electronics integration, and PID-based speed control. Seeking thesis-based graduate research opportunities in design, robotics, and control within Mechanical Engineering and related departments.`;

export const education: Entry[] = [
  {
    title: "Bachelor of Engineering in Aerospace Engineering – Full Scholarship",
    org: "Pulchowk Engineering Campus, Tribhuvan University",
    period: "May 2021 – Apr 2025",
    location: "Lalitpur, Nepal",
    bullets: [
      "**Overall:** 74.16% (3.758 / 4.0, Scholaro) · **Final Semester:** 83.8%",
      "**All Nepal Engineering Entrance Rank:** 419 / 18,000+ (Top 2.5%)",
      "**Relevant coursework:** Control Systems, Engineering Dynamics, Theory of Machines, Numerical Methods, Finite Element Method, Continuum Mechanics, Instrumentation & Sensors, Fault Monitoring & Diagnosis, Unmanned Air Vehicle Synthesis, Computer Aided Design & Manufacturing",
    ],
  },
  {
    title: "Higher Secondary Education (+2), Science",
    org: "Kantipur Higher Secondary School",
    period: "2016 – 2018",
    location: "Biratnagar, Nepal",
    bullets: [
      "**GPA:** 3.79 / 4.00",
      "Awarded a **National Examinations Board (NEB)** scholarship for academic excellence",
    ],
  },
];

export const scholarships: Entry[] = [
  {
    title: "IOETU Merit Full Scholarship",
    org: "Tribhuvan University",
    period: "2016 – 2018",
    location: "Biratnagar, Nepal",
    bullets: ["Awarded full scholarship for B.E. admission at Pulchowk Engineering Campus."],
  },
  {
    title: "NEB Scholarship for Academic Excellence",
    org: "National Examinations Board, Nepal",
    period: "2016 – 2018",
    bullets: ["Awarded for higher secondary academic performance."],
  },
  {
    title: "Nagase Award for Best Engineering Performance",
    org: "ABU Robocon 2022",
    period: "2022",
    bullets: ["Team placed 3rd overall; received award for Best Engineering Performance (New Delhi)."],
  },
  {
    title: "Third Runner-up — Locus Coding Code Camp",
    period: "—",
    bullets: ["Placed top 4 of 25 teams."],
  },
];

export const projects: Entry[] = [
  {
    title: "Investigation of the effects of Printing Parameters and Reinforcement on the Mechanical Properties of 3D-Printed PLA+ Composites",
    period: "Jun 2024 – Feb 2025",
    bullets: [
      "Performed ASTM D638 tensile, compression and damping tests to quantify effects of nozzle temperature, infill pattern and infill density on PLA+ specimens.",
      "Found negligible load transfer from embedded steel-wire reinforcement for two- and three-wire configurations (η ≈ 0).",
      "Built an ML pipeline pooling 9 open FDM datasets (172 specimens) and benchmarked 20 regressors using nested cross-validation. An ARD Gaussian Process predicted tensile strength with RMSE 6.2 MPa (R² = 0.90).",
      "Applied SHAP and partial dependence for model interpretation; identified infill density as the dominant process effect and demonstrated cross-laboratory calibration needs for absolute predictions.",
    ],
  },
  {
    title: "Robotics Club — Robot A (Thrower) for ABU Robocon 2022",
    period: "Mar 2022 – Jan 2023",
    bullets: [
      "Contributed across mechanical design, fabrication, electronics, PCB development, and integration of hardware and control.",
      "Designed and built a dual-rotational throwing mechanism and implemented PID-based speed control to regulate rotational speed.",
      "Integrated Raspberry Pi based control hardware; contributed to leg-control and motion systems.",
      "Part of the team that placed 3rd in the Asia-Pacific region and received the Nagase Award for Best Engineering Performance.",
    ],
    gallery: "robotics",
  },
  {
    title: "SWIFT: Conceptual Design of a Mid-Range Commercial Aircraft",
    period: "Mar 2024 – Apr 2024",
    bullets: [
      "Co-designed a 30-passenger, twin-turbofan aircraft with a 5,000 km design range: preliminary weight estimation, wing and tail sizing, airfoil selection, and landing-gear configuration.",
      "Evaluated flight performance and dynamic stability (short-period, phugoid, Dutch-roll, spiral) and assessed handling qualities (Cooper–Harper rating 3).",
    ],
  },
  {
    title: "Effect of Sweep Angle on Missile Canard Aerodynamics",
    period: "Oct 2023 – Dec 2023",
    bullets: [
      "Conducted ANSYS CFD analysis for canard fins modelled in CATIA V5 across sweep angles 40°–80° to characterize lift and drag behaviour.",
      "Identified an optimal sweep range that maximizes lift without a disproportionate drag penalty.",
    ],
  },
  {
    title: "Blended-Wing-Body UAV — Design, Fabrication, and Flight Test",
    period: "Sep 2021 – Nov 2021",
    bullets: [
      "Designed and modelled a blended-wing-body UAV airframe in CATIA V5 and integrated power systems and avionics.",
      "Configured custom Arduino-based flight controllers and conducted ground and flight testing to validate control response and performance.",
    ],
  },
];

export const openSource: Entry[] = [
  {
    title: "Robotics Toolbox for Python — Open-Source Contributor",
    period: "2026 – Present",
    bullets: [
      "Contributed to manipulator kinematics, dynamics and motion planning; PRs reviewed and merged by the library author.",
      "Fixed rigid-body dynamics for URDF models with rotated inertial frames by transforming inertia tensors into the link frame (I_link = R I Rᵀ), correcting inverse dynamics, mass-matrix and Coriolis computations.",
      "Corrected the Gauss–Newton inverse-kinematics solver to solve weighted normal equations (Jᵀ W J)⁻¹ Jᵀ W e, restoring task-space error weighting.",
      "Redesigned URDF/xacro model loading to report failing stage, XML element and line via structured exceptions; added 13 regression tests.",
    ],
  },
  {
    title: "PyBaMM — Python Battery Mathematical Modelling (Contributor)",
    period: "2026 – Present",
    bullets: [
      "Diagnosed defects in battery degradation models (SEI growth, lithium plating), including a numerical failure affecting published parameter sets; submitted fixes with regression tests.",
      "Collaborated with model authors and core maintainers on fix design; findings led to a package-wide redesign of model-option validation.",
    ],
  },
];

export const experience: Entry[] = [
  {
    title: "Associate Engineer – Design",
    org: "Airbus India Private Limited",
    period: "Feb 2026 – Present",
    location: "India",
    bullets: [
      "Design and develop engine nacelle and aircraft cabin components using CATIA: tolerance checks, 3D assembly interference and clearance analysis to resolve component-fit issues.",
      "Lead a sub-team of two engineers in feasibility studies and root-cause analysis of manufacturing issues; coordinate design modifications with manufacturing and assess manufacturability.",
      "Work across component lifecycle using VPM and ENOVIA PLM tools (PASS, TREND) supporting configuration management and engineering-change workflows.",
      "Developed an ML-based aircraft design-reuse system using DBSCAN clustering and priority-based ranking to retrieve prior designs, with estimated savings of 3,500+ engineering hours annually.",
    ],
  },
  {
    title: "Engineering Intern – Flight Warning Systems",
    org: "Airbus India Private Limited",
    period: "Aug 2025 – Jan 2026",
    location: "India",
    bullets: [
      "Contributed to development and validation of A320/A321 Flight Warning System logic: evaluated warning activation, suppression, clearing, sequencing and priority.",
      "Prepared validation scenarios and analyzed system responses; reproduced anomalous warning behaviour and supported failure analysis.",
      "Investigated a critical aircraft electrical-system issue in the lavatory area by examining associated FW indications and logic.",
      "Developed a YOLOv5-based computer-vision tool to convert legacy SAO logic-circuit diagrams into interactive web-based circuits, improving defect-analysis efficiency by 13%.",
    ],
  },
  {
    title: "Backend Engineer",
    org: "Cloud Pro AI",
    period: "Feb 2025 – Jul 2025",
    location: "Remote",
    bullets: [
      "Designed and deployed a backend from scratch using FastAPI and PostgreSQL: database schemas, APIs, session management, and secure JWT/OAuth2 authentication/authorization.",
      "Improved API responsiveness with database indexing and asynchronous SQLAlchemy; managed database schema evolution with Alembic migrations.",
    ],
  },
  {
    title: "Aircraft Maintenance Intern",
    org: "Buddha Air Pvt. Ltd.",
    period: "Dec 2024",
    location: "Kathmandu, Nepal",
    bullets: [
      "Analyzed ATR-42/72 flight and engine-monitoring data across hundreds of parameters to identify abnormal trends supporting preventive maintenance.",
      "Performed technical inspection, fault isolation, and corrective maintenance on aircraft systems including wheel/brake assemblies and pneumatic de-icing systems.",
    ],
  },
  {
    title: "Research Engineering Intern",
    org: "ORION Space",
    period: "May 2023 – Jun 2023",
    location: "Bhaktapur, Nepal",
    bullets: [
      "Designed mechanical components for a modular PocketQube Training Kit; fabricated prototypes via 3D printing and performed fit, assembly and functional testing.",
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
      "Developed and launched an EdTech mobile app for government exam preparation using Flutter and Node.js.",
      "Delivered a low-latency video service and grew the platform to 3,000+ users.",
    ],
  },
  {
    title: "Co-Founder / Product Developer",
    org: "Beemalaya",
    period: "2024",
    location: "Nepal",
    bullets: [
      "Co-founded an insurance aggregator platform for Nepal to compare and access insurance products in one place.",
      "Raised NPR 1.1M angel funding and led technical execution and product iterations.",
    ],
  },
];

export const leadership: Entry[] = [
  {
    title: "Vice President (Dec 2023 – Dec 2024) | Treasurer (Jul 2022 – Dec 2023)",
    org: "Maths and Physics Society (MAPS), Pulchowk Campus",
    period: "Jul 2022 – Dec 2024",
    location: "Lalitpur, Nepal",
    bullets: [
      "Led strategic planning, organized the Math & Physics Olympiad and Integration Bee with 400+ participants.",
      "Raised NPR 900K in sponsorship to fund the Olympiad.",
    ],
  },
  {
    title: "Founding President",
    org: "Saakshar Nepal",
    period: "Mar 2023 – Mar 2024",
    location: "Lalitpur, Nepal",
    bullets: [
      "Founded a social organization delivering robotics and engineering education to 2,000+ students across 15+ schools in six districts.",
      "Developed and led hands-on robotics workshops introducing fundamental engineering concepts for students below Class 8.",
    ],
  },
];

export const technicalSkills = [
  "Robot Kinematics & Dynamics",
  "Mechanism Design",
  "PID-Based Speed Control",
  "URDF / xacro Parsing",
  "CATIA V5",
  "VPM / ENOVIA PLM (PASS, TREND)",
  "Assembly Interference & Clearance Analysis",
  "Raspberry Pi / PCB Development",
  "Python • MATLAB • Git • pytest",
  "FastAPI • PostgreSQL • Alembic",
  "scikit-learn • Gaussian Processes • DBSCAN",
  "YOLOv5 • SHAP • Nested Cross-Validation • pandas",
  "LaTeX",
];

export const training = [
  "Neural Networks and Deep Learning — DeepLearning.AI (Mar 2024)",
  "Supervised Machine Learning: Regression and Classification — DeepLearning.AI (Jan 2024)",
];

/**
 * Minimal galleries object to satisfy components that import galleries.
 * Photos/links are left as in-repo configuration — replace/add actual photos if needed.
 */
export const galleries: Record<
  GallerySlug,
  {
    title: string;
    subtitle?: string;
    highlights: string[];
    photos: { src: string; alt?: string; caption?: string; wide?: boolean; position?: string }[];
    links?: Link[];
  }
> = {
  robotics: {
    title: "Robotics — ABU Robocon & Projects",
    subtitle: "Robotics Club work and robot builds",
    highlights: [],
    photos: [],
  },
  maps: {
    title: "MAPS — Events & Activities",
    subtitle: "Maths & Physics Society events",
    highlights: [],
    photos: [],
  },
  "saakshar-nepal": {
    title: "Saakshar Nepal — Outreach",
    subtitle: "Robotics workshops and outreach",
    highlights: [],
    photos: [],
  },
};
