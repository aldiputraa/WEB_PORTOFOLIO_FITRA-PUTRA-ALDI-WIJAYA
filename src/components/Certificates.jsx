import { useState, useEffect, useRef } from 'react'
import cloudAWS from '/assets/sertifikat/Belajar Dasar Cloud dan Gen AI di AWS.png'
import sqlCert from '/assets/sertifikat/Belajar Dasar Structured Query Language (SQL).png'
import dataVis from '/assets/sertifikat/Belajar Dasar Visualisasi Data.png'
import pythonCert from '/assets/sertifikat/Memulai Pemrograman dengan Python.png'
import kompetensiCert from '/assets/sertifikat/sertifikat kompetensi.png'
import magangCert from '/assets/sertifikat/Sertifikat magang.png'
import msibCert from '/assets/sertifikat/Sertifikat MSIB .png'
import keamananCert from '/assets/sertifikat/sertifikat seminar Keamanan Siber Peluang dan Tantangan.png'
import sertifikatbestgrupmagangCert from '/assets/sertifikat/sertifikat best grup magang.jpg'
import jointerCert from '/assets/sertifikat/jointer.jpg'
import sertifikathimaCert from '/assets/sertifikat/sertifikat hima.png'
import sertifikatukmwamikaCert from '/assets/sertifikat/sertifikat-ukm-wamika.png'
import sertifikatseminarKeamananSiberPeluangdanTantanganCert from '/assets/sertifikat/sertifikat seminar Keamanan Siber Peluang dan Tantangan.png'
import wahanaCert from '/assets/sertifikat/wahana.jpg' 
import javascriptCert from '/assets/sertifikat/Belajar Dasar Pemrograman JavaScript.png'
// No errors found in the code. The code appears to be a well-structured React component that:

