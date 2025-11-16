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
          {/* <p className="text-xl text-muted-foreground mb-6">Hello People, I am Kamal Karki. I have experience of working in the deep tech industry and software development</p> */}
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Kamaljungkarki13579@email.com</span>
            </div>
            {/* <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+977 9768448066</span>
            </div> */}
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
                Aerospace Engineer with experience in designing, developing, and validation and verifying deep tech solutions. I have hands-on experience with software and automation development. Besides, I have also founded a social organization to teach students of remote schools in Nepal with the robotics and other other applicable engineering, <a 
    href="https://www.facebook.com/profile.php?id=100088403617028" 
    target="_blank" 
    rel="noopener noreferrer"
    className="underline text-blue-600"
  >
    साक्षर नेपाल
  </a>. 
                {/* And, I am also the founder of <span className="font-semibold">Nebulaleap Technology Private Limited */}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-foreground mb-6">Work Experience</h2>
          
          <div className="space-y-6">

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">INTERN (FLIGHT WARNING SYSTEM)</h3>
                    <p className="text-accent font-medium">Airbus India Private Limited</p>
                  </div>
                  <span className="text-sm text-muted-foreground">July 30 - Now</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>
                    Developed an internal automation tool, VERITY, to accelerate the creation of testing procedure documentation.
                  </li>
                  <li>
                    Developing an ML-based tool to improve efficiency when working with SAO sheets (Logical Circuit diagrams).
                  </li>
                  <li>
                    Performed Test Fault Analysis using TSAS.
                  </li>
                  <li>
                  Prepared Test Requirements, developed Test Procedures, and performed analysis for aircraft certification and
safety.</li>
                  <li>
                    Gained knowledge of LRU (Line Replaceable Units) and IMA (Integrated Modular Avionics)
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
                    <p className="text-accent font-medium">MATHS AND PHYSICS SOCIETY (MAPS), PULCHOWK CAMPUS)</p>
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
                    <h3 className="text-lg font-medium text-foreground">INTERN RESEARCH ENGINEER</h3>
                    <p className="text-accent font-medium">ORION SPACE</p>
                  </div>
                  <span className="text-sm text-muted-foreground">MAY 2023 – JUN 2023</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Designed and developed the PocketQube Training Kit, a modular educational platform for satellite technology,
enhancing hands-on learning for students and enthusiasts.</li>
                  <li> Engineered mechanical components using Catia and fabricated prototypes with 3D printing ensuring precision
and functionality.</li>
                  <li>
                    Conducted testing and validation of kit components, improving design reliability
                  </li>
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
                  <li>Designed and developed robots for the ABU Robocon 2022 competition (Delhi, India), focusing on innovative
mechanical solutions.</li>
                  <li> Engineered the mechanical design of Robot 'A,' incorporating a dual rotational mechanism to effectively break
piles, enhancing performance.</li>
                  <li>
                     Conducted hands-on mechanical workshops to fabricate components, ensuring precision and functionality of
robot parts.
                  </li>
                </ul>
              </CardContent>
            </Card> 

            

           

            {/* <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Founder</h3>
                    <p className="text-accent font-medium">Insurance Sathy</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2022 - 2023</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Researched different Insurance services for providing innovative aggregrator solution.</li>
                  <li>Developed effective search service for providing crystal clear information and comparision about the insurance policies.</li>
                </ul>
              </CardContent>
            </Card> */}
            
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-foreground mb-6">Featured Projects</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-foreground mb-2">Research on effect of printing parameters and reinforcement in the 3d-printed PLA+</h3>
                <p className="text-muted-foreground mb-4">
                  This research was focused on investigation of effect of printing parameters and reinforcement on the mechanical
