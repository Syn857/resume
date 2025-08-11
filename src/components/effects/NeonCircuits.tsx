import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface NeonCircuitsProps {
  density?: 'low' | 'medium' | 'high';
  color?: 'purple' | 'cyan' | 'multi';
  animated?: boolean;
  className?: string;
  enableInteractive?: boolean;
  enablePulse?: boolean;
  nodeCount?: number;
}

// Helper function to convert hex color to rgba
const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const NeonCircuits: React.FC<NeonCircuitsProps> = ({
  density = 'medium',
  color = 'multi',
  animated = true,
  className = '',
  enableInteractive = true, // eslint-disable-line @typescript-eslint/no-unused-vars
  enablePulse = true, // eslint-disable-line @typescript-eslint/no-unused-vars
  nodeCount
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);
  // Mouse interaction variables (for future enhancement)
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [isHovered, setIsHovered] = useState(false);

  const getCircuitCount = () => {
    if (nodeCount) return nodeCount;
    switch (density) {
      case 'low': return 15;
      case 'medium': return 25;
      case 'high': return 40;
      default: return 25;
    }
  };

  const getColors = () => {
    switch (color) {
      case 'purple': return ['#8B5CF6', '#A855F7', '#9333EA'];
      case 'cyan': return ['#06B6D4', '#0891B2', '#0E7490'];
      case 'multi': return ['#8B5CF6', '#06B6D4', '#A855F7', '#0891B2', '#EC4899'];
      default: return ['#8B5CF6', '#06B6D4'];
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = getColors();
    const circuitCount = getCircuitCount();
    
    interface CircuitNode {
      x: number;
      y: number;
      connections: CircuitNode[];
      color: string;
      pulse: number;
      pulseSpeed: number;
    }

    const nodes: CircuitNode[] = [];
    
    // Generate random nodes
    for (let i = 0; i < circuitCount; i++) {
      nodes.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        connections: [],
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03
      });
    }

    // Create connections between nearby nodes
    nodes.forEach(node => {
      const nearbyNodes = nodes.filter(other => {
        if (other === node) return false;
        const distance = Math.sqrt(
          Math.pow(other.x - node.x, 2) + Math.pow(other.y - node.y, 2)
        );
        return distance < 150 && Math.random() > 0.7;
      });
      
      node.connections = nearbyNodes.slice(0, 3); // Limit connections
    });

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      time += 0.016; // ~60fps

      // Draw connections (circuits)
      nodes.forEach(node => {
        node.connections.forEach(connection => {
          const gradient = ctx.createLinearGradient(
            node.x, node.y, connection.x, connection.y
          );
          
          const nodePulse = Math.sin(node.pulse + time * node.pulseSpeed);
          const connectionPulse = Math.sin(connection.pulse + time * connection.pulseSpeed);
          
          const nodeAlpha = animated ? 0.3 + (nodePulse * 0.4) : 0.6;
          const connectionAlpha = animated ? 0.3 + (connectionPulse * 0.4) : 0.6;
          
          // Convert hex to rgba format for proper alpha support
          const nodeRgba = hexToRgba(node.color, nodeAlpha);
          const connectionRgba = hexToRgba(connection.color, connectionAlpha);
          
          gradient.addColorStop(0, nodeRgba);
          gradient.addColorStop(1, connectionRgba);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = animated ? 1 + Math.sin(time * 2) * 0.5 : 1;
          ctx.lineCap = 'round';
          
          // Add glow effect
          ctx.shadowColor = node.color;
          ctx.shadowBlur = animated ? 5 + Math.sin(time * 3) * 3 : 5;
          
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          
          // Create curved lines for more organic feel
          const midX = (node.x + connection.x) / 2 + Math.sin(time + node.x * 0.01) * 10;
          const midY = (node.y + connection.y) / 2 + Math.cos(time + node.y * 0.01) * 10;
          
          ctx.quadraticCurveTo(midX, midY, connection.x, connection.y);
          ctx.stroke();
          
          // Draw data packets moving along circuits
          if (animated && Math.random() > 0.98) {
            const t = (time * 0.5) % 1;
            const packetX = node.x + (connection.x - node.x) * t;
            const packetY = node.y + (connection.y - node.y) * t;
            
            ctx.shadowBlur = 10;
            ctx.fillStyle = node.color;
            ctx.beginPath();
            ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      });

      // Draw nodes
      nodes.forEach(node => {
        const pulse = Math.sin(node.pulse + time * node.pulseSpeed);
        const radius = animated ? 2 + pulse * 1.5 : 2;
        const alpha = animated ? 0.6 + pulse * 0.4 : 0.8;
        
        // Outer glow
        ctx.shadowColor = node.color;
        ctx.shadowBlur = animated ? 8 + pulse * 4 : 8;
        ctx.fillStyle = hexToRgba(node.color, alpha);
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner core
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        // Update pulse
        node.pulse += node.pulseSpeed;
      });

      if (animated) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [density, color, animated]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.6
        }}
      />
    </div>
  );
};

