import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Floating geometric shapes
const FloatingGeometry: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={hovered ? '#8b5cf6' : '#06b6d4'}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
};

// Interactive 3D Text
const Interactive3DText: React.FC = () => {
  const textRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      textRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={textRef} position={[-3, 0, 0]}>
      <boxGeometry args={[3, 0.5, 0.2]} />
      <meshStandardMaterial
        color="#10b981"
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  );
};

// Particle System
const ParticleField: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null!);
  
  const particleCount = 1000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#8b5cf6"
        size={0.02}
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
};

// Main 3D Scene
const Scene3DContent: React.FC = () => {
  const sphereRef = useRef<THREE.Mesh>(null!);
  const torusRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      torusRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });
  
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#10b981"
      />
      
      {/* Particle Field */}
      <ParticleField />
      
      {/* Floating Geometries */}
      <FloatingGeometry position={[3, 2, -2]} />
      <FloatingGeometry position={[-4, -1, 1]} />
      <FloatingGeometry position={[2, -3, -1]} />
      
      {/* Central Sphere */}
      <mesh ref={sphereRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#06b6d4"
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Torus Ring */}
      <mesh ref={torusRef} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3, 0.5, 16, 100]} />
        <meshStandardMaterial
          color="#8b5cf6"
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.6}
        />
      </mesh>
      
      {/* Interactive 3D Text */}
      <Interactive3DText />
      
      {/* Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

// Main Scene3D Component
const Scene3D: React.FC = () => {
  return (
    <div className="w-full h-screen relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Scene3DContent />
      </Canvas>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="text-center z-10 pointer-events-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent mb-6">
            PORTFOLIO
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the future of web development with immersive 3D interactions
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Projects
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Scene3D;