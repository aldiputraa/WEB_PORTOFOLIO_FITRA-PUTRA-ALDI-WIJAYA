import { useState } from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Terima kasih telah berlangganan!');
    setEmail('');
  };

  return (
    <footer className="bg-dark-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="font-serif text-xl font-bold text-white">Fitra Putra Aldi Wijaya</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Mahasiswa Teknik Komputer yang fokus pada integrasi antara perangkat lunak (software) dan perangkat keras (hardware) untuk mendukung infrastruktur komputasi modern.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/aldiputraep_/profilecard/?igsh=dnluaWlyaDlrZHdt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-white/50 hover:bg-primary-500 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://github.com/aldiputraa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-white/50 hover:bg-primary-500 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Menu Cepat</h3>
            <ul className="space-y-3">
              <FooterLink href="#home" text="Beranda" />
              <FooterLink href="#about" text="Tentang Saya" />
              <FooterLink href="#skills" text="Keahlian" />
              <FooterLink href="#experience" text="Pengalaman" />
              <FooterLink href="#projects" text="Proyek" />
              <FooterLink href="#certificates" text="Sertifikat" />
              <FooterLink href="#contact" text="Kontak" />
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Berlangganan</h3>
            <p className="text-white/70 mb-4">Dapatkan update terbaru dari saya.</p>
            <form onSubmit={handleSubmit} className="flex">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Anda" 
                className="px-4 py-2 bg-dark-800 border border-dark-700 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary-500 text-white flex-1"
                required
              />
              <button 
                type="submit" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Fitra Putra Aldi Wijaya. Hak Cipta Dilindungi.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="bg-dark-800 hover:bg-primary-600 text-white/70 hover:text-white p-3 rounded-full transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}

// Footer link component
function FooterLink({ href, text }) {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <li>
      <a 
        href={href} 
        className="text-white/70 hover:text-primary-400 transition-colors duration-300 flex items-center group"
        onClick={handleClick}
      >
        <span className="w-2 h-0.5 bg-primary-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        {text}
      </a>
    </li>
  );
}

export default Footer