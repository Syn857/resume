import React from 'react';
import { ExternalLink, Github, Calendar, Users, Code, Award } from 'lucide-react';

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
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of significant projects and achievements throughout my career, 
              demonstrating expertise across different technologies and domains
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {projectStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-blue-600 mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Project Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center text-blue-600 font-semibold mb-2">
                          <span>{project.company}</span>
                          <span className="mx-2">•</span>
                          <span>{project.period}</span>
                        </div>
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {project.type}
                          </span>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies & Actions */}
                  <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
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
                            className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                          >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View Live Project
                          </a>
                        )}
                        <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                          <ExternalLink className="h-5 w-5" />
                          <span>View Details</span>
                        </button>
                        {project.type === "Mobile Application" && (
                          <button className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-semibold shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                            <Github className="h-5 w-5" />
                            <span>Case Study</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Interested in My Work?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
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
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Let's Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;