function Certificates() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const certificatesRef = useRef(null);
  
  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    // Fallback untuk browser yang tidak mendukung Intersection Observer
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (certificatesRef.current) {
      observer.observe(certificatesRef.current);
    }
    
    return () => {
      if (certificatesRef.current) {
        observer.unobserve(certificatesRef.current);
      }
    };
  }, []);
  
  const certificates = [
    {
      id: 1,
      title: "Belajar Dasar Cloud dan Gen AI di AWS",
      issuer: "Dicoding",
      date: "2023",
      image: cloudAWS,
      category: "web",
      credentialLink: "https://drive.google.com/drive/folders/1T0dM-da1ykrfuDJ7n1L6fFRvQAHWaL9-?usp=sharing"
    },
    {
      id: 2,
      title: "Belajar Dasar Structured Query Language (SQL)",
      issuer: "Dicoding",
      date: "2023",
      image: sqlCert,
      category: "web",
      credentialLink: "https://drive.google.com/drive/folders/1T0dM-da1ykrfuDJ7n1L6fFRvQAHWaL9-?usp=sharing"
    },
    {
      id: 3,
      title: "Belajar Dasar Visualisasi Data",
      issuer: "Dicoding",
      date: "2023",
      image: dataVis,
      category: "web",
      credentialLink: "https://drive.google.com/drive/folders/1T0dM-da1ykrfuDJ7n1L6fFRvQAHWaL9-?usp=sharing"
    },
    {
      id: 4,
      title: "Memulai Pemrograman dengan Python",
      issuer: "Dicoding",
      date: "2023",
      image: pythonCert,
      category: "programming",
      credentialLink: "https://drive.google.com/drive/folders/1T0dM-da1ykrfuDJ7n1L6fFRvQAHWaL9-?usp=sharing"
    },
    {
      id: 5,
      title: "Sertifikat Kompetensi",
      issuer: "BNSP",
      date: "2023",
      image: kompetensiCert,
      category: "professional",
      credentialLink: "https://drive.google.com/drive/folders/1T0dM-da1ykrfuDJ7n1L6fFRvQAHWaL9-?usp=sharing"
    },
    {
      id: 6,
      title: "Sertifikat Magang",
      issuer: "Kampus Merdeka",
      date: "2023",
      image: magangCert,
      category: ["professional", "security"],
      credentialLink: "https://drive.google.com/drive/folders/1T0dM-da1ykrfuDJ7n1L6fFRvQAHWaL9-?usp=sharing"
    },
    {
      id: 7,
      title: "Sertifikat MSIB",
      issuer: "Kampus Merdeka",
      date: "2023",
      image: msibCert,
      category: ["professional", "security"],
      credentialLink: "https://drive.google.com/drive/folders/1T0dM-da1ykrfuDJ7n1L6fFRvQAHWaL9-?usp=sharing"
    },
    {
      id: 8,
      title: "Seminar Keamanan Siber: Peluang dan Tantangan",
      issuer: "UTDI",
      date: "2023",
      image: keamananCert,
      category: "security",
      credentialLink: "https://drive.google.com/drive/folders/1T0dM-da1ykrfuDJ7n1L6fFRvQAHWaL9-?usp=sharing"
    },
    {
      id: 9,
      title: "sertifikat best grup magang",
      issuer: "MSIB",
      date: "2023",
      image: sertifikatbestgrupmagangCert,
      category: "security",
      credentialLink: "https://drive.google.com/drive/folders/1T0dM-da1ykrfuDJ7n1L6fFRvQAHWaL9-?usp=sharing"
    },
    {
      id: 10,
      title: "jointer",
      issuer: "BNSP",
      date: "2023",
      image: jointerCert,
      category: "professional",
      credentialLink: "https://drive.google.com/drive/folders/1T0dM-da1ykrfuDJ7n1L6fFRvQAHWaL9-?usp=sharing"
    },
    {
      id: 11,
      title: "sertifikat hima",
      issuer: "UTDI",
      date: "2023",
      image: sertifikathimaCert,
      category: "organisasi",
      credentialLink: "https://drive.google.com/drive/folders/1T0dM-da1ykrfuDJ7n1L6fFRvQAHWaL9-?usp=sharing"
    },
    {
      id: 12,
      title: "sertifikat ukm wamika",
      issuer: "UTDI",
      date: "2023",
      image: sertifikatukmwamikaCert,
      category: "organisasi",
      credentialLink: "https://drive.google.com/drive/folders/1T0dM-da1ykrfuDJ7n1L6fFRvQAHWaL9-?usp=sharing"
    },
    {
      id: 13,
      title: "Sertifikat Seminar Keamanan Siber: Peluang dan Tantangan",
      issuer: "UTDI",
      date: "2023",
      image: sertifikatseminarKeamananSiberPeluangdanTantanganCert,
      category: "seminar",
      credentialLink: "https://drive.google.com/drive/folders/1T0dM-da1ykrfuDJ7n1L6fFRvQAHWaL9-?usp=sharing"
    },
    {
      id: 14,
      title: "Sertifikat Wahana",
      issuer: "Wahana",
      date: "2023",
      image: wahanaCert,
      category: "professional",
      credentialLink: "https://drive.google.com/drive/folders/1T0dM-da1ykrfuDJ7n1L6fFRvQAHWaL9-?usp=sharing"
    },
    {
      id: 15,
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding",
      date: "2023",
      image: javascriptCert,
      category: "programming",
      credentialLink: "https://drive.google.com/drive/folders/1T0dM-da1ykrfuDJ7n1L6fFRvQAHWaL9-?usp=sharing"
    }
  ];
