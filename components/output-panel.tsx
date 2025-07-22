"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Download, CheckCircle, Loader2, FileOutput } from "lucide-react"

interface OutputPanelProps {
  code: string
  language: string
  isProcessing: boolean
}

export function OutputPanel({ code, language, isProcessing }: OutputPanelProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (code) {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleDownload = () => {
    if (code) {
      const extension = getFileExtension(language)
      const blob = new Blob([code], { type: "text/plain" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `commented_code.${extension}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
  }

  const getFileExtension = (lang: string) => {
    const extensions: { [key: string]: string } = {
      python: "py",
      javascript: "js",
      java: "java",
      cpp: "cpp",
      csharp: "cs",
      go: "go",
      rust: "rs",
      php: "php",
    }
    return extensions[lang] || "txt"
  }

  return (
    <Card className="border-gray-700 bg-gray-800/50 h-fit">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-white flex items-center gap-2">
            <FileOutput className="h-5 w-5" />
            Commented Code
          </CardTitle>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              disabled={!code || isProcessing}
              className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
            >
              {copied ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4 text-green-400" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </>
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              disabled={!code || isProcessing}
              className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative">
          {isProcessing ? (
            <div className="flex items-center justify-center min-h-[400px] bg-gray-900">
              <div className="text-center">
                <Loader2 className="h-8 w-8 animate-spin text-blue-400 mx-auto mb-4" />
                <p className="text-gray-400">AI is analyzing and commenting your code...</p>
              </div>
            </div>
          ) : code ? (
            <pre className="min-h-[400px] overflow-auto bg-gray-900 p-4 text-sm text-gray-100 font-mono whitespace-pre-wrap">
              <code>{code}</code>
            </pre>
          ) : (
            <div className="flex items-center justify-center min-h-[400px] bg-gray-900">
              <div className="text-center text-gray-500">
                <FileOutput className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Your commented code will appear here</p>
                <p className="text-sm mt-2">Paste code and click "Comment It" to get started</p>
              </div>
            </div>
          )}
        </div>

        {/* Stats bar */}
        <div className="border-t border-gray-700 bg-gray-800 px-4 py-2">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>{code ? `${code.split("\n").length} lines` : "No output yet"}</span>
            {code && <span>{code.split("//").length + code.split("#").length - 2} comments added</span>}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
