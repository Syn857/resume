import React from 'react';
import { Code2, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Code2 className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Josiah Peter James</span>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Full-Stack Developer specializing in Laravel, iOS, and Ruby on Rails development. 
                Passionate about creating scalable solutions and mentoring the next generation of developers.
              </p>
              <div className="mt-6 flex space-x-4">
                <span className="inline-flex items-center text-green-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Available for new opportunities
                </span>
              </div>
            </div>

            {/* Quick Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>📧 josiahpeter29@gmail.com</p>
                <p>📱 +60 10-817 2992</p>
                <p>📍 Kuching, Sarawak, Malaysia</p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
                <span>© {currentYear} Made with</span>
                <Heart className="h-4 w-4 text-red-500" />
                <span>by Josiah Peter James</span>
              </div>
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110 flex items-center justify-center"
                aria-label="Back to top"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Additional Footer Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              This portfolio showcases my professional experience and technical capabilities. 
              All project details and achievements are accurate as of the last update.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span>Built with React & TypeScript</span>
              <span>•</span>
              <span>Styled with Tailwind CSS</span>
              <span>•</span>
              <span>Deployed with Vite</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;