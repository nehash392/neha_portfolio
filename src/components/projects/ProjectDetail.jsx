import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const COLORS = {
  awsOrange: "#FF9900",
  darkSlate: "#232F3E",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProjectDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const projects = {
    "cloud-migration": {
      title: "Cloud Migration",
      description:
        "Migrated on-prem workloads to AWS using EC2, RDS, and VPC. Automated IaC with Terraform and built monitoring dashboards with CloudWatch.",
      tech: ["AWS EC2", "RDS", "Terraform", "CloudWatch"],
      image: "/cloud-migration.png",
      github: "https://github.com/your-repo/cloud-migration",
      demo: "https://your-live-demo.com/cloud-migration",
    },
    "ci-cd-automation": {
      title: "CI/CD Automation",
      description:
        "Implemented CI/CD pipelines using GitHub Actions and Jenkins for microservices deployment on EKS. Improved release cycle speed by 60%.",
      tech: ["GitHub Actions", "Jenkins", "Docker", "EKS"],
      image: "/cicd-automation.png",
      github: "https://github.com/your-repo/ci-cd",
      demo: "https://your-live-demo.com/ci-cd",
    },
    "k8s-setup": {
      title: "Kubernetes Setup",
      description:
        "Designed and deployed Kubernetes clusters on AWS EKS with Helm and ArgoCD for GitOps-based deployment workflows.",
      tech: ["Kubernetes", "Helm", "ArgoCD", "EKS"],
      image: "/k8s-setup.png",
      github: "https://github.com/your-repo/k8s-setup",
      demo: "https://your-live-demo.com/k8s",
    },
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="text-center text-white py-20">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <button
          onClick={() => navigate("/#projects")}
          className="mt-4 px-6 py-2 bg-[#FF9900] rounded-full font-semibold hover:bg-[#e68a00] transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="font-sans bg-[#232F3E] text-white min-h-screen">
      {/* NAVBAR BACK */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <button
          onClick={() => navigate("/#projects")}
          className="flex items-center gap-2 text-sm hover:text-[#FF9900]"
        >
          <FaArrowLeft /> Back to Projects
        </button>
        <h1 className="font-bold text-lg">
          <span style={{ color: COLORS.awsOrange }}>AWS</span> DevOps
        </h1>
      </header>

      {/* PROJECT HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center"
      >
        <img
          src={project.image}
          alt={project.title}
          className="rounded-xl shadow-xl w-full"
        />
        <div>
          <h2 className="text-4xl font-extrabold mb-4">{project.title}</h2>
          <p className="text-white/80 mb-6 leading-relaxed">
            {project.description}
          </p>

          <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
          <ul className="list-disc list-inside text-white/80 mb-6">
            {project.tech.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-[#FF9900] hover:bg-[#e68a00] transition flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-white/30 hover:border-[#FF9900] transition flex items-center gap-2"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
