import { User, MapPin, Calendar, Award, Download, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '8+', icon: Calendar },
    { label: 'Projects Completed', value: '50+', icon: Award },
    { label: 'Technologies', value: '15+', icon: Zap },
    { label: 'Global Reach', value: 'Remote', icon: MapPin }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-purple-900/30" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting the future of digital experiences through innovative technology and creative vision.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Simplified rings */}
              <div
                className="absolute inset-0 rounded-full border-2 border-purple-500/30"
                style={{ width: '320px', height: '320px' }}
              />
              <div
                className="absolute inset-2 rounded-full border border-cyan-500/20"
              />
              
              {/* Profile container */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/10 p-1 relative overflow-hidden">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/profile.jpg" 
                    alt="Josiah Peter James" 
                    className="w-full h-full object-cover rounded-full"
                  />
                  
                  {/* Simplified particles */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-cyan-400/60 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-400/60 rounded-full"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  />
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white p-4 rounded-full shadow-lg shadow-purple-500/25 backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.02 }}
              >
                <Award size={24} />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Hello, I'm Josiah Peter James
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a visionary full-stack developer with over 8 years of experience crafting 
                  cutting-edge web applications and immersive digital experiences. I specialize in 
                  modern JavaScript frameworks, 3D web technologies, and creating seamless user interfaces 
                  that push the boundaries of what's possible on the web.
                </p>
                <p>
                  My journey began with a fascination for the intersection of technology and creativity. 
                  Today, I'm dedicated to building innovative solutions that not only solve complex problems 
                  but also inspire and delight users. I believe in writing clean, performant code while 
                  staying at the forefront of emerging technologies like WebGL, AI integration, and 
                  immersive web experiences.
                </p>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    className="p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg group-hover:from-purple-600/30 group-hover:to-cyan-600/30 transition-all duration-300">
                        <IconComponent className="text-purple-300 group-hover:text-purple-200 transition-colors duration-300" size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-xl text-white">{stat.value}</p>
                        <p className="text-sm text-gray-400">{stat.label}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download Resume</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button
                className="group px-8 py-4 border-2 border-purple-400/50 rounded-xl font-semibold text-purple-300 backdrop-blur-sm bg-white/5 transition-all duration-300 hover:border-purple-400 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="group-hover:text-white transition-colors duration-300">View Projects</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About