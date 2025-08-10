const fs = require("fs");
const path = require("path");
const { jsPDF } = require("jspdf");
require("jspdf-autotable");

// Extract project data from Projects.js
const projectsFilePath = path.join(__dirname, "../components/Projects.js");
const projectsFileContent = fs.readFileSync(projectsFilePath, "utf8");

// Function to extract project data from the file content
function extractProjects(content) {
  const projects = [];
  const regex =
    /\{\s*title:\s*"([^"]+)",[\s\S]*?description:\s*"([^"]+)",[\s\S]*?tech:\s*"([^"]+)",[\s\S]*?bulletPoints:\s*\[((?:[\s\S]*?"[^"]*")[\s\S]*?)\],/g;

  let match;
  while ((match = regex.exec(content)) !== null) {
    const title = match[1];
    const description = match[2];
    const tech = match[3];

    // Extract bullet points
    const bulletPointsStr = match[4];
    const bulletPointsRegex = /"([^"]+)"/g;
    const bulletPoints = [];

    let bulletMatch;
    while ((bulletMatch = bulletPointsRegex.exec(bulletPointsStr)) !== null) {
      bulletPoints.push(bulletMatch[1]);
    }

    projects.push({
      title,
      description,
      tech,
      bulletPoints,
    });
  }

  return projects;
}

const projects = extractProjects(projectsFileContent);

// Create PDF document
const pdf = new jsPDF({
  orientation: "portrait",
  unit: "mm",
  format: "a4",
});

// Set document properties
pdf.setProperties({
  title: "Fratz Antigua - Resume",
  author: "Fratz Antigua",
  subject: "Professional Resume",
  keywords: "resume, software engineer, web developer",
});

// Helper function to add text with proper line breaks
const addWrappedText = (text, x, y, maxWidth, lineHeight) => {
  const lines = pdf.splitTextToSize(text, maxWidth);
  pdf.text(lines, x, y);
  return y + lines.length * lineHeight;
};

// Set initial position
let yPos = 15;
const lineHeight = 5.5; // Reduced from 7
const margin = 15; // Reduced from 20
const pageWidth = 210; // A4 width in mm
const contentWidth = pageWidth - margin * 2;

// Add header
pdf.setFontSize(20); // Reduced from 24
pdf.setFont("helvetica", "bold");
pdf.text("FRATZ ANTIGUA", pdf.internal.pageSize.width / 2, yPos, {
  align: "center",
});
yPos += lineHeight * 1.2;

pdf.setFontSize(12); // Reduced from 14
pdf.setFont("helvetica", "normal");
pdf.text(
  "Full Stack Software Engineer",
  pdf.internal.pageSize.width / 2,
  yPos,
  {
    align: "center",
  }
);
yPos += lineHeight * 1.2;

// Add contact info
pdf.setFontSize(10);
const contactInfo =
  "fratzantigua@email.com | linkedin.com/in/fratzantigua | github.com/fratzantigua";
pdf.text(contactInfo, pdf.internal.pageSize.width / 2, yPos, {
  align: "center",
});
yPos += lineHeight * 1.5;

// Add section: About Me
pdf.setFontSize(12);
pdf.setFont("helvetica", "bold");
pdf.text("ABOUT ME", margin, yPos);
yPos += lineHeight * 1.2;

pdf.setFontSize(10);
pdf.setFont("helvetica", "normal");
const aboutMeText =
  "Results-driven Software Engineer with 7+ years of experience specializing in full-stack development. Proven track record of delivering high-quality web applications using modern JavaScript frameworks (React, Next.js, Angular) and backend technologies (Node.js, NestJS). Skilled in designing efficient database solutions and implementing cloud-based architectures. Passionate about creating intuitive user experiences and optimizing application performance. Adept at collaborating in cross-functional teams and adapting quickly to new technologies.";
yPos =
  addWrappedText(aboutMeText, margin, yPos, contentWidth, lineHeight) +
  lineHeight;

// Define comprehensive skills list instead of extracting from projects
const techList = [
  // Frontend
  "React",
  "Next.js",
  "Angular",
  "AngularJS",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "SASS",
  "TailwindCSS",
  "Material UI",
  "Bootstrap",
  "Redux",
  "Responsive Design",

  // Backend
  "Node.js",
  "NestJS",
  ".NET",
  "Java",
  "PHP",
  "Python",
  "C#",
  "C++",
  "Express",
  "REST API",
  "GraphQL",
  "Microservices",
  "API Development",

  // Database
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Oracle",
  "Sybase",
  "Firebase",
  "Redis",
  "DynamoDB",
  "Prisma",
  "Mongoose",
  "SQL",
  "NoSQL",

  // Tools & Platforms
  "Git",
  "Docker",
  "AWS",
  "Jenkins",
  "Linux",
  "Bitbucket",
  "ChatGPT",
  "OpenAI",
  "LLMs",
  "Automation",
  "Vercel",
  "Jira",
  "Atlassian",
  "Postman",
  "n8n",
  "CI/CD",
  "GitHub Actions",
];

// Group skills by category (based on common knowledge)
const frontendSkills = techList.filter((tech) =>
  [
    "React",
    "Next.js",
    "Angular",
    "AngularJS",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SASS",
    "TailwindCSS",
    "Material UI",
    "Bootstrap",
    "Redux",
  ].some((keyword) => tech.includes(keyword))
);

const backendSkills = techList.filter((tech) =>
  [
    "Node.js",
    "NestJS",
    ".NET",
    "Java",
    "PHP",
    "Python",
    "C#",
    "C++",
    "Express",
    "REST API",
    "GraphQL",
    "Microservices",
  ].some((keyword) => tech.includes(keyword))
);

