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
    // Get about me content
    const getAboutMe = () => {
      const aboutContent = `# FRATZ ANTIGUA

## ABOUT ME

Hardworking and results-driven IT professional with 7 years of experience in the industry, specializing in application development, coding, and system maintenance. Proven ability to deliver high-quality software solutions and contribute effectively in team-oriented environments. Skilled communicator with a strong willingness to continuously learn and adapt to evolving technologies.

With a keen interest in modern development practices, I actively stay updated on emerging tools, frameworks, and methodologies, including cloud computing, DevOps practices, and containerization technologies. I am particularly enthusiastic about the growing impact of artificial intelligence and machine learning in software development, and I'm eager to explore how these innovations can enhance application performance, automate processes, and drive smarter decision-making.

I started software development in 2018 managing multiple software applications. I have experience working directly with clients and taking mock wireframes all the way to deployed applications. In my spare time I actively engage and enhance my skills in the software development space.

`;
      return aboutContent;
    };

    // Format skills data for resume
    const formatSkills = () => {
      let skillsContent = "## TECHNICAL SKILLS\n\n";

      // Frontend skills
      skillsContent += "### Frontend Development\n";
      const frontendSkillNames = frontendSkills
        .map((skill) => skill.name)
        .join(", ");
      skillsContent += `${frontendSkillNames}\n\n`;

      // Backend skills
      skillsContent += "### Backend Development\n";
      const backendSkillNames = backendSkills
        .map((skill) => skill.name)
        .join(", ");
      skillsContent += `${backendSkillNames}\n\n`;

      // Database skills
      skillsContent += "### Database Technologies\n";
      const databaseSkillNames = databaseSkills
        .map((skill) => skill.name)
        .join(", ");
      skillsContent += `${databaseSkillNames}\n\n`;

      // Tools skills
      skillsContent += "### Tools & Platforms\n";
      const toolsSkillNames = toolsSkills.map((skill) => skill.name).join(", ");
      skillsContent += `${toolsSkillNames}\n\n`;

      return skillsContent;
    };

    // Format work experience data for resume
    const formatWorkExperience = () => {
      let resumeContent = "## PROFESSIONAL EXPERIENCE\n\n";

      projects.forEach((project, index) => {
        // Skip projects that aren't work experience (those without bullet points)
        if (!project.bulletPoints || project.bulletPoints.length === 0) return;

        resumeContent += `### ${project.title}\n`;
        resumeContent += `${project.description}\n\n`;
        resumeContent += "**Responsibilities:**\n";

        project.bulletPoints.forEach((point) => {
          resumeContent += `- ${point}\n`;
        });

        resumeContent += "\n**Technologies:** ";
        resumeContent += `${project.tech}\n\n`;

        // Add separator except for the last item
        if (
          index < projects.length - 1 &&
          index <
            projects.filter((p) => p.bulletPoints && p.bulletPoints.length > 0)
              .length -
              1
        ) {
          resumeContent += "---\n\n";
        }
      });

      return resumeContent;
    };

    // Create and download the file
    const aboutMeContent = getAboutMe();
    const skillsContent = formatSkills();
    const workExperienceContent = formatWorkExperience();

    const fullResumeContent =
      aboutMeContent + skillsContent + workExperienceContent;

    const blob = new Blob([fullResumeContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "fratz_antigua_resume.md";
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, []);
  const projects = [
    {
      title: "N-Compass TV",
      description: "March 2024 – Current | Fullstack Software Engineer",
      backgroundImg: "/projects/ncompass.png",
      projectUrl: "https://n-compass.tv",
      githubUrl: "",
      tech: "AngularJS, TypeScript, .NET, Node.js, Next.js, NestJS, AWS, Git, Jenkins, Linux, Bitbucket, Docker, ChatGPT, OpenAI, LLMs",
      bulletPoints: [
        "Architected and implemented scalable RESTful and GraphQL APIs that improved data retrieval efficiency by 40% and reduced client-side processing time",
        "Developed responsive and interactive web applications using Angular, React, and Next.js with a focus on performance optimization and accessibility standards",
        "Built robust backend systems using .NET, Node.js, and NestJS that handle high-volume traffic and complex business logic with 99.9% uptime",
        "Pioneered the integration of OpenAI's GPT models and other LLMs to create intelligent features that enhanced user experience and automated content generation",
        "Designed and optimized database schemas across NoSQL and SQL platforms, implementing efficient query patterns that reduced response times by 35%",
        "Implemented CI/CD pipelines and infrastructure-as-code practices within AWS, reducing deployment time from hours to minutes",
        "Led sprint planning and retrospectives in an Agile environment, consistently delivering features on time while maintaining code quality",
        "Collaborated with UX/UI designers to implement pixel-perfect interfaces that increased user engagement metrics by 25%",
        "Reduced critical production issues by 60% through proactive monitoring, debugging, and implementing robust error handling strategies",
        "Conducted regular tech talks on emerging technologies and implemented proof-of-concepts for AI and cloud service integrations",
        "Spearheaded system architecture improvements that resulted in 30% reduction in operational costs and improved scalability",
        "Implemented comprehensive testing strategies with 90%+ code coverage, ensuring exceptional product quality and reliability",
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
        "Managed and optimized enterprise-level Atlassian ecosystem (Jira, Confluence, JSM), serving 5000+ users while reducing ticket resolution time by 40%",
        "Provided expert-level (L2) technical support for Atlassian products, resolving complex issues with 95% customer satisfaction rating",
        "Executed seamless data migration to new Atlassian versions using Postman and custom APIs, with zero data loss across 200+ projects",
        "Identified and resolved critical application bottlenecks, improving system performance by 65% during peak usage periods",
        "Implemented strategic application enhancements that increased user productivity by 30% and reduced manual processes",
        "Designed and optimized CI/CD pipelines that reduced build times by 70% and deployment failures by 85%",
        "Automated deployment workflows using Jenkins and Docker, enabling 3x more frequent releases with consistent quality",
        "Developed sophisticated Bash scripts that automated routine administrative tasks, saving 20+ hours per week for the team",
        "Reverse-engineered and modernized legacy pipeline systems, successfully migrating critical functionality from decommissioned scripts",
        "Created Python automation scripts that reduced QA testing cycles from days to hours while increasing test coverage by 40%",
        "Implemented and optimized CAWA scheduling systems that improved resource allocation efficiency by 35%",
        "Maintained meticulous documentation and code quality standards, resulting in 90% reduction in regression issues",
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
        "Developed advanced Shell scripts that automated 85% of manual test procedures, reducing testing time from days to hours",
        "Created sophisticated Python automation frameworks that increased test coverage by 60% while maintaining 99% accuracy in defect detection",
        "Successfully migrated mission-critical Java applications from Solaris to Linux RHEL 8, upgrading from Java 1.8 to Java 14 with zero downtime",
        "Conducted comprehensive analysis of legacy system configurations, creating detailed compatibility mappings that ensured seamless transition to new environments",
        "Led complex database migration from Sybase to MySQL, preserving data integrity across 50+ tables and optimizing query performance by 45%",
        "Engineered efficient CI/CD pipelines that reduced build times by 70% and deployment time by 85%, enabling more frequent releases",
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
        "Developed and maintained enterprise banking applications, implementing critical financial features that processed over $10M in daily transactions",
        "Achieved 95% test coverage through comprehensive djUnit test cases (SLK), reducing post-deployment issues by 75%",
        "Pioneered Minaoshi methodology for systematic bug analysis, reducing recurring defects by 80% across multiple banking systems",
        "Established rigorous software testing protocols and validation procedures that improved code quality metrics by 60%",
        "Architected data management systems for real-time analysis and built Azure DevOps pipelines that integrated with satellite systems, reducing deployment time by 70%",
        "Led client consultations for software design requirements, resulting in 40% higher customer satisfaction scores and repeat business",
        "Optimized legacy code bases, reducing memory usage by 35% and improving application performance by 45%",
        "Implemented quality assurance processes that reduced critical bugs by 90% in production environments",
        "Successfully integrated RFID and EFT payment systems with point-of-sale applications, processing 1000+ transactions daily with 99.9% reliability",
        "Modernized legacy applications for compatibility with new hardware platforms while maintaining backward compatibility with existing systems",
        "Delivered feature enhancements that increased application functionality by 50% while maintaining system stability",
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
