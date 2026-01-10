import React, { useState, useEffect } from 'react';
import { Code, Briefcase, Mail, Github, Linkedin, Twitter, Award, Sparkles, Terminal, Database, Globe, Cpu } from 'lucide-react';

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Full-stack MERN application with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Social Media Dashboard",
      desc: "Real-time analytics dashboard with interactive charts",
      tech: ["Next.js", "PostgreSQL", "GraphQL", "D3.js"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Chat Application",
      desc: "Real-time chat with AI integration and modern UI",
      tech: ["React", "WebSocket", "OpenAI", "Tailwind"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Task Management System",
      desc: "Collaborative project management tool",
      tech: ["Vue.js", "Express", "MySQL", "Redis"],
      gradient: "from-green-500 to-emerald-500"
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

      {/* Skills Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Technical Skills
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Technologies I work with</p>
          
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
              <div key={i} className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 overflow-hidden transform hover:scale-105 transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl mb-6 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500`}>
                    <Code className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    <a href="#" className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors">
                      <Globe className="w-5 h-5" />
                      Live Demo
                    </a>
                  </div>
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
            <button className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold transform hover:scale-105 transition-all duration-300">
              Send Message
            </button>
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
      `}</style>
    </div>
  );
}