import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className='uppercase text-xl tracking-widest text-primary'>About</p>
            <h2 className='py-4'>Who I Am</h2>
            <p className='py-2 text-gray-600'>
              I specialize in building mobile responsive front-end UI applications
              that connect with API's and other backend technologies. I'm
              passionate about learning new technologies and understand there is
              more than one way to accomplish a task. Though I am most proficient
              in building front-end applications using HTML, CSS, Javascript, and
              React, I am a quick learner and can pick up new tech stacks as
              needed.
            </p>
            <p className='py-2 text-gray-600'>
              I started web development in 2013 managing multiple e-commerce
              websites. I have experience working directly with clients and taking
              mock wireframes all the way to deployed applications. In my spare
              time I run Code Commerce, a Youtube channel where I teach web
              development and various front-end technologies.
            </p>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'
        >
          <div className='relative w-full h-[400px]'>
            {/* Replace with your own image */}
            <div className='w-full h-full bg-gradient-to-r from-primary to-blue-400 rounded-xl flex items-center justify-center text-white text-lg'>
              Your Profile Image
            </div>
            {/* Uncomment and use when you have an image
            <Image
              src='/assets/about.jpg'
              alt='Profile picture'
              layout='fill'
              objectFit='cover'
              className='rounded-xl'
            />
            */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
