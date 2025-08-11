import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {



  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-purple-900/30" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate or discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="group relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-8 md:p-12 hover:border-purple-500/30 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6 group-hover:text-purple-200 transition-colors duration-300">Contact Information</h3>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center space-x-4 p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 group/item"
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 group-hover/item:shadow-lg transition-shadow duration-300">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-white group-hover/item:text-purple-200 transition-colors duration-300">Email</p>
                        <a
                          href="mailto:josiahpeter29@gmail.com"
                          className="text-cyan-400 hover:text-white transition-colors duration-200 font-medium"
                        >
                          josiahpeter29@gmail.com
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-4 p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group/item"
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-cyan-600 to-purple-600 group-hover/item:shadow-lg transition-shadow duration-300">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-white group-hover/item:text-cyan-200 transition-colors duration-300">Phone</p>
                        <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">+60 10-817 2992</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-4 p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:border-green-500/30 transition-all duration-300 group/item"
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-green-600 to-cyan-600 group-hover/item:shadow-lg transition-shadow duration-300">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-white group-hover/item:text-green-200 transition-colors duration-300">Location</p>
                        <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">Kuching, Sarawak, Malaysia</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Actions */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6 group-hover:text-cyan-200 transition-colors duration-300">Let's Work Together</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development. Feel free to reach out!
                  </p>

                  <div className="space-y-4">
                    <motion.a
                      href="mailto:josiahpeter29@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Josiah,%0A%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you.%0A%0A"
                      className="w-full inline-flex items-center justify-center px-8 py-4 backdrop-blur-sm bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 group/btn shadow-lg hover:shadow-purple-500/25"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Send className="h-5 w-5 mr-3 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Send Email
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </motion.a>

                    <motion.a
                      href="https://linkedin.com/in/josiah-peter-james-4a3118209"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-8 py-4 backdrop-blur-sm bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:border-cyan-500/50 hover:bg-white/20 transition-all duration-300 group/btn shadow-lg hover:shadow-cyan-500/25"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Linkedin className="h-5 w-5 mr-3 group-hover/btn:scale-110 transition-transform duration-300" />
                      Connect on LinkedIn
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </motion.a>

                    <motion.a
                      href="https://github.com/syn857"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-8 py-4 backdrop-blur-sm bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:border-green-500/50 hover:bg-white/20 transition-all duration-300 group/btn shadow-lg hover:shadow-green-500/25"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Github className="h-5 w-5 mr-3 group-hover/btn:scale-110 transition-transform duration-300" />
                      View GitHub Profile
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </motion.a>
                  </div>
                </div>

                {/* Social Media Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold text-white mb-6 group-hover:text-purple-200 transition-colors duration-300">Follow Me</h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://linkedin.com/in/josiah-peter-james-4a3118209"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 backdrop-blur-sm bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group/social"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Linkedin className="h-6 w-6 group-hover/social:scale-110 transition-transform duration-300" />
                    </motion.a>
                    <motion.a
                      href="https://github.com/syn857"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 backdrop-blur-sm bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-xl hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 group/social"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Github className="h-6 w-6 group-hover/social:scale-110 transition-transform duration-300" />
                    </motion.a>
                    <motion.a
                      href="mailto:josiahpeter29@gmail.com"
                      className="p-4 backdrop-blur-sm bg-gradient-to-br from-red-600 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 group/social"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MessageCircle className="h-6 w-6 group-hover/social:scale-110 transition-transform duration-300" />
                    </motion.a>
                  </div>
                </motion.div>

                <motion.div
                  className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-200 transition-colors duration-300">Quick Response</h4>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    I typically respond to emails within 24 hours. For urgent matters, feel free to find me on X @ayakdek for faster communication.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
