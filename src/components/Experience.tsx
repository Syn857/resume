import React from 'react';
import { MapPin, Calendar, ArrowRight, Briefcase, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech House Sdn Bhd",
      location: "Kuching, Sarawak, Malaysia",
      period: "Oct 2022 - Present",
      duration: "2+ years",
      type: "Current Position",
      achievements: [
        "Led development of enterprise-level web applications using Laravel and modern PHP practices",
        "Architected scalable database solutions handling 100K+ daily transactions",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored 5+ junior developers in best coding practices and framework optimization",
        "Collaborated with cross-functional teams to deliver projects on time and within budget"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Git", "CI/CD"]
    },
    {
      title: "Full Stack Developer",
      company: "TheJoeCode",
      location: "Remote",
      period: "Sep 2016 - May 2022",
      duration: "5 years 9 months",
      type: "Previous Role",
      achievements: [
        "Developed and maintained multiple client applications using Laravel and Ruby on Rails",
        "Built responsive web interfaces with modern JavaScript and CSS frameworks",
        "Optimized application performance resulting in 40% faster load times",
        "Integrated third-party APIs and payment gateways for e-commerce solutions",
        "Managed database migrations and optimization for production environments"
      ],
      technologies: ["Laravel", "Ruby on Rails", "PostgreSQL", "JavaScript", "AJAX", "HTML/CSS"]
    },
    {
      title: "iOS Tech Lead",
      company: "Storie.Inc",
      location: "Remote",
      period: "Aug 2015 - Aug 2016",
      duration: "1 year",
      type: "Leadership Role",
      achievements: [
        "Led iOS development team of 4 developers for mobile storytelling platform",
        "Architected iOS app architecture using Swift and modern design patterns",
        "Implemented Core Data for efficient local data management and synchronization",
        "Coordinated with backend team to design REST APIs for seamless data integration",
        "Achieved 4.5+ App Store rating with 50K+ downloads in first 6 months"
      ],
      technologies: ["Swift", "iOS", "UIKit", "Core Data", "REST APIs", "CocoaPods"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-purple-900/30" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            8+ years of progressive experience in full-stack development, team leadership, and delivering scalable solutions
          </p>
        </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 to-cyan-500/50 hidden lg:block"></div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Timeline Dot and Duration */}
                  <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-purple-400/30 hidden lg:block shadow-lg"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>
                      <span className="lg:ml-4 text-sm font-medium text-purple-300 bg-purple-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-400/30">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-center lg:text-left lg:ml-10">
                      <div className="text-lg font-semibold text-white">{exp.duration}</div>
                      <div className="text-sm text-gray-400">{exp.period}</div>
                    </div>
                  </div>

                  {/* Experience Content */}
                  <div className="lg:col-span-9">
                    <motion.div
                      className="group relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-500 overflow-hidden"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10 mb-6">
                        <div className="flex items-center mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 mr-4">
                            <Briefcase className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <h4 className="text-xl text-cyan-400 font-semibold">
                              {exp.company}
                            </h4>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center text-gray-300 gap-4">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-cyan-400" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="relative z-10 mb-6">
                        <div className="flex items-center mb-4">
                          <Star className="h-5 w-5 text-yellow-400 mr-2" />
                          <h5 className="text-lg font-semibold text-white">Key Achievements</h5>
                        </div>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: achIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <ArrowRight className="h-5 w-5 text-purple-400 mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="relative z-10">
                        <h5 className="text-lg font-semibold text-white mb-4">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="backdrop-blur-sm bg-white/10 text-cyan-300 px-3 py-2 rounded-lg text-sm font-medium border border-white/20 hover:border-cyan-400/50 hover:bg-white/20 hover:text-white transition-all duration-300 cursor-default"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Career Summary */}
          <motion.div
            className="mt-16 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-8 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
                Career Progression Summary
              </h3>
              <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed text-lg">
                My career journey showcases consistent growth from iOS technical leadership to full-stack development expertise. 
                I've successfully transitioned between different technologies while maintaining high standards of code quality 
                and team collaboration. This diverse experience has equipped me with a unique perspective on both frontend 
                and backend development, making me a versatile asset for any development team.
              </p>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;