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
          <h1 className="text-4xl font-semibold text-foreground mb-2">John Doe</h1>
          <p className="text-xl text-muted-foreground mb-6">Senior Software Engineer</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>john.doe@email.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>
          
          <div className="flex gap-4 mt-4">
            <Button variant="outline" size="sm" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
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
                Experienced software engineer with 8+ years of expertise in full-stack development, 
                cloud architecture, and team leadership. Passionate about building scalable solutions 
                and mentoring junior developers. Proven track record of delivering high-quality 
                products in fast-paced environments.
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
                    <h3 className="text-lg font-medium text-foreground">Senior Software Engineer</h3>
                    <p className="text-accent font-medium">Tech Solutions Inc.</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2021 - Present</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Led development of microservices architecture serving 1M+ daily users</li>
                  <li>Mentored team of 5 junior developers and conducted code reviews</li>
                  <li>Reduced system latency by 40% through performance optimization</li>
                  <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Software Engineer</h3>
                    <p className="text-accent font-medium">Digital Innovations Corp</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2019 - 2021</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Developed React-based web applications with TypeScript</li>
                  <li>Built RESTful APIs using Node.js and Express</li>
                  <li>Collaborated with designers to implement responsive UI/UX designs</li>
                  <li>Participated in agile development processes and sprint planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Junior Developer</h3>
                    <p className="text-accent font-medium">StartupXYZ</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2017 - 2019</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Developed web applications using JavaScript and Python</li>
                  <li>Maintained and improved existing codebase</li>
                  <li>Worked closely with senior developers to learn best practices</li>
                  <li>Contributed to documentation and testing processes</li>
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
                <h3 className="text-lg font-medium text-foreground mb-2">E-commerce Platform</h3>
                <p className="text-muted-foreground mb-4">
                  Full-stack e-commerce solution with payment processing, inventory management, 
                  and analytics dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">PostgreSQL</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">AWS</span>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
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
            </Card>

            <Card>
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
            </Card>

            <Card>
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
                      Building Scalable Microservices with Node.js
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      A comprehensive guide to designing and implementing microservices 
                      architecture for high-traffic applications.
                    </p>
                    <span className="text-sm text-muted-foreground">Published on Medium • March 2024</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
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
                      React Performance Optimization Techniques
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Practical strategies for improving React application performance 
                      and user experience.
                    </p>
                    <span className="text-sm text-muted-foreground">Published on Dev.to • January 2024</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
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
                      Database Design Patterns for Modern Applications
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Exploring different database design patterns and when to use 
                      them in modern web applications.
                    </p>
                    <span className="text-sm text-muted-foreground">Published on Hashnode • November 2023</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
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
          <p>© 2024 John Doe. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;