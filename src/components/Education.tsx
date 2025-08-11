import React from 'react';
import { GraduationCap, Award, BookOpen, ExternalLink, Sparkles, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Professional Certificate in Computer Science/IT (Programming)",
      institution: "NEXT Academy",
      location: "Kuala Lumpur, Malaysia",
      period: "2017",
      grade: "Certificate",
      highlights: [
        "Intensive programming bootcamp focusing on practical development skills",
        "Hands-on experience with modern web development frameworks",
        "Project-based learning approach",
        "Industry-relevant curriculum designed by tech professionals"
      ]
    },
    {
      degree: "Diploma in Computer Science",
      institution: "University of Edinburgh",
      location: "Edinburgh, Scotland",
      period: "2015",
      grade: "Diploma",
      highlights: [
        "Strong foundation in computer science fundamentals",
        "Exposure to international academic standards",
        "Focus on theoretical and practical aspects of computing",
        "Cross-cultural learning experience"
      ]
    },
    {
      degree: "SPM/\"O\" Levels",
      institution: "SMK Bukit Jelutong",
      location: "Selangor, Malaysia",
      period: "2012",
      grade: "Secondary Education",
      highlights: [
        "Completed Malaysian Certificate of Education",
        "Strong performance in Mathematics and Science subjects",
        "Foundation for higher education pursuits",
        "Active participation in school technology clubs"
      ]
    }
  ];

  const certifications = [
    {
      title: "Professional Certificate in Computer Science/IT",
      issuer: "NEXT Academy",
      date: "2017",
      description: "Intensive programming bootcamp certification focusing on practical development skills and modern frameworks"
    },
    {
      title: "Laravel Framework Expertise",
      issuer: "Self-Directed Learning",
      date: "2016-Present",
      description: "8+ years of hands-on experience with Laravel framework, including advanced features and best practices"
    },
    {
      title: "iOS Development with Swift",
      issuer: "Professional Experience",
      date: "2015-2016",
      description: "Technical leadership experience in iOS development using Swift and modern iOS frameworks"
    }
  ];

  const continuousLearning = [
    "Laravel Framework Mastery (2016-Present)",
    "PHP Best Practices and Modern Development (2016-Present)",
    "Ruby on Rails Development (2016-2022)",
    "iOS Development with Swift (2015-2016)",
    "Database Design and Optimization (2016-Present)",
    "CI/CD and DevOps Practices (2022-Present)"
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-purple-900/30" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      
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
              Education & Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Strong academic foundation combined with continuous professional development and industry certifications
            </p>
          </motion.div>

          {/* Formal Education */}
          <div className="mb-16">
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 mr-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Formal Education</h3>
            </motion.div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="group relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-500 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
                    <div className="lg:col-span-3">
                      <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">{edu.degree}</h4>
                      <h5 className="text-xl text-cyan-400 font-semibold mb-4">{edu.institution}</h5>
                      <div className="text-gray-300 mb-6">
                        <p className="mb-1">{edu.location}</p>
                        <p className="mb-1">{edu.period}</p>
                        <p className="font-semibold text-purple-300">{edu.grade}</p>
                      </div>
                      
                      <div>
                        <h6 className="font-semibold text-white mb-3">Highlights:</h6>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, hIndex) => (
                            <motion.li
                              key={hIndex}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: (index * 0.1) + (hIndex * 0.05) }}
                              viewport={{ once: true }}
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-300">{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <motion.div
                        className="text-center p-6 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 mb-4 mx-auto w-fit">
                          <GraduationCap className="h-12 w-12 text-white" />
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{edu.institution}</p>
                        <p className="text-lg font-bold text-cyan-400">{edu.period}</p>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional Certifications */}
          <div className="mb-16">
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-600 to-purple-600 mr-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Professional Certifications</h3>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="group relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-600 to-purple-600">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">{cert.date}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300 relative z-10">{cert.title}</h4>
                  <h5 className="text-cyan-400 font-semibold mb-3 relative z-10">{cert.issuer}</h5>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 relative z-10">{cert.description}</p>
                  
                  <button className="mt-4 text-cyan-400 hover:text-white font-medium text-sm flex items-center transition-colors duration-300 relative z-10">
                    View Certificate
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </button>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Continuous Learning */}
          <div>
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-600 to-cyan-600 mr-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Continuous Learning</h3>
            </motion.div>
            
            <motion.div
              className="group relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-8 hover:border-green-500/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                Committed to staying current with the latest technologies and industry best practices through 
                continuous learning and professional development courses.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 relative z-10">
                {continuousLearning.map((course, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-4 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 hover:border-green-400/50 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-gray-300">{course}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="text-center relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 mb-4">
                  Always exploring new technologies and frameworks to enhance my skill set
                </p>
                <div className="inline-flex items-center text-green-400 font-medium backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full border border-green-400/30">
                  <Brain className="h-5 w-5 mr-2" />
                  <span>Lifelong Learning Advocate</span>
                  <Sparkles className="h-4 w-4 ml-2 animate-pulse" />
                </div>
              </motion.div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;