import React from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

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
      location: "Kuala Lumpur, Malaysia",
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
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Professional <span className="text-blue-600">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              8+ years of progressive experience in full-stack development, team leadership, and delivering scalable solutions
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-blue-200 hidden lg:block"></div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Timeline Dot and Duration */}
                  <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
                    <div className="flex items-center mb-4">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-200 hidden lg:block"></div>
                      <span className="lg:ml-4 text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-center lg:text-left lg:ml-8">
                      <div className="text-lg font-semibold text-gray-800">{exp.duration}</div>
                      <div className="text-sm text-gray-500">{exp.period}</div>
                    </div>
                  </div>

                  {/* Experience Content */}
                  <div className="lg:col-span-9">
                    <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {exp.title}
                        </h3>
                        <h4 className="text-xl text-blue-600 font-semibold mb-3">
                          {exp.company}
                        </h4>
                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="mr-6">{exp.location}</span>
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-gray-800 mb-4">Key Achievements:</h5>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Career Summary */}
          <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Career Progression Summary
            </h3>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
              My career journey showcases consistent growth from iOS technical leadership to full-stack development expertise. 
              I've successfully transitioned between different technologies while maintaining high standards of code quality 
              and team collaboration. This diverse experience has equipped me with a unique perspective on both frontend 
              and backend development, making me a versatile asset for any development team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;