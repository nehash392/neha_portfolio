import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaUserAlt,
  FaTools,
  FaProjectDiagram,
  FaBriefcase,
  FaHandshake,
} from "react-icons/fa";

const COLORS = {
  awsOrange: "#FF9900",
  darkSlate: "#232F3E",
  lightGray: "#F3F4F6",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const sections = ["about", "skills", "projects", "experience", "contact"];

export default function AWSDevOpsPortfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [showTopBtn, setShowTopBtn] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRefs = sectionRefs.current;

    sections.forEach((id) => {
      if (currentRefs[id]) {
        observer.observe(currentRefs[id]);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((id) => {
        if (currentRefs[id]) {
          observer.unobserve(currentRefs[id]);
        }
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Helper class for icons
  const ICON_CLASS = "text-[#FF9900] text-2xl";

  return (
    <div className="font-sans bg-[#232F3E] text-white min-h-screen scroll-smooth">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
          ${scrolled ? "bg-[#232F3E]/95 shadow-lg py-3" : "bg-[#232F3E]/95 shadow-md py-5"}`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className={`font-extrabold transition-all duration-300 ${
              scrolled ? "text-lg" : "text-xl"
            }`}
          >
            <span style={{ color: COLORS.awsOrange }}>Neha</span> Sharma
          </motion.div>
          <motion.nav
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="hidden md:flex gap-6 text-sm font-medium"
          >
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                className={`transition-colors ${
                  activeSection === sec
                    ? "text-[#FF9900] font-semibold"
                    : "text-white/80 hover:text-[#FF9900]"
                }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            ))}
          </motion.nav>
        </div>
      </header>

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="max-w-6xl mx-auto px-6 pt-32 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <p className="uppercase text-sm tracking-wide text-[#FF9900]">
            Welcome to my world
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
            Hi, I’m <span className="text-[#FF9900]">Neha Sharma</span> <br />
            AWS & DevOps Engineer
          </h1>
          <p className="mt-4 text-white/80 max-w-md">
            I build resilient cloud infrastructures, automate CI/CD pipelines,
            and design scalable, secure DevOps solutions.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
            className="mt-6 flex gap-4 text-2xl"
          >
            <a href="https://github.com" className="hover:text-[#FF9900]"><FaGithub /></a>
            <a href="https://linkedin.com" className="hover:text-[#FF9900]"><FaLinkedin /></a>
            <a href="mailto:you@example.com" className="hover:text-[#FF9900]"><FaEnvelope /></a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
          className="flex justify-center"
        >
          <img
            src="/your-photo.png"
            alt="Profile"
            className="rounded-2xl shadow-xl w-80"
          />
        </motion.div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        id="about"
        ref={(el) => (sectionRefs.current["about"] = el)}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center"
      >
        <img
          src="/your-photo.png"
          alt="About Me"
          className="rounded-xl shadow-lg w-full md:w-80 mx-auto"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <FaUserAlt className={ICON_CLASS} /> Who I Am?
          </h2>
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
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        ref={(el) => (sectionRefs.current["skills"] = el)}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <FaTools className={ICON_CLASS} /> Skills & Certifications
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Cloud", items: ["AWS (EC2, S3, IAM, VPC)", "CloudFormation & Terraform"] },
            { title: "DevOps Tools", items: ["Kubernetes (EKS)", "Docker & Jenkins", "CI/CD Automation"] },
            { title: "Certifications", items: ["AWS Solutions Architect", "AWS DevOps Engineer"] },
          ].map((col, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-[#2d3a4a]"
            >
              <h3 className="font-semibold text-lg mb-3">{col.title}</h3>
              <ul className="space-y-2 text-white/80">
                {col.items.map((it, j) => <li key={j}>• {it}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        ref={(el) => (sectionRefs.current["projects"] = el)}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <FaProjectDiagram className={ICON_CLASS} /> Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { id: "cloud-migration", title: "Cloud Migration" },
            { id: "ci-cd-automation", title: "CI/CD Automation" },
            { id: "k8s-setup", title: "Kubernetes Setup" },
          ].map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-xl bg-[#2d3a4a] hover:border-[#FF9900] border border-transparent transition"
            >
              <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
              <p className="text-white/70 text-sm">
                Short description of the project goes here. Highlight tools used
                and outcomes.
              </p>
              <a
                href={`/projects/${p.id}`}
                className="mt-4 inline-block text-[#FF9900] hover:underline"
              >
                View Details →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        id="experience"
        ref={(el) => (sectionRefs.current["experience"] = el)}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <FaBriefcase className={ICON_CLASS} /> Experience
        </h2>
        <div className="space-y-6">
          {[
            {
              role: "Senior DevOps Engineer – Acme Cloud",
              range: "2023 – Present",
              bullets: ["Built multi-account AWS landing zone", "Migrated 30+ services to EKS & Terraform"],
            },
            {
              role: "Cloud Engineer – CloudStarter",
              range: "2020 – 2023",
              bullets: ["Implemented GitHub Actions CI/CD pipelines", "Automated infra with Terraform modules"],
            },
          ].map((exp, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-[#2d3a4a] p-6 rounded-xl"
            >
              <h3 className="font-semibold text-lg">{exp.role}</h3>
              <p className="text-sm text-white/70">{exp.range}</p>
              <ul className="mt-3 list-disc list-inside text-white/80">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        ref={(el) => (sectionRefs.current["contact"] = el)}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
          <FaHandshake className={ICON_CLASS} /> Let’s Work Together
        </h2>
        <p className="text-white/80 mb-6">
          Interested in working together? Get in touch!
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
          className="flex justify-center gap-6 text-2xl"
        >
          <a href="https://github.com" className="hover:text-[#FF9900]"><FaGithub /></a>
          <a href="https://linkedin.com" className="hover:text-[#FF9900]"><FaLinkedin /></a>
          <a href="mailto:you@example.com" className="hover:text-[#FF9900]"><FaEnvelope /></a>
        </motion.div>
      </motion.section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Neha Sharma • Built with React & Tailwind • AWS-themed
      </footer>

      {/* BACK TO TOP BUTTON */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[#FF9900] text-white shadow-lg hover:bg-[#e68a00] transition-all duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
