"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Code,
  Upload,
  Sparkles,
  Copy,
  Download,
  ArrowLeft,
  Loader2,
  CheckCircle,
  FileText,
  BarChart3,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  X,
} from "lucide-react"

const languages = [
  { value: "python", label: "Python", ext: "py" },
  { value: "javascript", label: "JavaScript", ext: "js" },
  { value: "java", label: "Java", ext: "java" },
  { value: "cpp", label: "C++", ext: "cpp" },
  { value: "rust", label: "Rust", ext: "rs" },
  { value: "go", label: "Go", ext: "go" },
  { value: "php", label: "PHP", ext: "php" },
  { value: "csharp", label: "C#", ext: "cs" },
]

const explanationLevels = [
  { value: "line-by-line", label: "Line-by-line", description: "Detailed explanation for every line" },
  { value: "function-level", label: "Function-level", description: "Moderate explanations for functions and blocks" },
  { value: "beginner-level", label: "Beginner-level", description: "Simplified explanations for learning" },
]

export default function CommentPage() {
  const [code, setCode] = useState("")
  const [commentedCode, setCommentedCode] = useState("")
  const [language, setLanguage] = useState("python")
  const [explanationLevel, setExplanationLevel] = useState("function-level")
  const [isProcessing, setIsProcessing] = useState(false)
  const [activeTab, setActiveTab] = useState("original")
  const [copied, setCopied] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const stats = {
    linesScanned: code.split("\n").filter((line) => line.trim()).length,
    commentsGenerated: commentedCode
      .split("\n")
      .filter((line) => line.trim().startsWith("#") || line.trim().startsWith("//")).length,
  }

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = Array.from(e.dataTransfer.files)
    const file = files[0]

    if (file && file.type.startsWith("text/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        setCode(content)
      }
      reader.readAsText(file)
    }
  }, [])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        setCode(content)
      }
      reader.readAsText(file)
    }
  }

  const handleCommentCode = async () => {
    if (!code.trim()) return

    setIsProcessing(true)
    setActiveTab("commented")

    // Simulate API processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Mock commented code generation
    const mockCommentedCode = generateMockComments(code, language, explanationLevel)
    setCommentedCode(mockCommentedCode)
    setIsProcessing(false)
    setShowFeedback(true)
  }

  const generateMockComments = (inputCode: string, lang: string, level: string) => {
    const lines = inputCode.split("\n")
    const result: string[] = []

    if (level === "line-by-line") {
      lines.forEach((line) => {
        if (line.trim()) {
          result.push(`# ${getLineComment(line, lang)}`)
          result.push(line)
        } else {
          result.push(line)
        }
      })
    } else if (level === "function-level") {
      lines.forEach((line) => {
        if (line.includes("def ") || line.includes("function ") || line.includes("class ")) {
          result.push(`# ${getFunctionComment(line, lang)}`)
        }
        result.push(line)
      })
    } else {
      result.push("# This code performs the following operations:")
      result.push("# - Processes input data")
      result.push("# - Executes main logic")
      result.push("# - Returns or displays results")
      result.push("")
      result.push(...lines)
    }

    return result.join("\n")
  }

  const getLineComment = (line: string, lang: string) => {
    if (line.includes("=")) return "Assigns value to variable"
    if (line.includes("print") || line.includes("console.log")) return "Outputs data to console"
    if (line.includes("if")) return "Conditional statement"
    if (line.includes("for") || line.includes("while")) return "Loop iteration"
    return "Executes operation"
  }

  const getFunctionComment = (line: string, lang: string) => {
    if (line.includes("def ")) return "Function definition - handles specific task"
    if (line.includes("class ")) return "Class definition - defines object structure"
    return "Code block definition"
  }

  const handleCopy = async () => {
    if (commentedCode) {
      await navigator.clipboard.writeText(commentedCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleDownload = () => {
    if (commentedCode) {
      const selectedLang = languages.find((l) => l.value === language)
      const blob = new Blob([commentedCode], { type: "text/plain" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `commented_code.${selectedLang?.ext || "txt"}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Code Commenter AI</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold">Comment Your Code</h1>
          <p className="text-gray-400">Upload or paste your code to get intelligent AI-powered comments</p>
        </div>

        {/* Controls */}
        <Card className="mb-6 border-gray-700 bg-gray-800/50">
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Programming Language</label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600 text-white">
                    {languages.map((lang) => (
                      <SelectItem key={lang.value} value={lang.value} className="text-white hover:bg-gray-600">
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Explanation Level</label>
                <Select value={explanationLevel} onValueChange={setExplanationLevel}>
                  <SelectTrigger className="bg-gray-700 border-gray-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600 text-white">
                    {explanationLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value} className="text-white hover:bg-gray-600">
                        <div className="flex flex-col">
                          <span className="text-white">{level.label}</span>
                          <span className="text-xs text-gray-300">{level.description}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col justify-end">
                <Button
                  onClick={handleCommentCode}
                  disabled={!code.trim() || isProcessing}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
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

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Input Section */}
          <Card className="border-gray-700 bg-gray-800/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Input Code
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* File Upload Area */}
              <div
                className={`border-2 border-dashed border-gray-600 m-4 p-8 text-center transition-colors ${
                  isDragOver ? "border-blue-500 bg-blue-500/10" : "hover:border-gray-500"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-300 mb-2">Drag & drop your code file here</p>
                <p className="text-sm text-gray-400 mb-4">or</p>
                <Button
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  Choose File
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".py,.js,.java,.cpp,.rs,.go,.php,.cs,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>

              {/* Code Editor */}
              <div className="border-t border-gray-700">
                <Textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Or paste your code here..."
                  className="min-h-[400px] resize-none border-0 bg-gray-900 font-mono text-sm text-white placeholder:text-gray-400 focus:ring-0 rounded-none"
                  style={{ fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace' }}
                />
              </div>

              <div className="border-t border-gray-700 bg-gray-800 px-4 py-2 flex justify-between text-xs text-gray-400">
                <span>Language: {language.toUpperCase()}</span>
                <span>{code.split("\n").length} lines</span>
              </div>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card className="border-gray-700 bg-gray-800/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Output
                </CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopy}
                    disabled={!commentedCode}
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
                    disabled={!commentedCode}
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="w-full bg-gray-800 border-b border-gray-700 rounded-none text-white">
                  <TabsTrigger value="original" className="flex-1 text-white data-[state=active]:text-white">
                    Original Code
                  </TabsTrigger>
                  <TabsTrigger value="commented" className="flex-1 text-white data-[state=active]:text-white">
                    Commented Code
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="original" className="mt-0">
                  <pre className="min-h-[400px] overflow-auto bg-gray-900 p-4 text-sm font-mono text-gray-100 whitespace-pre-wrap">
                    {code || (
                      <div className="text-center text-gray-300">
                        <Code className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p className="text-white">Your original code will appear here</p>
                      </div>
                    )}
                  </pre>
                </TabsContent>

                <TabsContent value="commented" className="mt-0">
                  {isProcessing ? (
                    <div className="flex items-center justify-center min-h-[400px] bg-gray-900">
                      <div className="text-center">
                        <Loader2 className="h-8 w-8 animate-spin text-blue-400 mx-auto mb-4" />
                        <p className="text-white">AI is analyzing and commenting your code...</p>
                        <div className="mt-4 w-64 bg-gray-700 rounded-full h-2 mx-auto">
                          <div
                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full animate-pulse"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ) : commentedCode ? (
                    <pre className="min-h-[400px] overflow-auto bg-gray-900 p-4 text-sm font-mono text-gray-100 whitespace-pre-wrap">
                      {commentedCode}
                    </pre>
                  ) : (
                    <div className="flex items-center justify-center min-h-[400px] bg-gray-900">
                      <div className="text-center text-gray-300">
                        <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p className="text-white">Your commented code will appear here</p>
                        <p className="text-sm mt-2 text-gray-400">Click "Comment It" to get started</p>
                      </div>
                    </div>
                  )}
                </TabsContent>
              </Tabs>

              {/* Stats */}
              {commentedCode && (
                <div className="border-t border-gray-700 bg-gray-800 px-4 py-2">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <BarChart3 className="h-3 w-3" />
                        {stats.linesScanned} lines scanned
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        {stats.commentsGenerated} comments generated
                      </span>
                    </div>
                    <Badge variant="secondary" className="bg-green-600 text-white text-xs">
                      Complete
                    </Badge>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Feedback Popup */}
        {showFeedback && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="border-gray-700 bg-gray-800 max-w-md mx-4">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white">How was this explanation?</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setShowFeedback(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Your feedback helps us improve our AI comments</p>
                <div className="flex gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white bg-transparent"
                    onClick={() => setShowFeedback(false)}
                  >
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Helpful
                  </Button>
                  <Button
                    variant="outline"
                    className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white bg-transparent"
                    onClick={() => setShowFeedback(false)}
                  >
                    <ThumbsDown className="mr-2 h-4 w-4" />
                    Not Helpful
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}
