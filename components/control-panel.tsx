"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Loader2 } from "lucide-react"

interface ControlPanelProps {
  language: string
  commentLevel: string
  onLanguageChange: (value: string) => void
  onCommentLevelChange: (value: string) => void
  onCommentCode: () => void
  isProcessing: boolean
  hasCode: boolean
}

const languages = [
  { value: "python", label: "Python", icon: "🐍" },
  { value: "javascript", label: "JavaScript", icon: "🟨" },
  { value: "java", label: "Java", icon: "☕" },
  { value: "cpp", label: "C++", icon: "⚡" },
  { value: "csharp", label: "C#", icon: "🔷" },
  { value: "go", label: "Go", icon: "🐹" },
  { value: "rust", label: "Rust", icon: "🦀" },
  { value: "php", label: "PHP", icon: "🐘" },
]

const commentLevels = [
  {
    value: "line-by-line",
    label: "Line-by-line",
    description: "Comment every significant line of code",
    badge: "Detailed",
  },
  {
    value: "function-level",
    label: "Function-level",
    description: "Comment functions and major code blocks",
    badge: "Balanced",
  },
  {
    value: "beginner-explanation",
    label: "Beginner Explanation",
    description: "High-level explanation for learning",
    badge: "Simple",
  },
]

export function ControlPanel({
  language,
  commentLevel,
  onLanguageChange,
  onCommentLevelChange,
  onCommentCode,
  isProcessing,
  hasCode,
}: ControlPanelProps) {
  return (
    <Card className="mb-6 border-gray-700 bg-gray-800/50">
      <CardContent className="p-6">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Language Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Programming Language</label>
            <Select value={language} onValueChange={onLanguageChange}>
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600">
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value} className="text-white hover:bg-gray-600">
                    <span className="flex items-center gap-2">
                      <span>{lang.icon}</span>
                      {lang.label}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Comment Level Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Comment Level</label>
            <Select value={commentLevel} onValueChange={onCommentLevelChange}>
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600">
                {commentLevels.map((level) => (
                  <SelectItem key={level.value} value={level.value} className="text-white hover:bg-gray-600">
                    <div className="flex items-center justify-between w-full">
                      <span>{level.label}</span>
                      <Badge variant="secondary" className="ml-2 bg-blue-600 text-white text-xs">
                        {level.badge}
                      </Badge>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">{commentLevels.find((l) => l.value === commentLevel)?.description}</p>
          </div>

          {/* Action Button */}
          <div className="flex flex-col justify-end">
            <Button
              onClick={onCommentCode}
              disabled={!hasCode || isProcessing}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 h-10"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Comment It
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
