"use client"
import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User, Copy, Check, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { findAnswer } from "@/lib/chatbotKnowledge"

interface Message {
  id: string
  text: string
  isBot: boolean
  codeExample?: string
  timestamp: Date
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi! I'm the AOI Assistant. I can help you with syntax questions, provide code examples, and debug your code. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const getAIResponse = async (query: string): Promise<string> => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY
      
      if (!apiKey) {
        return "AI fallback is not configured. Please add your Gemini API key to use AI responses."
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are an expert in the AOI programming language. Answer questions clearly and concisely.

AOI Language Features:
- Variables: var name = value;
- Functions: fun name(params) { body }
- Control flow: if/else, while, for loops
- Arrays: [1, 2, 3], access with arr[0], mutable
- Operators: +, -, *, /, ==, !=, >, <, >=, <=, &&, ||, !
- Output: write(value)
- Comments: // single line
- Recursion limit: 145

User question: ${query}

Provide a brief answer. If showing code, keep examples short and focused.`
              }]
            }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1000,
            }
          })
        }
      )

      const data = await response.json()
      
      console.log("Gemini API Response:", data)
      console.log("Status:", response.status)
      
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text
      }
      
      if (data.error) {
        console.error("API Error:", data.error)
        return `API Error: ${data.error.message}`
      }
      
      return "I couldn't generate a response. Please try again or rephrase your question."
    } catch (error) {
      console.error("AI API Error:", error)
      return "I'm having trouble connecting to the AI service. Please check your internet connection or try again later."
    }
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Try predefined answers first
    const predefinedAnswer = findAnswer(input)

    if (predefinedAnswer) {
      // Use predefined answer
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: predefinedAnswer.answer,
          isBot: true,
          codeExample: predefinedAnswer.codeExample,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, botMessage])
        setIsLoading(false)
      }, 500)
    } else {
      // Fallback to AI
      const aiResponse = await getAIResponse(input)
      
      // Check if response contains code blocks - extract ALL code blocks
      const codeBlockRegex = /```[\s\S]*?```/g
      const codeMatches = aiResponse.match(codeBlockRegex)
      let codeExample: string | undefined
      let textResponse = aiResponse

      if (codeMatches && codeMatches.length > 0) {
        // Combine all code blocks
        codeExample = codeMatches
          .map(block => block.replace(/```[\w]*\n?/g, "").replace(/```/g, "").trim())
          .join("\n\n")
        // Remove code blocks from text
        textResponse = aiResponse.replace(codeBlockRegex, "").trim()
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: textResponse || "Here's what I found:",
        isBot: true,
        codeExample,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botMessage])
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const quickQuestions = [
    "How do I declare variables?",
    "Show me function syntax",
    "How do loops work?",
    "What are the limitations?"
  ]

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-br from-emerald-600 to-green-600 text-white rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-gray-900 rounded-2xl shadow-2xl border border-emerald-500/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AOI Assistant</h3>
                  <p className="text-xs text-emerald-100">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div className={`flex items-start space-x-2 ${message.isBot ? "max-w-[85%]" : "max-w-[85%] flex-row-reverse space-x-reverse"}`}>
                    <div className={`p-2 rounded-full flex-shrink-0 ${message.isBot ? "bg-emerald-500/20" : "bg-blue-500/20"}`}>
                      {message.isBot ? (
                        <Bot className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <User className="w-4 h-4 text-blue-400" />
                      )}
                    </div>
                    <div className="flex flex-col space-y-2 min-w-0 flex-1">
                      <div
                        className={`p-3 rounded-2xl ${
                          message.isBot
                            ? "bg-gray-800 text-gray-100"
                            : "bg-gradient-to-br from-emerald-600 to-green-600 text-white"
                        }`}
                      >
                        <p className="text-sm leading-relaxed break-words">{message.text}</p>
                      </div>
                      {message.codeExample && (
                        <div className="relative bg-black/50 rounded-lg p-3 pt-8 border border-emerald-500/20 min-w-0">
                          <button
                            onClick={() => copyToClipboard(message.codeExample!, message.id)}
                            className="absolute top-2 left-2 p-1.5 hover:bg-emerald-500/20 rounded transition-colors z-10 bg-gray-800/80"
                            aria-label="Copy code"
                          >
                            {copiedId === message.id ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4 text-gray-400" />
                            )}
                          </button>
                          <pre className="text-xs text-emerald-300 font-mono overflow-x-auto whitespace-pre-wrap break-words">
                            {message.codeExample}
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center space-x-2 bg-gray-800 p-3 rounded-2xl">
                    <Loader2 className="w-4 h-4 text-emerald-400 animate-spin" />
                    <span className="text-sm text-gray-400">Thinking...</span>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="p-3 bg-gray-800/50 border-t border-emerald-500/10">
                <p className="text-xs text-gray-400 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInput(question)
                        inputRef.current?.focus()
                      }}
                      className="text-xs px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-full transition-colors border border-emerald-500/20"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-gray-800 border-t border-emerald-500/20">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about AOI syntax..."
                  className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-500 text-sm"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-gradient-to-br from-emerald-600 to-green-600 text-white rounded-lg hover:from-emerald-500 hover:to-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
