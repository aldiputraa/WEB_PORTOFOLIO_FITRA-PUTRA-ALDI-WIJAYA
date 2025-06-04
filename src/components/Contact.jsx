import { useState, useEffect, useRef } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);
  
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
    
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nama wajib diisi';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subjek wajib diisi';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Pesan wajib diisi';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus({
      submitted: true,
      success: false,
      message: 'Mengirim pesan...'
    });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Pesan berhasil dikirim! Saya akan segera menghubungi Anda.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-dark-900 to-dark-950" ref={contactRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <span className={`text-primary-400 font-medium mb-2 tracking-wider ${isVisible ? 'animate-slideDown' : 'opacity-0'}`}>HUBUNGI SAYA</span>
          <h2 className={`font-serif text-4xl md:text-5xl font-bold text-white ${isVisible ? 'animate-slideDown' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Mari Bekerja Sama
          </h2>
          <div className={`w-24 h-1 bg-primary-500 mt-6 rounded-full ${isVisible ? 'animate-slideDown' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <div className={`lg:col-span-2 ${isVisible ? 'animate-slideRight' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="bg-dark-800 p-8 rounded-xl border border-dark-700 h-full">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">Informasi Kontak</h3>
                <p className="text-white/70 mb-8">
                  Tertarik untuk bekerja sama atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui form atau kontak di bawah ini.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Instagram</h4>
                      <a href="https://www.instagram.com/aldiputraep_/profilecard/?igsh=dnluaWlyaDlrZHdt" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">@aldiputraep_</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">GitHub</h4>
                      <a href="https://github.com/aldiputraa" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">aldiputraa</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <p className="text-primary-400">aldip7669@gmail.com</p>
                    </div>
                  </div>
                </div>
                

              </div>
            </div>
            
            {/* Contact form */}
            <div className={`lg:col-span-3 ${isVisible ? 'animate-slideLeft' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="bg-dark-800 p-8 rounded-xl border border-dark-700">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">Kirim Pesan</h3>
                
                {formStatus.submitted && (
                  <div className={`mb-6 p-4 rounded-lg ${formStatus.success ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-primary-500/10 text-primary-400 border border-primary-500/20'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-white/70 font-medium mb-2">Nama</label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-dark-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.name ? 'border-red-500' : 'border-dark-600'} text-white`}
                        placeholder="Nama Anda"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-white/70 font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-dark-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.email ? 'border-red-500' : 'border-dark-600'} text-white`}
                        placeholder="email@contoh.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-white/70 font-medium mb-2">Subjek</label>
                    <input 
                      type="text" 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-dark-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.subject ? 'border-red-500' : 'border-dark-600'} text-white`}
                      placeholder="Subjek pesan"
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white/70 font-medium mb-2">Pesan</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-dark-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.message ? 'border-red-500' : 'border-dark-600'} text-white`}
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/20 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-dark-800 w-full md:w-auto"
                    disabled={formStatus.submitted && !formStatus.success}
                  >
                    {formStatus.submitted && !formStatus.success ? 'Mengirim...' : 'Kirim Pesan'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact