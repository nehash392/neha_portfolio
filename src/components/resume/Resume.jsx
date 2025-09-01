import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { resumeData } from '../../data/resumeData';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import CertificationsSection from './CertificationsSection';
import ProjectsSection from './ProjectsSection';

const Resume = () => {
  return (
    <div className="bg-darkerGrey min-h-screen">
      {/* Header */}
      <header className="sticky top-0 bg-darkGrey z-10 shadow-md">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-white">
            {resumeData.name} – <span className="text-awsOrange">{resumeData.title}</span>
          </h1>
        </div>
      </header>
      
      {/* Main content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Profile */}
            <div className="bg-darkGrey rounded-lg p-6 mb-8 shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-white">Profile</h2>
              <p className="text-gray-300">{resumeData.summary}</p>
            </div>
            
            {/* Skills */}
            <SkillsSection skills={resumeData.skills} />
          </motion.div>
          
          {/* Right column */}
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Experience */}
            <ExperienceSection experience={resumeData.experience} />
            
            {/* Projects */}
            <ProjectsSection projects={resumeData.projects} />
            
            {/* Certifications */}
            <CertificationsSection certifications={resumeData.certifications} />
          </motion.div>
        </div>
        
        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <button className="flex items-center gap-2 px-6 py-3 bg-awsOrange hover:bg-orange-600 text-white rounded-md transition-colors">
            <FaDownload /> Download PDF
          </button>
          <button className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white rounded-md transition-colors">
            <FaEnvelope /> Contact Me
          </button>
        </div>
      </main>
    </div>
  );
};

export default Resume;