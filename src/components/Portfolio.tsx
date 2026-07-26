import { ExternalLink, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-semibold text-foreground mb-2">Kamal Karki</h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>kamaljungkarki13579@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+977 9768448066</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Morang, Nepal</span>
            </div>
          </div>
          
          <div className="flex gap-4 mt-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.linkedin.com/in/kamal-karki-16a926213" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/karkikamal098" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-foreground mb-4">Professional Summary</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-foreground leading-relaxed">
                Founder and aerospace engineer. I co-founded{" "}
                <span className="font-semibold">Nebulaleap Technology</span> and{" "}
                <span className="font-semibold">Beemalaya</span>, and founded{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=100088403617028"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  साक्षर नेपाल
                </a>
                . I design and validate deep tech systems at Airbus.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Founder & Company Building */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-foreground mb-6">Founder &amp; Company Building</h2>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Co-founder</h3>
                    <p className="text-accent font-medium">Nebulaleap Technology Private Limited</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Feb 2023 – Feb 2025</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>
                    Co-founded and ran a registered software development and SEO company, taking it
                    from zero to paying international clients while still an undergraduate.
                  </li>
                  <li>
                    Delivered software and SEO work for clients across the globe, including JFire
                    Energy, Sandhi Education Academy and Securiwiser.
                  </li>
                  <li>
                    Owned the full cycle end to end: sales and client acquisition, scoping and
                    pricing, hiring and managing the delivery team, and shipping the work itself.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Co-founder</h3>
                    <p className="text-accent font-medium">Beemalaya — insurance comparison for Nepal</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Jun 2023 – Nov 2023</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>
                    Built a product that gave Nepali consumers a comprehensive, side-by-side
                    comparison of insurance policies in a market where pricing and coverage were
                    almost impossible to compare.
                  </li>
                  <li>
                    Raised NPR 1.1M from Nepali diaspora investors to fund the build.
                  </li>
                  <li>
                    Failed to reach traction with consumers, made the call to stop rather than coast,
                    and pivoted. The lesson: distribution in an offline, agent-driven insurance
                    market is the hard part, not the product.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Founder</h3>
                    <p className="text-accent font-medium">
                      <a
                        href="https://www.facebook.com/profile.php?id=100088403617028"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        साक्षर नेपाल (Sakshar Nepal) — non-profit
                      </a>
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">Sep 2022 – Oct 2023</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>
                    Founded a non-profit that teaches robotics and applied engineering skills to
                    students in rural Nepal, where those subjects are otherwise unavailable.
                  </li>
                  <li>
                    Built the volunteer team, curriculum and school partnerships, and ran the
                    workshops on the ground.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-foreground mb-6">Engineering Experience</h2>

          <div className="space-y-6">

             <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Associate Engineer</h3>
                    <p className="text-accent font-medium">Airbus India Private Limited</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Feb 2026 – Present</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>
                    Design and development of the Airspace Cabin for the next generation A320.
                  </li>
                  <li>
                    Lead a subteam of 2 engineers running feasibility studies, design and drawings
                    end to end to resolve manufacturing issues.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">INTERN (FLIGHT WARNING SYSTEM)</h3>
                    <p className="text-accent font-medium">Airbus India Private Limited</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Aug 2025 – Jan 2026</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>
                    Analyzed system failures in Single Aisle and long-range aircraft as part of the
                    Flight Warning System team.
                  </li>
                  <li>
                    Built Netlistify, a tool that brings legacy circuit documentation onto the web.
                    SAO sheets (logical circuit diagrams) locked inside static PDFs are parsed with
                    PyMuPDF and read by a YOLOv5 model, then rebuilt as interactive web-based
                    circuits engineers can navigate instead of tracing by hand.
                  </li>
                  <li>
                   Gained exposure to the testing, verification, and validation of the Flight Warning System.
                  </li>
                </ul>
              </CardContent>
            </Card>

             <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Backend Developer</h3>
                    <p className="text-accent font-medium">Cloud Pro AI</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Feb 2025 – Jul 2025</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>
                    Built the backend from scratch in FastAPI and PostgreSQL — schema, auth, session
                    handling and deployment.
                  </li>
                  <li>
                    Wrote the auth layer with JWT and OAuth2 scopes, and handled schema migrations
                    with Alembic.
                  </li>
                  <li>
                    Cut query latency with indexing and async SQLAlchemy.
                  </li>
                </ul>
              </CardContent>
            </Card>


            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Internship</h3>
                    <p className="text-accent font-medium">Buddha Air Private Limited</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Dec 2024 - Jan 2025</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Performed maintenance on ATR-42/72 aircraft, ensuring airworthiness and compliance with aviation safety
standards.</li>
                  <li>Conducted wheel and brake assembly, inspection, and maintenance, using specialized tools to verify tire and
brake wear for operational reliability.</li>
                  <li>Repaired de-icing boots, troubleshooting and restoring critical systems to maintain aircraft performance in
adverse conditions. </li>
                </ul>
              </CardContent>
            </Card>


             <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">VICE PRESIDENT</h3>
                    <p className="text-accent font-medium">MATHS AND PHYSICS SOCIETY (MAPS), PULCHOWK CAMPUS</p>
                  </div>
                  <span className="text-sm text-muted-foreground">DEC 2023 – DEC 2024</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Led strategic planning for society initiatives.</li>
                  <li>Organized National Level Math and Physics Olympiad, and Integration Bee with more than 400+ participants by
coordinating with team members to ensure successful execution.</li>
                </ul>
              </CardContent>
            </Card>


             <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">ROBOTICS ENGINEER</h3>
                    <p className="text-accent font-medium">ROBOTICS CLUB, PULCHOWK CAMPUS</p>
                  </div>
                  <span className="text-sm text-muted-foreground">MAR 2022 – JAN 2023</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>
                    Designed and built robots for the ABU Robocon 2022 competition in Delhi, India.
                  </li>
                  <li>
                    Owned the mechanical design of Robot 'A', including a dual rotational mechanism
                    for breaking piles, and fabricated the parts in the workshop.
                  </li>
                </ul>
              </CardContent>
            </Card> 

            
          </div>
        </section>
{/* Projects */}
<section className="mb-12">
  <h2 className="text-2xl font-medium text-foreground mb-6">Featured Projects</h2>
  
  <div className="grid grid-cols-1 gap-6">

    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-medium text-foreground mb-2">
          Research on effect of printing parameters and reinforcement in the 3D-printed PLA+
        </h3>
        <p className="text-muted-foreground mb-4">
          This research was focused on investigation of effect of printing parameters and reinforcement on the mechanical
          properties of 3D printed polylactic acid (PLA+) composites. Specimens were fabricated in compliance with ASTM D638,
          D695, and BS-2782 Part III standards, and printed using a Bambu Studio 3D printer. The results demonstrate that a
          printing temperature around 220°C, ~80% printing density, and a rectilinear pattern provide the most effective
          tensile strength. We also found that 90% infill gives the highest compressive strength (20.93 MPa), making it ideal
          for high load-bearing applications. Impact test results showed honeycomb infill absorbing the highest energy,
          followed by gyroid and rectilinear patterns. On top of the experimental data, I built and
          trained a machine learning model that predicts the mechanical properties of a print from
          its parameters, so the strength of a configuration can be estimated without running the
          physical test.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Machine Learning</span>
          <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Pandas</span>
          <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Materials Science</span>
          <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">3D Printing</span>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-medium text-foreground mb-2">
          Design, Test and Analysis of a Mid-Range General-Purpose Commercial Aircraft Powered by Twin Turbofan Engines
        </h3>
        <p className="text-muted-foreground mb-4">
          Designed the aircraft using Plane-Maker and imported the model into X-Plane’s flight simulator for testing.
          Adjusted payload and fuel load to analyze performance under various conditions. Conducted simulated test flights
          to evaluate stability, control characteristics, and overall flight behavior.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Aircraft Design</span>
          <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">X-Plane</span>
          <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Stability & Control</span>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-medium text-foreground mb-2">
          Aerodynamic Analysis of Canard Fins for Missiles: Effects of Sweep Angle on Lift and Drag
        </h3>
        <p className="text-muted-foreground mb-4">
          Investigated sweep angle variations from 40° to 80° using CAD modeling in CATIA V5 and CFD simulations in ANSYS 2023
          R1. Results show that sweep angle significantly influences lift and drag. An optimal range exists where lift is
          maximized without excessive drag. Beyond that, increased sweep angle reduces lift and increases drag.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Aerodynamic Analysis</span>
        </div>
      </CardContent>
    </Card>

  </div>
</section>


        {/* Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-foreground mb-6">Articles & Writing</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      How Dream Evolves
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      A personal essay on how my ambition moved from wanting to be a Nobel-winning
                      researcher to wanting to build a billion-dollar company — the two sides of
                      myself I hold together, what the failed insurance and software ventures taught
                      me, and why I keep betting on the dream anyway.
                    </p>
                    <span className="text-sm text-muted-foreground">Published on Medium • May 2026</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://medium.com/@kamaljungkarki13579/how-dream-evolves-073ebe41f47c" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Article
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        <Separator className="my-8" />
        
        <footer className="text-center text-muted-foreground">
          <p>© 2025 Kamal Karki. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
