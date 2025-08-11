import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useScroll, useTransform, Variants } from 'framer-motion';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'custom';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  customVariants?: Variants;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  once = true,
  className = '',
  customVariants
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold, 
    once,
    margin: '-50px 0px -50px 0px'
  });
  const controls = useAnimation();

  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slideUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    },
    slideRight: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 }
    },
    rotate: {
      hidden: { opacity: 0, rotate: -5 },
      visible: { opacity: 1, rotate: 0 }
    },
    custom: customVariants || {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants[animation]}
      transition={{
        duration: duration * 0.8,
        delay: delay * 0.5,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
};

// Staggered Children Animation
interface StaggeredAnimationProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  staggerDelay = 0.1,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Parallax Scroll Effect
interface ParallaxScrollProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxScroll: React.FC<ParallaxScrollProps> = ({
  children,
  speed = 0.5,
  className = ''
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
};

// Scroll Progress Indicator
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 transform-gpu z-50"
      style={{ scaleX, transformOrigin: '0%' }}
    />
  );
};

// Magnetic Effect
interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

const Magnetic: React.FC<MagneticProps> = ({
  children,
  strength = 0.3,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    
    ref.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

// Text Reveal Animation
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay
      }
    }
  };

  const wordVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={wordVariants}
          style={{ transformOrigin: 'bottom' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Floating Elements
interface FloatingElementProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  amplitude?: number;
  className?: string;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  duration = 3,
  delay = 0,
  amplitude = 10,
  className = ''
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude, amplitude, -amplitude],
        rotate: [-2, 2, -2]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export {
  ScrollAnimation,
  StaggeredAnimation,
  ParallaxScroll,
  ScrollProgress,
  Magnetic,
  TextReveal,
  FloatingElement
};