properties of 3d printed polylactic acid(pla+) composities. Specimens were fabricated in compliance with ASTM D638,
D695, and BS-2782 part III standards, while Bambu Studio 3d printer was used to print the specimen. The results
demonstrate that the printing temperature in range of 220C, printing density in the order of 80% and Rectilinear
printing pattern is most effective for tensile strength. Also, We found that 90% infill provides the highest compressive
strength (20.93 MPa), making it ideal for applications requiring maximum load-bearing capacity under compression.
Further, The impact test results revealed that different infill patterns influenced impact resistance, with the honeycomb
pattern exhibiting the highest energy absorption capacity, followed by gyroid and rectilinear patterns
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Pandas</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Materials Science</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">3D Printing</span>
                </div>
                {/* <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button> */}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-foreground mb-2">Design, Test and Analysis of the mid-range, general-purpose commercial aircraft, powered by twin
turbofan engines.</h3>
                <p className="text-muted-foreground mb-4">
Designed the aircraft using Plane-Maker and imported the model into X-Plane’s flight simulator for evaluation.Adjusted payload and fuel load to analyze aircraft performance under different conditions.
Conducted simulated test flights to evaluate the aircraft’s stability, control characteristics, and overall flight behavior.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Aircraft Design</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">X-Plane</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Aircraft Stability & Control</span>
                </div>
                {/* <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button> */}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-foreground mb-2">Aerodynamic Analysis of Canard Fins for Missiles: Effects of Sweep Angle on Lift and Drag</h3>
                <p className="text-muted-foreground mb-4">
In this research, the impact of canard sweep angles on missile aerodynamics was investigated, specifically focusing on
variations from 40 to 80 degrees. This methodology involves CAD modeling in CATIA V5 and computational fluid
dynamics (CFD) simulations in ANSYS 2023 R1. Sweep angle significantly affects both lift and drag characteristics of
canard fins in missile aerodynamics. There exists an optimal sweep angle range where lift is maximized without
introducing excessive drag. Beyond the optimal sweep angle, further increases in sweep angle can lead to a decrease
in lift and an increase in drag.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Aerodynamics Analysis</span>
                </div>
                {/* <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button> */}
              </CardContent>
            </Card>


            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-foreground mb-2">Design and Fly of BWB plane</h3>
                <p className="text-muted-foreground mb-4">
 Designed the BWB aircraft model in CATIA V5. Manufactured the aircraft body using foam, Integrated essential electronic components, including the Brushless
DC motors, RC receiver, digital servo motors, LIPO, and ESC, to establish the control system and power supply. Successfully tested and flew the prototype
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                   <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Basic CAD Design</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Basic Electronics</span>
                </div>
                {/* <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button> */}
              </CardContent>
            </Card>
            
            
            
            {/* <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-foreground mb-2">Task Management App</h3>
                <p className="text-muted-foreground mb-4">
                  Collaborative task management application with real-time updates, 
                  file sharing, and project tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Vue.js</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Express</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">MongoDB</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Socket.io</span>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card> */}

            {/* <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-foreground mb-2">Data Visualization Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  Interactive dashboard for business analytics with real-time data 
                  processing and custom reporting features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Python</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Django</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">D3.js</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Redis</span>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card> */}

            {/* <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-foreground mb-2">Mobile Banking App</h3>
                <p className="text-muted-foreground mb-4">
                  Secure mobile banking application with biometric authentication, 
                  transaction history, and budget tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">React Native</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Firebase</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">GraphQL</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">TypeScript</span>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card> */}
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
                      ARP4754(A) & ARP4761(A)
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      ARP4754 is guidelines for Development of Civil Aircraft and Systems that deal with the development processes which support certification of Aircraft systems addressing from the complete aircraft development cycle, from system requirements through systems verification.
                    </p>
                    <span className="text-sm text-muted-foreground">Published on Medium • May 2025</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://medium.com/@kamaljungkarki13579/arp4754-arp4761-a-e28a7c1f45e8" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Article
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>


            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      A beginner guide to the Pytest:
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Topics covered:
Python setup,
Virtual Environment setup,
pytest setup,
File setup,
Working with some basic syntax
                    </p>
                    <span className="text-sm text-muted-foreground">Published on Medium • Apr 2025</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://medium.com/@kamaljungkarki13579/a-beginner-guide-to-the-pytest-35149b4c07bc" target="_blank" rel="noopener noreferrer">
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
