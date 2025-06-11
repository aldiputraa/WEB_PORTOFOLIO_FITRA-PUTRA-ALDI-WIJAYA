import { useState, useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // 1. Panggil SEMUA useState di awal
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false); // <-- Pindahkan ke sini

  // 2. Panggil SEMUA useEffect setelah semua useState
  useEffect(() => {
    // Preload gambar penting
    const preloadImages = () => {
      const projectImages = [
        "/assets/proyek/aplikasi pebelanjaan pakaian.png",
        "/assets/proyek/aplikasi film.png",
        "/assets/proyek/aplikasi (Dashboard Kolam).png",
        "/assets/proyek/aplikasi map.png",
        "/assets/proyek/web himpunan.png",
        "/assets/proyek/IoT Robot Pembersih Otomatis.png",
        "/assets/proyek/web PORTOFOLIO.png",
        "/assets/tools/github.png"
      ];
      
      projectImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
    
    // Simulasi loading selesai
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []); // Dependency array kosong, hanya jalan sekali saat mount

  useEffect(() => { // <-- Pindahkan ke sini
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Dependency array kosong, hanya setup listener sekali

  // 3. Baru lakukan kondisional return setelah SEMUA Hook dipanggil
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-dark-950 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  // 4. Return utama komponen jika tidak loading
  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;