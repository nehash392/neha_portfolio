import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PipelineBackground from './PipelineBackground';
import CICDAnimation from '../animations/CICDAnimation';

const Hero = () => {
  const navigate = useNavigate();
  const [showAnimation, setShowAnimation] = useState(false);
  const [bgAnimation, setBgAnimation] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgAnimation((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Track animation progress for station animations
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProgress((prev) => {
        const newProgress = (prev + (1 / (SPEED * 60))) % 1; // 60 FPS assumption
        return newProgress;
      });
    }, 1000 / 60); // 60 FPS
    
    return () => clearInterval(interval);
  }, []);

  const handleViewResume = () => setShowAnimation(true);
  const handleAnimationComplete = () => {
    setShowAnimation(false);
    navigate('/resume');
  };

  /** ===== Animation + Layout Knobs (simple, clean) ===== */
  const SPEED = 8;               // seconds for full cycle
  const POINT_RADIUS = 7;        // progress dot size
  const HALO_MULT = 3.2;         // halo radius multiplier
  const LINE_Y = 60;             // baseline Y
  const X_START = 100;           // left endpoint
  const X_END = 900;             // right endpoint

  // Station positions and data
  const stations = [
    { x: 100, label: 'Code', icon: '#code', stroke: 'url(#blueGradient)', color: '#3B82F6' },
    { x: 300, label: 'Build', icon: '#server', stroke: 'url(#orangeGradient)', color: '#F97316' },
    { x: 500, label: 'Test', icon: '#test', stroke: 'url(#greenGradient)', color: '#10B981' },
    { x: 700, label: 'Deploy', icon: '#deploy', stroke: 'url(#blueGradient)', color: '#3B82F6' },
    { x: 900, label: 'Monitor', icon: '#monitor', stroke: 'url(#orangeGradient)', color: '#F97316' },
  ];

  // Calculate current dot position
  const currentDotX = X_START + (X_END - X_START) * currentProgress;

  // Determine which station is currently active
  const getStationState = (stationX, stationIndex) => {
    const distance = Math.abs(currentDotX - stationX);
    const activationRange = 80; // Range within which station becomes active
    const isActive = distance < activationRange;
    const hasBeenPassed = currentDotX > stationX + activationRange;
    
    return {
      isActive,
      hasBeenPassed,
      intensity: isActive ? Math.max(0, 1 - (distance / activationRange)) : 0
    };
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-between">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-darkerGrey to-darkGrey" />
        <PipelineBackground animationState={bgAnimation} />
        <div className="absolute inset-0 bg-gradient-to-t from-darkerGrey/90 to-darkGrey/60" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 z-10 flex-grow flex items-center justify-center pt-20">
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I&apos;m Neha Sharma – <span className="text-awsOrange">AWS &amp; DevOps Engineer</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I automate, deploy, and scale cloud-native apps with precision.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={handleViewResume}
              className="px-6 py-3 bg-awsOrange hover:bg-orange-600 text-white rounded-md transition-colors duration-300"
            >
              View Resume
            </button>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/20 hover:border-white/40 text-white rounded-md transition-colors duration-300"
            >
              GitHub Profile
            </a>
          </motion.div>
        </div>
      </div>

      {/* CI/CD Visualization */}
      <div className="w-full z-10 pb-8">
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <svg
            className="w-full h-28 md:h-44 relative z-10"
            viewBox="0 0 1000 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Clean gradients */}
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8ad3ff" />
                <stop offset="100%" stopColor="#1169d4" />
              </linearGradient>
              <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB74D" />
                <stop offset="100%" stopColor="#E65100" />
              </linearGradient>
              <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#81C784" />
                <stop offset="100%" stopColor="#1B5E20" />
              </linearGradient>
              <linearGradient id="progressGradient" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#74c9ff" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#74c9ff" />
              </linearGradient>

              {/* Soft halo via radial gradient (no filters = no box) */}
              <radialGradient id="dotHalo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="55%" stopColor="#87CEFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#87CEFF" stopOpacity="0" />
              </radialGradient>

              {/* Active station halo */}
              <radialGradient id="activeHalo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
                <stop offset="30%" stopColor="#4FC3F7" stopOpacity="0.4" />
                <stop offset="70%" stopColor="#81C784" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#FFB74D" stopOpacity="0" />
              </radialGradient>

              {/* Icons */}
              <symbol id="code" viewBox="0 0 48 48">
                <rect x="6" y="10" width="36" height="28" rx="2" fill="#0f172a" stroke="#dbeafe" strokeWidth="1.3" />
                <path d="M16 22L12 26L16 30" stroke="#dbeafe" strokeWidth="2" fill="none" />
                <path d="M32 22L36 26L32 30" stroke="#dbeafe" strokeWidth="2" fill="none" />
                <path d="M22 32L26 18" stroke="#FF9800" strokeWidth="2" />
              </symbol>
              <symbol id="server" viewBox="0 0 48 48">
                <rect x="12" y="6" width="24" height="36" rx="2" fill="#0f172a" stroke="#dbeafe" strokeWidth="1.3" />
                <line x1="12" y1="16" x2="36" y2="16" stroke="#dbeafe" strokeWidth="1.3" />
                <line x1="12" y1="26" x2="36" y2="26" stroke="#dbeafe" strokeWidth="1.3" />
                <line x1="12" y1="36" x2="36" y2="36" stroke="#dbeafe" strokeWidth="1.3" />
                <circle cx="18" cy="11" r="2" fill="#4CAF50" />
                <circle cx="18" cy="21" r="2" fill="#FFC107" />
                <circle cx="18" cy="31" r="2" fill="#2196F3" />
                <circle cx="18" cy="41" r="2" fill="#F44336" />
              </symbol>
              <symbol id="test" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="16" fill="#0f172a" stroke="#dbeafe" strokeWidth="1.3" />
                <path d="M16 24L22 30L32 20" stroke="#4CAF50" strokeWidth="2" fill="none" />
              </symbol>
              <symbol id="deploy" viewBox="0 0 48 48">
                <rect x="8" y="18" width="32" height="20" rx="2" fill="#0f172a" stroke="#dbeafe" strokeWidth="1.3" />
                <path d="M24 8V18M18 12L24 6L30 12" stroke="#FF9800" strokeWidth="2" fill="none" />
                <rect x="14" y="24" width="20" height="4" rx="1" fill="#4FC3F7" />
                <rect x="14" y="30" width="12" height="4" rx="1" fill="#4FC3F7" />
              </symbol>
              <symbol id="monitor" viewBox="0 0 48 48">
                <rect x="6" y="8" width="36" height="24" rx="2" fill="#0f172a" stroke="#dbeafe" strokeWidth="1.3" />
                <line x1="6" y1="14" x2="42" y2="14" stroke="#dbeafe" strokeWidth="1.3" />
                <path d="M14 21L18 27L22 19L26 24L30 22L34 25" stroke="#4CAF50" strokeWidth="2" fill="none" />
                <path d="M20 36C20 36 22 40 24 40C26 40 28 36 28 36" stroke="#dbeafe" strokeWidth="1.3" fill="none" />
                <line x1="18" y1="40" x2="30" y2="40" stroke="#dbeafe" strokeWidth="1.3" />
              </symbol>
            </defs>

            <g>
              {/* UNDERGLOW (very soft, no filters) */}
              <path
                d={`M ${X_START} ${LINE_Y} L ${X_END} ${LINE_Y}`}
                stroke="url(#blueGradient)"
                strokeOpacity="0.18"
                strokeWidth="20"
                strokeLinecap="round"
                fill="none"
              />

              {/* BASE LINE */}
              <path
                d={`M ${X_START} ${LINE_Y} L ${X_END} ${LINE_Y}`}
                stroke="rgba(255,255,255,0.16)"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />

              {/* PROGRESS LINE (shows completed sections) */}
              <motion.path
                d={`M ${X_START} ${LINE_Y} L ${currentDotX} ${LINE_Y}`}
                stroke="url(#progressGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                opacity={0.7}
              />

              {/* SINGLE PROGRESS POINT (only one moving element) */}
              <g>
                {/* Halo (radial gradient, no filter => no box) */}
                <motion.circle
                  cx={currentDotX}
                  cy={LINE_Y}
                  r={POINT_RADIUS * HALO_MULT}
                  fill="url(#dotHalo)"
                />
                {/* Core dot */}
                <motion.circle
                  cx={currentDotX}
                  cy={LINE_Y}
                  r={POINT_RADIUS}
                  fill="url(#progressGradient)"
                />
              </g>

              {/* STATION NODES (animated based on pointer position) */}
              {stations.map(({ x, label, icon, stroke, color }, idx) => {
                const stationState = getStationState(x, idx);
                
                return (
                  <g key={idx}>
                    {/* Active station background glow */}
                    {stationState.isActive && (
                      <motion.circle
                        cx={x}
                        cy={LINE_Y}
                        r={40}
                        fill="url(#activeHalo)"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ 
                          opacity: stationState.intensity * 0.6,
                          scale: 1 + (stationState.intensity * 0.3)
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    {/* Station node */}
                    <motion.g transform={`translate(${x}, ${LINE_Y})`}>
                      <motion.circle
                        r="24"
                        fill={stationState.hasBeenPassed ? "rgba(15, 23, 42, 0.9)" : "rgba(15, 23, 42, 0.7)"}
                        stroke={stationState.hasBeenPassed ? color : stroke}
                        strokeWidth={stationState.isActive ? "3" : "1.8"}
                        animate={{
                          scale: stationState.isActive ? 1.15 : 1,
                          strokeWidth: stationState.isActive ? 3 : 1.8,
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                      
                      {/* Icon with animation */}
                      <motion.g
                        animate={{
                          scale: stationState.isActive ? 1.1 : 1,
                          rotate: stationState.isActive ? [0, 5, -5, 0] : 0,
                        }}
                        transition={{ 
                          duration: stationState.isActive ? 0.6 : 0.3,
                          ease: "easeOut",
                          rotate: { repeat: stationState.isActive ? Infinity : 0, duration: 2 }
                        }}
                      >
                        <use href={icon} x="-14" y="-14" width="28" height="28" />
                      </motion.g>
                      
                      {/* Label with animation */}
                      <motion.text
                        y="30"
                        textAnchor="middle"
                        fill={stationState.hasBeenPassed ? color : "white"}
                        fontSize={stationState.isActive ? "12" : "10"}
                        fontWeight="bold"
                        animate={{
                          fontSize: stationState.isActive ? 12 : 10,
                          y: stationState.isActive ? 32 : 30,
                          fill: stationState.hasBeenPassed ? color : "white"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {label}
                      </motion.text>
                      
                      {/* Status indicator */}
                      {stationState.hasBeenPassed && (
                        <motion.circle
                          cx="18"
                          cy="-18"
                          r="4"
                          fill="#10B981"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        />
                      )}
                      
                      {/* Activity pulse for current station */}
                      {stationState.isActive && (
                        <motion.circle
                          r="24"
                          fill="none"
                          stroke={color}
                          strokeWidth="2"
                          strokeOpacity={0}
                          animate={{
                            r: [24, 35],
                            strokeOpacity: [0.8, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                        />
                      )}
                    </motion.g>
                  </g>
                );
              })}
            </g>
          </svg>
        </motion.div>
      </div>

      {/* Resume overlay */}
      {showAnimation && <CICDAnimation onComplete={handleAnimationComplete} />}
    </div>
  );
};

export default Hero;