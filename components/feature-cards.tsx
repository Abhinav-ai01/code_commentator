"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, FileText, Palette } from "lucide-react"

export function FeatureCards() {
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

  const features = [
    {
      icon: Brain,
      title: "🧠 AI-Powered Chat",
      description:
        "Our intelligent chatbot asks the right questions and helps you articulate your experience professionally.",
      color: "blue",
      delay: "delay-0",
    },
    {
      icon: FileText,
      title: "📄 Auto-Generated PDF Resume",
      description: "Get a perfectly formatted, ATS-friendly PDF resume that's ready to send to employers immediately.",
      color: "purple",
      delay: "delay-200",
    },
    {
      icon: Palette,
      title: "🎨 Choose Your Own Template",
      description: "Select from professionally designed templates that match your industry and personal style.",
      color: "green",
      delay: "delay-400",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Our AI Resume Builder?</h2>
          <p className="text-lg text-gray-400">
            Our intelligent chatbot makes resume creation effortless and professional
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group border-gray-700 bg-gray-800/50 backdrop-blur-sm transition-all duration-700 hover:border-${feature.color}-500/50 hover:bg-gray-800/80 hover:scale-105 ${
                isVisible ? `translate-y-0 opacity-100 ${feature.delay}` : "translate-y-10 opacity-0"
              }`}
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
  )
}
