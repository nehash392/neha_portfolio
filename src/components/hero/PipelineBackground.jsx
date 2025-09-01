import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaDocker, FaCode, FaServer } from 'react-icons/fa';

const PipelineBackground = () => {
  // Define coordinates for the floating icons
  const icons = [
    { icon: <FaAws />, x: '20%', y: '20%', size: 30, duration: 10 },
    { icon: <FaDocker />, x: '70%', y: '15%', size: 40, duration: 12 },
    { icon: <FaCode />, x: '10%', y: '60%', size: 25, duration: 8 },
    { icon: <FaServer />, x: '80%', y: '60%', size: 35, duration: 15 },
    { icon: <FaAws />, x: '40%', y: '80%', size: 45, duration: 20 },
  ];

  return (
    <div className="absolute inset-0 z-0">
      {/* Animated flowing lines representing a CI/CD pipeline */}
      <svg className="absolute inset-0 w-full h-full opacity-20" 
           viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M0,50 C20,20 50,70 100,50"
          stroke="#FF9900"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.path
          d="M0,70 C30,40 70,80 100,30"
          stroke="#FF9900"
          strokeWidth="0.3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
        />
      </svg>
      
      {/* Floating tech icons */}
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-white opacity-20"
          style={{ 
            left: item.x, 
            top: item.y,
            fontSize: item.size
          }}
          animate={{
            y: ["0%", "10%", "0%"],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default PipelineBackground;