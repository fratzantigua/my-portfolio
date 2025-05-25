import { motion } from "framer-motion";
import Image from "next/image";
import { FaCode, FaDatabase, FaServer, FaTools } from "react-icons/fa";

const SkillCategory = ({ title, icon, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <div className="flex items-center mb-6">
      <div className="mr-4 text-primary">{icon}</div>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {children}
    </div>
  </motion.div>
);

const SkillItem = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true }}
    className="card p-4 flex flex-col items-center justify-center hover:border-primary hover:border transition-all duration-300"
  >
    <div className="w-16 h-16 mb-3 flex items-center justify-center">
      {/* Use Image component for icons */}
      <Image src={skill.icon} alt={skill.name} width={48} height={48} />
    </div>
    <h4 className="font-medium text-center">{skill.name}</h4>
  </motion.div>
);

// Export skill arrays for use in other components
export const frontendSkills = [
  { name: "HTML", icon: "/skills/html.svg" },
  { name: "CSS", icon: "/skills/css.svg" },
  { name: "JavaScript", icon: "/skills/javascript.svg" },
  { name: "TypeScript", icon: "/skills/typescript.svg" },
  { name: "Next.js", icon: "/skills/nextjs.svg" },
  { name: "Angular", icon: "/skills/angular.svg" },
  { name: "Bootstrap", icon: "/skills/bootstrap.svg" },
];

export const backendSkills = [
  { name: "Node.js", icon: "/skills/nodejs.svg" },
  { name: "Express", icon: "/skills/express.svg" },
  { name: "Firebase", icon: "/skills/firebase.svg" },
  { name: "Python", icon: "/skills/python.svg" },
  { name: "Java", icon: "/skills/java.svg" },
  { name: "C#", icon: "/skills/csharp.svg" },
  { name: "C++", icon: "/skills/C++.svg" },
  { name: "PHP", icon: "/skills/php.svg" },
  { name: "Shell", icon: "/skills/shell.svg" },
];

export const databaseSkills = [
  { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
  { name: "NoSQL", icon: "/skills/nosql.svg" },
  { name: "MySQL", icon: "/skills/mysql.svg" },
  { name: "Sybase", icon: "/skills/sybase.svg" },
  { name: "Oracle", icon: "/skills/oracle.svg" },
];

export const toolsSkills = [
  { name: "GitHub", icon: "/skills/github.svg" },
  { name: "Docker", icon: "/skills/docker.svg" },
  { name: "Jenkins", icon: "/skills/jenkins.svg" },
  { name: "Jira", icon: "/skills/jira.svg" },
  { name: "Atlassian", icon: "/skills/atlassian.svg" },
  { name: "AWS", icon: "/skills/aws.svg" },
  { name: "Vercel", icon: "/skills/vercel.svg" },
  { name: "OpenAI", icon: "/skills/openai.svg" },
  { name: "Postman", icon: "/skills/postman.svg" },
];

const Skills = () => {

  return (
    <div id="skills" className="w-full py-20 bg-background relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primaryLight/5 rounded-bl-full"></div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="section-title inline-block">Skills</p>
          <h2 className="mt-6 mb-4">My Technical Expertise</h2>
          <p className="text-lg max-w-2xl mx-auto">
            I've worked with a range of technologies in the web development
            world, from front-end to back-end, always focusing on creating
            elegant and efficient solutions.
          </p>
        </motion.div>

        <SkillCategory title="Frontend Development" icon={<FaCode size={24} />}>
          {frontendSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill} index={index} />
          ))}
        </SkillCategory>

        <SkillCategory
          title="Backend Development"
          icon={<FaServer size={24} />}
        >
          {backendSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill} index={index} />
          ))}
        </SkillCategory>

        <SkillCategory title="Database" icon={<FaDatabase size={24} />}>
          {databaseSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill} index={index} />
          ))}
        </SkillCategory>

        <SkillCategory title="Tools & Platforms" icon={<FaTools size={24} />}>
          {toolsSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill} index={index} />
          ))}
        </SkillCategory>
      </div>
    </div>
  );
};

export default Skills;
