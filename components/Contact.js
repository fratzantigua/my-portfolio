import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full py-16">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xl tracking-widest uppercase text-primary">
            Contact
          </p>
          <h2 className="py-4">Get In Touch</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full">
                <div>
                  <div className="w-full h-[200px] bg-gradient-to-r from-primary to-blue-400 rounded-xl flex items-center justify-center text-white">
                    Contact Image
                  </div>
                  {/* Uncomment when you have an image
                  <Image
                    className='rounded-xl hover:scale-105 ease-in duration-300'
                    src='/assets/contact.jpg'
                    alt='Contact'
                    width={500}
                    height={300}
                  />
                  */}
                </div>
                <div>
                  <h2 className="py-2">Fratz Antigua</h2>
                  <p>Full-Stack Software Engineer</p>
                  <p className="py-4">
                    I am available for freelance or full-time positions. Contact
                    me and let's talk.
                  </p>
                </div>
                <div>
                  <p className="uppercase pt-8">Connect With Me</p>
                  <div className="flex items-center justify-between py-4">
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="mailto:fratzantigua@gmail.com"
                      className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                      <HiOutlineMail />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form action="https://formsubmit.co/fratzantigua@gmail.com" method="POST">
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-primary"
                        type="text"
                        name="name"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">
                        Phone Number
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-primary"
                        type="text"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-primary"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-primary"
                      type="text"
                      name="subject"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300 focus:outline-none focus:border-primary"
                      rows="10"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <input type="hidden" name="_next" value="https://fratzantigua.com/thank-you" />
                  <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
                  <input type="hidden" name="_captcha" value="true" />
                  <button type="submit" className="w-full p-4 text-gray-100 mt-4 bg-primary rounded-lg hover:bg-blue-700 ease-in duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
