import React from 'react';
import { Code2, Heart, ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-purple-900/30 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Description */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Code2 className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Josiah Peter James</span>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Full-Stack Developer specializing in Laravel, iOS, and Ruby on Rails development. 
                Passionate about creating scalable solutions and mentoring the next generation of developers.
              </p>
              <div className="mt-6 flex flex-col space-y-4">
                <span className="inline-flex items-center text-green-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Available for new opportunities
                </span>
                <div className="flex space-x-4">
                  <a href="https://github.com" className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-purple-600/30 transition-all duration-300 backdrop-blur-sm border border-white/10">
                    <Github size={20} />
                  </a>
                  <a href="https://linkedin.com" className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-cyan-600/30 transition-all duration-300 backdrop-blur-sm border border-white/10">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://twitter.com" className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-purple-600/30 transition-all duration-300 backdrop-blur-sm border border-white/10">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Get In Touch</h3>
              <div className="space-y-3">
                <a href="mailto:josiahpeter29@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors group">
                  <div className="p-2 rounded-lg bg-white/5 mr-3 group-hover:bg-purple-600/30 transition-all duration-300">
                    <span className="text-sm">📧</span>
                  </div>
                  josiahpeter29@gmail.com
                </a>
                <div className="flex items-center text-gray-300">
                  <div className="p-2 rounded-lg bg-white/5 mr-3">
                    <span className="text-sm">📱</span>
                  </div>
                  +60 10-817 2992
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="p-2 rounded-lg bg-white/5 mr-3">
                    <span className="text-sm">📍</span>
                  </div>
                  Kuching, Sarawak, Malaysia
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <motion.div
            className="border-t border-white/10 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
                <span>© {currentYear} Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>by Josiah Peter James</span>
              </div>
              
              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center backdrop-blur-sm border border-white/10"
                aria-label="Back to top"
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>

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