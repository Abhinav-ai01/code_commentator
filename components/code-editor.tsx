"use client"

import type React from "react"

import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Upload, FileText } from "lucide-react"

interface CodeEditorProps {
  title: string
  code: string
  language: string
  onChange: (code: string) => void
  placeholder?: string
}

export function CodeEditor({ title, code, language, onChange, placeholder }: CodeEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        onChange(content)
      }
      reader.readAsText(file)
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <Card className="border-gray-700 bg-gray-800/50 h-fit">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {title}
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={handleUploadClick}
            className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload File
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative">
          <Textarea
            value={code}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="min-h-[400px] resize-none border-0 bg-gray-900 font-mono text-sm text-gray-100 placeholder:text-gray-500 focus:ring-0 rounded-none"
            style={{
              fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
              lineHeight: "1.5",
            }}
          />
          <input
            ref={fileInputRef}
            type="file"
            accept=".py,.js,.java,.cpp,.c,.cs,.go,.rs,.php,.txt"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        {/* Language indicator */}
        <div className="border-t border-gray-700 bg-gray-800 px-4 py-2">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Language: {language.toUpperCase()}</span>
            <span>{code.split("\n").length} lines</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
