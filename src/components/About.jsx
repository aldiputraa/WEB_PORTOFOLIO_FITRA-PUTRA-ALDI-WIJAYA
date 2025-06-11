import { useState, useEffect, useRef } from 'react'

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  
  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-dark-950" ref={aboutRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-10 md:mb-16">
          <span className={`text-primary-400 font-medium mb-2 tracking-wider text-center ${isVisible ? 'animate-slideDown' : 'opacity-0'}`}>TENTANG SAYA</span>
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center ${isVisible ? 'animate-slideDown' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Mengenal Lebih Dekat
          </h2>
          <div className={`w-20 md:w-24 h-1 bg-primary-500 mt-4 md:mt-6 rounded-full ${isVisible ? 'animate-slideDown' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div className={`w-full sm:w-4/5 md:w-3/4 lg:w-2/5 mx-auto lg:mx-0 mb-8 lg:mb-0 ${isVisible ? 'animate-slideRight' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-full w-72 h-72 sm:w-80 sm:h-80 relative border-4 border-primary-500/30 shadow-lg shadow-primary-500/20">
                <img 
                  src="/assets/profile.jpg" 
                  alt="Fitra Putra Aldi Wijaya" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-white font-medium text-xl">Fitra Putra Aldi Wijaya</p>
            </div>
          </div>
          
          <div className={`w-full lg:w-3/5 ${isVisible ? 'animate-slideLeft' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 text-center lg:text-left">
              Saya <span className="text-primary-400">Fitra Putra Aldi Wijaya</span> <br className="block sm:hidden" />Mahasiswa Teknik Komputer
            </h3>
            <p className="text-white/70 mb-4 md:mb-6 leading-relaxed text-sm sm:text-base">
              Saya adalah mahasiswa aktif Program Sarjana (S1) Teknik Komputer semester 6 di Universitas Teknologi Digital Indonesia (UTDI). Saya memiliki keahlian dalam pengembangan aplikasi web dengan React dan JavaScript, serta mampu mengintegrasikan frontend dengan backend menggunakan Node.js. Kemampuan saya dalam HTML/CSS memungkinkan saya menciptakan antarmuka yang responsif dan menarik.
            </p>
            <p className="text-white/70 mb-6 md:mb-8 leading-relaxed text-sm sm:text-base">
              Selain pengembangan web, saya juga menguasai teknologi Internet of Things (IoT) yang memungkinkan saya merancang sistem terintegrasi antara perangkat keras dan perangkat lunak. Saya senantiasa berkomitmen untuk terus belajar dan mengikuti perkembangan teknologi terbaru guna meningkatkan keterampilan serta memperluas wawasan di bidang yang saya tekuni.
            </p>
            
          
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <a 
                href="https://drive.google.com/drive/folders/1OFc8Q5HWhlrkvbub4Rjf0DOehzx1SLNf?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-primary-600 hover:bg-primary-700 text-white text-sm sm:text-base font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/20 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-dark-900 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
              <a 
                href="#contact" 
                className="px-4 sm:px-6 py-2.5 sm:py-3 border border-white/20 hover:border-white/40 text-white text-sm sm:text-base font-medium rounded-lg transition-all duration-300 hover:bg-white/5 focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-dark-900 flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About