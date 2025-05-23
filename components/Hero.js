import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Hero = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className='uppercase text-sm tracking-widest text-gray-600'>
              LET'S BUILD SOMETHING TOGETHER
            </p>
            <h1 className='py-4 text-gray-700'>
              Hi, I'm <span className='text-primary'>Your Name</span>
            </h1>
            <h1 className='py-2 text-gray-700'>
              A Full-Stack Web Developer
            </h1>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
              I'm a full-stack web developer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I'm focused on
              building responsive web applications while learning new technologies.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='flex items-center justify-between max-w-[330px] m-auto py-4'
          >
            <a
              href='https://www.linkedin.com/'
              target='_blank'
              rel='noreferrer'
              className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              <FaLinkedinIn />
            </a>
            <a
              href='https://github.com/'
              target='_blank'
              rel='noreferrer'
              className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              <FaGithub />
            </a>
            <a
              href='https://twitter.com/'
              target='_blank'
              rel='noreferrer'
              className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              <FaTwitter />
            </a>
            <a
              href='mailto:email@example.com'
              className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              <HiOutlineMail />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
