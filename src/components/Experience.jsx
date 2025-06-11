import { useState, useEffect, useRef } from 'react'

function Experience() {
  const [activeTab, setActiveTab] = useState('work');
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);
  
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
    
    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }
    
    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);
  
  const tabs = {
    work: [
      {
        title: "CYBERSECURITY: Skill Penting Yang Dibutuhkan Cybersecurity Engineer",
        company: "PT Gama Multi Usaha Mandiri - Yogyakarta",
        period: "Sep 2024 - Dec 2024",
        description: "Virtualization: Installing and configuring VMware, VirtualBox, and Proxmox. Vulnerability Scanning: Using OpenVAS & Arachni for vulnerability detection. Protocol Security: Analysis of HTTPS, SSH, SMTPS vs HTTP, Telnet, FTP using Wireshark. Network Segmentation: Implementing VLANs & routing between VLANs (Cisco Packet Tracer). Wi-Fi Security: Surveying & analyzing wireless networks using Kismet. Encryption & Digital Signature: Implementing PGP for encrypted email & digital signatures. Device Management (MDM): Testing MDM tools like Flyve. Server Hardening: Configuring Apache2 security & ACL based access restrictions. Penetration Testing: Testing web applications (XSS, SQLi, Missing Headers), PoC exploits & mitigation recommendations."
      },
      {
        title: "Warehouse Staff",
        company: "Telkom Indonesia - Yogyakarta",
        period: "Sep 2021 - Oct 2021",
        description: "Maintain the smooth distribution and arrangement of goods in the storage warehouse. Apart from that, the placement of goods is in accordance with the list and data, as well as ensuring that stock taking travels properly."
      },
      {
        title: "Data Access Management",
        company: "Telkom Indonesia - Yogyakarta",
        period: "Sep 2021 - Oct 2021",
        description: "Perform checking and adjusting customer data, input data, and other related tasks."
      },
      {
        title: "Freelance Web Developer",
        company: "Self-employed",
        period: "Januari 2022 - Sekarang",
        description: "Merancang dan mengembangkan website untuk berbagai klien dengan fokus pada UI/UX yang menarik dan responsif. Mengimplementasikan solusi e-commerce dan sistem manajemen konten."
      }
    ],
    education: [
      {
        title: "Sarjana Teknik Informatika",
        institution: "Universitas Teknologi Digital Indonesia",
        period: "2021 - 2025",
        description: "Fokus pada pengembangan aplikasi web dan mobile, keamanan siber, dan Internet of Things (IoT). Aktif dalam berbagai proyek penelitian dan kompetisi pemrograman."
      },
      {
        title: "SMK Jurusan Teknik Komputer dan Jaringan",
        institution: "SMK Negeri 1 Bantul",
        period: "2018 - 2021",
        description: "Mempelajari dasar-dasar jaringan komputer, pemrograman, dan perakitan komputer. Berpartisipasi dalam berbagai kompetisi tingkat daerah dan nasional."
      }
    ],
    organization: [
      {
        title: "Ketua Umum",
        company: "Himpunan Mahasiswa Teknik Komputer - UTDI",
        period: "September 2023 - Agustus 2024",
        description: "Memimpin tim dalam pengembangan website organisasi, mengelola infrastruktur teknologi untuk kegiatan kampus, dan mengadakan workshop teknologi untuk mahasiswa."
      },
      {
        title: "Penanggungjawab",
        company: "Latian kader - UTDI",
        period: "September 2023 - Agustus 2024",
        description: "Berpartisipasi dalam berbagai workshop dan hackathon, mengembangkan keterampilan kepemimpinan, dan membangun rasa identitas anggota."
      },
      {
        title: "Departemen Minat dan Bakat",
        company: "UKM WAMIKA - UTDI",
        period: "Agustus 2023 - Agustus 2024",
        description: "Merencanakan, mengatur dan melaksanakan kegiatan yang berkaitan dengan minat dan bakat mahasiswa Islam."
      }
    ]
  };

  return (
    <section id="experience" className="py-32 bg-gradient-to-b from-dark-950 to-dark-900" ref={experienceRef}>
      <div className="container mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col items-center mb-24">
          <span className={`text-primary-400 font-medium mb-4 tracking-wider ${isVisible ? 'animate-slideDown' : 'opacity-0'}`}>PENGALAMAN SAYA</span>
          <h2 className={`font-serif text-4xl md:text-5xl font-bold text-white ${isVisible ? 'animate-slideDown' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Perjalanan Karir
          </h2>
          <div className={`w-24 h-1 bg-primary-500 mt-10 rounded-full ${isVisible ? 'animate-slideDown' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}></div>
        </div>
        
        {/* Tab navigation */}
        <div className={`flex justify-center mb-16 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex bg-dark-800 p-1.5 rounded-xl shadow-xl shadow-primary-500/5">
            <button 
              onClick={() => setActiveTab('work')} 
              className={`px-8 py-4 rounded-lg transition-all duration-300 font-medium ${activeTab === 'work' ? 'bg-primary-600 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-dark-700'}`}
            >
              Pengalaman kerja
            </button>
            <button 
              onClick={() => setActiveTab('education')} 
              className={`px-8 py-4 rounded-lg transition-all duration-300 font-medium ${activeTab === 'education' ? 'bg-primary-600 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-dark-700'}`}
            >
              Pendidikan
            </button>
            <button 
              onClick={() => setActiveTab('organization')} 
              className={`px-8 py-4 rounded-lg transition-all duration-300 font-medium ${activeTab === 'organization' ? 'bg-primary-600 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-dark-700'}`}
            >
              Organisasi
            </button>
          </div>
        </div>
        
        {/* Timeline content */}
        <div className={`max-w-5xl mx-auto ${isVisible ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="relative">
            {tabs[activeTab].map((item, index) => (
              <div 
                key={index} 
                className={`mb-16 ${index % 2 === 0 ? 'lg:ml-auto lg:pl-24 lg:pr-0' : 'lg:mr-auto lg:pr-24 lg:pl-0'} lg:w-1/2 relative`}
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute top-5 w-6 h-6 rounded-full bg-primary-500 shadow-lg shadow-primary-500/30 z-10">
                  <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-30"></div>
                </div>
                
                {/* Timeline line */}
                <div className="hidden lg:block absolute top-0 bottom-0 w-1 bg-dark-700 z-0">
                  <div className="absolute top-5 bottom-0 w-1 bg-gradient-to-b from-primary-500/50 to-transparent"></div>
                </div>
                
                {/* Content card */}
                <div className={`bg-dark-800 p-8 rounded-xl border border-dark-700 hover:border-primary-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10 transform hover:-translate-y-1 ${index % 2 === 0 ? 'lg:rounded-l-none' : 'lg:rounded-r-none'}`}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-4 py-1.5 bg-primary-500/10 text-primary-400 text-sm font-medium rounded-full shadow-inner shadow-primary-500/5">{item.period}</span>
                    <div className="w-12 h-12 rounded-full bg-dark-700 flex items-center justify-center text-primary-400 shadow-lg shadow-primary-500/5">
                      {activeTab === 'work' && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {activeTab === 'education' && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                      )}
                      {activeTab === 'organization' && (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-primary-400 font-medium mb-6">{item.company || item.institution}</p>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills section */}
        {activeTab === 'work' && (
          <div className={`mt-20 max-w-5xl mx-auto ${isVisible ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
            <div className="bg-dark-800 p-10 rounded-xl border border-dark-700 hover:border-primary-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10 transform hover:-translate-y-1">
              <h3 className="text-2xl font-serif font-bold text-white mb-8 flex items-center">
                <span className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Keahlian Tambahan
              </h3>
              <div className="grid grid-cols-1 gap-10">
                <div className="bg-dark-850/50 p-6 rounded-lg border border-dark-700">
                  <h4 className="font-bold text-primary-400 mb-5 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                    Soft Skills
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {["Manajemen Waktu", "Kerja Tim", "Pemecahan Masalah", "Berbicara di Depan Umum", "Analisis Informasi", "Kreatif & Inovatif"].map((skill, i) => (
                      <span 
                        key={i} 
                        className="bg-dark-700 text-white/80 px-4 py-2 rounded-full text-sm hover:bg-primary-500/20 hover:text-primary-400 transition-all duration-300 hover:shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Experience