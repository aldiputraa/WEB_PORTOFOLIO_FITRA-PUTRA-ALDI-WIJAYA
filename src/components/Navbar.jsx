import { useState, useEffect } from 'react'

function Navbar({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling when clicking on nav links
  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 backdrop-blur-xl bg-dark-900/80 shadow-lg shadow-dark-950/20' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2 group">
           
            <span className={`font-serif text-xl font-bold ${isScrolled ? 'text-white' : 'text-white'} group-hover:text-primary-400 transition-colors duration-300`}>Fitra Putra Aldi Wijaya</span>
          </a>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink active={activeSection === 'home'} onClick={() => scrollToSection('home')}>home</NavLink>
            <NavLink active={activeSection === 'about'} onClick={() => scrollToSection('about')}>about</NavLink>
            <NavLink active={activeSection === 'skills'} onClick={() => scrollToSection('skills')}>skills</NavLink>
            <NavLink active={activeSection === 'experience'} onClick={() => scrollToSection('experience')}>experience</NavLink>
            <NavLink active={activeSection === 'projects'} onClick={() => scrollToSection('projects')}>projects</NavLink>
            <NavLink active={activeSection === 'certificates'} onClick={() => scrollToSection('certificates')}>certificates</NavLink>
            <NavLink active={activeSection === 'contact'} onClick={() => scrollToSection('contact')}>contact</NavLink>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-8 h-8 flex items-center justify-center relative">
              <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
              <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-dark-800 overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 border-t border-dark-700' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col space-y-4">
            <MobileNavLink active={activeSection === 'home'} onClick={() => scrollToSection('home')}>home</MobileNavLink>
            <MobileNavLink active={activeSection === 'about'} onClick={() => scrollToSection('about')}>about</MobileNavLink>
            <MobileNavLink active={activeSection === 'skills'} onClick={() => scrollToSection('skills')}>skills</MobileNavLink>
            <MobileNavLink active={activeSection === 'experience'} onClick={() => scrollToSection('experience')}>experience</MobileNavLink>
            <MobileNavLink active={activeSection === 'projects'} onClick={() => scrollToSection('projects')}>projects</MobileNavLink>
            <MobileNavLink active={activeSection === 'certificates'} onClick={() => scrollToSection('certificates')}>certificates</MobileNavLink>
            <MobileNavLink active={activeSection === 'contact'} onClick={() => scrollToSection('contact')}>contact</MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Desktop navigation link component
function NavLink({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
        active 
          ? 'text-primary-400' 
          : 'text-white/70 hover:text-white'
      }`}
    >
      {children}
      {active && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
      )}
    </button>
  );
}

// Mobile navigation link component
function MobileNavLink({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-lg transition-colors duration-300 ${
        active 
          ? 'bg-primary-500/10 text-primary-400 font-medium' 
          : 'text-white/70 hover:text-white hover:bg-white/5'
      }`}
    >
      {children}
    </button>
  );
}

export default Navbar