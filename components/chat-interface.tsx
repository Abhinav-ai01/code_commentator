"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  type: "bot" | "user"
  content: string
  timestamp: Date
}

interface ChatInterfaceProps {
  onDataComplete: (isComplete: boolean) => void
}

const initialMessages: Message[] = [
  {
    id: "1",
    type: "bot",
    content:
      "Hi! I'm your AI resume assistant. I'll help you create a professional resume step by step. Let's start with your basic information. What's your full name?",
    timestamp: new Date(),
  },
]

const resumeQuestions = [
  "What's your full name?",
  "What's your email address?",
  "What's your phone number?",
  "What's your current job title or the position you're seeking?",
  "Tell me about your work experience. Start with your most recent job.",
  "What are your key skills?",
  "What's your educational background?",
  "Do you have any certifications or achievements you'd like to highlight?",
]

export function ChatInterface({ onDataComplete }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Check if all questions have been answered
    const userMessages = messages.filter((m) => m.type === "user")
    onDataComplete(userMessages.length >= resumeQuestions.length)
  }, [messages, onDataComplete])

  const addMessage = (content: string, type: "bot" | "user") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const simulateTyping = async (content: string) => {
    setIsTyping(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsTyping(false)
    addMessage(content, "bot")
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    addMessage(inputValue, "user")
    setInputValue("")

    // Move to next question
    const nextIndex = currentQuestionIndex + 1
    if (nextIndex < resumeQuestions.length) {
      await simulateTyping(resumeQuestions[nextIndex])
      setCurrentQuestionIndex(nextIndex)
    } else {
      await simulateTyping(
        "Perfect! I have all the information I need. You can now generate your resume using the button below. I'll create a professional resume based on your responses.",
      )
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex h-[600px] flex-col">
      {/* Chat Header */}
      <div className="border-b border-gray-700 p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 bg-blue-600">
            <AvatarFallback>
              <Bot className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium text-white">Resume Assistant</h3>
            <p className="text-xs text-gray-400">{isTyping ? "Typing..." : "Online"}</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex max-w-[80%] gap-3 ${message.type === "user" ? "flex-row-reverse" : "flex-row"}`}>
              <Avatar className={`h-8 w-8 ${message.type === "user" ? "bg-green-600" : "bg-blue-600"}`}>
                <AvatarFallback>
                  {message.type === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </AvatarFallback>
              </Avatar>
              <div
                className={`rounded-2xl px-4 py-2 ${
                  message.type === "user" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-100"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
                <p className="mt-1 text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex max-w-[80%] gap-3">
              <Avatar className="h-8 w-8 bg-blue-600">
                <AvatarFallback>
                  <Bot className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="rounded-2xl bg-gray-700 px-4 py-2">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-700 p-4">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your response..."
            className="flex-1 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            size="icon"
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Press Enter to send • {messages.filter((m) => m.type === "user").length}/{resumeQuestions.length} questions
          answered
        </p>
      </div>
    </div>
  )
}
