
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, Calendar, Award, BookOpen, Briefcase, Code, User, ChevronDown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // Convert Google Drive view link to direct download link
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1UKo22GLf9-c2KIs7e9C_avzS_-0ORRZ4';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sakshi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = {
    'Programming Languages': ['C', 'Python', 'Java'],
    'Web Development': ['HTML', 'CSS', 'ReactJS'],
    'Platform Knowledge': ['Basic knowledge of iOS development'],
    'Mobile App Development': ['Enthusiastic about Mobile App Development'],
    'Intrapersonal Skills': ['Self-awareness', 'Motivation', 'Flexibility/Adaptability', 'Mindfulness', 'Self-compassion', 'Patience']
  };

  const projects = [
    {
      title: 'Product Management System',
      tech: 'Java, JDBC & MySQL',
      description: 'Created a Product Management System using Java and JDBC for backend connectivity and MySQL as the database. Implemented functionalities for adding, viewing, updating, and deleting product information efficiently.',
      icon: '📦'
    },
    {
      title: 'Zoo Management System',
      tech: 'Java & MySQL',
      description: 'Built a Zoo Management System using Java and MySQL to manage zoo records including animals, enclosures, and caretaker details. Implemented user-friendly interfaces for adding, updating, and deleting records.',
      icon: '🦁'
    },
    {
      title: 'Bon Voyage Travel Website',
      tech: 'HTML, CSS, JavaScript, PHP',
      description: 'Developed a responsive travel website with destination exploration, booking functionality, user login system, and gallery section. Designed attractive UI with smooth user experience.',
      icon: '✈️'
    }
  ];

  const certifications = [
    'Infosys Springboard Certifications in Java, Python, React, Cloud Computing, and Computer Networks',
    'Completed Machine Learning course and obtained certification',
    'CodeChef Certification in DSA (Data Structure and Application)',
    'CodeChef Certification in ADA (Analysis and Design of Algorithms)'
  ];

  const workshops = [
    {
      title: 'Cybersecurity Workshop',
      description: 'Gained hands-on experience in mobile development using Genymotion emulator and explored mobile app testing environments.',
      duration: 'Recent'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sakshi
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className={`min-h-screen flex items-center justify-center px-4 pt-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/c6979d39-03d0-4a37-aa92-1004ab8fbbda.png" 
                  alt="Sakshi" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                SAKSHI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-2">Computer Science Engineering Student</p>
            <p className="text-lg text-white/60 mb-8">
              <MapPin className="inline w-5 h-5 mr-2" />
              Mangalore, India
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:acharyasakshi399@gmail.com"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline">acharyasakshi399@gmail.com</span>
            </a>
            
            <a
              href="tel:+919036974572"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">+91 9036974572</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/sakshi-acharya-153b87258"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm px-6 py-3 rounded-full text-white hover:bg-blue-600/30 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            
            <a
              href="https://github.com/SakshiCs124"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-600/20 backdrop-blur-sm px-6 py-3 rounded-full text-white hover:bg-gray-600/30 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>

          <div className="space-y-4">
            <Button
              size="lg"
              onClick={handleResumeDownload}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            
            <p className="text-white/60 mt-8 max-w-2xl mx-auto leading-relaxed">
              I am looking for a professional and dynamic work environment where I can apply my skills and knowledge 
              while contributing to the achievement of organizational goals.
            </p>
          </div>

          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="w-8 h-8 text-white/60" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-white flex items-center gap-2 text-lg">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                  Bachelor's Degree
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 relative z-10">
                <p className="font-semibold mb-3 text-white">B.E. Computer Science and Engineering</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-400 font-bold text-lg">CGPA: 8</span>
                  <span className="text-blue-300 text-sm bg-blue-500/20 px-3 py-1 rounded-full">Current</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-white flex items-center gap-2 text-lg">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                  Pre-University
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 relative z-10">
                <p className="font-semibold mb-3 text-white">PUC</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-400 font-bold text-lg">81.33%</span>
                  <span className="text-purple-300 text-sm bg-purple-500/20 px-3 py-1 rounded-full">Completed</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-white flex items-center gap-2 text-lg">
                  <BookOpen className="w-5 h-5 text-pink-400" />
                  High School
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 relative z-10">
                <p className="font-semibold mb-3 text-white">SSLC</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-400 font-bold text-lg">82.88%</span>
                  <span className="text-pink-300 text-sm bg-pink-500/20 px-3 py-1 rounded-full">Completed</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-400" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-gradient-to-r from-blue-500/40 to-purple-500/40 text-white border border-blue-400/40 hover:scale-105 transition-transform duration-200 backdrop-blur-sm shadow-lg hover:shadow-xl"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{project.icon}</span>
                    <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <Badge variant="outline" className="text-blue-400 border-blue-400/50 w-fit">
                    {project.tech}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 p-0">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Workshops Section */}
      <section id="certifications" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Certifications & Workshops
            </span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Award className="w-6 h-6 text-purple-400" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="pt-4">
                      <div className="flex items-center gap-3">
                        <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        <p className="text-white/90">{cert}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Workshops */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-blue-400" />
                Workshops
              </h3>
              <div className="space-y-6">
                {workshops.map((workshop, index) => (
                  <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-white font-semibold">{workshop.title}</h4>
                        <Badge variant="outline" className="text-blue-400 border-blue-400/50">
                          {workshop.duration}
                        </Badge>
                      </div>
                      <p className="text-white/80 text-sm">{workshop.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
            Ready to contribute to innovative projects and grow in a dynamic environment. 
            Let's discuss opportunities and build something amazing together!
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="mailto:acharyasakshi399@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </Button>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://www.linkedin.com/in/sakshi-acharya-153b87258" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60">
            Thank you for visiting my portfolio!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
