import React from 'react';
import { GraduationCap, Award, BookOpen, ExternalLink } from 'lucide-react';

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
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Education & <span className="text-blue-600">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strong academic foundation combined with continuous professional development and industry certifications
            </p>
          </div>

          {/* Formal Education */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-800">Formal Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3">
                      <h4 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h4>
                      <h5 className="text-xl text-blue-600 font-semibold mb-4">{edu.institution}</h5>
                      <div className="text-gray-600 mb-6">
                        <p className="mb-1">{edu.location}</p>
                        <p className="mb-1">{edu.period}</p>
                        <p className="font-semibold">{edu.grade}</p>
                      </div>
                      
                      <div>
                        <h6 className="font-semibold text-gray-800 mb-3">Highlights:</h6>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <GraduationCap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                        <p className="text-sm text-gray-600">{edu.institution}</p>
                        <p className="text-lg font-bold text-blue-600">{edu.period}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Certifications */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-800">Professional Certifications</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <Award className="h-8 w-8 text-blue-600 flex-shrink-0" />
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{cert.date}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{cert.title}</h4>
                  <h5 className="text-blue-600 font-semibold mb-3">{cert.issuer}</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                  
                  <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                    View Certificate
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Continuous Learning */}
          <div>
            <div className="flex items-center mb-8">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-800">Continuous Learning</h3>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Committed to staying current with the latest technologies and industry best practices through 
                continuous learning and professional development courses.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {continuousLearning.map((course, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{course}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Always exploring new technologies and frameworks to enhance my skill set
                </p>
                <div className="inline-flex items-center text-blue-600 font-medium">
                  <BookOpen className="h-5 w-5 mr-2" />
                  <span>Lifelong Learning Advocate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;