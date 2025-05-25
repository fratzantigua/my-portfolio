import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiArrowDown } from "react-icons/hi";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full h-screen bg-background relative overflow-hidden"
    >
      {/* Background gradient circles */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primaryLight/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container-custom h-full flex flex-col justify-center items-center">
        <div className="text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-title mb-6">CRAFTING DIGITAL EXPERIENCES</p>
            <h1 className="mb-4 font-bold">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-elegant">
                Fratz Antigua
              </span>
            </h1>
            <h2 className="mb-6 text-secondaryDark font-medium">
              Full-Stack Software Engineer
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              I'm a Full-Stack Engineer with experience in building scalable web
              applications using technologies like Angular, React, Next.js,
              Node.js, Express.js, and MongoDB. I have a strong foundation in
              both frontend and backend development, RESTful APIs, and
              deployment workflows. I also work with AI technologies,
              integrating machine learning models and APIs like OpenAI to create
              intelligent, user-driven solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="#projects">
                <a className="btn-primary">View My Work</a>
              </Link>
              <Link href="#contact">
                <a className="btn-secondary">Get In Touch</a>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            <a
              href="https://www.linkedin.com/"
              target="https://www.linkedin.com/in/fratz-antigua/"
              rel="noreferrer"
              className="rounded-full bg-white shadow-card p-3 text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://github.com/"
              target="https://github.com/fratzantigua"
              rel="noreferrer"
              className="rounded-full bg-white shadow-card p-3 text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="mailto:fratzantigua@gmail.com"
              className="rounded-full bg-white shadow-card p-3 text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Email Contact"
            >
              <HiOutlineMail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.2,
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link href="#about">
            <a className="flex flex-col items-center text-muted hover:text-primary transition-colors duration-300">
              <span className="text-sm mb-2">Scroll Down</span>
              <HiArrowDown size={20} />
            </a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
