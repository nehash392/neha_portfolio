export const resumeData = {
    name: "Neha Sharma",
    title: "Project Manager | AWS & DevOps Engineer",
    summary: "Technical leader with hands-on expertise in AWS DevOps and a strong track record of managing successful software projects. Skilled in Terraform, CI/CD pipelines, sprint planning, and client coordination. Delivers secure, scalable, and timely solutions aligned with business needs.",
    skills: {
      cloud: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS ECS", "AWS EKS", "AWS CloudFront"],
      cicd: ["Jenkins", "GitHub Actions", "AWS CodePipeline", "CircleCI"],
      containerization: ["Docker", "Kubernetes", "AWS ECS/EKS"],
      iac: ["Terraform", "CloudFormation", "AWS CDK"],
      monitoring: ["Prometheus", "Grafana", "CloudWatch", "New Relic"]
    },
    
    experience: [
      {
        company: "CodeNicely Software Solutions",
        position: "Project Manager",
        duration: "Jan 2025 - Present",
        description: "Leading cross-functional teams to deliver agile software projects on time and within scope. Managing client communication, sprint planning, resource allocation, and risk mitigation. Streamlining workflows and reporting to improve delivery efficiency and team collaboration.",
        achievements: ["Successfully delivered client projects on time and within budget by streamlining communication and improving team efficiency.",
          "Reduced project turnaround time by 20% through effective sprint planning and resource management.",
          "Implemented structured reporting and milestone tracking, improving stakeholder visibility and satisfaction.",
          "Introduced Agile best practices and retrospectives that increased team productivity and cross-functional collaboration."
        ]
      },
      {
        company: "CodeNicely Software Solutions",
        position: "DevOps Engineer",
        duration: "June 2024 - Dec 2024",
        description: "Designing and managing CI/CD pipelines using Jenkins, GitHub Actions, and AWS CodePipeline. Automating infrastructure with Terraform and CloudFormation across multi-environment deployments. Monitoring and optimizing cloud resources for cost, performance, and scalability.",
        achievements: [
          "Reduced deployment time by 40% by implementing fully automated CI/CD pipelines.", 
          "Achieved 99.99% uptime for production environments through proactive monitoring and auto-scaling.",
          "Saved ~25% in monthly cloud costs by optimizing resource utilization and right-sizing instances.",
          "Improved infrastructure consistency and rollback capability using Infrastructure as Code (IaC) practices.",
        ]
      }
    ],
    
    certifications: [
      {
        name: "PG in Cloud Computing and DevOps",
        date: "2023"
      },
      // {
      //   name: "AWS Certified DevOps Engineer - Professional",
      //   date: "2022"
      // },
      // {
      //   name: "Certified Kubernetes Administrator (CKA)",
      //   date: "2021"
      // }
    ],
    
    projects: [
      {
        title: "Automated Weekly Database Query and Email Delivery using AWS Services",
        description: "Developed and deployed a serverless solution to automate weekly data retrieval from an Amazon Aurora PostgreSQL database, generate CSV reports, and send them via email using AWS services. The solution eliminates manual intervention, enhances efficiency, and ensures timely delivery of critical business reports",
        technologies: ["AWS Lambda", "RDS", "SES", "S3", "EventBridge","CloudWatch", "Python", "psycopg2", "boto3", "CSV",]
      },
      {
        title: "AWS VPC and EC2 Deployment using Terraform with Remote State Management",
        description: " Implemented Infrastructure as Code (IaC) using Terraform to provision secure AWS VPC and EC2 instances , ensuring best practices in remote state management with S3 and DynamoDB for scalability and collaboration",
        technologies: ["Terraform", "AWS VPC", "EC2", "S3", "DynamoDB","Security Groups", "Git & GitHub"]
      }
    ]
  };
  