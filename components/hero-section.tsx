"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles, Star, Users, Zap } from "lucide-react"

interface HeroSectionProps {
  onStartBuilding: () => void
}

export function HeroSection({ onStartBuilding }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
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
            AI-Powered Resume Builder
          </div>

          <h1 className="mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl">
            Build Your Resume
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              in Minutes
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            Talk to our AI chatbot, and we'll create a professional resume for you automatically.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              onClick={onStartBuilding}
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Start Building
              <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 px-8 py-4 transition-all duration-300 hover:scale-105"
            >
              View Templates
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>10,000+ resumes created</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span>Average 3 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
