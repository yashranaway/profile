"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { Sun, Moon, Heart } from "lucide-react"
import { useState, useEffect } from "react"


import ClickSpark from "@/components/ClickSpark"
import TimeCounter from "@/components/TimeCounter"
import CodeHover from "@/components/CodeHover"
import LinkPreview from "@/components/LinkPreview"
import githubAvatar from "@/assets/githubphotu.jpg"
import linkedinAvatar from "@/assets/linkedinphotu.jpg"


// Clean Skill Card Component with modern skill-icons
function SkillCard({ skill, specialized = false }) {
  return (
    <ClickSpark
      sparkColor={skill.color}
      sparkSize={8}
      sparkRadius={12}
      sparkCount={6}
      duration={400}
      easing="ease-out"
      extraScale={1.0}
    >
      <div
        className={`group relative flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black overflow-hidden shadow-sm hover:shadow-md ${specialized ? 'md:col-span-1' : ''
          }`}
        role="button"
        tabIndex={0}
        aria-label={`${skill.name} technology`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
          }
        }}
      >
        {/* Skill Icon using skill-icons */}
        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 group-hover:scale-110">
          <img
            src={skill.iconUrl}
            alt={`${skill.name} icon`}
            className="w-full h-full object-contain transition-all duration-300 group-hover:drop-shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Skill Name */}
        <span className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-white transition-colors duration-300 flex-1">
        {skill.name}
      </span>

        {/* Enhanced Glare effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200/30 dark:via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        </div>
      </div>
    </ClickSpark>
  )
}

// Organized skills data
const skillsData = {
  languages: [
    { name: "C", iconUrl: "https://skillicons.dev/icons?i=c", color: "#A8B9CC" },
    { name: "C++", iconUrl: "https://skillicons.dev/icons?i=cpp", color: "#00599C" },
    { name: "Java", iconUrl: "https://skillicons.dev/icons?i=java", color: "#ED8B00" },
    { name: "Python", iconUrl: "https://skillicons.dev/icons?i=python", color: "#3776AB" },
    { name: "JavaScript", iconUrl: "https://skillicons.dev/icons?i=js", color: "#F7DF1E" },
    { name: "TypeScript", iconUrl: "https://skillicons.dev/icons?i=ts", color: "#3178C6" },
    { name: "Rust", iconUrl: "https://skillicons.dev/icons?i=rust", color: "#CE422B" },
    { name: "Go", iconUrl: "https://skillicons.dev/icons?i=go", color: "#00ADD8" },
  ],
  frontend: [
    { name: "HTML5", iconUrl: "https://skillicons.dev/icons?i=html", color: "#E34F26" },
    { name: "CSS3", iconUrl: "https://skillicons.dev/icons?i=css", color: "#1572B6" },
    { name: "Bootstrap", iconUrl: "https://skillicons.dev/icons?i=bootstrap", color: "#7952B3" },
    { name: "React", iconUrl: "https://skillicons.dev/icons?i=react", color: "#61DAFB" },
    { name: "Tailwind CSS", iconUrl: "https://skillicons.dev/icons?i=tailwind", color: "#38B2AC" },
    { name: "Next.js", iconUrl: "https://skillicons.dev/icons?i=nextjs", color: "#000000" },
  ],
  backend: [
    { name: "Node.js", iconUrl: "https://skillicons.dev/icons?i=nodejs", color: "#339933" },
    { name: "Express.js", iconUrl: "https://skillicons.dev/icons?i=express", color: "#68CC00" },
    { name: "MongoDB", iconUrl: "https://skillicons.dev/icons?i=mongodb", color: "#47A248" },
    { name: "MySQL", iconUrl: "https://skillicons.dev/icons?i=mysql", color: "#4479A1" },
    { name: "PostgreSQL", iconUrl: "https://skillicons.dev/icons?i=postgresql", color: "#336791" },
    { name: "Prisma", iconUrl: "https://skillicons.dev/icons?i=prisma", color: "#0C344B" },
  ],
  tools: [
    { name: "Linux", iconUrl: "https://skillicons.dev/icons?i=linux", color: "#FCC624" },
    { name: "Git", iconUrl: "https://skillicons.dev/icons?i=git", color: "#F05032" },
    { name: "VS Code", iconUrl: "https://skillicons.dev/icons?i=vscode", color: "#007ACC" },
    { name: "Docker", iconUrl: "https://skillicons.dev/icons?i=docker", color: "#2496ED" },
    { name: "Firebase", iconUrl: "https://skillicons.dev/icons?i=firebase", color: "#FFCA28" },
    { name: "AWS", iconUrl: "https://skillicons.dev/icons?i=aws", color: "#FF9900" },
    { name: "Vercel", iconUrl: "https://skillicons.dev/icons?i=vercel", color: "#000000" },
    { name: "Apple", iconUrl: "https://skillicons.dev/icons?i=apple", color: "#A2AAAD" },
  ],
  ai: [
    { name: "TensorFlow", iconUrl: "https://skillicons.dev/icons?i=tensorflow", color: "#FF6F00" },
    { name: "PyTorch", iconUrl: "https://skillicons.dev/icons?i=pytorch", color: "#EE4C2C" },
    { name: "OpenCV", iconUrl: "https://skillicons.dev/icons?i=opencv", color: "#5C3EE8" },
    { name: "scikit-learn", iconUrl: "https://skillicons.dev/icons?i=sklearn", color: "#F7931E" },
    { name: "Transformers", iconUrl: "/icons/huggingface.png", color: "#FFCC4D" },
  ],
  hardware: [
    { name: "Arduino", iconUrl: "https://skillicons.dev/icons?i=arduino", color: "#00979D" },
    { name: "IoT Programming", iconUrl: "https://skillicons.dev/icons?i=raspberrypi", color: "#A22846" },
  ],
  other: [
    { name: "Discord Bot Dev", iconUrl: "https://skillicons.dev/icons?i=discord", color: "#5865F2" },
    { name: "Discord.js", iconUrl: "https://skillicons.dev/icons?i=discordjs", color: "#5865F2" },
    { name: "Discord.py", iconUrl: "/icons/discordpy.png", color: "#3776AB" },
  ]
}

export default function Page() {
  const { theme, setTheme } = useTheme()

  // Global click handler for letter animations
  const triggerRandomLetterEffect = () => {
    const letters = document.querySelectorAll('.letter');
    if (letters.length === 0) return;
    
    // Pick random letter
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    

    const effects = [
      // Colors
      'color-red', 'color-blue', 'color-green', 'color-purple', 'color-orange',
      'color-pink', 'color-yellow', 'color-cyan', 'color-lime', 'color-indigo',
      'color-teal', 'color-rose', 'color-amber', 'color-emerald', 'color-violet',
      
      // Scales
      'scale-tiny', 'scale-small', 'scale-big', 'scale-huge', 'scale-crazy',
      
      // Rotations
      'rotate-left', 'rotate-right', 'rotate-crazy', 'rotate-flip', 'rotate-spin',
      
      // Basic animations
      'shake', 'bounce', 'wobble', 'flip', 'pulse-big', 'pulse-crazy',
      
      // Glow effects
      'glow', 'glow-intense', 'glow-rainbow', 'neon-glow',
      
      // Rainbow and gradients
      'rainbow', 'rainbow-fast', 'fire-gradient', 'ocean-gradient', 'sunset-gradient',
      
      // Crazy animations
      'matrix-rain', 'glitch', 'elastic', 'jello', 'rubber', 'swing',
      'tada', 'heartbeat', 'flash', 'zoom-in', 'zoom-out', 'roll-in',
      'roll-out', 'fade-in-down', 'fade-in-up', 'slide-in', 'typewriter',
      'lightning', 'earthquake', 'tornado', 'explode', 'implode',
      
      // 3D effects
      'flip-x', 'flip-y', 'flip-z', 'rotate-3d', 'cube-flip', 'card-flip',
      
      // Particle effects
      'sparkle', 'confetti', 'fireworks', 'snow', 'rain',
      
      // Distortion effects
      'stretch-x', 'stretch-y', 'skew-left', 'skew-right', 'wave', 'ripple'
    ];
    
    // Pick random effect
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    
    // Apply effect
    randomLetter.classList.add('letter-active', randomEffect);
    
    // Remove effect after 2-3 seconds
    const duration = 2000 + Math.random() * 1000;
    setTimeout(() => {
      randomLetter.classList.remove('letter-active', randomEffect);
    }, duration);
  };

  useEffect(() => {
    // Global click listener - ANY click triggers letter animation
    const handleGlobalClick = (e) => {
      // Ignore clicks on elements marked to skip letter effects
      const target = e.target;
      if (target && target.closest && target.closest('[data-no-letter]')) return;
      triggerRandomLetterEffect();
    };

    // Add click listener to document
    document.addEventListener('click', handleGlobalClick);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [])





  return (
    <ClickSpark
      sparkColor="#ffffff"
      sparkSize={8}
      sparkRadius={15}
      sparkCount={6}
      duration={400}
      easing="ease-out"
      extraScale={1.0}
    >
      <div className="min-h-screen bg-zinc-50 text-zinc-900 transition-all duration-500 ease-in-out dark:bg-zinc-900 dark:text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-8 flex justify-center items-center animate-fade-in">
        <Button
          variant="ghost"
          size="icon"
          data-no-letter
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full w-12 h-12 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all duration-300"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all duration-500 ease-in-out dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all duration-500 ease-in-out dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-20 lg:space-y-24 max-w-7xl" role="main">
        {/* Hero Section */}
        <section className="space-y-6 animate-fade-in-up" aria-labelledby="hero-heading">
          <ClickSpark
            sparkColor="#ffffff"
            sparkSize={12}
            sparkRadius={20}
            sparkCount={8}
            duration={600}
            easing="ease-out"
            extraScale={1.2}
          >
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight cursor-pointer relative text-center text-zinc-900 dark:text-white"
            >
              Hi, I&apos;m{" "}
              <span className="interactive-name">
                <span className="letter letter-a" data-letter="A">A</span>
                <span className="letter letter-d1" data-letter="d">d</span>
                <span className="letter letter-i" data-letter="i">i</span>
                <span className="letter letter-t" data-letter="t">t</span>
                <span className="letter letter-y" data-letter="y">y</span>
                <span className="letter letter-a2" data-letter="a">a</span>
              </span>.
            </h1>
          </ClickSpark>
          
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400">
               I've been Technical Lead for the club{" "}
              <span className="text-zinc-900 dark:text-white font-medium">TekLingo</span>{" "}
              for <TimeCounter startDate={new Date("2023-08-01")} />.
            </p>
          
            
            <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
            Studying at{" "}
            <a
              href="https://www.vupune.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
                className="text-zinc-900 dark:text-white relative inline-block group"
              aria-label="Vishwakarma University website"
            >
                <span>Vishwakarma University</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-zinc-400 dark:bg-zinc-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            </a>{" "}
              | Technical Lead at{" "}
              <span className="text-zinc-900 dark:text-white font-medium">TekLingo</span>
            </p>
            
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
              I live in Pune, Maharashtra. You can keep up with me on{" "}
              <LinkPreview
                title="LinkedIn • Aditya Garud"
                subtitle="Technical Lead • TekLingo"
                href="https://www.linkedin.com/in/aditya-garud-8b633a303"
                avatar={linkedinAvatar}
              >
                <a
                  href="https://www.linkedin.com/in/aditya-garud-8b633a303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-white relative inline-block group"
                  aria-label="Connect with me on LinkedIn"
                >
                  <span>LinkedIn</span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-zinc-400 dark:bg-zinc-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                </a>
              </LinkPreview>{" "}
              or{" "}
              <LinkPreview
                title="GitHub • yashranaway"
                subtitle="Open-source projects and profile"
                href="https://github.com/yashranaway"
                avatar={githubAvatar}
              >
                <a
                  href="https://github.com/yashranaway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-white relative inline-block group"
                  aria-label="View my GitHub profile"
                >
                  <span>GitHub</span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-zinc-400 dark:bg-zinc-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                </a>
              </LinkPreview>.
            </p>
          </div>
        </section>

        

        {/* Technical Skills Section */}
        <section className="space-y-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl sm:text-3xl font-medium text-center text-zinc-900 dark:text-white">
            Technical Arsenal
         </h2>
          
          {/* Programming Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr items-stretch">
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 h-full flex flex-col gap-4">
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Programming Languages</h3>
                <div className="flex flex-wrap gap-3 items-start w-full">
                  {skillsData.languages.map((skill) => {
                    const chip = (
                      <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300">
                        <img src={skill.iconSrc || skill.iconUrl} alt="" aria-hidden className="w-5 h-5" loading="lazy" />
                        <span className="text-sm font-medium text-zinc-900 dark:text-white">{skill.name}</span>
                      </div>
                    )
                    if (skill.name === 'C') {
                      return (
                        <CodeHover key={skill.name} lang="c">
                          {chip}
                        </CodeHover>
                      )
                    }
                    const map = {
                      'C++': 'cpp',
                      'Java': 'java',
                      'Python': 'python',
                      'JavaScript': 'javascript',
                      'TypeScript': 'typescript',
                      'Rust': 'rust',
                      'Go': 'go',
                    }
                    const langKey = map[skill.name]
                    if (langKey) {
                      return (
                        <CodeHover key={skill.name} lang={langKey}>
                          {chip}
                        </CodeHover>
                      )
                    }
                    return (
                      <div key={skill.name}>
                        {chip}
                      </div>
                    )
                  })}
                </div>
            </div>

            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 h-full flex flex-col gap-4">
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Frontend Development</h3>
                <div className="flex flex-wrap gap-3 items-start">
                  {skillsData.frontend.map((skill) => {
                    const chip = (
                      <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300">
                        <img src={skill.iconSrc || skill.iconUrl} alt="" aria-hidden className="w-5 h-5" loading="lazy" />
                        <span className="text-sm font-medium text-zinc-900 dark:text-white">{skill.name}</span>
                      </div>
                    )
                    const map = {
                      'HTML5': 'html',
                      'CSS3': 'css',
                      'Bootstrap': 'bootstrap',
                      'React': 'react',
                      'Tailwind CSS': 'tailwind',
                      'Next.js': 'nextjs',
                    }
                    const langKey = map[skill.name]
                    if (langKey) {
                      return (
                        <CodeHover key={skill.name} lang={langKey}>
                          {chip}
                        </CodeHover>
                      )
                    }
                    return (
                      <div key={skill.name}>{chip}</div>
                    )
                  })}
                </div>
            </div>

            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 h-full flex flex-col gap-4">
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Backend & Databases</h3>
                <div className="flex flex-wrap gap-3 items-start">
                  {skillsData.backend.map((skill) => {
                    const chip = (
                      <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300">
                        <img src={skill.iconSrc || skill.iconUrl} alt="" aria-hidden className="w-5 h-5" loading="lazy" />
                        <span className="text-sm font-medium text-zinc-900 dark:text-white">{skill.name}</span>
                      </div>
                    )
                    const map = {
                      'Node.js': 'node',
                      'Express.js': 'express',
                      'MongoDB': 'mongodb',
                      'MySQL': 'mysql',
                      'PostgreSQL': 'postgresql',
                      'Prisma': 'prisma',
                    }
                    const langKey = map[skill.name]
                    if (langKey) {
                      return (
                        <CodeHover key={skill.name} lang={langKey}>
                          {chip}
                        </CodeHover>
                      )
                    }
                    return (
                      <div key={skill.name}>{chip}</div>
                    )
                  })}
                </div>
            </div>

            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 h-full flex flex-col gap-4">
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white">AI & Machine Learning</h3>
                <div className="flex flex-wrap gap-3 items-start">
                  {skillsData.ai.map((skill) => {
                    const chip = (
                      <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300">
                        <img src={skill.iconSrc || skill.iconUrl} alt="" aria-hidden className="w-5 h-5" loading="lazy" />
                        <span className="text-sm font-medium text-zinc-900 dark:text-white">{skill.name}</span>
                      </div>
                    )
                    const map = {
                      'TensorFlow': 'tensorflow',
                      'PyTorch': 'pytorch',
                      'OpenCV': 'opencv',
                      'scikit-learn': 'sklearn',
                      'Transformers': 'transformers',
                    }
                    const langKey = map[skill.name]
                    if (langKey) {
                      return (
                        <CodeHover key={skill.name} lang={langKey}>
                          {chip}
                        </CodeHover>
                      )
                    }
                    return (
                      <div key={skill.name}>{chip}</div>
                    )
                  })}
                </div>
            </div>

            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 h-full flex flex-col gap-4">
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white">DevOps & Tools</h3>
                <div className="flex flex-wrap gap-3 items-start">
                  {skillsData.tools.map((skill) => {
                    const chip = (
                      <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300">
                        <img src={skill.iconSrc || skill.iconUrl} alt="" aria-hidden className="w-5 h-5" loading="lazy" />
                        <span className="text-sm font-medium text-zinc-900 dark:text-white">{skill.name}</span>
                      </div>
                    )
                    const map = {
                      'Linux': 'linux',
                      'Git': 'git',
                      'VS Code': 'vscode',
                      'Docker': 'docker',
                      'Firebase': 'firebase',
                      'AWS': 'aws',
                      'Vercel': 'vercel',
                      'Apple': 'apple',
                    }
                    const langKey = map[skill.name]
                    if (langKey) {
                      return (
                        <CodeHover key={skill.name} lang={langKey}>
                          {chip}
                        </CodeHover>
                      )
                    }
                    return (
                      <div key={skill.name}>{chip}</div>
                    )
                  })}
                </div>
            </div>

            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 h-full flex flex-col gap-4">
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Specialized Skills</h3>
                <div className="flex flex-wrap gap-3 items-start">
                  {[...skillsData.hardware, ...skillsData.other].map((skill) => {
                    const chip = (
                      <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300">
                        <img src={skill.iconSrc || skill.iconUrl} alt="" aria-hidden className="w-5 h-5" loading="lazy" />
                        <span className="text-sm font-medium text-zinc-900 dark:text-white">{skill.name}</span>
                      </div>
                    )
                    const map = {
                      'Arduino': 'arduino',
                      'IoT Programming': 'iot',
                      'Discord Bot Dev': 'discord',
                      'Discord.js': 'discordjs',
                      'Discord.py': 'discordpy',
                    }
                    const langKey = map[skill.name]
                    if (langKey) {
                      return (
                        <CodeHover key={skill.name} lang={langKey}>
                          {chip}
                        </CodeHover>
                      )
                    }
                    return (
                      <div key={skill.name}>{chip}</div>
                    )
                  })}
                </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl sm:text-3xl text-center font-medium text-zinc-900 dark:text-white">
            Projects
          </h2>
          <div className="space-y-12">
            {[
                {
                  title: "Automated Chapter Segmentation for Live News Streams",
                description: "Developed an AI-powered system to automatically segment YouTube live news streams into chapters by detecting topic shifts, context changes, and advertisement breaks in real-time. Implemented real-time transcription using Whisper-based models, combined with NLP for topic segmentation, enabling precise start and end timestamps for improved content navigation, highlight extraction, and personalized content delivery.",
                },
                {
                  title: "YODHA",
                description: "Developing an image recognition model to identify images in low-light conditions for improved clarity.",
                },
                {
                  title: "Automated Traffic Management System",
                description: "ATMS (Automated Traffic Management System) is an intelligent, AI-powered traffic control platform designed to optimize vehicle flow at busy intersections. Built with real-time computer vision and dynamic signal control logic.",
                },
                {
                  title: "Stock Management Using LSTM",
                description: "Built an LSTM model to predict stock prices and manage stock levels based on historical data.",
                },
                {
                  title: "Discord Bot Management and Development",
                description: "Architected and deployed scalable Discord bots with advanced features including automated moderation, custom commands, database integration, and real-time analytics. Built using Discord.py with PostgreSQL backend, serving 10,000+ users across multiple servers.",
                },
                {
                  title: "Sidemen Among Us Stats Website",
                description: "Web-based statistics tracker for Sidemen's 'Among Us' gameplay, providing comprehensive analytics and performance metrics for one of YouTube's most popular gaming series.",
                },
                {
                  title: "Virtual Mouse Gesture Control",
                description: "Hand gesture recognition system for controlling OS functions, including volume and media playback. Built using computer vision and machine learning to enable touchless interaction with system controls through real-time hand tracking and gesture classification.",
                },
              ].map((project, index) => (
              <div key={project.title} className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b border-zinc-200 dark:border-zinc-700 last:border-b-0">
                <h3 className="text-lg font-medium text-zinc-900 dark:text-white md:text-right">{project.title}</h3>
                <div className="md:col-span-2">
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">{project.description}</p>
                </div>
                    </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-2xl sm:text-3xl font-medium text-zinc-900 dark:text-white">
            Get in touch
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Based in Pune, Maharashtra. You can reach me at{" "}
              <a
                href="mailto:garudaditya079@gmail.com"
                className="text-zinc-900 dark:text-white relative inline-block group"
              >
                <span>garudaditya079@gmail.com</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-zinc-400 dark:bg-zinc-500 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            </p>
            
            <div className="flex items-center gap-8">
              <LinkPreview
                title="LinkedIn • Aditya Garud"
                subtitle="Technical Lead • TekLingo"
                href="https://www.linkedin.com/in/aditya-garud-8b633a303"
                avatar={linkedinAvatar}
                position="bottom"
              >
                <a
                  href="https://www.linkedin.com/in/aditya-garud-8b633a303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-white relative inline-block group"
                aria-label="Connect with me on LinkedIn"
              >
                  <span>LinkedIn</span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-zinc-400 dark:bg-zinc-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                </a>
              </LinkPreview>
              
              <LinkPreview
                title="GitHub • yashranaway"
                subtitle="Open-source projects and profile"
                href="https://github.com/yashranaway"
                avatar={githubAvatar}
                position="bottom"
              >
                <a
                  href="https://github.com/yashranaway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-white relative inline-block group"
                aria-label="View my GitHub profile"
              >
                  <span>GitHub</span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-zinc-400 dark:bg-zinc-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                </a>
              </LinkPreview>
              
              <a
                href="https://coff.ee/yashranaway"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-white relative inline-block group"
                aria-label="Buy me a coffee"
              >
                <span>Buy me a coffee</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-zinc-400 dark:bg-zinc-500 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            </div>
          </div>
        </section>

        {/* Credit Section */}
        <section className="text-center py-8 border-t border-zinc-200 dark:border-zinc-700">
          <p className="text-sm text-zinc-500 dark:text-zinc-500 flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-red-400" />
            Design inspired by{" "}
            <a
              href="https://x.com/maddiesimens"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-300 relative inline-block group"
              aria-label="Maddie Simens on Twitter"
            >
              <span>Maddie Simens</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-zinc-400 dark:bg-zinc-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            </a>
          </p>
        </section>

      </main>
    </div>
    </ClickSpark>
  )
}