import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Award, Download, FileText } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background/70">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-6xl">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-border rounded-lg overflow-hidden">
          
          {/* Hero Section */}
          <div className="md:col-span-12 border-b border-border p-6 sm:p-8 md:p-12 bg-gradient-to-br from-background via-background to-muted/20">
            <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-4xl font-bold shadow-2xl">
                  PS
                </div>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">Prajjwal Singh</h1>
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 font-light">Software Engineer</p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <a 
                    href="/CV.pdf" 
                    download="Prajjwal_Singh_CV.pdf"
                    className="group relative inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all hover:scale-105 hover:shadow-xl text-sm sm:text-base w-full sm:w-auto justify-center"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
                    Download CV
                  </a>
                  <a 
                    href="/CV.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border-2 border-border hover:border-foreground/20 rounded-lg font-semibold hover:bg-accent transition-all hover:scale-105 hover:shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center"
                  >
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                    View CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Overview & Contact Section */}
          <div id="overview" className="md:col-span-6 border-b md:border-b-0 md:border-r border-border p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Overview</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Current Status</h3>
                <p className="text-muted-foreground mb-2">B.Tech Computer Science Student</p>
                <p className="text-sm text-muted-foreground">Lovely Professional University (2021-2025)</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  Meerut, India
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="w-4 h-4 mr-2" />
                    prajjwal.jee2018@gmail.com
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="w-4 h-4 mr-2" />
                    +91 9026279306
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & About */}
          <div className="md:col-span-6 border-b border-border p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Connect & About</h2>
            
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Social Links</h3>
              <div className="flex space-x-4">
                <Link 
                  href="https://github.com/L-RexTech" 
                  className="group p-3 border border-purple-500/20 rounded-lg bg-gradient-to-br from-purple-500/5 to-purple-600/5 hover:from-purple-500/10 hover:to-purple-600/10 hover:border-purple-500/40 transition-all duration-300"
                  target="_blank"
                >
                  <Github className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-colors" />
                </Link>
                <Link 
                  href="https://linkedin.com/in/prajjwal-s0" 
                  className="group p-3 border border-blue-500/20 rounded-lg bg-gradient-to-br from-blue-500/5 to-blue-600/5 hover:from-blue-500/10 hover:to-blue-600/10 hover:border-blue-500/40 transition-all duration-300"
                  target="_blank"
                >
                  <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
                </Link>
                <Link 
                  href="mailto:prajjwal.jee2018@gmail.com" 
                  className="group p-3 border border-red-500/20 rounded-lg bg-gradient-to-br from-red-500/5 to-red-600/5 hover:from-red-500/10 hover:to-red-600/10 hover:border-red-500/40 transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-red-600 group-hover:text-red-700 transition-colors" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">About Me</h3>
              <div className="prose prose-neutral dark:prose-invert max-w-none text-sm">
                <p>
                  Hello, World! I'm a passionate software engineering student with a strong foundation 
                  in multiple programming languages including Kotlin, Java, and Python.
                </p>
                <p>
                  I have hands-on experience with cloud technologies like AWS, Azure, and Firebase, 
                  along with Android development and database management.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div id="education" className="md:col-span-12 border-b border-border p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/5 via-background to-background">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="group border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-all hover:pl-8 duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">B.Tech in CSE</h3>
                  <span className="text-sm text-muted-foreground">2021 - 2025</span>
                </div>
                <p className="text-muted-foreground mb-2 text-sm">Lovely Professional University, Phagwara, IN</p>

              </div>
              
              <div className="group border-l-4 border-purple-500 pl-6 hover:border-purple-600 transition-all hover:pl-8 duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg group-hover:text-purple-500 transition-colors">Senior Secondary</h3>
                  <span className="text-sm text-muted-foreground">2017 - 2019</span>
                </div>
                <p className="text-muted-foreground mb-2 text-sm">LBS College, Kota, IN</p>

              </div>
              
              <div className="group border-l-4 border-green-500 pl-6 hover:border-green-600 transition-all hover:pl-8 duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg group-hover:text-green-500 transition-colors">Secondary</h3>
                  <span className="text-sm text-muted-foreground">2015 - 2017</span>
                </div>
                <p className="text-muted-foreground mb-2 text-sm">St. Joseph Convent, Prayagraj, IN</p>

              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div id="tech-stack" className="md:col-span-12 border-b border-border p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                { name: 'Python', category: 'Language', color: 'yellow', hoverColor: 'yellow' },
                { name: 'Java', category: 'Language', color: 'orange', hoverColor: 'orange' },
                { name: 'Kotlin', category: 'Language', color: 'purple', hoverColor: 'purple' },
                { name: 'SQL', category: 'Database', color: 'blue', hoverColor: 'blue' },
                { name: 'MongoDB', category: 'Database', color: 'green', hoverColor: 'green' },
                { name: 'AWS', category: 'Cloud', color: 'orange', hoverColor: 'orange' },
                { name: 'Azure', category: 'Cloud', color: 'blue', hoverColor: 'blue' },
                { name: 'Firebase', category: 'Cloud', color: 'yellow', hoverColor: 'yellow' },
                { name: 'Linux', category: 'Platform', color: 'gray', hoverColor: 'gray' },
                { name: 'Windows', category: 'Platform', color: 'blue', hoverColor: 'blue' },
                { name: 'REST APIs', category: 'Tools', color: 'green', hoverColor: 'green' },
                { name: 'Railway', category: 'Tools', color: 'purple', hoverColor: 'purple' },
              ].map((tech) => {
                const colorClasses: Record<string, { border: string; bg: string; text: string }> = {
                  yellow: {
                    border: 'border-border hover:border-yellow-500/40',
                    bg: 'bg-card hover:bg-gradient-to-br hover:from-yellow-500/10 hover:to-yellow-600/10',
                    text: 'group-hover:text-yellow-600'
                  },
                  orange: {
                    border: 'border-border hover:border-orange-500/40',
                    bg: 'bg-card hover:bg-gradient-to-br hover:from-orange-500/10 hover:to-orange-600/10',
                    text: 'group-hover:text-orange-600'
                  },
                  purple: {
                    border: 'border-border hover:border-purple-500/40',
                    bg: 'bg-card hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-purple-600/10',
                    text: 'group-hover:text-purple-600'
                  },
                  blue: {
                    border: 'border-border hover:border-blue-500/40',
                    bg: 'bg-card hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-blue-600/10',
                    text: 'group-hover:text-blue-600'
                  },
                  green: {
                    border: 'border-border hover:border-green-500/40',
                    bg: 'bg-card hover:bg-gradient-to-br hover:from-green-500/10 hover:to-green-600/10',
                    text: 'group-hover:text-green-600'
                  },
                  gray: {
                    border: 'border-border hover:border-gray-500/40',
                    bg: 'bg-card hover:bg-gradient-to-br hover:from-gray-500/10 hover:to-gray-600/10',
                    text: 'group-hover:text-gray-600'
                  }
                };
                const colors = colorClasses[tech.color];
                
                return (
                  <div key={tech.name} className={`group p-3 sm:p-4 border-2 rounded-lg transition-all duration-300 cursor-pointer ${colors.border} ${colors.bg}`}>
                    <h3 className={`font-semibold text-xs sm:text-sm transition-colors ${colors.text}`}>{tech.name}</h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{tech.category}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Experience & Activities */}
          <div id="experience" className="md:col-span-6 border-b md:border-b-0 md:border-r border-border p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Experience & Activities</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="group border border-border rounded-lg p-4 sm:p-6 bg-card hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 dark:hover:from-purple-950/20 dark:hover:to-purple-900/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:border-purple-500/50 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-muted-foreground group-hover:bg-purple-500 rounded-full transition-colors"></div>
                    <h3 className="font-semibold text-base sm:text-lg group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">Chief Technology Officer (CTO)</h3>
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md self-start sm:self-auto">Jul 2023 – Dec 2024</span>
                </div>
                <p className="text-muted-foreground group-hover:text-purple-700 dark:group-hover:text-purple-300 font-medium mb-3 transition-colors">Aalambh, LPU</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Led technical initiatives and managed development projects</li>
                  <li>Coordinated with team members on technology strategies</li>
                  <li>Oversaw technical aspects of organizational events</li>
                </ul>
              </div>
              
              <div className="group border border-border rounded-lg p-4 sm:p-6 bg-card hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-950/20 dark:hover:to-blue-900/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:border-blue-500/50 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-muted-foreground group-hover:bg-blue-500 rounded-full transition-colors"></div>
                    <h3 className="font-semibold text-base sm:text-lg group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">Swimmer</h3>
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md self-start sm:self-auto">Aug 2022</span>
                </div>
                <p className="text-muted-foreground group-hover:text-blue-700 dark:group-hover:text-blue-300 font-medium mb-3 transition-colors">Freshman Induction Program, LPU</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Represented university in swimming activities, showing discipline and teamwork</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div id="certificates" className="md:col-span-6 border-b border-border p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/5 to-background">
            <h2 className="text-2xl font-bold mb-6">Certificates</h2>
            <div className="grid grid-cols-1 gap-2">
              <div className="group border border-border rounded-md p-3 bg-card hover:bg-accent transition-all hover:scale-[1.02] hover:shadow-md hover:border-yellow-500/50 cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <Award className="w-4 h-4 text-yellow-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-muted-foreground">Mar 2025</span>
                </div>
                <h3 className="font-medium text-sm mb-0.5 group-hover:text-yellow-500 transition-colors">AWS Cloud Practitioner Foundational</h3>
                <p className="text-xs text-muted-foreground">AWS</p>
              </div>

              <div className="group border border-border rounded-md p-3 bg-card hover:bg-accent transition-all hover:scale-[1.02] hover:shadow-md hover:border-blue-500/50 cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <Award className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-muted-foreground">Mar 2025</span>
                </div>
                <h3 className="font-medium text-sm mb-0.5 group-hover:text-blue-500 transition-colors">AZ-500 (Azure Security Engineer)</h3>
                <p className="text-xs text-muted-foreground">Microsoft</p>
              </div>

              <div className="group border border-border rounded-md p-3 bg-card hover:bg-accent transition-all hover:scale-[1.02] hover:shadow-md hover:border-green-500/50 cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <Award className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-muted-foreground">Feb 2024</span>
                </div>
                <h3 className="font-medium text-sm mb-0.5 group-hover:text-green-500 transition-colors">MERN Stack</h3>
                <p className="text-xs text-muted-foreground">Cipher School</p>
              </div>

              <div className="group border border-border rounded-md p-3 bg-card hover:bg-accent transition-all hover:scale-[1.02] hover:shadow-md hover:border-orange-500/50 cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <Award className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-muted-foreground">Sep 2023</span>
                </div>
                <h3 className="font-medium text-sm mb-0.5 group-hover:text-orange-500 transition-colors">EC2 Cloud Engineer</h3>
                <p className="text-xs text-muted-foreground">AWS</p>
              </div>

              <div className="group border border-border rounded-md p-3 bg-card hover:bg-accent transition-all hover:scale-[1.02] hover:shadow-md hover:border-red-500/50 cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <Award className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-muted-foreground">May 2023</span>
                </div>
                <h3 className="font-medium text-sm mb-0.5 group-hover:text-red-500 transition-colors">Algorithms Specialization</h3>
                <p className="text-xs text-muted-foreground">Coursera</p>
              </div>

              <div className="group border border-border rounded-md p-3 bg-card hover:bg-accent transition-all hover:scale-[1.02] hover:shadow-md hover:border-purple-500/50 cursor-pointer">
                <div className="flex items-center justify-between mb-1">
                  <Award className="w-4 h-4 text-purple-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-muted-foreground">Feb 2023</span>
                </div>
                <h3 className="font-medium text-sm mb-0.5 group-hover:text-purple-500 transition-colors">Introduction to AI</h3>
                <p className="text-xs text-muted-foreground">Coursera</p>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div id="projects" className="md:col-span-12 border-b border-border p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="border-2 border-border rounded-lg p-4 sm:p-6 bg-card hover:bg-gradient-to-br hover:from-green-500/10 hover:to-green-600/10 hover:border-green-500/40 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-1 sm:gap-0">
                  <h3 className="font-semibold text-base sm:text-lg group-hover:text-green-600 transition-colors">Revibe – Mental Health App</h3>
                  <span className="text-xs sm:text-sm text-muted-foreground">Feb 2025 – Present</span>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  Built a full-stack web application integrating AI/ML models for sentiment and mood analysis.
                  Delivered features like community forum, guided meditation, and wellbeing resources.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Next.js</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">MongoDB</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Tailwind CSS</span>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">Key Features:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs">
                    <li>AI/ML sentiment analysis</li>
                    <li>Community forum</li>
                    <li>Guided meditation</li>
                    <li>Personalized tips</li>
                    <li>Emotion tracking</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <Link 
                    href="https://revibe-wine.vercel.app/" 
                    className="text-green-600 hover:text-green-700 font-medium text-sm group-hover:underline transition-all"
                    target="_blank"
                  >
                    View Live →
                  </Link>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-4 sm:p-6 bg-card hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-blue-600/10 hover:border-blue-500/40 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-1 sm:gap-0">
                  <h3 className="font-semibold text-base sm:text-lg group-hover:text-blue-600 transition-colors">Partner Pilot - AI App</h3>
                  <span className="text-xs sm:text-sm text-muted-foreground">Jan 2024 - Mar 2024</span>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  AI-powered Android chatbot with conversational engagement and recommendations.
                  Integrated Firebase realtime database & authentication.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Kotlin</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">XML</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">GeminiAPI</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Firebase</span>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">Key Features:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs">
                    <li>Natural language understanding</li>
                    <li>Conversational engagement</li>
                    <li>Firebase integration</li>
                    <li>Intuitive UI</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <Link 
                    href="https://github.com/L-RexTech/Partner-Pilot" 
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline transition-all"
                    target="_blank"
                  >
                    View GitHub →
                  </Link>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-4 sm:p-6 bg-card hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-purple-600/10 hover:border-purple-500/40 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-1 sm:gap-0">
                  <h3 className="font-semibold text-base sm:text-lg group-hover:text-purple-600 transition-colors">Steganography Password Hider</h3>
                  <span className="text-xs sm:text-sm text-muted-foreground">Jul 2023</span>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  Developed Java-based image steganography system for secure password hiding.
                  Ensured covert data protection using image concealment techniques.
                </p>
                <div className="flex space-x-2 mb-4">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Java</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Steganography</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Security</span>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">Key Features:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs">
                    <li>Image concealment techniques</li>
                    <li>Discreet communication</li>
                    <li>Data security through embedded visuals</li>
                    <li>Secure password hiding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
