import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

interface VisualEffectsProps {
  children: React.ReactNode;
  enableParallax?: boolean;
  enableMotionBlur?: boolean;
  enableChromeTexture?: boolean;
  enableScrollTrigger?: boolean;
  enableNeonGlow?: boolean;
  intensity?: number;
}

const VisualEffects: React.FC<VisualEffectsProps> = ({ 
  children, 
  enableParallax = true,
  enableMotionBlur = true,
  enableChromeTexture = true,
  enableScrollTrigger = true,
  enableNeonGlow = true,
  intensity = 1
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(containerRef, { once: false, margin: '-10%' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Simplified transforms for better performance
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${5 * intensity}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.99, 1, 1.01]);
  
  // Reduced spring animations for smoother performance
  const springY = useSpring(y, { stiffness: 300, damping: 50, mass: 0.5 });
  const springScale = useSpring(scale, { stiffness: 300, damping: 50, mass: 0.5 });
  
  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', () => setIsHovered(true));
      container.addEventListener('mouseleave', () => setIsHovered(false));
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', () => setIsHovered(true));
        container.removeEventListener('mouseleave', () => setIsHovered(false));
      };
    }
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="relative overflow-hidden will-change-transform z-0"
      style={{
        y: enableParallax ? springY : 0,
        opacity,
        scale: enableParallax ? springScale : 1,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden'
      }}
      animate={{
        filter: isInView ? 'brightness(1.05) contrast(1.05)' : 'brightness(1) contrast(1)'
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Advanced Chrome Texture Overlay */}
      {enableChromeTexture && (
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Base chrome layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/8 to-transparent opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/15 via-transparent to-cyan-500/15" />
          
          {/* Interactive chrome reflection */}
          <motion.div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255, 255, 255, 0.3) 0%, transparent 30%),
                radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.4) 0%, transparent 50%),
                linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.15) 50%, transparent 70%),
                conic-gradient(from 0deg at 50% 50%, rgba(139, 92, 246, 0.2) 0deg, rgba(6, 182, 212, 0.2) 120deg, rgba(16, 185, 129, 0.2) 240deg, rgba(139, 92, 246, 0.2) 360deg)
              `
            }}
            animate={{
              opacity: isHovered ? 0.5 : 0.3,
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Holographic shimmer */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
              transform: `translateX(-100%)`
            }}
            animate={{
              transform: isInView ? 'translateX(100%)' : 'translateX(-100%)'
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
          />
        </div>
      )}
      
      {/* Simplified Motion Blur Effect - Disabled on mobile for performance */}
      {enableMotionBlur && (
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-20 hidden sm:block z-0"
          style={{
            filter: `blur(${intensity * 0.5}px)`,
            mixBlendMode: 'overlay'
          }}
        />
      )}
      
      {/* Neon Glow Effect - Reduced intensity on mobile */}
      {enableNeonGlow && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            boxShadow: `
              inset 0 0 ${10 * intensity}px rgba(139, 92, 246, 0.2),
              inset 0 0 ${20 * intensity}px rgba(6, 182, 212, 0.1),
              0 0 ${15 * intensity}px rgba(139, 92, 246, 0.3),
              0 0 ${30 * intensity}px rgba(6, 182, 212, 0.2)
            `
          }}
          animate={{
            opacity: isInView ? 0.8 : 0.3,
            scale: isHovered ? 1.01 : 1
          }}
          transition={{ duration: 0.4 }}
        />
      )}
      
      {/* Simplified particle effect - hidden on mobile for performance */}
      {enableScrollTrigger && isInView && (
        <motion.div
          className="absolute inset-0 pointer-events-none hidden sm:block z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
        >
          {Array.from({ length: 3 }, (_, i) => {
            const angle = (i / 3) * Math.PI * 2;
            const radius = 50;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 rounded-full"
                style={{
                  background: i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#06b6d4' : '#10b981',
                  boxShadow: `0 0 5px currentColor`,
                  left: '50%',
                  top: '50%'
                }}
                animate={{
                  x: [0, x],
                  y: [0, y],
                  opacity: [0.8, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 4
                }}
              />
            );
          })}
        </motion.div>
      )}
      
      {children}
    </motion.div>
  );
};

export default VisualEffects;