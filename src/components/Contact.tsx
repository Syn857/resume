import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {



  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-gray-900">Email</p>
                        <a 
                          href="mailto:josiahpeter29@gmail.com"
                          className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                        >
                          josiahpeter29@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">+60 10-817 2992</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-gray-900">Location</p>
                        <p className="text-gray-600">Kuching, Sarawak, Malaysia</p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

              {/* Contact Actions */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Work Together</h3>
                  <p className="text-gray-600 mb-8">
                    I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development. Feel free to reach out!
                  </p>
                  
                  <div className="space-y-4">
                    <a
                      href="mailto:josiahpeter29@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Josiah,%0A%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you.%0A%0A"
                      className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Send Email
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                    
                    <a
                      href="https://linkedin.com/in/josiah-peter-james-4a3118209"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-6 py-4 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      Connect on LinkedIn
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                    
                    <a
                      href="https://github.com/syn857"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-6 py-4 border border-gray-800 text-base font-medium rounded-lg text-gray-800 bg-white hover:bg-gray-800 hover:text-white transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      View GitHub
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Quick Response</h4>
                  <p className="text-sm text-gray-600">
                    I typically respond to emails within 24 hours. For urgent matters, feel free to connect with me on LinkedIn for faster communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;