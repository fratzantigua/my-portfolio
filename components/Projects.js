import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaFileDownload } from "react-icons/fa";
import { useCallback } from "react";
import {
  frontendSkills,
  backendSkills,
  databaseSkills,
  toolsSkills,
} from "./Skills";

const ProjectItem = ({
  title,
  description,
  backgroundImg,
  tech,
  projectUrl,
  githubUrl,
  index,
  bulletPoints,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card overflow-hidden group"
    >
      <div className="relative h-[240px] w-full bg-background overflow-hidden">
        {/* Project image placeholder with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent z-10"></div>
        <div className="h-full w-full flex items-center justify-center bg-primaryLight/10">
          {/* <span className="text-lg text-primary font-medium p-4">{title}</span> */}
          <Image
            src={backgroundImg}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex space-x-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-primary transition-colors duration-300"
                aria-label={`GitHub repository for ${title}`}
              >
                <FaGithub size={18} />
              </a>
            )}
            <a
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-primary transition-colors duration-300"
              aria-label={`Live demo for ${title}`}
            >
              <FaExternalLinkAlt size={16} />
            </a>
          </div>
        </div>

        <p className="text-secondary mb-4">{description}</p>

        {bulletPoints && bulletPoints.length > 0 && (
          <div className="mb-4">
            <p className="font-medium mb-2">Responsibilities:</p>
            <ul className="list-disc pl-5 space-y-1 text-secondary">
              {bulletPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {tech.split(",").map((item, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-background rounded-full text-secondary"
            >
              {item.trim()}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  // Function to generate and download resume
  const exportResume = useCallback(() => {
    // Method 1: Using window.open to open the PDF in a new tab
    // This is more reliable across browsers
    window.open("/documents/fratz_antigua_resume.pdf", "_blank");

    // Method 2: Force download using fetch API (as a fallback)
    fetch("/documents/fratz_antigua_resume.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "FratzAntiguaResume.pdf";
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading PDF:", error);
      });
  }, []);
  const projects = [
    {
      title: "N-Compass TV",
      description: "March 2024 – Current | Fullstack Software Engineer",
      backgroundImg: "/projects/ncompass.png",
      projectUrl: "https://n-compass.tv",
      githubUrl: "",
      tech: "AngularJS, TypeScript, .NET, Node.js, Next.js, NestJS, AWS, Git, Jenkins, Linux, Bitbucket, Docker, n8n, ChatGPT, OpenAI, LLMs, Automation Workflows",
      bulletPoints: [
        "Architected and implemented scalable RESTful and GraphQL APIs that significantly improved data retrieval efficiency and reduced client-side processing time",
        "Developed sophisticated automation workflows using n8n and custom integrations, streamlining business processes and dramatically reducing manual operations",
        "Built intelligent AI-powered systems leveraging OpenAI's GPT models and other LLMs to automate content generation, data processing, and decision-making workflows",
        "Created advanced automation pipelines that seamlessly integrate multiple APIs, databases, and third-party services, processing thousands of operations daily",
        "Developed responsive and interactive web applications using Angular, React, and Next.js with a focus on performance optimization and accessibility standards",
        "Designed and implemented custom LLM integrations that enhanced user experience through intelligent content recommendations and automated customer support",
        "Built robust backend systems using .NET, Node.js, and NestJS that handle high-volume traffic and complex business logic with exceptional uptime",
        "Engineered intelligent workflow automation systems that transformed processing time from hours to minutes while maintaining high accuracy",
        "Implemented AI-driven data analysis and reporting automation that provides real-time insights and substantially reduces manual reporting tasks",
        "Designed and optimized database schemas across NoSQL and SQL platforms, implementing efficient query patterns that improved response times",
        "Created automated monitoring and alerting systems using custom workflows that proactively identify and resolve issues before they impact users",
        "Implemented CI/CD pipelines and infrastructure-as-code practices within AWS, transforming deployment time from hours to minutes",
        "Led sprint planning and retrospectives in an Agile environment, consistently delivering features on time while maintaining high code quality",
        "Spearheaded the development of intelligent automation frameworks that adapt to changing business requirements using machine learning algorithms",
        "Collaborated with UX/UI designers to implement pixel-perfect interfaces that significantly increased user engagement metrics",
        "Reduced critical production issues through proactive monitoring, debugging, and implementing robust error handling strategies with automated workflows",
        "Conducted regular tech talks on emerging technologies and implemented proof-of-concepts for AI and cloud service integrations",
        "Spearheaded system architecture improvements that resulted in operational cost reduction and improved scalability",
        "Implemented comprehensive testing strategies with extensive code coverage, ensuring exceptional product quality and reliability",
      ],
    },
    {
      title: "Accenture",
      description: "May 2022 – March 2024 | Senior Software Engineer",
      backgroundImg: "/projects/accenture.png",
      projectUrl: "https://www.accenture.com/ph-en",
      githubUrl: "",
      tech: "PHP,CAWA, Atlassian, Automation Script, AWS, Git, Jenkins, Linux, Bitbucket, Docker, ChatGPT, OpenAI, LLMs",
      bulletPoints: [
        "Managed and optimized enterprise-level Atlassian ecosystem (Jira, Confluence, JSM) serving over 5000 users while significantly reducing ticket resolution time",
        "Provided expert-level L2 technical support for Atlassian products, resolving complex issues with consistently high customer satisfaction ratings",
        "Executed seamless data migration to new Atlassian versions using Postman and custom APIs, achieving zero data loss across hundreds of projects",
        "Identified and resolved critical application bottlenecks, dramatically improving system performance during peak usage periods",
        "Implemented strategic application enhancements that substantially increased user productivity and reduced manual processes",
        "Designed and optimized CI/CD pipelines that significantly reduced build times and deployment failures",
        "Automated deployment workflows using Jenkins and Docker, enabling much more frequent releases with consistent quality",
        "Developed sophisticated Bash scripts that automated routine administrative tasks, saving substantial time for the team weekly",
        "Reverse-engineered and modernized legacy pipeline systems, successfully migrating critical functionality from decommissioned scripts",
        "Created Python automation scripts that transformed QA testing cycles from days to hours while improving test coverage",
        "Implemented and optimized CAWA scheduling systems that greatly improved resource allocation efficiency",
        "Maintained meticulous documentation and code quality standards, resulting in dramatically fewer regression issues",
      ],
    },
    {
      title: "FPT Software Inc",
      description:
        "December 2020 – May 2022 | Software Engineer / Automation Tester",
      backgroundImg: "/projects/fptsoftware.png",
      projectUrl: "https://fptsoftware.com/",
      githubUrl: "",
      tech: "Java,Sybase,Linux,Scripting,Bitbucket,GIT,Jenkins,Oracle,MySQL, TestLink, Python, Shell Scripting",
      bulletPoints: [
        "Developed advanced Shell scripts that automated the majority of manual test procedures, transforming testing time from days to hours",
        "Created sophisticated Python automation frameworks that substantially increased test coverage while maintaining excellent accuracy in defect detection",
        "Successfully migrated mission-critical Java applications from Solaris to Linux RHEL 8, upgrading from Java 1.8 to Java 14 with zero downtime",
        "Conducted comprehensive analysis of legacy system configurations, creating detailed compatibility mappings that ensured seamless transition to new environments",
        "Led complex database migration from Sybase to MySQL, preserving data integrity across numerous tables and optimizing query performance",
        "Engineered efficient CI/CD pipelines that dramatically reduced build times and deployment time, enabling more frequent releases",
      ],
    },
    {
      title: "Alliance Software Inc",
      description: "July 2018 – April 2021 | Software Engineer",
      backgroundImg: "/projects/alliance.png",
      projectUrl: "https://alliance.com.ph",
      githubUrl: "",
      tech: "Java,PHP,Javascript,C++,C#,Angular,GIT,MySQL,",
      bulletPoints: [
        "Developed and maintained enterprise banking applications, implementing critical financial features that processed millions in daily transactions",
        "Achieved comprehensive test coverage through extensive djUnit test cases (SLK), substantially reducing post-deployment issues",
        "Pioneered Minaoshi methodology for systematic bug analysis, dramatically reducing recurring defects across multiple banking systems",
        "Established rigorous software testing protocols and validation procedures that significantly improved code quality metrics",
        "Architected data management systems for real-time analysis and built Azure DevOps pipelines that integrated with satellite systems, greatly reducing deployment time",
        "Led client consultations for software design requirements, resulting in higher customer satisfaction scores and repeat business",
        "Optimized legacy code bases, reducing memory usage and substantially improving application performance",
        "Implemented quality assurance processes that dramatically reduced critical bugs in production environments",
        "Successfully integrated RFID and EFT payment systems with point-of-sale applications, processing thousands of transactions daily with exceptional reliability",
        "Modernized legacy applications for compatibility with new hardware platforms while maintaining backward compatibility with existing systems",
        "Delivered feature enhancements that significantly increased application functionality while maintaining system stability",
      ],
    },
    // TODO: Add Crypto Dashboard project
    // {
    //   title: "Crypto Dashboard",
    //   description:
    //     "Real-time cryptocurrency dashboard with price tracking, portfolio management, and historical data visualization.",
    //   backgroundImg: "/projects/crypto.jpg",
    //   projectUrl: "https://example.com/crypto",
    //   githubUrl: "https://github.com/yourusername/crypto-dashboard",
    //   tech: "React, Chart.js, CoinGecko API, Firebase",
    // },
  ];

  return (
    <div id="projects" className="w-full py-20 bg-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="section-title inline-block">Projects</p>
          <h2 className="mt-6 mb-4">Featured Work</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise in web development.
          </p>
          <button
            onClick={exportResume}
            className="mt-4 flex items-center mx-auto bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded-md transition-colors duration-300"
          >
            <FaFileDownload className="mr-2" />
            Download Complete Resume
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              description={project.description}
              backgroundImg={project.backgroundImg}
              tech={project.tech}
              projectUrl={project.projectUrl}
              githubUrl={project.githubUrl}
              bulletPoints={project.bulletPoints}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
