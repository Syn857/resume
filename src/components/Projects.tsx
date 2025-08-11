import React from 'react';
import { ExternalLink, Github, Calendar, Users, Code, Award, Rocket, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Wedding RSVP Application",
      company: "Personal Project",
      period: "2025",
      description: "A beautiful and functional wedding RSVP web application featuring multi-language support, guest management, and elegant UI design for celebrating special moments.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
      achievements: [
        "Multi-language interface (English/Local)",
        "Responsive wedding-themed design",
        "Guest RSVP management system",
        "Live deployment and hosting"
      ],
      type: "Web Application",
      status: "Live",
      liveUrl: "https://www.celebrate-the-kymdom.xyz/"
    },
    {
      title: "Enterprise CRM System",
      company: "Tech House Sdn Bhd",
      period: "2022 - Present",
      description: "Comprehensive Customer Relationship Management system with advanced authentication, multi-role user management, and robust RESTful API architecture for enterprise-level operations.",
      technologies: ["Laravel", "PHP", "MySQL", "Authentication", "REST APIs", "Multi-Role System", "Vue.js"],
      achievements: [
        "Multi-role authentication system",
        "RESTful API architecture",
        "Advanced user permission management",
        "Scalable enterprise solution"
      ],
      type: "Enterprise Application",
      status: "In Production"
    }
  ];

  const projectStats = [
    { label: "Total Projects", value: "50+", icon: <Code className="h-6 w-6" /> },
    { label: "Years Experience", value: "8+", icon: <Calendar className="h-6 w-6" /> },
    { label: "Team Members Led", value: "15+", icon: <Users className="h-6 w-6" /> },
    { label: "Technologies Mastered", value: "20+", icon: <Award className="h-6 w-6" /> }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-slate-900/50" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div>
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of significant projects and achievements throughout my career, 
              demonstrating expertise across different technologies and domains
            </p>
          </motion.div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {projectStats.map((stat, index) => (
              <motion.div
                key={index}
                className="group text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 mb-4 mx-auto w-fit group-hover:shadow-lg transition-shadow duration-300">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors duration-300">{stat.value}</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                <div className="p-8 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Project Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300 mb-2">
                            {project.title}
                          </h3>
                          <div className="flex items-center text-cyan-400 font-semibold mb-2">
                            <span>{project.company}</span>
                            <span className="mx-2">•</span>
                            <span>{project.period}</span>
                          </div>
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-200 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30">
                              {project.type}
                            </span>
                            <span className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 text-green-200 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
                              {project.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {project.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Technologies & Actions */}
                    <div className="lg:col-span-1">
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-200 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                              <Rocket className="w-5 h-5 mr-2" />
                              View Live Project
                            </a>
                          )}
                          <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                            <ExternalLink className="h-5 w-5" />
                            <span>View Details</span>
                          </button>
                          {project.type === "Mobile Application" && (
                            <button className="w-full px-6 py-3 border-2 border-white/20 text-gray-300 rounded-xl hover:border-purple-500/50 hover:text-white hover:bg-purple-600/20 transition-all duration-300 font-semibold shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                              <Github className="h-5 w-5" />
                              <span>Case Study</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center bg-white/5 rounded-2xl p-8 border border-white/10 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-2xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in My Work?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                These projects represent just a portion of my experience. I'm always excited to discuss 
                new challenges and opportunities to create innovative solutions.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 mx-auto"
              >
                <Zap className="h-5 w-5" />
                <span>Let's Discuss Your Project</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;