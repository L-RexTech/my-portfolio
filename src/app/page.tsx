import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Award, Download, FileText } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background/70">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-border rounded-lg overflow-hidden">
          
          {/* Hero Section */}
          <div className="md:col-span-12 border-b border-border p-12 bg-gradient-to-br from-background via-background to-muted/20">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                  PS
                </div>
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">Prajjwal Singh</h1>
                <p className="text-2xl text-muted-foreground mb-4 font-light">Software Engineer</p>
                <p className="text-lg max-w-2xl text-muted-foreground/90 leading-relaxed mb-6">
                  A prospective software engineer adept in multiple programming languages and equipped 
                  with exceptional problem-solving skills. Committed to lifelong learning and passionate 
                  about creating innovative software solutions.
                </p>
                <div className="flex gap-4 justify-center items-center">
                  <a 
                    href="/CV.pdf" 
                    download="Prajjwal_Singh_CV.pdf"
                    className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all hover:scale-105 hover:shadow-xl"
                  >
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    Download CV
                  </a>
                  <a 
                    href="/CV.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border hover:border-foreground/20 rounded-lg font-semibold hover:bg-accent transition-all hover:scale-105 hover:shadow-lg"
                  >
                    <FileText className="w-5 h-5" />
                    View CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Overview & Contact Section */}
          <div id="overview" className="md:col-span-6 border-b md:border-b-0 md:border-r border-border p-8">
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
          <div className="md:col-span-6 border-b border-border p-8">
            <h2 className="text-2xl font-bold mb-6">Connect & About</h2>
            
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Social Links</h3>
              <div className="flex space-x-4">
                <Link 
                  href="https://github.com/L-RexTech" 
                  className="p-3 border border-border rounded-lg hover:bg-accent transition-colors"
                  target="_blank"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link 
                  href="https://linkedin.com/in/prajjwal-s0" 
                  className="p-3 border border-border rounded-lg hover:bg-accent transition-colors"
                  target="_blank"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link 
                  href="mailto:prajjwal.jee2018@gmail.com" 
                  className="p-3 border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <Mail className="w-6 h-6" />
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
          <div id="education" className="md:col-span-12 border-b border-border p-8 bg-gradient-to-br from-muted/5 via-background to-background">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-all hover:pl-8 duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">B.Tech in CSE</h3>
                  <span className="text-sm text-muted-foreground">2021 - 2025</span>
                </div>
                <p className="text-muted-foreground mb-2 text-sm">Lovely Professional University, Phagwara, IN</p>

              </div>
              
              <div className="group border-l-4 border-purple-500 pl-6 hover:border-purple-600 transition-all hover:pl-8 duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg group-hover:text-purple-500 transition-colors">Higher Secondary</h3>
                  <span className="text-sm text-muted-foreground">2018 - 2020</span>
                </div>
                <p className="text-muted-foreground mb-2 text-sm">LBS College, Kota, IN</p>

              </div>
              
              <div className="group border-l-4 border-green-500 pl-6 hover:border-green-600 transition-all hover:pl-8 duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg group-hover:text-green-500 transition-colors">Secondary</h3>
                  <span className="text-sm text-muted-foreground">2017 - 2018</span>
                </div>
                <p className="text-muted-foreground mb-2 text-sm">St. Joseph Convent, Prayagraj, IN</p>

              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div id="tech-stack" className="md:col-span-12 border-b border-border p-8">
            <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: 'Kotlin', category: 'Language' },
                { name: 'Java', category: 'Language' },
                { name: 'Python', category: 'Language' },
                { name: 'Android', category: 'Platform' },
                { name: 'AWS', category: 'Cloud' },
                { name: 'Azure', category: 'Cloud' },
                { name: 'Firebase', category: 'Cloud' },
                { name: 'SQL', category: 'Database' },
                { name: 'MongoDB', category: 'Database' },
                { name: 'Linux', category: 'Platform' },
                { name: 'Windows', category: 'Platform' },
                { name: 'AWS EC2', category: 'Infrastructure' },
              ].map((tech) => (
                <div key={tech.name} className="p-4 border border-border rounded-lg bg-card hover:bg-accent transition-colors">
                  <h3 className="font-semibold text-sm">{tech.name}</h3>
                  <p className="text-xs text-muted-foreground">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Activities */}
          <div id="experience" className="md:col-span-6 border-b md:border-b-0 md:border-r border-border p-8">
            <h2 className="text-2xl font-bold mb-6">Experience & Activities</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-border pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">CTO</h3>
                  <span className="text-sm text-muted-foreground">Jul 2023 - Dec 2024</span>
                </div>
                <p className="text-muted-foreground mb-3">Aalambh, LPU</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Led technical initiatives and development projects</li>
                  <li>Coordinated with team members on technology strategy</li>
                  <li>Managed technical aspects of organizational events and projects</li>
                </ul>
              </div>
              
              <div className="border-l-2 border-border pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">Swimmer</h3>
                  <span className="text-sm text-muted-foreground">Aug 2022</span>
                </div>
                <p className="text-muted-foreground mb-3">Freshman Induction Program, LPU</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Participated in university swimming activities</li>
                  <li>Demonstrated athletic skills and teamwork</li>
                  <li>Contributed to university sports initiatives</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div id="certificates" className="md:col-span-6 border-b border-border p-8 bg-gradient-to-br from-muted/5 to-background">
            <h2 className="text-2xl font-bold mb-6">Certificates</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="group border border-border rounded-lg p-4 bg-card hover:bg-accent transition-all hover:scale-105 hover:shadow-lg hover:border-blue-500/50 cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <Award className="w-5 h-5 text-blue-500 mt-1 group-hover:scale-125 transition-transform" />
                  <span className="text-xs text-muted-foreground">Feb 2024</span>
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-blue-500 transition-colors">MERN Stack</h3>
                <p className="text-sm text-muted-foreground">Cipher School</p>
              </div>

              <div className="group border border-border rounded-lg p-4 bg-card hover:bg-accent transition-all hover:scale-105 hover:shadow-lg hover:border-orange-500/50 cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <Award className="w-5 h-5 text-orange-500 mt-1 group-hover:scale-125 transition-transform" />
                  <span className="text-xs text-muted-foreground">Sep 2023</span>
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-orange-500 transition-colors">EC2 Cloud Engineer</h3>
                <p className="text-sm text-muted-foreground">AWS</p>
              </div>

              <div className="group border border-border rounded-lg p-4 bg-card hover:bg-accent transition-all hover:scale-105 hover:shadow-lg hover:border-green-500/50 cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <Award className="w-5 h-5 text-green-500 mt-1 group-hover:scale-125 transition-transform" />
                  <span className="text-xs text-muted-foreground">May 2023</span>
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-green-500 transition-colors">Algorithms Specialization</h3>
                <p className="text-sm text-muted-foreground">Coursera</p>
              </div>

              <div className="group border border-border rounded-lg p-4 bg-card hover:bg-accent transition-all hover:scale-105 hover:shadow-lg hover:border-purple-500/50 cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <Award className="w-5 h-5 text-purple-500 mt-1 group-hover:scale-125 transition-transform" />
                  <span className="text-xs text-muted-foreground">Feb 2023</span>
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-purple-500 transition-colors">Introduction to AI</h3>
                <p className="text-sm text-muted-foreground">Coursera</p>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div id="projects" className="md:col-span-12 border-b border-border p-8">
            <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border rounded-lg p-6 bg-card hover:bg-accent transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg">Partner Pilot - AI App</h3>
                  <span className="text-sm text-muted-foreground">Jan 2024 - Mar 2024</span>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  AI-powered chatbot Android application designed to engage users in conversations, 
                  provide assistance, information, and entertainment with natural language understanding 
                  and personalized recommendations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Kotlin</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">XML</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">GeminiAPI</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Firebase</span>
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">RecyclerView</span>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-medium">Key Features:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 text-xs">
                    <li>Natural language understanding</li>
                    <li>Personalized recommendations</li>
                    <li>Information retrieval</li>
                    <li>User-friendly interface</li>
                    <li>Persistent data storage</li>
                  </ul>
                </div>
              </div>

              <div className="border border-border rounded-lg p-6 bg-card hover:bg-accent transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg">Steganography Password Hider</h3>
                  <span className="text-sm text-muted-foreground">Jul 2023</span>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  Java steganography project that hides images within data, ensuring secure and 
                  covert communication through embedded visual content for enhanced data security.
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
