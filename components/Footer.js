import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="mb-4">
              A professional portfolio showcasing my skills, projects, and
              experience as a web developer.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                <FaTwitter size={20} />
              </a>
              <a href="mailto:email@example.com" className="hover:text-primary">
                <HiOutlineMail size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="mb-2">Your Name</p>
            <p className="mb-2">email@example.com</p>
            <p className="mb-2">Your Location</p>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Portfolio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
