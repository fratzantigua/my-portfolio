const fs = require('fs');
const path = require('path');
const { jsPDF } = require('jspdf');
require('jspdf-autotable');

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
const contactInfo = "fratzantigua@email.com | linkedin.com/in/fratzantigua | github.com/fratzantigua | (123) 456-7890";
pdf.text(contactInfo, pdf.internal.pageSize.width / 2, yPos, { align: 'center' });
yPos += lineHeight * 2;

// Add section: About Me
pdf.setFontSize(14);
pdf.setFont('helvetica', 'bold');
pdf.text("ABOUT ME", margin, yPos);
yPos += lineHeight;

pdf.setFontSize(10);
pdf.setFont('helvetica', 'normal');
const aboutMeText = "Hardworking and results-driven IT professional with 7 years of experience in the industry, specializing in application development, coding, and system maintenance. Proven ability to deliver high-quality software solutions and contribute effectively in team-oriented environments. Skilled communicator with a strong willingness to continuously learn and adapt to evolving technologies.";
yPos = addWrappedText(aboutMeText, margin, yPos, contentWidth, lineHeight) + lineHeight;

// Add section: Technical Skills
pdf.setFontSize(14);
pdf.setFont('helvetica', 'bold');
pdf.text("TECHNICAL SKILLS", margin, yPos);
yPos += lineHeight;

pdf.setFontSize(10);
pdf.setFont('helvetica', 'bold');
pdf.text("Frontend:", margin, yPos);
pdf.setFont('helvetica', 'normal');
yPos = addWrappedText("React, Next.js, Angular, JavaScript, TypeScript, HTML5, CSS3, SASS, Redux, Material UI, Bootstrap", margin + 25, yPos, contentWidth - 25, lineHeight) + lineHeight;

pdf.setFont('helvetica', 'bold');
pdf.text("Backend:", margin, yPos);
pdf.setFont('helvetica', 'normal');
yPos = addWrappedText("Node.js, Express, NestJS, .NET, RESTful APIs, GraphQL, WebSockets", margin + 25, yPos, contentWidth - 25, lineHeight) + lineHeight;

pdf.setFont('helvetica', 'bold');
pdf.text("Database:", margin, yPos);
pdf.setFont('helvetica', 'normal');
yPos = addWrappedText("MongoDB, PostgreSQL, MySQL, Redis, Firebase", margin + 25, yPos, contentWidth - 25, lineHeight) + lineHeight;

pdf.setFont('helvetica', 'bold');
pdf.text("Tools & Platforms:", margin, yPos);
pdf.setFont('helvetica', 'normal');
yPos = addWrappedText("Git, Docker, AWS, Jenkins, Linux, Bitbucket, Jira, Agile, CI/CD, n8n, ChatGPT, OpenAI", margin + 25, yPos, contentWidth - 25, lineHeight) + lineHeight * 2;

// Add section: Professional Experience
pdf.setFontSize(14);
pdf.setFont('helvetica', 'bold');
pdf.text("PROFESSIONAL EXPERIENCE", margin, yPos);
yPos += lineHeight * 1.5;

// Experience 1
pdf.setFontSize(12);
pdf.setFont('helvetica', 'bold');
pdf.text("N-Compass TV | Fullstack Software Engineer", margin, yPos);
yPos += lineHeight;

pdf.setFontSize(10);
pdf.setFont('helvetica', 'italic');
pdf.text("March 2024 – Current", margin, yPos);
yPos += lineHeight;

pdf.setFont('helvetica', 'normal');
const experience1Points = [
  "Architected and implemented scalable RESTful and GraphQL APIs that significantly improved data retrieval efficiency",
  "Developed sophisticated automation workflows using n8n and custom integrations",
  "Built intelligent AI-powered systems leveraging OpenAI's GPT models and other LLMs",
  "Created advanced automation pipelines that seamlessly integrate multiple APIs and databases",
  "Developed responsive and interactive web applications using Angular, React, and Next.js"
];

experience1Points.forEach(point => {
  pdf.text("•", margin, yPos);
  yPos = addWrappedText(point, margin + 5, yPos, contentWidth - 5, lineHeight) + lineHeight;
});
yPos += lineHeight;

// Check if we need a new page
if (yPos > 270) {
  pdf.addPage();
  yPos = 20;
}

// Experience 2
pdf.setFontSize(12);
pdf.setFont('helvetica', 'bold');
pdf.text("WebSolutions LLC | Full Stack Developer", margin, yPos);
yPos += lineHeight;

pdf.setFontSize(10);
pdf.setFont('helvetica', 'italic');
pdf.text("Mar 2018 - Dec 2023", margin, yPos);
yPos += lineHeight;

pdf.setFont('helvetica', 'normal');
const experience2Points = [
  "Developed and maintained multiple client websites using React, Node.js, and MongoDB",
  "Created RESTful APIs for mobile applications, ensuring seamless integration",
  "Collaborated with UX/UI designers to implement responsive and accessible web interfaces",
  "Reduced page load time by 60% through code optimization and implementing lazy loading"
];

experience2Points.forEach(point => {
  pdf.text("•", margin, yPos);
  yPos = addWrappedText(point, margin + 5, yPos, contentWidth - 5, lineHeight) + lineHeight;
});
yPos += lineHeight;

// Experience 3
pdf.setFontSize(12);
pdf.setFont('helvetica', 'bold');
pdf.text("Digital Creations | Junior Web Developer", margin, yPos);
yPos += lineHeight;

pdf.setFontSize(10);
pdf.setFont('helvetica', 'italic');
pdf.text("Jun 2016 - Feb 2018", margin, yPos);
yPos += lineHeight;

pdf.setFont('helvetica', 'normal');
const experience3Points = [
  "Built and maintained client websites using HTML, CSS, and JavaScript",
  "Assisted in the development of a content management system using PHP and MySQL",
  "Implemented responsive designs ensuring compatibility across different browsers and devices",
  "Participated in weekly team meetings and contributed to project planning"
];

experience3Points.forEach(point => {
  pdf.text("•", margin, yPos);
  yPos = addWrappedText(point, margin + 5, yPos, contentWidth - 5, lineHeight) + lineHeight;
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

// Add footer
const outputDir = path.join(__dirname, '../public/documents');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Save the PDF
const outputPath = path.join(outputDir, 'fratz_antigua_resume.pdf');
pdf.save(outputPath);

console.log(`PDF resume generated successfully at ${outputPath}`);
