"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

interface TemplateSelectorProps {
  selectedTemplate: string
  onTemplateSelect: (template: string) => void
}

const templates = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean and contemporary design",
    color: "from-blue-500 to-cyan-500",
    popular: true,
  },
  {
    id: "professional",
    name: "Professional",
    description: "Traditional corporate style",
    color: "from-gray-600 to-gray-800",
    popular: false,
  },
  {
    id: "creative",
    name: "Creative",
    description: "Bold and artistic layout",
    color: "from-purple-500 to-pink-500",
    popular: false,
  },
]

export function TemplateSelector({ selectedTemplate, onTemplateSelect }: TemplateSelectorProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Choose Template</h3>
        <Badge variant="secondary" className="bg-gray-700 text-gray-300">
          3 available
        </Badge>
      </div>

      <div className="space-y-3">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedTemplate === template.id
                ? "border-blue-500 bg-gray-800/80 ring-2 ring-blue-500/20"
                : "border-gray-700 bg-gray-800/30 hover:border-gray-600 hover:bg-gray-800/50"
            }`}
            onClick={() => onTemplateSelect(template.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-white">{template.name}</h4>
                    {template.popular && (
                      <Badge variant="secondary" className="bg-blue-600 text-white text-xs">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-gray-400">{template.description}</p>
                </div>
                {selectedTemplate === template.id && <Check className="h-5 w-5 text-blue-400" />}
              </div>

              {/* Template Preview */}
              <div className="mt-3 aspect-[3/4] overflow-hidden rounded-lg border border-gray-600">
                <div className={`h-full w-full bg-gradient-to-br ${template.color} p-3`}>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 rounded bg-white/80" />
                    <div className="h-1 w-1/2 rounded bg-white/60" />
                    <div className="mt-3 space-y-1">
                      <div className="h-1 w-full rounded bg-white/40" />
                      <div className="h-1 w-5/6 rounded bg-white/40" />
                      <div className="h-1 w-4/6 rounded bg-white/40" />
                    </div>
                    <div className="mt-3 space-y-1">
                      <div className="h-1 w-2/3 rounded bg-white/40" />
                      <div className="h-1 w-3/4 rounded bg-white/40" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-lg bg-gray-800/50 p-3 text-center">
        <p className="text-xs text-gray-400">More templates coming soon</p>
      </div>
    </div>
  )
}
