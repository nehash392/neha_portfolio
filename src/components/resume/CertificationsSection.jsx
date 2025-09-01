import React from 'react';
import { FaAward } from 'react-icons/fa';

const CertificationsSection = ({ certifications }) => {
  return (
    <div className="bg-darkGrey rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-6 text-white">Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <div 
            key={cert.name}
            className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg"
          >
            <div className="text-xl text-awsOrange">
              <FaAward />
            </div>
            <div>
              <h3 className="font-medium text-white">{cert.name}</h3>
              <p className="text-gray-400 text-sm">Issued {cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;