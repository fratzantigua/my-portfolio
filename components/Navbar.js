import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 300; // Offset for better detection

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleShadow);
    window.addEventListener('scroll', handleScroll);
    
    // Initial check for active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleShadow);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About', href: '/#about' },
    { id: 'skills', label: 'Skills', href: '/#skills' },
    { id: 'projects', label: 'Projects', href: '/#projects' },
    { id: 'contact', label: 'Contact', href: '/#contact' },
  ];

  return (
    <header className={`fixed w-full z-[100] transition-all duration-300 ${shadow ? 'h-20 shadow-elegant bg-card/95 backdrop-blur-md' : 'h-24'}`}>
      <div className='container-custom flex justify-between items-center w-full h-full'>
        <Link href='/'>
          <a className='relative group'>
            <span className='text-2xl font-bold bg-gradient-elegant bg-clip-text text-transparent'>Portfolio</span>
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300'></span>
          </a>
        </Link>
        
        <nav className='hidden md:block'>
          <ul className='flex items-center space-x-8'>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>
                  <a className={`relative py-2 text-sm font-medium transition-colors duration-300 ${activeSection === item.id ? 'text-primary' : 'text-secondary hover:text-primary'}`}>
                    {item.label}
                    {activeSection === item.id && (
                      <motion.span 
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className='hidden md:block'>
          <Link href='/#contact'>
            <a className='btn-primary text-sm py-2'>Get In Touch</a>
          </Link>
        </div>
        
        <button 
          onClick={handleNav} 
          className='md:hidden p-2 text-primary hover:bg-primary/10 rounded-md transition-colors duration-300'
          aria-label="Toggle navigation menu"
        >
          <FaBars size={24} />
        </button>
      </div>

      <AnimatePresence>
        {nav && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='md:hidden fixed inset-0 bg-dark/60 backdrop-blur-sm z-[101]'
              onClick={handleNav}
            />
            
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className='md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] h-screen bg-card z-[102] p-8 overflow-y-auto'
            >
              <div className='flex justify-between items-center mb-8'>
                <Link href='/'>
                  <a className='text-2xl font-bold bg-gradient-elegant bg-clip-text text-transparent' onClick={() => setNav(false)}>Portfolio</a>
                </Link>
                <button 
                  onClick={handleNav} 
                  className='p-2 text-muted hover:text-primary hover:bg-primary/10 rounded-full transition-colors duration-300'
                  aria-label="Close navigation menu"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              
              <div className='border-b border-muted/20 mb-6'>
                <p className='pb-4 text-secondary'>Crafting digital experiences</p>
              </div>
              
              <nav className='mb-8'>
                <ul className='space-y-4'>
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <Link href={item.href}>
                        <a 
                          className={`block py-2 px-4 rounded-md transition-colors duration-300 ${activeSection === item.id ? 'bg-primary/10 text-primary' : 'text-secondary hover:bg-primary/5 hover:text-primary'}`}
                          onClick={() => setNav(false)}
                        >
                          {item.label}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <Link href='/#contact'>
                <a className='btn-primary w-full text-center' onClick={() => setNav(false)}>Get In Touch</a>
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
