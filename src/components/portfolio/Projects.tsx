import { ExternalLink, Server, Video, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    icon: Server,
    title: 'E-COMMERCE WEBSITE',
    problem: 'Our eCommerce platform is designed to provide a seamless shopping experience, with easy navigation, detailedproduct descriptions, highresolution images, and secure checkout options',
    decisions: [
      'Built a full-stack e-commerce app with React, Node.js & MongoDB featuring auth, product catalog & cart management',
      'Developed RESTful APIs with JWT authentication, role-based access control, and deployed frontend/backend on Vercel',
      'Implemented cart system, order management & product filtering with Cloudinary image uploads and admin controls',
    ],
    impact: 'Built a responsive MERN-stack e-commerce application handling end-to-end user transactions.',
    stack: [ 'React','Tailwind CSS', 'REST APIs','MongoDB','Node.js','JWT Authentication','Cloudinary Image Uploads','Admin Controls','Vercel Deployment'],
  },
  {
    icon: Server,
    title: 'E-Drive Learning Platform',
    problem: 'A secure, full-stack educational portal featuring role-based technical resource management and an integrated local AI learning assistant.',
    decisions: [
      'Developed a role-based educational platform using React.js and Express, enabling secure subject-specific file uploads and resource management for staff and students',
      'Integrated a local AI chatbot (GPT-4All) directly into the application interfaces, providing instant, intelligent learning assistance to students across various technical modules',
    ],
    impact: 'Streamlined academic resource access and student engagement by developing an AI-integrated portal for centralized study materials, attendance tracking, and technical blogging.',
    stack: ['React', 'CSS', 'Node.js', 'Express.js', 'JWT Authentication', 'MongoDB', 'Admin Controls', 'Vercel Deployment'],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Case Studies
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Real production systems with measurable outcomes. Each project represents 
              a problem solved, not just code written.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <article
                key={index}
                className="group p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left - Icon & Title */}
                  <div className="lg:w-1/3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="font-mono text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Right - Details */}
                  <div className="lg:w-2/3 space-y-6">
                    {/* Problem */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        Description
                      </h4>
                      <p className="text-muted-foreground">{project.problem}</p>
                    </div>

                    {/* Technical Decisions */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        Technical Decisions
                      </h4>
                      <ul className="space-y-2">
                        {project.decisions.map((decision, dIndex) => (
                          <li key={dIndex} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1.5">→</span>
                            <span>{decision}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        Impact
                      </h4>
                      <p className="text-foreground font-medium">{project.impact}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
