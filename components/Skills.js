import { motion } from 'framer-motion';
import Image from 'next/image';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: '/skills/html.png' },
    { name: 'CSS', icon: '/skills/css.png' },
    { name: 'JavaScript', icon: '/skills/javascript.png' },
    { name: 'React', icon: '/skills/react.png' },
    { name: 'Next.js', icon: '/skills/nextjs.png' },
    { name: 'Node.js', icon: '/skills/node.png' },
    { name: 'MongoDB', icon: '/skills/mongodb.png' },
    { name: 'Tailwind', icon: '/skills/tailwind.png' },
    { name: 'Firebase', icon: '/skills/firebase.png' },
    { name: 'GitHub', icon: '/skills/github.png' },
  ];

  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className='text-xl tracking-widest uppercase text-primary'>Skills</p>
          <h2 className='py-4'>What I Can Do</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
              >
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <div className='w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center'>
                      {/* Replace with actual icons when available */}
                      <span className='text-xs text-center'>{skill.name}</span>
                      {/* Uncomment when you have icons
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={40}
                        height={40}
                      />
                      */}
                    </div>
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>{skill.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
