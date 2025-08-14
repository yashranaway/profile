"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { Sun, Moon, Heart } from "lucide-react"
import { useState, useEffect } from "react"
import LoadingScreen from "@/components/LoadingScreen"
import { SkillsSectionSkeleton, ProjectCardSkeleton } from "@/components/SkeletonCard"
import TimeCounter from "@/components/TimeCounter"
import {
  SiHtml5, SiCss3, SiC, SiCplusplus, SiPython, SiJavascript, SiReact, SiRust,
  SiTypescript, SiGo, SiBootstrap, SiNodedotjs, SiExpress,
  SiTensorflow, SiPytorch, SiOpencv, SiMongodb, SiMysql, SiPostgresql, SiOracle,
  SiHeroku, SiDocker, SiLinux, SiGit,
  SiArduino, SiRaspberrypi, SiDiscord
} from "react-icons/si"
import { FaJava, FaAws, FaFire, FaCloud } from "react-icons/fa"

// Skill Card Component
function SkillCard({ skill, specialized = false }) {
  return (
    <div
      className={`group relative flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300 cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black ${specialized ? 'md:col-span-1' : ''
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
      <div
        className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg transition-all duration-300 group-hover:scale-110"
        style={{
          backgroundColor: `${skill.color}15`,
        }}
        aria-hidden="true"
      >
        <div
          style={{
            color: skill.color === '#000000' ? '#ffffff' : skill.color
          }}
        >
          {skill.icon}
        </div>
      </div>
      <span className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-white group-hover:text-white transition-colors duration-300 flex-1">
        {skill.name}
      </span>


    </div>
  )
}

export default function Page() {
  const { theme, setTheme } = useTheme()
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])



  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 transition-all duration-500 ease-in-out dark:bg-black dark:text-zinc-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-8 flex justify-center items-center animate-fade-in">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all duration-500 ease-in-out dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all duration-500 ease-in-out dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-20 lg:space-y-24 text-center" role="main">
        {/* Hero Section */}
        <section className="space-y-6 animate-fade-in-up" aria-labelledby="hero-heading">
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight"
          >
            Hi, I&apos;m Aditya.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto px-4">
            Technical Lead at TekLingo
          </p>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto px-4">
            Studying at{" "}
            <a
              href="https://www.vupune.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-all duration-300"
              aria-label="Vishwakarma University website"
            >
              Vishwakarma University
            </a>{" "}
            for <TimeCounter startDate={new Date("2023-08-01")} />
          </p>
          <a
            href="https://coff.ee/yashranaway"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-zinc-50 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black"
            aria-label="Buy me a coffee on Ko-fi"
          >
            <Heart className="h-5 w-5 text-red-500" aria-hidden="true" />
            <span>Buy me a coffee</span>
          </a>
        </section>

        {/* Skills Section */}
        <section className="space-y-8 sm:space-y-12 relative" aria-labelledby="skills-heading">
          {!showContent ? (
            <SkillsSectionSkeleton />
          ) : (
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>

              <div className="relative mb-12">
                <h2
                  id="skills-heading"
                  className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white text-center mb-6"
                >
                  Technical Arsenal
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 text-center max-w-2xl mx-auto px-4">
                  A comprehensive toolkit spanning multiple domains - from low-level systems programming to cloud-native applications and AI/ML solutions.
                </p>
              </div>

              {/* Top Row - Programming & Frameworks */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                {/* Programming Languages */}
                <div className="space-y-6 relative">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-white dark:bg-white rounded-full"></div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Programming Languages</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {[
                      { name: "C", icon: <SiC className="w-6 h-6" />, color: "#A8B9CC" },
                      { name: "C++", icon: <SiCplusplus className="w-6 h-6" />, color: "#00599C" },
                      { name: "Java", icon: <FaJava className="w-6 h-6" />, color: "#ED8B00" },
                      { name: "Python", icon: <SiPython className="w-6 h-6" />, color: "#3776AB" },
                      { name: "JavaScript", icon: <SiJavascript className="w-6 h-6" />, color: "#F7DF1E" },
                      { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" />, color: "#3178C6" },
                      { name: "Rust", icon: <SiRust className="w-6 h-6" />, color: "#CE422B" },
                      { name: "Go", icon: <SiGo className="w-6 h-6" />, color: "#00ADD8" },
                    ].map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>

                {/* Frameworks & Libraries */}
                <div className="space-y-6 relative">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-white dark:bg-white rounded-full"></div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Frameworks & Libraries</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {[
                      { name: "HTML5", icon: <SiHtml5 className="w-6 h-6" />, color: "#E34F26" },
                      { name: "CSS3", icon: <SiCss3 className="w-6 h-6" />, color: "#1572B6" },
                      { name: "Bootstrap", icon: <SiBootstrap className="w-6 h-6" />, color: "#7952B3" },
                      { name: "React", icon: <SiReact className="w-6 h-6" />, color: "#61DAFB" },
                      { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6" />, color: "#339933" },
                      { name: "Express.js", icon: <SiExpress className="w-6 h-6" />, color: "#68CC00" },
                      { name: "TensorFlow", icon: <SiTensorflow className="w-6 h-6" />, color: "#FF6F00" },
                      { name: "PyTorch", icon: <SiPytorch className="w-6 h-6" />, color: "#EE4C2C" },
                      { name: "OpenCV", icon: <SiOpencv className="w-6 h-6" />, color: "#5C3EE8" },
                      { name: "scikit-learn", icon: <SiPython className="w-6 h-6" />, color: "#F7931E" },
                    ].map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Middle Row - Databases & Cloud */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
                {/* Databases */}
                <div className="space-y-6 relative">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-white dark:bg-white rounded-full"></div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Databases</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                    {[
                      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" />, color: "#47A248" },
                      { name: "MySQL", icon: <SiMysql className="w-6 h-6" />, color: "#4479A1" },
                      { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6" />, color: "#336791" },
                    ].map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>

                {/* Cloud & Deployment */}
                <div className="space-y-6 relative">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-white dark:bg-white rounded-full"></div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Cloud & Deployment</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {[
                      { name: "Firebase", icon: <FaFire className="w-6 h-6" />, color: "#FFCA28" },
                      { name: "Heroku", icon: <SiHeroku className="w-6 h-6" />, color: "#430098" },
                      { name: "Docker", icon: <SiDocker className="w-6 h-6" />, color: "#2496ED" },
                      { name: "AWS", icon: <FaAws className="w-6 h-6" />, color: "#FF9900" },
                      { name: "Google Cloud", icon: <FaCloud className="w-6 h-6" />, color: "#4285F4" },
                      { name: "Oracle Cloud", icon: <SiOracle className="w-6 h-6" />, color: "#F80000" },
                    ].map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Row - Tools & Specialized */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Tools & Platforms */}
                <div className="space-y-6 relative">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-white dark:bg-white rounded-full"></div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Tools & Platforms</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                    {[
                      { name: "Linux", icon: <SiLinux className="w-6 h-6" />, color: "#FCC624" },
                      { name: "Git", icon: <SiGit className="w-6 h-6" />, color: "#F05032" },
                      { name: "Arduino", icon: <SiArduino className="w-6 h-6" />, color: "#00979D" },
                      { name: "Raspberry Pi", icon: <SiRaspberrypi className="w-6 h-6" />, color: "#A22846" },
                    ].map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>

                {/* Specialized Skills */}
                <div className="space-y-6 relative">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-white dark:bg-white rounded-full"></div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Specialized Skills</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                    {[
                      { name: "Discord Bot Dev", icon: <SiDiscord className="w-6 h-6" />, color: "#5865F2" },
                      { name: "IoT Programming", icon: <SiArduino className="w-6 h-6" />, color: "#00979D" },
                    ].map((skill) => (
                      <SkillCard key={skill.name} skill={skill} specialized={true} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Experience Section */}
        <section className="space-y-6 sm:space-y-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }} aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white">
            PREVIOUSLY
          </h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-medium text-zinc-900 dark:text-white md:text-right">
                TekLingo Club
              </h3>
              <div className="md:col-span-2 md:text-left">
                <p className="text-base sm:text-lg text-zinc-400">Technical Lead</p>
                <p className="text-sm text-zinc-500">Present</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-medium text-zinc-900 dark:text-white md:text-right">
                Visionary Club
              </h3>
              <div className="md:col-span-2 md:text-left">
                <p className="text-base sm:text-lg text-zinc-400">Technical Team Member</p>
                <p className="text-sm text-zinc-500">2023-2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-6 sm:space-y-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }} aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {!showContent ? (
              Array.from({ length: 7 }).map((_, i) => (
                <ProjectCardSkeleton key={i} />
              ))
            ) : (
              [
                {
                  title: "Automated Chapter Segmentation for Live News Streams",
                  description:
                    "Developed an AI-powered system to automatically segment YouTube live news streams into chapters by detecting topic shifts, context changes, and advertisement breaks in real-time. Implemented real-time transcription using Whisper-based models, combined with NLP for topic segmentation, enabling precise start and end timestamps for improved content navigation, highlight extraction, and personalized content delivery.",
                },
                {
                  title: "YODHA",
                  description:
                    "Developing an image recognition model to identify images in low-light conditions for improved clarity.",
                },
                {
                  title: "Automated Traffic Management System",
                  description:
                    "ATMS (Automated Traffic Management System) is an intelligent, AI-powered traffic control platform designed to optimize vehicle flow at busy intersections. Built with real-time computer vision and dynamic signal control logic.",
                },
                {
                  title: "Stock Management Using LSTM",
                  description:
                    "Built an LSTM model to predict stock prices and manage stock levels based on historical data.",
                },
                {
                  title: "Discord Bot Management and Development",
                  description:
                    "Architected and deployed scalable Discord bots with advanced features including automated moderation, custom commands, database integration, and real-time analytics. Built using Discord.py with PostgreSQL backend, serving 10,000+ users across multiple servers.",
                },
                {
                  title: "Sidemen Among Us Stats Website",
                  description:
                    "Web-based statistics tracker for Sidemen's 'Among Us' gameplay, providing comprehensive analytics and performance metrics for one of YouTube's most popular gaming series.",
                },
                {
                  title: "Virtual Mouse Gesture Control",
                  description:
                    "Hand gesture recognition system for controlling OS functions, including volume and media playback. Built using computer vision and machine learning to enable touchless interaction with system controls through real-time hand tracking and gesture classification.",
                },
              ].map((project, index) => (
                <Card
                  key={project.title}
                  className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-4 sm:space-y-6 animate-fade-in-up" style={{ animationDelay: '1s' }} aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white">
            Get in touch
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed px-4 max-w-2xl mx-auto">
            Based in Pune, Maharashtra. Connect with me on{" "}
            <Link
              href="https://www.linkedin.com/in/aditya-garud-8b633a303"
              className="text-zinc-900 dark:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-all duration-300"
              aria-label="Connect with me on LinkedIn"
            >
              LinkedIn
            </Link>{" "}
            or{" "}
            <Link
              href="https://github.com/yashranaway"
              className="text-zinc-900 dark:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-all duration-300"
              aria-label="View my GitHub profile"
            >
              GitHub
            </Link>{" "}
            or email me at{" "}
            <a
              href="mailto:garudaditya079@gmail.com"
              className="text-zinc-900 dark:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-all duration-300"
              aria-label="Send me an email"
            >
              garudaditya079@gmail.com
            </a>
          </p>
        </section>
      </main>
    </div>
  )
}