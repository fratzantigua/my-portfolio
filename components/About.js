import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="uppercase text-xl tracking-widest text-primary">
              About
            </p>
            <h2 className="py-4">Who I Am</h2>
            <p className="py-2 text-gray-600">
              Hardworking and results-driven IT professional with 7 years of
              experience in the industry, specializing in application
              development, coding, and system maintenance. Proven ability to
              deliver high-quality software solutions and contribute effectively
              in team-oriented environments. Skilled communicator with a strong
              willingness to continuously learn and adapt to evolving
              technologies. With a keen interest in modern development
              practices, I actively stay updated on emerging tools, frameworks,
              and methodologies, including cloud computing, DevOps practices,
              and containerization technologies. I am particularly enthusiastic
              about the growing impact of artificial intelligence and machine
              learning in software development, and I’m eager to explore how
              these innovations can enhance application performance, automate
              processes, and drive smarter decision-making. Aiming to leverage
              my technical expertise, adaptability, and passion for innovation
              to contribute meaningfully to the Software Engineer role at your
              company.
            </p>
            <p className="py-2 text-gray-600">
              I started software development in 2018 managing multiple software
              applications. I have experience working directly with clients and
              taking mock wireframes all the way to deployed applications. In my
              spare time I actively engage and enhance my skills in the software
              development space.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <div className="relative w-full h-[400px]">
            {/* Replace with your own image */}
            <div className="w-full h-full bg-gradient-to-r from-primary to-blue-400 rounded-xl flex items-center justify-center text-white text-lg">
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
