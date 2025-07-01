import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-white font-bold text-xl">Anas K</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-purple-400 transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-purple-400 transition-colors">About</a>
              <a href="#projects" className="text-white hover:text-purple-400 transition-colors">Projects</a>
              <a href="#contact" className="text-white hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Anas K</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Software Engineer & Full Stack Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              Passionate about building scalable web applications and solving complex problems through code. 
              I specialize in modern JavaScript frameworks and cloud technologies.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/anask" className="text-white hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/anask" className="text-white hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:anas@example.com" className="text-white hover:text-purple-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>

          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-6">
                I'm a dedicated software engineer with 4+ years of experience in full-stack development. 
                I love creating efficient, scalable solutions and have worked with startups and enterprises 
                to deliver high-quality software products.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                My expertise spans across modern web technologies, cloud platforms, and database systems. 
                I'm always eager to learn new technologies and contribute to innovative projects that make 
                a positive impact.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Code className="text-purple-400 mx-auto mb-2" size={32} />
                  <p className="text-white font-semibold">Backend</p>
                </div>
                <div className="text-center">
                  <Palette className="text-purple-400 mx-auto mb-2" size={32} />
                  <p className="text-white font-semibold">Frontend</p>
                </div>
                <div className="text-center">
                  <Smartphone className="text-purple-400 mx-auto mb-2" size={32} />
                  <p className="text-white font-semibold">DevOps</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {[
                  { skill: 'JavaScript/TypeScript', level: 95 },
                  { skill: 'React/Next.js', level: 90 },
                  { skill: 'Node.js/Express', level: 88 },
                  { skill: 'Python/Django', level: 82 },
                  { skill: 'AWS/Cloud Services', level: 78 },
                  { skill: 'MongoDB/PostgreSQL', level: 85 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">{item.skill}</span>
                      <span className="text-purple-400">{item.level}%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'SaaS Analytics Dashboard',
                description: 'A comprehensive analytics platform with real-time data visualization and user management.',
                image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
                tech: ['React', 'Node.js', 'PostgreSQL', 'AWS']
              },
              {
                title: 'AI-Powered Chat Application',
                description: 'Real-time messaging app with AI integration for smart replies and content moderation.',
                image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
                tech: ['Next.js', 'Socket.io', 'OpenAI API', 'Redis']
              },
              {
                title: 'E-Learning Platform',
                description: 'Full-featured online learning platform with video streaming and progress tracking.',
                image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
                tech: ['React', 'Django', 'PostgreSQL', 'Docker']
              },
              {
                title: 'Inventory Management System',
                description: 'Enterprise-grade inventory system with barcode scanning and automated reporting.',
                image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
                tech: ['Vue.js', 'Express', 'MongoDB', 'Chart.js']
              },
              {
                title: 'Cryptocurrency Tracker',
                description: 'Real-time crypto portfolio tracker with price alerts and market analysis.',
                image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800',
                tech: ['React Native', 'Node.js', 'WebSocket', 'Firebase']
              },
              {
                title: 'Social Media Scheduler',
                description: 'Multi-platform social media management tool with analytics and automation.',
                image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
                tech: ['Next.js', 'Python', 'Redis', 'Social APIs']
              }
            ].map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </button>
                    <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                      <Github size={16} className="mr-2" />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Build Something Great</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Mail className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-300">anas@example.com</p>
            </div>
            <div className="text-center">
              <Linkedin className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">linkedin.com/in/anask</p>
            </div>
            <div className="text-center">
              <Github className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <p className="text-gray-300">github.com/anask</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Anas K. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;