import { useState, useEffect, useRef } from 'react'

function Skills() {
  const [isVisible, setIsVisible] = useState(true);
  const skillsRef = useRef(null);
  
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
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  
  const skills = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 85 },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 80 },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 75 },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 80 },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", level: 75 },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 70 },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: 85 },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 90 },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90 },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", level: 75 },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", level: 75 },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", level: 70 },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", level: 70 },
  ];
  
  const tools = [
    { name: "VS Code", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
    { name: "Arduino IDE", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg" },
    { name: "Wireshark", icon: "https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg" },
    { name: "Kali Linux", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg" },
    { name: "VirtualBox", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png" },
    { name: "VMware", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Vmware_workstation_16_icon.svg" },
    { name: "Proxmox", icon: "https://www.proxmox.com/images/proxmox/Proxmox_logo_standard_hex_400px.png" },
    { name: "Cisco Packet Tracer", icon: "https://upload.wikimedia.org/wikipedia/en/d/dc/Cisco_Packet_Tracer_Icon.png" },
    { name: "Microsoft Office", icon: "https://img.icons8.com/color/96/000000/microsoft-office-2019.png" },
    { name: "Winbox", icon: "https://i.imgur.com/EgHuXxO.png" },
    { name: "XAMPP", icon: "https://upload.wikimedia.org/wikipedia/commons/0/03/Xampp_logo.svg" },
    { name: "OpenVAS", icon: "https://img.icons8.com/color/96/000000/security-checked.png" },
    { name: "Arachni", icon: "https://img.icons8.com/color/96/000000/spider.png" },
    { name: "Kismet", icon: "https://img.icons8.com/color/96/000000/wifi.png" },
    { name: "GnuPG (PGP)", icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/Gnupg_logo.svg" },
    { name: "Flyve MDM", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920329.png" },
    { name: "Apache2", icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Apache_Feather_Logo.svg" },
  ];

  const categories = [
    { name: "Web Development", skills: ["React", "JavaScript", "Node.js", "PHP", "HTML", "CSS", "Tailwind CSS", "Responsive Design"] },
    { name: "Mobile Development", skills: ["Flutter", "Dart", "Java", "Mobile UI/UX"] },
    { name: "Database", skills: ["MySQL", "Database Design", "SQL"] },
    { name: "IoT & Hardware", skills: ["Sensors", "C", "C++", "Circuit Design"] },
    { name: "Security", skills: ["Network Analysis", "Wireshark", "Kali Linux", "Web Security"] }
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-dark-900 to-dark-950" ref={skillsRef}>
      <div className="container mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col items-center mb-24">
          <span className={`text-primary-400 font-medium mb-4 tracking-wider ${isVisible ? 'animate-slideDown' : 'opacity-0'}`}>KEAHLIAN SAYA</span>
          <h2 className={`font-serif text-4xl md:text-5xl font-bold text-white ${isVisible ? 'animate-slideDown' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Teknologi & Tools
          </h2>
          <div className={`w-24 h-1 bg-primary-500 mt-10 rounded-full ${isVisible ? 'animate-slideDown' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}></div>
        </div>
        
        {/* Main skills with icons */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-24 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-dark-800/50 p-8 rounded-xl border border-dark-700 hover:border-primary-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary-500/5"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-lg bg-dark-700 p-4 flex items-center justify-center">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-white mt-3">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Categories */}
        <div className={`mb-24 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-serif font-bold text-white mb-12 text-center">Bidang Keahlian</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="bg-dark-800/50 rounded-xl border border-dark-700 overflow-hidden hover:border-primary-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary-500/5 group"
              >
                <div className="p-8 border-b border-dark-700 group-hover:border-primary-500/20 transition-colors duration-500">
                  <h4 className="text-xl font-medium text-white">{category.name}</h4>
                </div>
                <div className="p-8">
                  <ul className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-center text-white/70">
                        <svg className="w-5 h-5 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tools */}
        <div className={`${isVisible ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-serif font-bold text-white mb-12 text-center">Tools & Software</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="bg-dark-800/50 p-7 rounded-xl border border-dark-700 hover:border-primary-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary-500/5 flex flex-col items-center"
              >
                <div className="w-18 h-18 mb-5 p-3 rounded-xl bg-dark-700 flex items-center justify-center">
                  <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-medium text-center text-white">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills