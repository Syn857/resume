import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero';
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import FloatingParticles from './components/3d/FloatingParticles'
import VisualEffects from './components/effects/VisualEffects'
import { ScrollProgress, ScrollAnimation, StaggeredAnimation } from './components/effects/ScrollAnimations'
import NeonCircuits, { CircuitPattern } from './components/effects/NeonCircuits'

const App: React.FC = () => {

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-slate-900 to-cyan-900/10" />
      
      {/* Optimized Background Effects - Reduced for performance */}
      <NeonCircuits density="low" color="multi" animated={false} />
      <CircuitPattern pattern="grid" className="opacity-20" />
      




      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        
        <section id="hero" className="relative z-20">
          <Hero />
        </section>
        
        <section id="about" className="relative z-20">
          <ScrollAnimation animation="fadeIn" delay={0.1}>
            <About />
          </ScrollAnimation>
        </section>
        
        <section id="skills" className="relative z-20">
          <ScrollAnimation animation="slideUp" delay={0.1}>
            <Skills />
          </ScrollAnimation>
        </section>
        
        <section id="experience" className="relative z-20">
          <ScrollAnimation animation="slideLeft" delay={0.1}>
            <Experience />
          </ScrollAnimation>
        </section>
        
        <section id="education" className="relative z-20">
          <ScrollAnimation animation="slideRight" delay={0.1}>
            <Education />
          </ScrollAnimation>
        </section>
        
        <section id="projects" className="relative z-20">
          <StaggeredAnimation staggerDelay={0.1}>
            <Projects />
          </StaggeredAnimation>
        </section>
        
        <section id="contact" className="relative z-20">
          <ScrollAnimation animation="fadeIn" delay={0.1}>
            <Contact />
          </ScrollAnimation>
        </section>
        
        <section className="relative z-20">
          <ScrollAnimation animation="fadeIn" delay={0.1}>
            <Footer />
          </ScrollAnimation>
        </section>
      </div>


    </div>
  )
}

export default App
