import React from 'react';
import { Code, Database, Smartphone, Server, GitBranch, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Programming Languages",
      skills: [
        { name: "PHP", level: 95 },
        { name: "Swift", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Ruby", level: 80 }
      ]
    },
    {
      icon: <Server className="h-8 w-8 text-blue-600" />,
      title: "Frameworks",
      skills: [
        { name: "Laravel", level: 95 },
        { name: "Ruby on Rails", level: 85 },
        { name: "SwiftUI", level: 90 }
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "Databases",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 }
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: "Platforms",
      skills: [
        { name: "iOS", level: 90 },
        { name: "Web", level: 95 },
        { name: "API-based microservices", level: 85 }
      ]
    },
    {
      icon: <GitBranch className="h-8 w-8 text-blue-600" />,
      title: "Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "CocoaPods", level: 85 },
        { name: "Laravel Mix", level: 85 },
        { name: "CI/CD pipelines", level: 80 }
      ]
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: "Frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "AJAX", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Technical <span className="text-blue-600">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across the full technology stack, from backend development to mobile applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-lg font-semibold text-gray-800 ml-3">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Technologies */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Additional Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Laravel Migrations', 'Eloquent ORM', 'Laravel Middleware', 'Swift', 
                'SwiftUI', 'UIKit', 'Core Data', 'Xcode', 'REST APIs', 'Microservices',
                'Agile Development', 'Code Reviews', 'Unit Testing', 'Performance Optimization'
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;