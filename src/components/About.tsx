import React from 'react';
import { Users, Award, Code, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "8+ Years Experience",
      description: "Extensive experience in full-stack development across multiple technologies and platforms"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Team Leadership",
      description: "Led development teams and mentored junior developers in best practices and scalable solutions"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Tech Expertise",
      description: "Specialized in Laravel, iOS development, Ruby on Rails, and modern web technologies"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Scalable Solutions",
      description: "Built robust, scalable applications handling high traffic and complex business requirements"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-blue-600">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate Full-Stack Developer with a proven track record of delivering high-quality solutions 
              and leading development teams to success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Crafting Digital Excellence Since 2016
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  With over 8 years of experience in full-stack development, I specialize in creating robust, 
                  scalable applications using modern technologies. My expertise spans from backend development 
                  with PHP and Laravel to mobile app development with Swift and iOS.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Throughout my career, I've had the privilege of working with diverse teams, leading projects 
                  from conception to deployment, and mentoring junior developers. I'm passionate about clean code, 
                  best practices, and staying current with emerging technologies.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Currently available for new opportunities, I'm looking to bring my experience and expertise 
                  to a dynamic team where I can contribute to meaningful projects and continue growing as a developer.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">8+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">3</div>
                  <div className="text-sm text-gray-600">Tech Leadership Roles</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Developers Mentored</div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4">{highlight.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;