import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './input.css';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Layout, Award, BookOpen, Briefcase, ChevronDown, Gamepad2, Trophy } from "lucide-react";

const Home = () => {
  const [isDay, setIsDay] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDayNight = () => setIsDay(prev => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  useEffect(() => {
    document.body.style.backgroundColor = isDay ? "#f5f5f5" : "#111";
    document.body.style.color = isDay ? "#111" : "#f5f5f5";
  }, [isDay]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: "100%" }
  };

  const skills = {
    languages: ["C++", "HTML", "CSS", "Tailwind CSS", "JavaScript", "SQL", "Python", "NumPy", "Pandas", "Matplotlib"],
    databases: ["MySQL", "MongoDB"],
    fullstack: ["MERN Stack", "Next.js", "Flask", "Streamlit"],
    tools: ["Power BI", "MS Excel", "GitHub", "Jupyter Notebook"],
    other: ["REST API", "ETL", "Data Modeling", "Data Visualization", "Machine Learning", "DSA", "Prompt Engineering"]
  };

  const projects = [
    {
      title: "CourseHub",
      subtitle: "Full-Stack Web Application",
      duration: "30 Days",
      description: "A comprehensive platform helping students access structured courses with purchase, tracking, and direct support messaging features.",
      features: ["Admin panel with CRUD operations", "Resume builder with auto-generation", "Authentication & state management"],
      link: "https://mern-project-frontends.onrender.com",
      tech: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Amazon Clone",
      subtitle: "Full-Stack E-Commerce Application",
      description: "Amazon-inspired e-commerce app with React frontend and Flask backend featuring secure authentication.",
      features: ["Google OAuth 2.0 & JWT auth", "Product catalog with search & filtering", "Shopping cart functionality"],
      link: "https://amazon-clones-rrdp.onrender.com",
      tech: ["React", "Flask", "OAuth", "JWT"]
    }
  ];

  const certifications = [
    { 
      title: "Data Science Internship", 
      org: "InLighnX Global Pvt. Ltd. (Remote)", 
      year: "Aug 2025",
      link:'https://drive.google.com/file/d/1JMu0fNZaaxaWVI2EBGruJXYIjeRqpAQV/view?usp=sharing'
    },
    { title: "Web Development", org: "Skill India Digital Hub (NSDC)", year: "2024", link:"https://drive.google.com/file/d/1KwiOrT_tFEyrD28iGqbsTu1YHuvyt9mL/view?usp=sharing" },
    { title: "AI Tools & ChatGPT Workshop", org: "be10x", year: "July 2025", link:"https://drive.google.com/file/d/1N6EVd2HuJxV2b4-Yt7HWAtZn2zs8yNwa/view?usp=sharing" },
    { title: "Web Designing Summer Course", org: "Solitaire Infosys", year: "Jun 2024", link:"https://drive.google.com/file/d/1Iy9u6MX3WRHNeWc3BJgDq9peAXsM1sd9/view?usp=sharing" }
  ];

  const navItems = ["about", "skills", "experience", "projects", "certifications", "contact"];

  const handleNavClick = (item) => {
    setActiveSection(item);
    setIsMobileMenuOpen(false);
  };

  // Color mapping for skills
  const skillColors = {
    emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "hover:border-emerald-500/50" },
    cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "hover:border-cyan-500/50" },
    blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "hover:border-blue-500/50" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "hover:border-purple-500/50" },
    rose: { bg: "bg-rose-500/10", text: "text-rose-400", border: "hover:border-rose-500/50" }
  };

  const skillCategories = [
    { title: "Languages", icon: Code, items: skills.languages, color: "emerald" },
    { title: "Databases", icon: Database, items: skills.databases, color: "cyan" },
    { title: "Full-Stack", icon: Layout, items: skills.fullstack, color: "blue" },
    { title: "Tools", icon: Briefcase, items: skills.tools, color: "purple" },
    { title: "Other Skills", icon: Award, items: skills.other, color: "rose" }
  ];

  return (
    <>
      {/* Day/Night Toggle - Minimal */}
      <div
        onClick={toggleDayNight}
        className={`fixed z-[660] cursor-pointer md:right-6 md:top-6 top-20 left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none ${isMobileMenuOpen ? 'pointer-events-none opacity-50' : ''}`}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={`relative w-12 h-6 md:w-14 md:h-7 rounded-full p-0.5 shadow-inner ${
            isDay ? "bg-gradient-to-r from-amber-200 to-yellow-300" : "bg-gradient-to-r from-slate-700 to-gray-800"
          }`}
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={`w-5 h-5 md:w-6 md:h-6 rounded-full shadow-md ${
              isDay 
                ? "bg-gradient-to-br from-yellow-300 to-amber-400 ml-0.5" 
                : "bg-gradient-to-br from-gray-200 to-slate-300 ml-6 md:ml-7"
            }`}
          />
          
          <div className="absolute inset-0 flex items-center justify-between px-1.5">
            <Sun 
              size={12} 
              className={`transition-all duration-300 ${
                isDay ? "text-amber-600 opacity-100" : "text-gray-500 opacity-40"
              }`}
            />
            <Moon 
              size={12} 
              className={`transition-all duration-300 ${
                isDay ? "text-gray-400 opacity-40" : "text-slate-300 opacity-100"
              }`}
            />
          </div>
        </motion.div>
      </div>

      <div className={`min-h-screen overflow-x-hidden ${isDay ? 'bg-gradient-to-br from-white to-red-400 text-slate-900' : 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-300'}`}>
        {/* Animated Background Particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-emerald-500/20 rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            >
              SG
            </motion.span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSection(item)}
                  className={`capitalize text-sm tracking-wide transition-colors ${
                    activeSection === item ? "text-emerald-400" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item}
                </motion.a>
              ))}
            </div>
<div className='hidden md:block'></div>
<div className='hidden md:block'></div>
            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-colors z-[100]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          
{/* Mobile Menu */}
{/* Mobile Menu */}
{/* Mobile Menu */}
<AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000]"
    >
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-black"
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      {/* Menu Panel - Slides in from right */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className={`absolute top-0 right-0 h-full w-4/5 max-w-xs shadow-2xl ${
          isDay ? 'bg-slate-900' : 'bg-slate-900'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className={`p-2 rounded-full ${
              isDay 
                ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu Items - Now clearly visible */}
        <div className="px-6 py-8 bg-slate-900">
          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`#${item}`}
                  onClick={(e) => {
                    handleNavClick(item);
                  }}
                  className={`block text-xl font-bold capitalize py-4 px-4 rounded-lg transition-all duration-200 ${
                    activeSection === item
                      ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg"
                      : isDay
                        ? "text-slate-800 hover:bg-slate-100 hover:text-emerald-600 hover:shadow"
                        : "text-slate-300 hover:bg-slate-800 hover:text-emerald-400 hover:shadow"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 pt-8 border-t border-slate-700/30"
          >
            <p className={`text-sm mb-4 ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
              Connect with me
            </p>
            <div className="flex justify-center gap-6">
              {[
                { icon: Github, link: "https://github.com/dh7-bit", label: "GitHub" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/444sa", label: "LinkedIn" },
                { icon: Mail, link: "mailto:sakshamgupta0155@gmail.com", label: "Email" }
              ].map(({ icon: Icon, link, label }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex flex-col items-center gap-2 ${
                    isDay ? 'text-slate-700' : 'text-slate-300'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isDay
                      ? "bg-slate-100 border border-slate-300 hover:bg-emerald-50 hover:border-emerald-400"
                      : "bg-slate-800 border border-slate-700 hover:bg-emerald-900/20 hover:border-emerald-500"
                  }`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-xs">{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
        </motion.nav>

        {/* Hero Section */}
        <div className={`relative ${isMobileMenuOpen ? 'opacity-50 pointer-events-none' : ''}`}>
          <section id="about" className="min-h-screen flex items-center justify-center relative pt-20">
            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp} className="space-y-2">
                  <span className="text-emerald-400 font-medium tracking-widest text-sm">HELLO, I'M</span>
                  <h1 className="text-5xl lg:text-7xl font-bold">
                    <span className={`${isDay 
                      ? "bg-gradient-to-r from-black to-red-500 bg-clip-text text-transparent" 
                      : "bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"
                    }`}>
                      Saksham
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-red-500 bg-clip-text text-transparent">
                      Gupta
                    </span>
                  </h1>
                </motion.div>
                
                <motion.p variants={fadeInUp} className="text-xl text-slate-400 leading-relaxed max-w-xl">
                  Full-Stack Developer & Data Enthusiast crafting production-ready applications with MERN, Next.js, Flask & Streamlit. Currently pursuing B.Tech in Computer Science.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold text-slate-900 shadow-lg shadow-emerald-500/25"
                  >
                    Get In Touch
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#projects"
                    className={`px-8 py-4 border rounded-full font-semibold transition-colors ${
                      isDay 
                        ? "border-slate-700 text-black hover:border-emerald-400/50" 
                        : "border-slate-700 text-slate-300 hover:border-emerald-400/50"
                    }`}
                  >
                    View Projects
                  </motion.a>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex gap-6 pt-4">
                  {[
                    { icon: Github, link: "https://github.com/dh7-bit" },
                    { icon: Linkedin, link: "https://www.linkedin.com/in/444sa" },
                    { icon: Mail, link: "mailto:sakshamgupta0155@gmail.com" }
                  ].map(({ icon: Icon, link }, i) => (
                    <motion.a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-colors"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative w-96 h-96 mx-auto">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500/30"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 rounded-full border-2 border-dashed border-cyan-500/30"
                  />
                  <div className="absolute inset-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl flex items-center justify-center">
                    <span className="text-8xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      SG
                    </span>
                  </div>
                  {/* Floating Tech Icons */}
                  {["⚛️", "🐍", "📊", "💾"].map((emoji, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-3xl"
                      style={{
                        top: `${20 + i * 20}%`,
                        left: i % 2 === 0 ? "-10%" : "90%"
                      }}
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                    >
                      {emoji}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <ChevronDown className="text-slate-500" size={32} />
            </motion.div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <span className="text-emerald-400 font-medium tracking-widest text-sm">EXPERTISE</span>
                <h2 className={`${isDay 
                  ? 'text-4xl lg:text-5xl font-bold mt-2 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent' 
                  : 'text-4xl lg:text-5xl font-bold mt-2 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent'
                }`}>
                  Technical Skills
                </h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {skillCategories.map(({ title, icon: Icon, items, color }) => {
                  const colors = skillColors[color];
                  return (
                    <motion.div
                      key={title}
                      variants={scaleIn}
                      whileHover={{ y: -10, transition: { duration: 0.3 } }}
                      className={`p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 ${colors.border} transition-colors group`}
                    >
                      <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className={colors.text} size={28} />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <motion.span
                            key={skill}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 text-sm bg-slate-800 rounded-full text-slate-300 border border-slate-700 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-32 relative bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <span className="text-emerald-400 font-medium tracking-widest text-sm">JOURNEY</span>
                <h2 className={`text-4xl lg:text-5xl font-bold mt-2 ${isDay 
                  ? 'bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent' 
                  : 'bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent'
                }`}>
                  Experience & Education
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Education */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideIn}
                >
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <BookOpen className="text-emerald-400" />
                    Education
                  </h3>
                  <div className="space-y-6">
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-emerald-500/30 transition-all"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg">B.Tech in Computer Science</h4>
                        <span className="text-emerald-400 text-sm">Aug 2022 – July 2026</span>
                      </div>
                      <p className="text-slate-400">Chandigarh Group of Colleges (CGC), Mohali</p>
                      <p className="text-cyan-400 font-medium mt-2">CGPA: 7.89/10.0</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-emerald-500/30 transition-all"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg">Higher Secondary (12th Grade)</h4>
                        <span className="text-emerald-400 text-sm">Apr 2021 – June 2022</span>
                      </div>
                      <p className="text-slate-400">Sita Grammar School, Punjab</p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Experience */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideIn}
                >
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Briefcase className="text-cyan-400" />
                    Experience
                  </h3>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg">Development & Analytics</h4>
                      <span className="text-cyan-400 text-sm">Aug 2022 – Present</span>
                    </div>
                    <p className="text-slate-400 mb-4">CGC College of Engineering, Landran</p>
                    <ul className="space-y-3 text-slate-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">▹</span>
                        Built production-ready full-stack apps with MERN & Flask, featuring secure auth (JWT, OAuth)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">▹</span>
                        Created interactive Power BI dashboards for data visualization
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">▹</span>
                        Solved 300+ DSA challenges on LeetCode, GFG & CodeStudio
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">▹</span>
                        100+ GitHub contributions with coding projects & data scripts
                      </li>
                    </ul>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <span className="text-emerald-400 font-medium tracking-widest text-sm">PORTFOLIO</span>
                <h2 className={`text-4xl lg:text-5xl font-bold mt-2 ${isDay 
                  ? 'bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent' 
                  : 'bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent'
                }`}>
                  Featured Projects
                </h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid lg:grid-cols-2 gap-8"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    variants={scaleIn}
                    whileHover={{ y: -10 }}
                    className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="p-8 relative">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                          <p className="text-slate-400">{project.subtitle}</p>
                        </div>
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white transition-colors"
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      </div>
                      
                      {project.duration && (
                        <span className="inline-block px-3 py-1 text-xs bg-emerald-500/10 text-emerald-400 rounded-full mb-4">
                          {project.duration}
                        </span>
                      )}
                      
                      <p className={`mb-4 ${isDay ? 'text-slate-700' : 'text-slate-300'}`}>
                        {project.description}
                      </p>
                      
                      <ul className="space-y-2 mb-6">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-slate-700/50 rounded-full text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="py-32 relative bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <span className="text-emerald-400 font-medium tracking-widest text-sm">ACHIEVEMENTS</span>
                <h2 className={`text-4xl lg:text-5xl font-bold mt-2 ${isDay 
                  ? 'bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent' 
                  : 'bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent'
                }`}>
                  Certifications & Awards
                </h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-6 mb-12"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => cert.link && window.open(cert.link, '_blank')}
                    className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all text-center"
                  >
                    <Award className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">{cert.title}</h3>
                    <p className="text-slate-400 text-sm">{cert.org}</p>
                    <span className="text-cyan-400 text-sm">{cert.year}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                 onClick={() =>  window.open("https://drive.google.com/file/d/1tsm5UnPG48DxbrsWH4_qWNI3OBJS2b7O/view?usp=sharing")}
                className="p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20"
              >
                <div className="flex items-center gap-4 justify-center">
                  <Trophy className="w-10 h-10 text-amber-400" />
                  <div className="text-center">
                    <h3 className="text-xl font-bold">3rd Position in CBSE Inter-School Cricket Tournament</h3>
                    <p className="text-slate-400">Doraha, Punjab</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-32 relative">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeInUp} className="text-emerald-400 font-medium tracking-widest text-sm">
                  LET'S CONNECT
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className={`text-4xl lg:text-6xl font-bold mt-2 mb-8 ${isDay 
                    ? 'bg-gradient-to-r from-black via-gray-600 to-gray-800 bg-clip-text text-transparent' 
                    : 'bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent'
                  }`}
                >
                  Get In Touch
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                  I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                </motion.p>

                <motion.div
                  variants={staggerContainer}
                  className="flex flex-wrap justify-center gap-6 mb-12"
                >
                  {[
                    { icon: Mail, text: "sakshamgupta0155@gmail.com", href: "mailto:sakshamgupta0155@gmail.com" },
                    { icon: Phone, text: "+91-7009754876", href: "tel:+917009754876" },
                    { icon: MapPin, text: "Malerkotla, Punjab, India", href: "#" }
                  ].map(({ icon: Icon, text, href }) => (
                    <motion.a
                      key={text}
                      href={href}
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-colors"
                    >
                      <Icon className="text-emerald-400" size={20} />
                      <span className="text-slate-300">{text}</span>
                    </motion.a>
                  ))}
                </motion.div>

                <motion.div variants={fadeInUp} className="flex justify-center gap-6">
                  {[
                    { icon: Github, link: "https://github.com/dh7-bit", label: "GitHub" },
                    { icon: Linkedin, link: "https://www.linkedin.com/in/444sa", label: "LinkedIn" }
                  ].map(({ icon: Icon, link, label }) => (
                    <motion.a
                      key={label}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 font-semibold text-slate-900 shadow-lg shadow-emerald-500/25 flex items-center gap-2"
                    >
                      <Icon size={20} />
                      {label}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-4 text-slate-400"
              >
                <Gamepad2 size={18} />
                <span>Gaming</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <Trophy size={18} />
                <span>Cricket</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <Code size={18} />
                <span>Coding</span>
              </motion.div>
              <p className="text-slate-500 mt-4 text-sm">
                © 2024 Saksham Gupta. Built with React & Tailwind CSS
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;