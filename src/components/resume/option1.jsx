import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

const COLORS = {
  awsOrange: "#FF9900",
  darkSlate: "#232F3E",
  lightGray: "#F3F4F6",
};

export default function AWSDevOpsPortfolio() {
  return (
    <div className="font-sans bg-[#232F3E] text-white min-h-screen">
      {/* NAVBAR */}
      <header className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-extrabold text-xl">
          <span style={{ color: COLORS.awsOrange }}>AWS</span> DevOps
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-white/80">
          <a href="#about" className="hover:text-[#FF9900]">About</a>
          <a href="#skills" className="hover:text-[#FF9900]">Skills</a>
          <a href="#projects" className="hover:text-[#FF9900]">Projects</a>
          <a href="#experience" className="hover:text-[#FF9900]">Experience</a>
          <a href="#contact" className="hover:text-[#FF9900]">Contact</a>
        </nav>
        <a
          href="mailto:you@example.com"
          className="px-5 py-2 rounded-full text-sm font-semibold bg-[#FF9900] hover:bg-[#e68a00] transition"
        >
          Hire Me
        </a>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase text-sm tracking-wide text-[#FF9900]">
            Welcome to my world
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
            Hi, I’m <span className="text-[#FF9900]">Your Name</span> <br />
            AWS & DevOps Engineer
          </h1>
          <p className="mt-4 text-white/80 max-w-md">
            I build resilient cloud infrastructures, automate CI/CD pipelines,
            and design scalable, secure DevOps solutions.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-full font-semibold bg-[#FF9900] hover:bg-[#e68a00] transition"
            >
              <FaDownload className="inline mr-2" /> Download Resume
            </a>
            <a
              href="mailto:you@example.com"
              className="px-6 py-3 rounded-full font-semibold border border-white/20 hover:border-[#FF9900] transition"
            >
              <FaEnvelope className="inline mr-2" /> Contact Me
            </a>
          </div>

          <div className="mt-6 flex gap-4 text-2xl">
            <a href="https://github.com" className="hover:text-[#FF9900]">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" className="hover:text-[#FF9900]">
              <FaLinkedin />
            </a>
            <a href="mailto:you@example.com" className="hover:text-[#FF9900]">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/your-photo.png"
            alt="Profile"
            className="rounded-2xl shadow-xl w-80"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/your-photo.png"
          alt="About Me"
          className="rounded-xl shadow-lg w-full md:w-80 mx-auto"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Who I Am?</h2>
          <p className="text-white/80 leading-relaxed">
            I am an AWS & DevOps Engineer with expertise in designing cloud
            infrastructures, implementing CI/CD pipelines, and container
            orchestration. I love solving problems with automation and ensuring
            high availability.
          </p>
          <a
            href="/resume.pdf"
            className="mt-6 inline-block px-6 py-3 rounded-full bg-[#FF9900] hover:bg-[#e68a00] font-semibold"
          >
            Download PDF
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Skills & Certifications</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#2d3a4a]">
            <h3 className="font-semibold text-lg mb-3">Cloud</h3>
            <ul className="space-y-2 text-white/80">
              <li>AWS (EC2, S3, IAM, VPC)</li>
              <li>CloudFormation & Terraform</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-[#2d3a4a]">
            <h3 className="font-semibold text-lg mb-3">DevOps Tools</h3>
            <ul className="space-y-2 text-white/80">
              <li>Kubernetes (EKS)</li>
              <li>Docker & Jenkins</li>
              <li>CI/CD Automation</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-[#2d3a4a]">
            <h3 className="font-semibold text-lg mb-3">Certifications</h3>
            <ul className="space-y-2 text-white/80">
              <li>AWS Certified Solutions Architect</li>
              <li>AWS Certified DevOps Engineer</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Cloud Migration", "CI/CD Automation", "K8s Setup"].map((title, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-[#2d3a4a] hover:border-[#FF9900] border border-transparent transition"
            >
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-white/70 text-sm">
                Short description of the project goes here. Highlight tools used
                and outcomes.
              </p>
              <a
                href="#"
                className="mt-4 inline-block text-[#FF9900] hover:underline"
              >
                View Details →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-6">
          <div className="bg-[#2d3a4a] p-6 rounded-xl">
            <h3 className="font-semibold text-lg">Senior DevOps Engineer – Acme Cloud</h3>
            <p className="text-sm text-white/70">2023 – Present</p>
            <ul className="mt-3 list-disc list-inside text-white/80">
              <li>Built multi-account AWS landing zone</li>
              <li>Migrated 30+ services to EKS & Terraform</li>
            </ul>
          </div>
          <div className="bg-[#2d3a4a] p-6 rounded-xl">
            <h3 className="font-semibold text-lg">Cloud Engineer – CloudStarter</h3>
            <p className="text-sm text-white/70">2020 – 2023</p>
            <ul className="mt-3 list-disc list-inside text-white/80">
              <li>Implemented GitHub Actions CI/CD pipelines</li>
              <li>Automated infra with reusable Terraform modules</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-white/80 mb-6">
          Interested in working together? Get in touch!
        </p>
        <div className="flex justify-center gap-4 text-2xl">
          <a href="https://github.com" className="hover:text-[#FF9900]">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" className="hover:text-[#FF9900]">
            <FaLinkedin />
          </a>
          <a href="mailto:you@example.com" className="hover:text-[#FF9900]">
            <FaEnvelope />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Your Name • Built with React & Tailwind • AWS-themed
      </footer>
    </div>
  );
}