// Predefined circuit patterns
const CircuitPattern: React.FC<{ pattern: 'grid' | 'radial' | 'organic'; className?: string }> = ({ 
  pattern, 
  className = '' 
}) => {
  const generateGridPattern = () => {
    const lines = [];
    const spacing = 50;
    const width = 800;
    const height = 600;
    
    // Horizontal lines
    for (let y = 0; y < height; y += spacing) {
      lines.push(
        <motion.line
          key={`h-${y}`}
          x1="0"
          y1={y}
          x2={width}
          y2={y}
          stroke="url(#circuit-gradient)"
          strokeWidth="1"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: y * 0.01 }}
        />
      );
    }
    
    // Vertical lines
    for (let x = 0; x < width; x += spacing) {
      lines.push(
        <motion.line
          key={`v-${x}`}
          x1={x}
          y1="0"
          x2={x}
          y2={height}
          stroke="url(#circuit-gradient)"
          strokeWidth="1"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: x * 0.01 }}
        />
      );
    }
    
    return lines;
  };

  const generateRadialPattern = () => {
    const lines = [];
    const centerX = 400;
    const centerY = 300;
    const rings = 8;
    const spokes = 16;
    
    // Concentric circles
    for (let i = 1; i <= rings; i++) {
      const radius = (i * 40);
      lines.push(
        <motion.circle
          key={`ring-${i}`}
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="url(#circuit-gradient)"
          strokeWidth="1"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: i * 0.2 }}
        />
      );
    }
    
    // Radial spokes
    for (let i = 0; i < spokes; i++) {
      const angle = (i * 360) / spokes;
      const x2 = centerX + Math.cos(angle * Math.PI / 180) * 320;
      const y2 = centerY + Math.sin(angle * Math.PI / 180) * 320;
      
      lines.push(
        <motion.line
          key={`spoke-${i}`}
          x1={centerX}
          y1={centerY}
          x2={x2}
          y2={y2}
          stroke="url(#circuit-gradient)"
          strokeWidth="1"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: i * 0.1 }}
        />
      );
    }
    
    return lines;
  };

  const generateOrganicPattern = () => {
    const paths = [];
    const pathCount = 12;
    
    for (let i = 0; i < pathCount; i++) {
      const startX = Math.random() * 800;
      const startY = Math.random() * 600;
      
      let pathData = `M ${startX} ${startY}`;
      
      for (let j = 0; j < 5; j++) {
        const x = startX + (Math.random() - 0.5) * 400;
        const y = startY + (Math.random() - 0.5) * 300;
        const cp1x = startX + (Math.random() - 0.5) * 200;
        const cp1y = startY + (Math.random() - 0.5) * 200;
        const cp2x = x + (Math.random() - 0.5) * 100;
        const cp2y = y + (Math.random() - 0.5) * 100;
        
        pathData += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`;
      }
      
      paths.push(
        <motion.path
          key={`organic-${i}`}
          d={pathData}
          fill="none"
          stroke="url(#circuit-gradient)"
          strokeWidth="1.5"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, delay: i * 0.3 }}
        />
      );
    }
    
    return paths;
  };

  const renderPattern = () => {
    switch (pattern) {
      case 'grid': return generateGridPattern();
      case 'radial': return generateRadialPattern();
      case 'organic': return generateOrganicPattern();
      default: return generateGridPattern();
    }
  };

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#glow)">
          {renderPattern()}
        </g>
      </svg>
    </div>
  );
};

export { CircuitPattern };
export default NeonCircuits;