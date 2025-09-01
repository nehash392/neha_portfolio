import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = ({ experience }) => {
  return (
    <div className="bg-darkGrey rounded-lg p-6 mb-8 shadow-lg">
      <h2 className="text-xl font-bold mb-6 text-white">Work Experience</h2>
      
      <div className="space-y-8">
        {experience.map((job, index) => (
          <motion.div 
            key={job.company} 
            className="border-l-2 border-awsOrange pl-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <h3 className="text-lg font-medium text-white">{job.position}</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-awsOrange">{job.company}</span>
              <span className="text-gray-400 text-sm">{job.duration}</span>
            </div>
            <p className="text-gray-300 mb-3">{job.description}</p>
            
            <ul className="space-y-1">
              {job.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-400 text-sm flex items-start">
                  <span className="text-awsOrange mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;