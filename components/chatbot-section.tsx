"use client"

import { useState, useEffect } from "react"
import { ChatInterface } from "@/components/chat-interface"
import { TemplateSelector } from "@/components/template-selector"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function ChatbotSection() {
  const [selectedTemplate, setSelectedTemplate] = useState("modern")
  const [isDataComplete, setIsDataComplete] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    // Check if user came from template selection
    const storedTemplate = localStorage.getItem("selectedTemplate")
    if (storedTemplate) {
      setSelectedTemplate(storedTemplate)
      localStorage.removeItem("selectedTemplate")
    }
  }, [])

  const handleGenerateResume = async () => {
    setIsGenerating(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsGenerating(false)
    console.log("Generating resume with template:", selectedTemplate)
  }

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Start Building Your Resume</h2>
          <p className="text-lg text-gray-400">
            Choose a template and chat with our AI to create your professional resume
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Template Selector */}
            <div className="lg:col-span-1">
              <TemplateSelector selectedTemplate={selectedTemplate} onTemplateSelect={setSelectedTemplate} />
            </div>

            {/* Chat Interface */}
            <div className="lg:col-span-3">
              <div className="flex flex-col">
                <div className="mb-6 overflow-hidden rounded-2xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm">
                  <ChatInterface onDataComplete={setIsDataComplete} />
                </div>

                {/* Generate Resume Button */}
                <div className="flex justify-center">
                  <Button
                    onClick={handleGenerateResume}
                    disabled={!isDataComplete || isGenerating}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 disabled:opacity-50 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    {isGenerating ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Generate Resume
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
