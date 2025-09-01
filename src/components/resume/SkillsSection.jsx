import React from 'react';
import { 
  FaAws, 
  FaDocker, 
  FaServer, 
  FaCode, 
  FaChartLine,
  FaMicrosoft,
  FaGitlab,
  FaGithub,
  FaJenkins,
  FaLinux,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaCogs,
  FaRocket,
  FaSync,
  FaPlay
} from 'react-icons/fa';
import { 
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiElasticsearch,
  SiKibana,
  SiNginx,
  SiApache,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGooglecloud
} from 'react-icons/si';

const SkillsSection = ({ skills }) => {
  // Icon mapping for individual skills
  const skillIcons = {
    // Cloud - AWS Services
    'AWS': <FaAws />,
    'AWS EC2': <FaServer />,
    'AWS S3': <FaAws />,
    'AWS Lambda': <FaCode />,
    'AWS ECS': <FaDocker />,
    'AWS EKS': <SiKubernetes />,
    'AWS CloudFront': <FaAws />,
    'AWS CodePipeline': <FaCogs />,
    'AWS CodeBuild': <FaCogs />,
    'AWS CodeDeploy': <FaRocket />,
    'AWS CodeCommit': <FaGit />,
    'AWS CodeStar': <FaAws />,
    'AWS CodeArtifact': <FaAws />,
    'CloudWatch': <FaChartLine />,
    'AWS CloudFormation': <FaServer />,
    'AWS CDK': <FaCode />,
    'Google Cloud': <SiGooglecloud />,
    'Azure': <FaMicrosoft />,
    'GCP': <SiGooglecloud />,
    
    // CI/CD
    'Jenkins': <FaJenkins />,
    'GitLab CI': <FaGitlab />,
    'GitHub Actions': <FaGithub />,
    'ArgoCD': <FaSync />,
    'Flux': <FaRocket />,
    'Git': <FaGit />,
    'CircleCI': <FaPlay />,
    'Travis CI': <FaCogs />,
    'Azure DevOps': <FaMicrosoft />,
    'Bamboo': <FaCogs />,
    'TeamCity': <FaCogs />,
    
    // Containerization
    'Docker': <FaDocker />,
    'Kubernetes': <SiKubernetes />,
    'Helm': <FaCode />,
    'Istio': <FaCode />,
    
    // Infrastructure as Code
    'Terraform': <SiTerraform />,
    'Ansible': <SiAnsible />,
    'CloudFormation': <FaAws />,
    'ARM Templates': <FaMicrosoft />,
    
    // Monitoring
    'Prometheus': <SiPrometheus />,
    'Grafana': <SiGrafana />,
    'ELK Stack': <SiElasticsearch />,
    'Elasticsearch': <SiElasticsearch />,
    'Kibana': <SiKibana />,
    'Jaeger': <FaChartLine />,
    'DataDog': <FaChartLine />,
    'New Relic': <FaChartLine />,
    
    // Programming Languages
    'Python': <FaPython />,
    'JavaScript': <FaJs />,
    'Node.js': <FaNodeJs />,
    'React': <FaReact />,
    'Bash': <FaLinux />,
    'PowerShell': <FaMicrosoft />,
    
    // Databases
    'MongoDB': <SiMongodb />,
    'PostgreSQL': <SiPostgresql />,
    'MySQL': <SiMysql />,
    'Redis': <SiRedis />,
    
    // Web Servers
    'Nginx': <SiNginx />,
    'Apache': <SiApache />,
    
    // Security
    'Vault': <FaServer />,
    'Consul': <FaServer />,
    
    // Default fallback icon
    'default': <FaCode />
  };

  const getSkillIcon = (skillName) => {
    return skillIcons[skillName] || skillIcons['default'];
  };

  const categories = [
    { name: 'Cloud', icon: <FaAws />, items: skills.cloud },
    { name: 'CI/CD', icon: <FaCode />, items: skills.cicd },
    { name: 'Containerization', icon: <FaDocker />, items: skills.containerization },
    { name: 'Infrastructure as Code', icon: <FaServer />, items: skills.iac },
    { name: 'Monitoring', icon: <FaChartLine />, items: skills.monitoring }
  ];

  return (
    <div className="bg-darkGrey rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-6 text-white">Skills</h2>
      
      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.name}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-awsOrange text-lg">{category.icon}</span>
              <h3 className="text-white font-medium">{category.name}</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {category.items.map((skill) => (
                <div 
                  key={skill} 
                  className="bg-gray-800 text-gray-300 px-3 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-gray-700 transition-colors"
                >
                  <span className="text-awsOrange text-base flex items-center justify-center w-4 h-4">{getSkillIcon(skill)}</span>
                  <span className="flex-1 text-left">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;