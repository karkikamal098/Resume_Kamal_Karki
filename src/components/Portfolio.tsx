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
                Aerospace Engineer with experience in designing, developing, and testing deep tech solutions. I have hands-on experience with software development and automation. Besides, I have also founded a social organization to teach students of remote schools in Nepal with the robotics and other other applicable engineering. And, I am also the founder of <span className="font-semibold">Nebulaleap Technology Private Limited</span>.
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
                    <h3 className="text-lg font-medium text-foreground">Internship</h3>
                    <p className="text-accent font-medium">Airbus India Private Limited</p>
                  </div>
                  <span className="text-sm text-muted-foreground">July 30 - Now</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Working on the Flight warning system to enhance safety and reliability.</li>
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
                  <li>Worked on the end to end maintenance of the aircraft structures, and other parts.</li>
                  <li>Worked with the composites materials that could be used in the deicing parts of the aircraft.</li>
                </ul>
              </CardContent>
            </Card>

            {/* <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Founder</h3>
                    <p className="text-accent font-medium">Nebulaleap Technology Private Limited</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2024 - Now</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Served 10+ clients in various industries</li>
                  <li>Built RESTful APIs using Node.js and Express</li>
                  <li>Collaborated with designers to implement responsive UI/UX designs</li>
                  <li>Participated in agile development processes and sprint planning</li>
                </ul>
              </CardContent>
            </Card> */}

            <Card>
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
            </Card>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-foreground mb-6">Featured Projects</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-foreground mb-2">Influence of 3D Printing Parameters on the Strength of Printed Specimens</h3>
                <p className="text-muted-foreground mb-4">
                  Research on how different 3D printing parameters affect the mechanical properties of printed materials. Research involved printing temperature, printing speed, and printing density to determine their impact on tensile strength, compressive strength, and impact resistance.
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