const databaseSkills = techList.filter((tech) =>
  [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Oracle",
    "Sybase",
    "Firebase",
    "Database",
    "Redis",
    "DynamoDB",
    "Prisma",
    "Mongoose",
  ].some((keyword) => tech.includes(keyword))
);

const toolsSkills = techList.filter((tech) =>
  [
    "Git",
    "Docker",
    "AWS",
    "Jenkins",
    "Linux",
    "Bitbucket",
    "ChatGPT",
    "OpenAI",
    "LLMs",
    "Automation",
    "Vercel",
    "Netlify",
    "Jira",
    "Atlassian",
    "Postman",
    "n8n",
    "CI/CD",
  ].some((keyword) => tech.includes(keyword))
);

// Add section: Technical Skills
pdf.setFontSize(12);
pdf.setFont("helvetica", "bold");
pdf.text("TECHNICAL SKILLS", margin, yPos);
yPos += lineHeight * 1.5;

pdf.setFontSize(10);

if (frontendSkills.length > 0) {
  pdf.setFont("helvetica", "bold");
  pdf.text("Frontend:", margin, yPos);
  pdf.setFont("helvetica", "normal");
  yPos =
    addWrappedText(
      frontendSkills.join(", "),
      margin + 25,
      yPos,
      contentWidth - 25,
      lineHeight
    ) +
    lineHeight * 0.5; // Reduced spacing after frontend section
}

if (backendSkills.length > 0) {
  pdf.setFont("helvetica", "bold");
  pdf.text("Backend:", margin, yPos);
  pdf.setFont("helvetica", "normal");
  yPos =
    addWrappedText(
      backendSkills.join(", "),
      margin + 25,
      yPos,
      contentWidth - 25,
      lineHeight
    ) +
    lineHeight * 0.5; // Reduced spacing after backend section
}

if (databaseSkills.length > 0) {
  pdf.setFont("helvetica", "bold");
  pdf.text("Database:", margin, yPos);
  pdf.setFont("helvetica", "normal");
  yPos =
    addWrappedText(
      databaseSkills.join(", "),
      margin + 25,
      yPos,
      contentWidth - 25,
      lineHeight
    ) +
    lineHeight * 0.5; // Reduced spacing after database section
}

if (toolsSkills.length > 0) {
  pdf.setFont("helvetica", "bold");
  pdf.text("Tools:", margin, yPos);
  pdf.setFont("helvetica", "normal");
  yPos =
    addWrappedText(
      toolsSkills.join(", "),
      margin + 25,
      yPos,
      contentWidth - 25,
      lineHeight
    ) +
    lineHeight * 0.5; // Reduced spacing after tools section
}

yPos += lineHeight * 1.5; // Increased spacing before Professional Experience section

// Add section: Professional Experience
pdf.setFontSize(12);
pdf.setFont("helvetica", "bold");
pdf.text("PROFESSIONAL EXPERIENCE", margin, yPos);
yPos += lineHeight * 1.5; // Increased spacing after heading

// Add work experiences from projects
projects.forEach((project, index) => {
  // Skip projects that don't have bullet points (likely not work experience)
  if (!project.bulletPoints || project.bulletPoints.length === 0) {
    return;
  }

  // Check if we need a new page
  if (yPos > 275) {
    pdf.addPage();
    yPos = 20;
  }

  // Extract company name and position from description
  const descParts = project.description.split("|");
  const period = descParts[0] ? descParts[0].trim() : "";
  const position = descParts[1] ? descParts[1].trim() : "";

  pdf.setFontSize(12);
  pdf.setFont("helvetica", "bold");
  pdf.text(`${project.title} | ${position}`, margin, yPos);
  yPos += lineHeight * 0.9; // Reduced spacing after job title

  pdf.setFontSize(10);
  pdf.setFont("helvetica", "italic");
  pdf.text(period, margin, yPos);
  yPos += lineHeight * 1.1; // Reduced spacing after period

  // Add ALL bullet points - no limit
  pdf.setFont("helvetica", "normal");
  project.bulletPoints.forEach((point) => {
    // Check if we need a new page
    if (yPos > 275) {
      pdf.addPage();
      yPos = 20;
    }
    pdf.text("•", margin, yPos);
    yPos =
      addWrappedText(point, margin + 5, yPos, contentWidth - 5, lineHeight) +
      lineHeight * 0.3; // Reduced spacing between bullet points
  });

  // Add technologies used
  pdf.setFont("helvetica", "bold");
  pdf.text("Technologies:", margin, yPos);
  pdf.setFont("helvetica", "normal");
  yPos =
    addWrappedText(
      project.tech,
      margin + 25,
      yPos,
      contentWidth - 25,
      lineHeight
    ) +
    lineHeight * 1.2; // Increased spacing after technologies (between jobs)
});

// Add education section if there's room, otherwise add a new page
if (yPos > 275) {
  pdf.addPage();
  yPos = 20;
}

// Add section: Education
pdf.setFontSize(12);
pdf.setFont("helvetica", "bold");
pdf.text("EDUCATION", margin, yPos);
yPos += lineHeight * 0.8;

pdf.setFontSize(12);
pdf.text("Bachelor of Science in Computer Science", margin, yPos);
yPos += lineHeight;

pdf.setFontSize(10);
pdf.setFont("helvetica", "italic");
pdf.text("University of Santo Tomas - Legazpi | 2014 - 2018", margin, yPos);
yPos += lineHeight * 2;

// Ensure output directory exists
const outputDir = path.join(__dirname, "../public/documents");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Save the PDF
const outputPath = path.join(outputDir, "fratz_antigua_resume.pdf");
pdf.save(outputPath);

console.log(`PDF resume generated successfully at ${outputPath}`);
