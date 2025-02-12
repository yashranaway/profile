"use client"

import { Moon, Sun, Html5, Css3, Cplusplus, Java, Javascript, PuzzlePiece } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"
import TimeCounter from "@/components/TimeCounter"
import {
  Code,
  Paintbrush,
  FileCode,
  FileType,
  Coffee,
  Users,
  Brain,
} from "lucide-react"

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
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto">
            Dynamic Event Manager & Technical Team Member at TekLingo, with expertise in aligning event strategies with
            technological advancements.
          </p>
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
        </section>

        {/* Skills Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">Technical Skills</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { name: "HTML", icon: <FileCode className="w-5 h-5" /> },
              { name: "CSS", icon: <Paintbrush className="w-5 h-5" /> },
              { name: "C", icon: <Code className="w-5 h-5" /> },
              { name: "C++", icon: <Code className="w-5 h-5" /> },
              { name: "Python", icon: <FileType className="w-5 h-5" /> },
              { name: "Java", icon: <Coffee className="w-5 h-5" /> },
              { name: "JavaScript", icon: <Javascript className="w-5 h-5" /> },
              { name: "Teamwork", icon: <Users className="w-5 h-5" /> },
              { name: "Analytical Thinking", icon: <Brain className="w-5 h-5" /> },
              { name: "Problem-Solving", icon: <Puzzle className="w-5 h-5" /> },
            ].map((skill) => (
              <Badge key={skill.name} variant="secondary" className="text-sm flex items-center px-3 py-1">
                {skill.icon}
                <span className="ml-2">{skill.name}</span>
              </Badge>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">PREVIOUSLY</h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-white md:text-right">TekLingo, VU</h3>
              <div className="md:col-span-2 md:text-left">
                <p className="text-lg text-zinc-400">Event Manager & Technical Team Member</p>
                <p className="text-sm text-zinc-500">Present</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <h3 className="text-xl font-medium text-zinc-900 dark:text-white md:text-right">Visionary Club</h3>
              <div className="md:col-span-2 md:text-left">
                <p className="text-lg text-zinc-400">Technical Team Member</p>
                <p className="text-sm text-zinc-500">2023-Present</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">Featured Projects</h2>
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
                  "Designed a dynamic traffic signal system using RFID sensors for real-time vehicle classification.",
              },
              {
                title: "Stock Management Using LSTM",
                description:
                  "Built an LSTM model to predict stock prices and manage stock levels based on historical data.",
              },
              {
                title: "Data Analysis on Movie Databases",
                description:
                  "Performed exploratory data analysis on movie ratings and trends to identify success factors.",
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
