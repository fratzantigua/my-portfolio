const fs = require('fs');
const path = require('path');
const { jsPDF } = require('jspdf');
require('jspdf-autotable');

// Extract project data from Projects.js
const projectsFilePath = path.join(__dirname, '../components/Projects.js');
const projectsFileContent = fs.readFileSync(projectsFilePath, 'utf8');

// Function to extract project data from the file content
function extractProjects(content) {
  const projects = [];
  const regex = /\{\s*title:\s*"([^"]+)",[\s\S]*?description:\s*"([^"]+)",[\s\S]*?tech:\s*"([^"]+)",[\s\S]*?bulletPoints:\s*\[((?:[\s\S]*?"[^"]*")[\s\S]*?)\],/g;
  
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
      bulletPoints
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
  return y + (lines.length * lineHeight);
};

// Set initial position
let yPos = 20;
const lineHeight = 7;
const margin = 20;
const pageWidth = 210; // A4 width in mm
const contentWidth = pageWidth - (margin * 2);

// Add header
pdf.setFontSize(24);
pdf.setFont('helvetica', 'bold');
pdf.text("FRATZ ANTIGUA", pdf.internal.pageSize.width / 2, yPos, { align: 'center' });
yPos += lineHeight * 1.5;

pdf.setFontSize(14);
pdf.setFont('helvetica', 'normal');
pdf.text("Software Engineer", pdf.internal.pageSize.width / 2, yPos, { align: 'center' });
yPos += lineHeight * 1.5;

// Add contact info
pdf.setFontSize(10);
const contactInfo = "fratzantigua@email.com | linkedin.com/in/fratzantigua | github.com/fratzantigua";
pdf.text(contactInfo, pdf.internal.pageSize.width / 2, yPos, { align: 'center' });
yPos += lineHeight * 2;

// Add section: About Me
pdf.setFontSize(14);
pdf.setFont('helvetica', 'bold');
pdf.text("ABOUT ME", margin, yPos);
yPos += lineHeight;

pdf.setFontSize(10);
pdf.setFont('helvetica', 'normal');
const aboutMeText = "Hardworking and results-driven IT professional with 7 years of experience in the industry, specializing in application development, coding, and system maintenance. Proven ability to deliver high-quality software solutions and contribute effectively in team-oriented environments. Skilled communicator with a strong willingness to continuously learn and adapt to evolving technologies.\n\nWith a keen interest in modern development practices, I actively stay updated on emerging tools, frameworks, and methodologies, including cloud computing, DevOps practices, and containerization technologies. I am particularly enthusiastic about the growing impact of artificial intelligence and machine learning in software development.";
yPos = addWrappedText(aboutMeText, margin, yPos, contentWidth, lineHeight) + lineHeight;

// Extract skills from project techs
const allTechs = projects.map(project => project.tech).join(',');
const techSet = new Set(allTechs.split(',').map(tech => tech.trim()).filter(tech => tech));
const techList = Array.from(techSet).sort();

// Group skills by category (based on common knowledge)
const frontendSkills = techList.filter(tech => [
  'React', 'Next.js', 'Angular', 'AngularJS', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SASS'
].some(keyword => tech.includes(keyword)));

const backendSkills = techList.filter(tech => [
  'Node.js', 'NestJS', '.NET', 'Java', 'PHP', 'Python', 'C#', 'C++', 'Express'
].some(keyword => tech.includes(keyword)));

const databaseSkills = techList.filter(tech => [
  'MongoDB', 'MySQL', 'PostgreSQL', 'Oracle', 'Sybase', 'Firebase', 'Database'
].some(keyword => tech.includes(keyword)));

const toolsSkills = techList.filter(tech => [
  'Git', 'Docker', 'AWS', 'Jenkins', 'Linux', 'Bitbucket', 'ChatGPT', 'OpenAI', 'LLMs', 'Automation'
].some(keyword => tech.includes(keyword)));

// Add section: Technical Skills
pdf.setFontSize(14);
pdf.setFont('helvetica', 'bold');
pdf.text("TECHNICAL SKILLS", margin, yPos);
yPos += lineHeight;

