"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  Sparkles,
  Languages,
  GraduationCap,
  Download,
  ArrowRight,
  Star,
  Users,
  Zap,
  Github,
  Play,
} from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: Languages,
      title: "8+ Programming Languages",
      description: "Support for Python, JavaScript, Java, C++, Rust, Go, PHP, and more",
      color: "blue",
    },
    {
      icon: GraduationCap,
      title: "Beginner-Friendly Explanations",
      description: "Choose from detailed, moderate, or simplified explanation levels",
      color: "purple",
    },
    {
      icon: Download,
      title: "Downloadable Output",
      description: "Export your commented code in multiple formats instantly",
      color: "green",
    },
  ]

  const stats = [
    { icon: Users, label: "Developers", value: "50,000+" },
    { icon: Code, label: "Files Processed", value: "2M+" },
    { icon: Star, label: "Rating", value: "4.9/5" },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Code Commenter AI</span>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Link href="/comment">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Try It Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div
            className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400 ring-1 ring-blue-500/20">
              <Sparkles className="mr-2 h-4 w-4" />
              AI-Powered Code Documentation
            </div>

            <h1 className="mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl">
              Code Commenter AI
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Auto-generate intelligent comments
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
              Paste or upload code, choose explanation level, and instantly get AI-powered comments that make your code
              more readable and maintainable.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/comment">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Try It Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 px-8 py-4 transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-center">
                    <stat.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Code Commenter AI?</h2>
            <p className="text-lg text-gray-400">
              Powerful features designed to make your code documentation effortless
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`group border-gray-700 bg-gray-800/50 backdrop-blur-sm transition-all duration-700 hover:border-${feature.color}-500/50 hover:bg-gray-800/80 hover:scale-105`}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-${feature.color}-500/10 text-${feature.color}-400 ring-1 ring-${feature.color}-500/20 group-hover:bg-${feature.color}-500/20 transition-all duration-300`}
                  >
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-800/30 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">How It Works</h2>
            <p className="text-lg text-gray-400">Three simple steps to better code documentation</p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: 1,
                  title: "Upload or Paste Code",
                  description: "Drag & drop files or paste your code directly into the editor",
                  color: "blue",
                },
                {
                  step: 2,
                  title: "Choose Settings",
                  description: "Select programming language and explanation level",
                  color: "purple",
                },
                {
                  step: 3,
                  title: "Get Smart Comments",
                  description: "Download your professionally commented code instantly",
                  color: "green",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div
                      className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-${item.color}-600 to-${item.color}-700 text-white font-bold text-xl shadow-lg`}
                    >
                      {item.step}
                    </div>
                    <div className={`absolute -inset-2 rounded-full bg-${item.color}-500/20 blur-xl`} />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/comment">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-medium"
              >
                Start Commenting Code
                <Zap className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Code Commenter AI</span>
              </div>
              <p className="mb-4 max-w-md text-gray-400">
                Transform your code with intelligent AI-powered comments. Make your code more readable and maintainable.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Multi-language Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Smart Comments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Code Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Export Options
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Code Commenter AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
