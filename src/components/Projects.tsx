
import React from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SpendLux - Expense Tracker",
      description: "A Progressive Web App for expense tracking with real-time analytics, built using Next.js, Supabase for backend, and Recharts for data visualization.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      techStack: ["Next.js", "Supabase", "Recharts", "PWA", "TailwindCSS"],
      githubUrl: "https://github.com/rahulsk666",
      demoUrl: "#",
      category: "Full Stack",
      year: "2024"
    },
    {
      id: 2,
      title: "SoccerQ - Tournament Manager",
      description: "Mobile-focused web application for soccer tournament management with team registration, match scheduling, and live score updates using React and Redux.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
      techStack: ["React.js", "Redux", "Mobile-First", "JavaScript"],
      githubUrl: "https://github.com/rahulsk666",
      demoUrl: "#",
      category: "Frontend",
      year: "2023"
    },
    {
      id: 3,
      title: "ProductCMS - E-commerce Manager",
      description: "Laravel-based content management system for e-commerce platforms with product catalog management, inventory tracking, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      techStack: ["Laravel", "PHP", "Bootstrap", "MySQL", "Admin Panel"],
      githubUrl: "https://github.com/rahulsk666",
      demoUrl: "#",
      category: "Backend",
      year: "2023"
    },
    {
      id: 4,
      title: "Hackathon Management Platform",
      description: "Full-stack platform for managing hackathon events with participant registration, team formation, project submission, and judging system.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
      techStack: ["Next.js", "MongoDB", "Node.js", "TypeScript"],
      githubUrl: "https://github.com/rahulsk666",
      demoUrl: "#",
      category: "Full Stack",
      year: "2024"
    },
    {
      id: 5,
      title: "Staff Management System",
      description: "Laravel-based admin interface for comprehensive staff management and inventory control with role-based access control and reporting features.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "RBAC"],
      githubUrl: "https://github.com/rahulsk666",
      demoUrl: "#",
      category: "Backend",
      year: "2022"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projects & Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of full-stack applications and systems I've built, showcasing my expertise 
            in modern web technologies and problem-solving capabilities.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    <span className="bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, index) => (
                      <motion.span 
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs rounded-full border border-blue-200 font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 group/btn hover:bg-gray-900 hover:text-white transition-colors"
                      asChild
                    >
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                        Code
                      </a>
                    </Button>
                    {project.demoUrl !== "#" && (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                        asChild
                      >
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 px-8"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