// 1. Properly imports all required dependencies and assets
// 2. Uses React hooks (useState, useEffect, useRef) correctly
// 3. Implements Intersection Observer API with proper cleanup
// 4. Has valid JSX syntax and component structure
// 5. Handles image loading errors appropriately
// 6. Uses proper event handlers and state management
// 7. Has consistent styling with Tailwind CSS classes
// 8. Exports the component correctly

  const filteredCertificates = activeCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => 
        Array.isArray(cert.category) 
          ? cert.category.includes(activeCategory) 
          : cert.category === activeCategory);

  return (
    <section id="certificates" className="py-32 bg-gradient-to-b from-dark-950 to-dark-900" ref={certificatesRef}>
      <div className="container mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col items-center mb-24">
          <span className={`text-primary-400 font-medium mb-4 tracking-wider ${isVisible ? 'animate-slideDown' : 'opacity-0'}`}>SERTIFIKAT SAYA</span>
          <h2 className={`font-serif text-4xl md:text-5xl font-bold text-white ${isVisible ? 'animate-slideDown' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Pencapaian & Kualifikasi
          </h2>
          <div className={`w-24 h-1 bg-primary-500 mt-10 rounded-full ${isVisible ? 'animate-slideDown' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}></div>
        </div>
        
        {/* Filter buttons */}
        <div className={`flex justify-center mb-20 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex bg-dark-800 p-2 rounded-xl overflow-x-auto">
            <button 
              onClick={() => setActiveCategory('all')} 
              className={`px-6 py-3.5 rounded-lg transition-all duration-300 whitespace-nowrap mx-1 ${activeCategory === 'all' ? 'bg-primary-600 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-dark-700'}`}
            >
              Semua
            </button>
            <button 
              onClick={() => setActiveCategory('web')} 
              className={`px-6 py-3.5 rounded-lg transition-all duration-300 whitespace-nowrap mx-1 ${activeCategory === 'web' ? 'bg-primary-600 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-dark-700'}`}
            >
              Web Development
            </button>
            <button 
              onClick={() => setActiveCategory('programming')} 
              className={`px-6 py-3.5 rounded-lg transition-all duration-300 whitespace-nowrap mx-1 ${activeCategory === 'programming' ? 'bg-primary-600 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-dark-700'}`}
            >
              Programming
            </button>
            <button 
              onClick={() => setActiveCategory('security')} 
              className={`px-6 py-3.5 rounded-lg transition-all duration-300 whitespace-nowrap mx-1 ${activeCategory === 'security' ? 'bg-primary-600 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-dark-700'}`}
            >
              Security
            </button>
            <button 
              onClick={() => setActiveCategory('professional')} 
              className={`px-6 py-3.5 rounded-lg transition-all duration-300 whitespace-nowrap mx-1 ${activeCategory === 'professional' ? 'bg-primary-600 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-dark-700'}`}
            >
              Kompetensi
            </button>
            <button 
              onClick={() => setActiveCategory('organisasi')} 
              className={`px-6 py-3.5 rounded-lg transition-all duration-300 whitespace-nowrap mx-1 ${activeCategory === 'organisasi' ? 'bg-primary-600 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-dark-700'}`}
            >
              Organisasi
            </button>
            <button 
              onClick={() => setActiveCategory('seminar')} 
              className={`px-6 py-3.5 rounded-lg transition-all duration-300 whitespace-nowrap mx-1 ${activeCategory === 'seminar' ? 'bg-primary-600 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-dark-700'}`}
            >
              Seminar
            </button>
          </div>
        </div>
        
        {/* Certificates grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredCertificates.map((certificate, index) => (
            <div 
              key={certificate.id} 
              className={`group bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/5 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-dark-700 animate-pulse"></div>
                <img 
                  src={certificate.image} 
                  alt={certificate.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 relative z-10"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/assets/tools/github.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                  <a 
                    href={certificate.credentialLink} 
                    className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-medium transform transition-all duration-500 -translate-y-10 group-hover:translate-y-0 hover:shadow-lg hover:shadow-primary-500/20"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Lihat Kredensial
                  </a>
                </div>
                <div className="absolute top-6 right-6">
                  <div className="bg-primary-500 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg">
                    {certificate.date}
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300 flex-1">{certificate.title}</h3>
                </div>
                <div className="flex items-center mt-3">
                  <div className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <span className="text-primary-400">{certificate.issuer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredCertificates.length === 0 && (
          <div className="text-center py-20 my-6">
            <p className="text-white/70 text-lg">Tidak ada sertifikat yang ditemukan dalam kategori ini.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Certificates
// The component should work as expected to display and filter certificates with animations.
