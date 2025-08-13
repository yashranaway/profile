"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { Sun, Moon, Coffee } from "lucide-react"
import TimeCounter from "@/components/TimeCounter"
import {
  SiHtml5, SiCss3, SiC, SiCplusplus, SiPython, SiJavascript, SiReact, SiRust,
  SiTypescript, SiGo, SiBootstrap, SiFlutter, SiNodedotjs, SiExpress,
  SiTensorflow, SiPytorch, SiOpencv, SiMongodb, SiMysql, SiPostgresql,
  SiFirebase, SiHeroku, SiDocker, SiGooglecloud, SiLinux, SiGit,
  SiArduino, SiRaspberrypi, SiDiscord
} from "react-icons/si"
import { FaJava, FaAws } from "react-icons/fa"

// Skill Card Component
function SkillCard({ skill, specialized = false }) {
  return (
    <div
      className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 dark:bg-white/10 backdrop-blur-sm border border-white/10 dark:border-white/20 hover:bg-white/10 dark:hover:bg-white/20 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-white/10 hover:-translate-y-1 ${specialized ? 'md:col-span-1' : ''
        }`}
      style={{
        boxShadow: `0 4px 20px ${skill.color}15, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
      }}
    >
      <div
        className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
        style={{
          backgroundColor: `${skill.color}20`,
          boxShadow: `0 2px 8px ${skill.color}30`,
        }}
      >
        <div
          style={{
            filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))',
            color: skill.color === '#000000' ? '#ffffff' : skill.color
          }}
        >
          {skill.icon}
        </div>
      </div>
      <span className="text-sm font-medium text-zinc-900 dark:text-white group-hover:text-white transition-colors duration-300 flex-1">
        {skill.name}
      </span>

      {/* Animated border */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2"
        style={{
          borderColor: `${skill.color}40`,
          background: `linear-gradient(135deg, ${skill.color}10, transparent 50%)`,
        }}
      />

      {/* Glow effect */}
      <div
        className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none blur-sm"
        style={{
          background: `linear-gradient(135deg, ${skill.color}, transparent)`,
        }}
      />
    </div>
  )
}

export default function Page() {
  const { theme, setTheme } = useTheme()



  return (
    <div className="min-h-screen bg-white text-zinc-900 transition-colors duration-300 dark:bg-black dark:text-zinc-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-8 flex justify-center items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full"
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-24 text-center">
        {/* Hero Section */}
        <section className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white">Hi, I&apos;m Aditya.</h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">Technical Lead at TekLingo</p>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto">
            Currently in{" "}
            <a
              href="https://www.vupune.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-white hover:underline"
            >
              Vishwakarma University
            </a>{" "}
            for <TimeCounter startDate={new Date("2023-08-01")} />
          </p>
          <a
            href="https://coff.ee/yashranaway"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-900 dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
          >
            <Coffee className="h-5 w-5" />
            <span>Buy me a coffee</span>
          </a>
        </section>

        {/* Skills Section */}
        <section className="space-y-12 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-3xl"></div>

          <div className="relative">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white text-center mb-4">Technical Arsenal</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-center max-w-2xl mx-auto">
              A comprehensive toolkit spanning multiple domains - from low-level systems programming to cloud-native applications and AI/ML solutions.
            </p>
          </div>

          {/* Programming Languages */}
          <div className="space-y-6 relative">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full shadow-lg shadow-blue-500/30"></div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Programming Languages</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
              <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-teal-600 rounded-full shadow-lg shadow-green-500/30"></div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Frameworks & Libraries</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-green-500/30 to-transparent"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "HTML5", icon: <SiHtml5 className="w-6 h-6" />, color: "#E34F26" },
                { name: "CSS3", icon: <SiCss3 className="w-6 h-6" />, color: "#1572B6" },
                { name: "Bootstrap", icon: <SiBootstrap className="w-6 h-6" />, color: "#7952B3" },
                { name: "React", icon: <SiReact className="w-6 h-6" />, color: "#61DAFB" },
                { name: "Flutter", icon: <SiFlutter className="w-6 h-6" />, color: "#02569B" },
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

          {/* Databases */}
          <div className="space-y-6 relative">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full shadow-lg shadow-orange-500/30"></div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Databases</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-orange-500/30 to-transparent"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full shadow-lg shadow-purple-500/30"></div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Cloud & Deployment</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-purple-500/30 to-transparent"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "Firebase", icon: <SiFirebase className="w-6 h-6" />, color: "#FFCA28" },
                { name: "Heroku", icon: <SiHeroku className="w-6 h-6" />, color: "#430098" },
                { name: "Docker", icon: <SiDocker className="w-6 h-6" />, color: "#2496ED" },
                { name: "AWS", icon: <FaAws className="w-6 h-6" />, color: "#FF9900" },
                { name: "GCP", icon: <SiGooglecloud className="w-6 h-6" />, color: "#4285F4" },
              ].map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="space-y-6 relative">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-yellow-500 to-orange-600 rounded-full shadow-lg shadow-yellow-500/30"></div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Tools & Platforms</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-yellow-500/30 to-transparent"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-blue-600 rounded-full shadow-lg shadow-indigo-500/30"></div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Specialized Skills</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Discord Bot Dev", icon: <SiDiscord className="w-6 h-6" />, color: "#5865F2" },
                { name: "IoT Programming", icon: <SiArduino className="w-6 h-6" />, color: "#00979D" },
              ].map((skill) => (
                <SkillCard key={skill.name} skill={skill} specialized={true} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">PREVIOUSLY</h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-white md:text-right">TekLingo, VU</h3>
              <div className="md:col-span-2 md:text-left">
                <p className="text-lg text-zinc-400">Technical Lead</p>
                <p className="text-sm text-zinc-500">Present</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-white md:text-right">Visionary Club</h3>
              <div className="md:col-span-2 md:text-left">
                <p className="text-lg text-zinc-400">Technical Team Member</p>
                <p className="text-sm text-zinc-500">2023-2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
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
                  "Architected and deployed scalable Discord bots with advanced features including automated moderation, custom commands, database integration, and real-time analytics. Built using Discord.py",
              },
            ].map((project) => (
              <Card key={project.title} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-400">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">Get in touch</h2>
          <p className="text-zinc-400">
            Based in Pune, Maharashtra. Connect with me on{" "}
            <Link
              href="https://www.linkedin.com/in/aditya-garud-8b633a303"
              className="text-zinc-900 dark:text-white hover:underline"
            >
              LinkedIn
            </Link>{" "}
            or{" "}
            <Link href="https://github.com/yashranaway" className="text-zinc-900 dark:text-white hover:underline">
              GitHub
            </Link>{" "}
            or email me at{" "}
            <a href="mailto:garudaditya079@gmail.com" className="text-zinc-900 dark:text-white hover:underline">
              garudaditya079@gmail.com
            </a>
          </p>
        </section>
      </main>
    </div>
  )
}