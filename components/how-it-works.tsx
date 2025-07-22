"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Palette, Download } from "lucide-react"

interface HowItWorksProps {
  onStartBuilding: () => void
}

export function HowItWorks({ onStartBuilding }: HowItWorksProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: 1,
      title: "Answer Simple Questions",
      description: "Chat with our AI about your experience, skills, and career goals.",
      icon: MessageCircle,
      color: "blue",
    },
    {
      number: 2,
      title: "Pick Your Favorite Design",
      description: "Choose from our collection of professional, ATS-friendly templates.",
      icon: Palette,
      color: "purple",
    },
    {
      number: 3,
      title: "Download a Beautiful Resume",
      description: "Get your professionally formatted PDF resume ready for job applications.",
      icon: Download,
      color: "green",
    },
  ]

  return (
    <section ref={sectionRef} className="bg-gray-800/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">How It Works</h2>
          <p className="text-lg text-gray-400">Three simple steps to your perfect resume</p>
        </div>

        <div className="mx-auto max-w-5xl mb-16">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`text-center transition-all duration-700 ${
                  isVisible ? `translate-y-0 opacity-100 delay-${index * 200}` : "translate-y-10 opacity-0"
                }`}
              >
                <div className="relative mb-6">
                  <div
                    className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-${step.color}-600 to-${step.color}-700 text-white font-bold text-xl shadow-lg`}
                  >
                    {step.number}
                  </div>
                  <div className={`absolute -inset-2 rounded-full bg-${step.color}-500/20 blur-xl`} />
                </div>

                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-${step.color}-500/10 text-${step.color}-400 ring-1 ring-${step.color}-500/20`}
                >
                  <step.icon className="h-6 w-6" />
                </div>

                <h3 className="mb-4 text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/templates">
            <Button
              size="lg"
              variant="outline"
              className="group border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              Choose Template
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          <Button
            onClick={onStartBuilding}
            size="lg"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Start Building
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
