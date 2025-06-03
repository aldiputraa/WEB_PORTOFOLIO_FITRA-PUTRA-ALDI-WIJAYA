import { useState, useEffect, useRef } from 'react'

function Projects() {
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);
  
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
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);
  
  // Data proyek dari GitHub
  const projects = [
    {
      id: 1,
      title: "Fashion Store App",
      description: "E-commerce fashion app dengan UI modern, fitur katalog produk, keranjang belanja, dan pembayaran terintegrasi",
      image: "../../assets/proyek/aplikasi pebelanjaan pakaian.png",
      tags: ["Flutter", "Dart", "Firebase", "GetX", "Responsive UI"],
      category: "aplikasi",
      liveLink: "#",
      codeLink: "https://github.com/aldiputraa/fashion-store-app"
    },
    {
      id: 2,
      title: "Movie App",
      description: "Aplikasi streaming film dengan API TMDB, fitur pencarian, kategori populer, dan detail film lengkap",
      image: "../../assets/proyek/aplikasi film.png",
      tags: ["Flutter", "Dart", "TMDB API", "Provider", "Animations"],
      category: "aplikasi",
      liveLink: "#",
      codeLink: "https://github.com/aldiputraa/movie-app-flutter-master"
    },
    {
      id: 3,
      title: "Monitoring Kolam App",
      description: "Sistem IoT untuk monitoring kualitas air kolam dengan sensor suhu, pH, dan kekeruhan dengan notifikasi real-time",
      image: "../../assets/proyek/aplikasi (Dashboard Kolam).png",
      tags: ["IoT", "Flutter", "Firebase", "ESP32", "Arduino", "Sensors"],
      category: "iot",
      liveLink: "#",
      codeLink: "https://github.com/aldiputraa/monitoring-kolam-app"
    },
    {
      id: 4,
      title: "Flutter Location",
      description: "Aplikasi tracking lokasi dengan Google Maps API, fitur pencarian tempat, rute navigasi, dan lokasi real-time",
      image: "../../assets/proyek/aplikasi map.png",
      tags: ["Flutter", "Google Maps API", "Geolocator", "Firebase", "Location Services"],
      category: "aplikasi",
      liveLink: "#",
      codeLink: "https://github.com/aldiputraa/flutter-location"
    },
    {
      id: 5,
      title: "Website Himpunan",
      description: "Portal web himpunan mahasiswa dengan fitur berita, galeri kegiatan, pendaftaran anggota, dan dashboard admin",
      image: "../../assets/proyek/web himpunan.png",
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "PHP", "MySQL"],
      category: "web",
      liveLink: "#",
      codeLink: "https://github.com/aldiputraa/webhimpunan"
    },
    {
      id: 6,
      title: "Belajar CI/CD",
      description: "Implementasi pipeline CI/CD dengan GitHub Actions untuk otomatisasi testing, build, dan deployment aplikasi web",
      image: "../../assets/proyek/fashion_store-app-master.png",
      tags: ["DevOps", "CI/CD", "GitHub Actions", "Docker", "YAML", "Node.js"],
      category: "cybersecurity",
      liveLink: "#",
      codeLink: "https://github.com/aldiputraa/belajarcicd"
    },
    {
      id: 7,
      title: "Belajar CI/CD (Alternatif)",
      description: "Implementasi CI/CD dengan Jenkins untuk otomatisasi workflow, testing, dan deployment dengan konfigurasi pipeline",
      image: "../../assets/proyek/movie-app-flutter-master.png",
      tags: ["DevOps", "CI/CD", "Jenkins", "Docker", "Kubernetes", "Groovy"],
      category: "cybersecurity",
      liveLink: "#",
      codeLink: "https://github.com/aldiputraa/belajarrcicd"
    },
    {
      id: 8,
      title: "Robot Pembersih Otomatis",
      description: "Sistem rumah pintar dengan kontrol perangkat elektronik, monitoring suhu, kelembaban, dan keamanan terintegrasi",
      image: "../../assets/proyek/IoT Robot Pembersih Otomatis.png",
      tags: ["IoT", "ESP32", "MQTT", "Sensors", "Flutter", "Firebase"],
      category: "iot",
      liveLink: "#",
      codeLink: "https://github.com/aldiputraa/monitoring-kolam-app"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-dark-900 to-dark-950" ref={projectsRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <span className={`text-primary-400 font-medium mb-2 tracking-wider ${isVisible ? 'animate-slideDown' : 'opacity-0'}`}>PROYEK SAYA</span>
          <h2 className={`font-serif text-4xl md:text-5xl font-bold text-white ${isVisible ? 'animate-slideDown' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Karya Terbaru
          </h2>
          <div className={`w-24 h-1 bg-primary-500 mt-6 rounded-full ${isVisible ? 'animate-slideDown' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}></div>
        </div>
        
        {/* Filter buttons */}
        <div className={`flex justify-center mb-12 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex bg-dark-800 p-1 rounded-xl overflow-x-auto">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${filter === 'all' ? 'bg-primary-600 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-dark-700'}`}
            >
              Semua
            </button>
            <button 
              onClick={() => setFilter('web')} 
              className={`px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${filter === 'web' ? 'bg-primary-600 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-dark-700'}`}
            >
              Web
            </button>
            <button 
              onClick={() => setFilter('aplikasi')} 
              className={`px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${filter === 'aplikasi' ? 'bg-primary-600 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-dark-700'}`}
            >
              Aplikasi
            </button>
            <button 
              onClick={() => setFilter('iot')} 
              className={`px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${filter === 'iot' ? 'bg-primary-600 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-dark-700'}`}
            >
              IoT
            </button>
            <button 
              onClick={() => setFilter('cybersecurity')} 
              className={`px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${filter === 'cybersecurity' ? 'bg-primary-600 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-dark-700'}`}
            >
              Keamanan Siber
            </button>
          </div>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/5 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="flex gap-4 -translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <a 
                      href={project.liveLink} 
                      className="bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full transform transition-transform duration-300 hover:scale-110"
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View live demo"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </a>
                    <a 
                      href={project.codeLink} 
                      className="bg-dark-700 hover:bg-dark-600 text-white p-3 rounded-full transform transition-transform duration-300 hover:scale-110"
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View source code"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-white/70 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-dark-700 text-white/70 px-2 py-1 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-white/70">Tidak ada proyek yang ditemukan dalam kategori ini.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects