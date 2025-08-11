import { Code, Database, Globe, Smartphone, Cloud, Wrench, Zap, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="w-8 h-8" />,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
      color: 'purple',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-8 h-8" />,
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
      color: 'cyan',
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8" />,
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Mobile UI/UX'],
      color: 'green',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-8 h-8" />,
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Linux'],
      color: 'orange',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      title: '3D & Animation',
      icon: <Cpu className="w-8 h-8" />,
      skills: ['Three.js', 'WebGL', 'GSAP', 'Blender', 'React Three Fiber', 'Shaders'],
      color: 'violet',
      gradient: 'from-violet-600 to-purple-600'
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="w-8 h-8" />,
      skills: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest', 'Vite'],
      color: 'indigo',
      gradient: 'from-indigo-600 to-blue-600'
    }
  ]

  const coreCompetencies = [
    { label: 'Problem Solving', percentage: 95, color: 'purple' },
    { label: 'Innovation', percentage: 92, color: 'cyan' },
    { label: 'Code Quality', percentage: 90, color: 'green' },
    { label: 'Team Leadership', percentage: 88, color: 'orange' }
  ]

  return (
    <section id="skills" className="py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-slate-900/50" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive arsenal of cutting-edge technologies for crafting extraordinary digital experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-purple-500/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01, y: -2 }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Simplified floating particle */}
              <motion.div
                className="absolute top-4 right-4 w-1.5 h-1.5 bg-cyan-400/40 rounded-full"
                animate={{ 
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
              />
              
              <div className={`inline-flex p-4 rounded-xl mb-6 bg-gradient-to-br ${category.gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-purple-200 transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-2 bg-white/10 text-gray-300 rounded-lg text-sm font-medium border border-white/20 hover:border-purple-400/50 hover:bg-white/20 hover:text-white transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
        </div>
        
        {/* Core Competencies */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-12">
            Core Competencies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {coreCompetencies.map((competency, index) => {
              const circumference = 2 * Math.PI * 45
              const strokeDasharray = `${(competency.percentage / 100) * circumference} ${circumference}`
              
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="6"
                        fill="none"
                      />
                      {/* Progress circle */}
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke={`url(#gradient-${competency.color})`}
                        strokeWidth="6"
                        strokeLinecap="round"
                        fill="none"
                        strokeDasharray={strokeDasharray}
                        initial={{ strokeDasharray: `0 ${circumference}` }}
                        whileInView={{ strokeDasharray }}
                        transition={{ duration: 2, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                      {/* Gradient definitions */}
                      <defs>
                        <linearGradient id={`gradient-${competency.color}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={competency.color === 'purple' ? '#8B5CF6' : competency.color === 'cyan' ? '#06B6D4' : competency.color === 'green' ? '#10B981' : '#F59E0B'} />
                          <stop offset="100%" stopColor={competency.color === 'purple' ? '#EC4899' : competency.color === 'cyan' ? '#3B82F6' : competency.color === 'green' ? '#059669' : '#DC2626'} />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Percentage text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span
                        className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                        viewport={{ once: true }}
                      >
                        {competency.percentage}%
                      </motion.span>
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>
                  
                  <p className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                    {competency.label}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
        
        {/* Simplified floating tech icons - Hidden on mobile to prevent overlay */}
        <motion.div
          className="absolute top-20 left-4 lg:left-16 p-3 bg-white/10 rounded-xl border border-white/20 hidden lg:block"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Zap className="text-yellow-400" size={24} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-4 lg:right-16 p-3 bg-white/10 rounded-xl border border-white/20 hidden lg:block"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        >
          <Code className="text-cyan-400" size={24} />
        </motion.div>
      </div>
    </section>
  )
}

export default Skills