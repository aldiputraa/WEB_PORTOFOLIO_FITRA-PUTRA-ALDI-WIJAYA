import { FaArrowRight } from 'react-icons/fa'

function Hero() {

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-[10%] w-72 h-72 bg-secondary-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-700/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
      </div>
      
      {/* Particle effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`
            }}
          ></div>
        ))}
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
      
      <div className="container mx-auto px-4 z-10 pt-20 pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-3/5 animate-slideRight">
              <p className="text-secondary-400 font-medium mb-4 tracking-wider">SELAMAT DATANG DI PORTOFOLIO SAYA</p>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight text-white">
                Halo, Saya <span className="text-primary-400 inline-block relative">
                  Fitra Putra Aldi Wijaya
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary-400 rounded-full"></span>
                </span>
              </h1>

              <p className="text-lg text-white/70 mb-8 max-w-lg">
                Saya adalah mahasiswa aktif Program Studi Teknik Komputer semester 6 di Universitas Teknologi Digital Indonesia (UTDI). Saya memiliki minat yang kuat di bidang pemrograman, baik web maupun mobile. Selain itu, saya juga tertarik dengan perkembangan teknologi Internet of Things (IoT) dan isu-isu terkait keamanan siber.
Saya selalu berkomitmen untuk terus belajar dan mengikuti perkembangan teknologi terkini guna meningkatkan keterampilan dan memperluas wawasan di bidang yang saya tekuni.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={scrollToContact}
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/20 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-dark-900 flex items-center gap-2 group"
                >
                  Hubungi Saya
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={scrollToProjects}
                  className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/5 focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-dark-900 flex items-center gap-2 group"
                >
                  Lihat Proyek
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              

            </div>
            
            <div className="w-full md:w-2/5 animate-slideLeft">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 border-t-4 border-r-4 border-primary-500 opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 border-b-4 border-l-4 border-secondary-500 opacity-60"></div>
                
                {/* Glowing effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-75 blur-lg animate-slowFade"></div>
                
                {/* Image container */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-white/10">
                  <img 
                    src="/assets/profile.jpg" 
                    alt="Fitra Putra Aldi Wijaya" 
                    className="w-full object-cover transition-transform hover:scale-105 duration-700"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                  
                  {/* Experience badge */}
                  {/* Badge removed */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social media icons */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-6">
          <a 
            href="https://www.instagram.com/aldiputraep_/profilecard/?igsh=dnluaWlyaDlrZHdt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-dark-800/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-primary-400 hover:border-primary-400/50 transition-all duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a 
            href="https://github.com/aldiputraa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-dark-800/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-primary-400 hover:border-primary-400/50 transition-all duration-300 group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <div className="h-20 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent mx-auto"></div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
          <div className="flex flex-col items-center">
            <span className="text-white/50 text-sm mb-2">Scroll</span>
            <div className="w-8 h-12 rounded-full border-2 border-white/20 flex items-center justify-center">
              <div className="w-1.5 h-3 bg-primary-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero