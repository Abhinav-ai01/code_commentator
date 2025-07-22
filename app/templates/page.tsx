"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check, ArrowLeft, Sparkles } from "lucide-react"

const templates = [
  {
    id: "modern",
    name: "Modern Professional",
    description: "Clean, contemporary design perfect for tech and creative roles",
    color: "from-blue-500 to-cyan-500",
    popular: true,
    category: "Professional",
  },
  {
    id: "executive",
    name: "Executive",
    description: "Sophisticated layout ideal for senior management positions",
    color: "from-gray-600 to-gray-800",
    popular: false,
    category: "Corporate",
  },
  {
    id: "creative",
    name: "Creative Designer",
    description: "Bold, artistic layout for designers and creative professionals",
    color: "from-purple-500 to-pink-500",
    popular: true,
    category: "Creative",
  },
  {
    id: "minimal",
    name: "Minimal Clean",
    description: "Simple, elegant design that works for any industry",
    color: "from-green-500 to-teal-500",
    popular: false,
    category: "Minimal",
  },
]

export default function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("")
  const router = useRouter()

  const handleStartBuilding = () => {
    if (selectedTemplate) {
      // Store selected template in localStorage or pass as query param
      localStorage.setItem("selectedTemplate", selectedTemplate)
      router.push("/?start=true")
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => router.back()} className="mb-8 text-gray-400 hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Choose Your Template
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Select a professional template that matches your style and industry. All templates are ATS-friendly and
            optimized for modern hiring practices.
          </p>
        </div>

        {/* Template Grid */}
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {templates.map((template) => (
            <Card
              key={template.id}
              className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedTemplate === template.id
                  ? "border-blue-500 bg-gray-800/80 ring-2 ring-blue-500/20"
                  : "border-gray-700 bg-gray-800/30 hover:border-gray-600 hover:bg-gray-800/50"
              }`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <CardContent className="p-6">
                {/* Template Preview */}
                <div className="mb-4 aspect-[3/4] overflow-hidden rounded-lg border border-gray-600">
                  <div className={`h-full w-full bg-gradient-to-br ${template.color} p-4`}>
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="space-y-1">
                        <div className="h-3 w-3/4 rounded bg-white/90" />
                        <div className="h-2 w-1/2 rounded bg-white/70" />
                      </div>

                      {/* Contact Info */}
                      <div className="space-y-1">
                        <div className="h-1 w-full rounded bg-white/50" />
                        <div className="h-1 w-4/5 rounded bg-white/50" />
                      </div>

                      {/* Sections */}
                      <div className="space-y-2">
                        <div className="h-2 w-2/3 rounded bg-white/70" />
                        <div className="space-y-1">
                          <div className="h-1 w-full rounded bg-white/40" />
                          <div className="h-1 w-5/6 rounded bg-white/40" />
                          <div className="h-1 w-4/6 rounded bg-white/40" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="h-2 w-1/2 rounded bg-white/70" />
                        <div className="space-y-1">
                          <div className="h-1 w-4/5 rounded bg-white/40" />
                          <div className="h-1 w-3/4 rounded bg-white/40" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Template Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white">{template.name}</h3>
                      {template.popular && <Badge className="bg-blue-600 text-white text-xs">Popular</Badge>}
                    </div>
                    {selectedTemplate === template.id && <Check className="h-5 w-5 text-blue-400" />}
                  </div>

                  <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                    {template.category}
                  </Badge>

                  <p className="text-sm text-gray-400 leading-relaxed">{template.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Start Building Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleStartBuilding}
            disabled={!selectedTemplate}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 disabled:opacity-50 px-8 py-4 text-lg font-medium"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Start Building with Selected Template
          </Button>
        </div>

        {!selectedTemplate && (
          <p className="mt-4 text-center text-sm text-gray-500">Please select a template to continue</p>
        )}
      </main>

      <Footer />
    </div>
  )
}