pdf.setFontSize(10);

if (frontendSkills.length > 0) {
  pdf.setFont('helvetica', 'bold');
  pdf.text("Frontend:", margin, yPos);
  pdf.setFont('helvetica', 'normal');
  yPos = addWrappedText(frontendSkills.join(', '), margin + 25, yPos, contentWidth - 25, lineHeight) + lineHeight;
}

if (backendSkills.length > 0) {
  pdf.setFont('helvetica', 'bold');
  pdf.text("Backend:", margin, yPos);
  pdf.setFont('helvetica', 'normal');
  yPos = addWrappedText(backendSkills.join(', '), margin + 25, yPos, contentWidth - 25, lineHeight) + lineHeight;
}

if (databaseSkills.length > 0) {
  pdf.setFont('helvetica', 'bold');
  pdf.text("Database:", margin, yPos);
  pdf.setFont('helvetica', 'normal');
  yPos = addWrappedText(databaseSkills.join(', '), margin + 25, yPos, contentWidth - 25, lineHeight) + lineHeight;
}

if (toolsSkills.length > 0) {
  pdf.setFont('helvetica', 'bold');
  pdf.text("Tools & Platforms:", margin, yPos);
  pdf.setFont('helvetica', 'normal');
  yPos = addWrappedText(toolsSkills.join(', '), margin + 25, yPos, contentWidth - 25, lineHeight) + lineHeight;
}

yPos += lineHeight;

// Add section: Professional Experience
pdf.setFontSize(14);
pdf.setFont('helvetica', 'bold');
pdf.text("PROFESSIONAL EXPERIENCE", margin, yPos);
yPos += lineHeight * 1.5;

// Add work experiences from projects
projects.forEach((project, index) => {
  // Skip projects that don't have bullet points (likely not work experience)
  if (!project.bulletPoints || project.bulletPoints.length === 0) {
    return;
  }
  
  // Check if we need a new page
  if (yPos > 250) {
    pdf.addPage();
    yPos = 20;
  }
  
  // Extract company name and position from description
  const descParts = project.description.split('|');
  const period = descParts[0] ? descParts[0].trim() : '';
  const position = descParts[1] ? descParts[1].trim() : '';
  
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text(`${project.title} | ${position}`, margin, yPos);
  yPos += lineHeight;
  
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'italic');
  pdf.text(period, margin, yPos);
  yPos += lineHeight;
  
  // Add bullet points
  pdf.setFont('helvetica', 'normal');
  project.bulletPoints.forEach((point, i) => {
    // Limit to 5 bullet points per job to keep resume concise
    if (i < 5) {
      pdf.text("•", margin, yPos);
      yPos = addWrappedText(point, margin + 5, yPos, contentWidth - 5, lineHeight) + lineHeight;
    }
  });
  
  // Add technologies used
  pdf.setFont('helvetica', 'bold');
  pdf.text("Technologies:", margin, yPos);
  pdf.setFont('helvetica', 'normal');
  yPos = addWrappedText(project.tech, margin + 25, yPos, contentWidth - 25, lineHeight) + lineHeight * 2;
});

// Add education section if there's room, otherwise add a new page
if (yPos > 250) {
  pdf.addPage();
  yPos = 20;
}

// Add section: Education
pdf.setFontSize(14);
pdf.setFont('helvetica', 'bold');
pdf.text("EDUCATION", margin, yPos);
yPos += lineHeight * 1.5;

pdf.setFontSize(12);
pdf.text("Bachelor of Science in Computer Science", margin, yPos);
yPos += lineHeight;

pdf.setFontSize(10);
pdf.setFont('helvetica', 'italic');
pdf.text("University of Technology | 2012 - 2016", margin, yPos);
yPos += lineHeight * 2;

// Ensure output directory exists
const outputDir = path.join(__dirname, '../public/documents');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Save the PDF
const outputPath = path.join(outputDir, 'fratz_antigua_resume.pdf');
pdf.save(outputPath);

console.log(`PDF resume generated successfully at ${outputPath}`);

