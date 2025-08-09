import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaFileDownload } from "react-icons/fa";
import { useCallback } from "react";
import { jsPDF } from "jspdf";
import { marked } from "marked";
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

    // Create and download the file as PDF
    const aboutMeContent = getAboutMe();
    const skillsContent = formatSkills();
    const workExperienceContent = formatWorkExperience();

    const fullResumeContent =
      aboutMeContent + skillsContent + workExperienceContent;
      
    // Convert markdown to HTML
    const htmlContent = marked.parse(fullResumeContent);
    
    // Create PDF document
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    
    // Set title and author metadata
    pdf.setProperties({
      title: "Fratz Antigua - Resume",
      author: "Fratz Antigua",
      subject: "Professional Resume",
      keywords: "resume, software engineer, web developer",
    });
    
    // Split the HTML content into pages to avoid overflow
    const splitText = pdf.splitTextToSize(
      htmlContent.replace(/<[^>]*>/g, ''), // Remove HTML tags
      180 // Width in mm for content area
    );
    
    // Add content to PDF
    pdf.setFontSize(12);
    
    // Add title
    pdf.setFontSize(24);
    pdf.text("FRATZ ANTIGUA", 105, 20, { align: "center" });
    pdf.setFontSize(16);
    pdf.text("Professional Resume", 105, 30, { align: "center" });
    pdf.setFontSize(12);
    
    // Add content with proper formatting
    let yPosition = 40;
    const lineHeight = 7;
    
    // Function to add a section to the PDF
    const addSection = (title, content) => {
      // Add section title
      pdf.setFontSize(16);
      pdf.setFont(undefined, 'bold');
      pdf.text(title, 15, yPosition);
      yPosition += lineHeight;
      
      // Add section content
      pdf.setFontSize(12);
      pdf.setFont(undefined, 'normal');
      
      // Split content into lines
      const lines = content.split('\n');
      
      lines.forEach(line => {
        // Check if we need a new page
        if (yPosition > 270) {
          pdf.addPage();
          yPosition = 20;
        }
        
        // Check if line is a header
        if (line.startsWith('###')) {
          pdf.setFont(undefined, 'bold');
          pdf.text(line.replace(/^### /, ''), 15, yPosition);
          pdf.setFont(undefined, 'normal');
        } 
        // Check if line is a bullet point
        else if (line.startsWith('- ')) {
          pdf.text(`• ${line.substring(2)}`, 20, yPosition);
        } 
        // Regular text
        else if (line.trim() !== '') {
          pdf.text(line, 15, yPosition);
        }
        
        if (line.trim() !== '') {
          yPosition += lineHeight;
        }
      });
      
      // Add spacing after section
      yPosition += lineHeight;
    };
    
    // Add sections to PDF
    addSection("ABOUT ME", aboutMeContent.replace(/^# FRATZ ANTIGUA\n\n## ABOUT ME\n\n/, ''));
    addSection("TECHNICAL SKILLS", skillsContent.replace(/^## TECHNICAL SKILLS\n\n/, ''));
    addSection("PROFESSIONAL EXPERIENCE", workExperienceContent.replace(/^## PROFESSIONAL EXPERIENCE\n\n/, ''));
    
    // Save the PDF
    pdf.save("fratz_antigua_resume.pdf");
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
