import React, { useState, useEffect } from 'react';
import { Code, Mail, Github, Linkedin, Twitter, Sparkles, Terminal, Database, Globe, Cpu } from 'lucide-react';


export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Smart Attendance System",
      desc: "AI-powered face recognition attendance system with real-time tracking",
      tech: ["Python", "OpenCV", "Flask", "SQLite"],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "TMS Project",
      desc: "Task Management System with real-time collaboration features",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "E-Commerce Platform",
      desc: "Full-stack MERN application with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-Time Chat App",
      desc: "WebSocket-based chat with file sharing and group messaging",
      tech: ["Socket.io", "React", "Express", "Redis"],
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const skills = [
    { name: "JavaScript", icon: Code, level: 90 },
    { name: "HTML", icon: Globe, level: 95 },
    { name: "CSS", icon: Sparkles, level: 92 },
    { name: "React", icon: Cpu, level: 88 },
    { name: "Node.js", icon: Terminal, level: 85 },
    { name: "MongoDB", icon: Database, level: 80 },
    { name: "Express.js", icon: Terminal, level: 83 },
    { name: "PostgreSQL", icon: Database, level: 78 },
    { name: "Git", icon: Github, level: 87 },
    { name: "GitHub", icon: Github, level: 87 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center z-10">
          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-50 animate-pulse" />
              <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                <Sparkles className="inline-block mb-4 w-12 h-12" style={{ color: '#a855f7' }} />
              </div>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text animate-gradient">
            Anuj Sharma
          </h1>
          
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-xl opacity-50" />
            <h2 className="relative text-2xl md:text-4xl font-semibold text-gray-300">
              Full Stack Developer
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-4">
            Computer Science Student | Etawah, India
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Crafting innovative web solutions with modern technologies. 
            Passionate about creating seamless user experiences and scalable applications.
          </p>
          
          <div className="flex gap-6 justify-center mb-12">
            <a href="#contact" className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a href="#projects" className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300">
              View Work
            </a>
          </div>
          
          <div className="flex gap-6 justify-center">
            {[
              { Icon: Github, link: "https://github.com/anuj960-sh" },
              { Icon: Linkedin, link: "https://www.linkedin.com/in/anuj-sharma-947907303/" },
              { Icon: Twitter, link: "https://x.com/sharm57056" },
              { Icon: Mail, link: "mailto:anujdev87@gmail.com" }
            ].map((item, i) => (
              <a key={i} href={item.link} target={item.link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer" className="w-14 h-14 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/10 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-white/10">
                <item.Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-purple-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* 3D Scrolling Languages Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto mb-16 text-center px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-lg">Languages & Technologies I Work With</p>
        </div>

        {/* Scrolling Container */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
          
          <div className="flex gap-6 animate-scroll-fast">
            {[...skills, ...skills, ...skills].map((skill, i) => (
              <div 
                key={i}
                className="group relative flex-shrink-0 w-44 h-44 perspective-1000 cursor-pointer"
                onClick={(e) => {
                  const card = e.currentTarget;
                  card.classList.add('clicked');
                  setTimeout(() => card.classList.remove('clicked'), 600);
                }}
              >
                <div 
                  className="relative w-full h-full transition-all duration-700 transform-gpu group-hover:scale-110 group-hover:rotate-y-12"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Glowing Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700" />
                  
                  {/* 3D Card */}
                  <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-full border border-white/20 group-hover:border-white/40 transition-all duration-700 overflow-hidden shadow-2xl">
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Click Lightning Effect */}
                    <div className="absolute inset-0 pointer-events-none lightning-effect">
                      <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-cyan-400 via-blue-500 to-transparent opacity-0" />
                    </div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                    
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
                      <skill.icon 
                        className="w-16 h-16 mb-3 text-purple-400 group-hover:text-pink-400 transition-all duration-700 transform group-hover:scale-125 group-hover:rotate-12"
                        style={{ filter: 'drop-shadow(0 0 20px rgba(168,85,247,0.5))' }}
                      />
                      <p className="text-base font-bold text-white text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                        {skill.name}
                      </p>
                      <div className="mt-2 text-xs text-gray-400 font-semibold">{skill.level}%</div>
                      
                      {/* Particle Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                        {[...Array(5)].map((_, idx) => (
                          <div
                            key={idx}
                            className="absolute w-1 h-1 bg-white rounded-full animate-particle"
                            style={{
                              left: `${25 + idx * 15}%`,
                              top: `${35 + (idx % 2) * 30}%`,
                              animationDelay: `${idx * 0.15}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section with Progress */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Proficiency Levels
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Expertise breakdown</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <div key={i} className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-500" />
                <div className="relative">
                  <skill.icon className="w-12 h-12 mb-4 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                  <h3 className="text-2xl font-semibold mb-4">{skill.name}</h3>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-right text-sm text-gray-400 mt-2">{skill.level}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Some of my recent work</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div 
                key={i} 
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 overflow-hidden transform hover:scale-105 hover:-translate-y-4 transition-all duration-700 perspective-1000 cursor-pointer"
                style={{ 
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                }}
                onClick={(e) => {
                  const card = e.currentTarget;
                  card.classList.add('project-clicked');
                  setTimeout(() => card.classList.remove('project-clicked'), 800);
                }}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
                
                {/* Click Lightning Effect - Bottom to Top */}
                <div className="absolute inset-0 pointer-events-none lightning-effect-project">
                  <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-cyan-400 via-purple-500 to-transparent opacity-0" />
                  <div className="absolute bottom-0 left-1/4 w-1 h-full bg-gradient-to-t from-white via-cyan-400 to-transparent opacity-0 blur-sm" />
                  <div className="absolute bottom-0 right-1/4 w-1 h-full bg-gradient-to-t from-white via-pink-400 to-transparent opacity-0 blur-sm" />
                </div>
                
                {/* Glowing Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-700`} />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
                
                <div className="relative transform group-hover:translate-z-20 transition-transform duration-700">
                  <div className={`w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-3xl mb-6 flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 shadow-2xl`}>
                    <Code className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-sm border border-white/20 hover:border-white/40 transition-all duration-300 font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/anuj960-sh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold">
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    <a href="#" className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors font-semibold">
                      <Globe className="w-5 h-5" />
                      Live Demo
                    </a>
                  </div>
                </div>
                
                {/* 3D Depth Lines */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  <div className="absolute inset-0 border-r-2 border-b-2 border-white/30 rounded-br-3xl" />
                  <div className="absolute inset-2 border-r-2 border-b-2 border-white/20 rounded-br-3xl" />
                  <div className="absolute inset-4 border-r-2 border-b-2 border-white/10 rounded-br-3xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <label className="block text-sm font-semibold mb-2 text-gray-300">Name</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors" placeholder="Your name" />
              </div>
              <div className="text-left">
                <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                <input type="email" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors" placeholder="your@email.com" />
              </div>
            </div>
            <div className="text-left mb-8">
              <label className="block text-sm font-semibold mb-2 text-gray-300">Message</label>
              <textarea className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 h-32 focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="Your message..." />
            </div>
            <a href="mailto:anujdev87@gmail.com" className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 inline-block">
              Send Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2026 Anuj Sharma. Crafted with passion and modern tech.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes scroll-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll-fast {
          animation: scroll-fast 15s linear infinite;
        }
        .animate-scroll-fast:hover {
          animation-play-state: paused;
        }
        @keyframes particle {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-40px) scale(0); opacity: 0; }
        }
        .animate-particle {
          animation: particle 1.2s ease-out infinite;
        }
        @keyframes lightning {
          0% { 
            opacity: 0; 
            transform: translateY(20px);
          }
          10% { 
            opacity: 0.8; 
            transform: translateY(0);
          }
          20% { 
            opacity: 0.3; 
          }
          30% { 
            opacity: 0.9; 
          }
          100% { 
            opacity: 0; 
            transform: translateY(-100%);
          }
        }
        @keyframes lightning-project {
          0% { 
            opacity: 0; 
            transform: translateY(50px) scaleY(0.5);
          }
          15% { 
            opacity: 1; 
            transform: translateY(0) scaleY(1);
          }
          30% { 
            opacity: 0.4; 
          }
          45% { 
            opacity: 0.9; 
          }
          100% { 
            opacity: 0; 
            transform: translateY(-100%) scaleY(1.5);
          }
        }
        .clicked .lightning-effect > div {
          animation: lightning 0.6s ease-out;
        }
        .project-clicked .lightning-effect-project > div {
          animation: lightning-project 0.8s ease-out;
        }
        .project-clicked {
          transform: scale(1.08) translateY(-8px) !important;
          box-shadow: 0 30px 80px rgba(168,85,247,0.4), 0 0 40px rgba(236,72,153,0.3) !important;
        }
        .clicked {
          transform: scale(1.15) rotateY(15deg) !important;
          box-shadow: 0 25px 50px rgba(168,85,247,0.5) !important;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .translate-z-20 {
          transform: translateZ(20px);
        }
      `}</style>
    </div>
  );
}