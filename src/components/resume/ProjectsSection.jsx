import React from 'react';

const ProjectsSection = ({ projects }) => {
  return (
    <div className="bg-darkGrey rounded-lg p-6 mb-8 shadow-lg">
      <h2 className="text-xl font-bold mb-6 text-white">Projects</h2>
      
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.title} className="border-l-2 border-awsOrange pl-4">
            <h3 className="text-lg font-medium text-white">{project.title}</h3>
            <p className="text-gray-300 my-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;