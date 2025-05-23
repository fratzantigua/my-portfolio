import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({ title, backgroundImg, tech, projectUrl, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-primary to-blue-400'
    >
      <div className='h-[230px] w-full bg-gray-200 rounded-xl flex items-center justify-center'>
        <span className='text-lg text-center p-4'>{title} Preview</span>
        {/* Uncomment when you have project images
        <Image
          className='rounded-xl group-hover:opacity-10'
          src={backgroundImg}
          alt={title}
          layout='fill'
          objectFit='cover'
        />
        */}
      </div>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <Link href={projectUrl}>
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce App',
      backgroundImg: '/projects/ecommerce.jpg',
      projectUrl: '/project/ecommerce',
      tech: 'React JS',
    },
    {
      title: 'Portfolio Website',
      backgroundImg: '/projects/portfolio.jpg',
      projectUrl: '/project/portfolio',
      tech: 'Next JS',
    },
    {
      title: 'Crypto Dashboard',
      backgroundImg: '/projects/crypto.jpg',
      projectUrl: '/project/crypto',
      tech: 'React JS',
    },
    {
      title: 'Mobile Application',
      backgroundImg: '/projects/mobile.jpg',
      projectUrl: '/project/mobile',
      tech: 'React Native',
    },
  ];

  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className='text-xl tracking-widest uppercase text-primary'>Projects</p>
          <h2 className='py-4'>What I've Built</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {projects.map((project, index) => (
              <ProjectItem
                key={index}
                title={project.title}
                backgroundImg={project.backgroundImg}
                tech={project.tech}
                projectUrl={project.projectUrl}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
