"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Code, 
  Home, 
  Book, 
  Terminal, 
  Info, 
  Github, 
  ChevronRight,
  Sparkles,
  FileCode,
  Play,
  Layers,
  Zap,
  Rocket,
  Package,
  TrendingUp,
  Coffee,
  Star,
  Heart,
  AlertCircle,
  Lightbulb
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useSidebar } from "./SidebarProvider"

interface NavItem {
  name: string
  href: string
  icon: React.ReactNode
  description: string
}

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "/",
    icon: <Home className="w-5 h-5" />,
    description: "Landing page"
  },
  {
    name: "About",
    href: "/about",
    icon: <Info className="w-5 h-5" />,
    description: "Learn about AOI"
  },
  {
    name: "Syntax Guide",
    href: "/syntax",
    icon: <Book className="w-5 h-5" />,
    description: "Language documentation"
  },
  {
    name: "IDE Playground",
    href: "/ide",
    icon: <Terminal className="w-5 h-5" />,
    description: "Try code online"
  }
]

const features = [
  { icon: <Zap className="w-4 h-4" />, text: "Blazing Fast", color: "text-yellow-400" },
  { icon: <Layers className="w-4 h-4" />, text: "Educational", color: "text-blue-400" },
  { icon: <Play className="w-4 h-4" />, text: "Interactive IDE", color: "text-green-400" },
  { icon: <Package className="w-4 h-4" />, text: "Simple Syntax", color: "text-purple-400" },
  { icon: <Rocket className="w-4 h-4" />, text: "Rust Powered", color: "text-orange-400" },
]

const quickTips = [
  "Variables: var x = 10;",
  "Functions: fun add(a, b) { }",
  "Loops: while (i < 10) { }",
  "Output: write(\"Hello\");",
]

const codeExamples = [
  {
    title: "Hello World",
    code: 'write("Hello, AOI!");'
  },
  {
    title: "Fibonacci",
    code: "fun fib(n) {\n  return n <= 1 ? n : fib(n-1) + fib(n-2);\n}"
  },
  {
    title: "Loop",
    code: "for (var i = 0; i < 5; i = i + 1) {\n  write(i);\n}"
  }
]

export default function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar()
  const [currentTip, setCurrentTip] = useState(0)
  const [showExamples, setShowExamples] = useState(false)
  const pathname = usePathname()

  // Rotate tips every 5 seconds
  useState(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % quickTips.length)
    }, 5000)
    return () => clearInterval(interval)
  })

  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen bg-gray-900 border-r border-emerald-500/20 shadow-2xl z-50 overflow-hidden transition-all duration-300 flex-shrink-0 ${
          isOpen ? 'w-72 translate-x-0' : 'w-0 -translate-x-full md:translate-x-0 md:w-0'
        }`}
      >
        <div className={`flex flex-col h-full ${isOpen ? 'opacity-100' : 'opacity-0 md:opacity-0'} transition-opacity duration-300`}>
          {/* Logo Section */}
          <div className="p-6 border-b border-emerald-500/20 bg-gray-900 z-20 flex items-center justify-between flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group flex-1" onClick={closeSidebar}>
              <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/30 group-hover:bg-emerald-500/20 transition-all duration-300">
                <Code className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">AOI</h1>
                <p className="text-xs text-gray-400">Language Interpreter</p>
              </div>
            </Link>
            {/* Close button inside sidebar */}
            <button
              onClick={closeSidebar}
              className="p-2 hover:bg-emerald-500/10 rounded-lg transition-all duration-200 text-gray-400 hover:text-emerald-400"
              aria-label="Close sidebar"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto">
            {/* Navigation Items */}
            <nav className="p-4 space-y-2">
            <div className="mb-4">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
                Navigation
              </h2>
            </div>
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeSidebar}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 group relative ${
                    isActive
                      ? "bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/10"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-emerald-500/20 rounded-lg border border-emerald-500/30"
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? "text-emerald-400" : "text-gray-400 group-hover:text-emerald-400"} transition-colors`}>
                    {item.icon}
                  </span>
                  <div className="flex-1 relative z-10">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                      {item.description}
                    </div>
                  </div>
                  {isActive && (
                    <ChevronRight className="w-4 h-4 text-emerald-400 relative z-10" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Quick Actions */}
          <div className="p-4 border-t border-emerald-500/20">
            <div className="mb-3">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
                Quick Actions
              </h2>
            </div>
            <Link
              href="/ide"
              onClick={closeSidebar}
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 group"
            >
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Launch IDE</span>
            </Link>
          </div>

          {/* Features Section */}
          <div className="p-4 border-t border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent">
            <div className="mb-3">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2 flex items-center gap-2">
                <Star className="w-3 h-3" />
                Key Features
              </h2>
            </div>
            <div className="space-y-2 px-3">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <span className={`${feature.color} group-hover:scale-110 transition-transform`}>{feature.icon}</span>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Tips Section */}
          <div className="p-4 border-t border-emerald-500/20">
            <div className="mb-3">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2 flex items-center gap-2">
                <Lightbulb className="w-3 h-3" />
                Quick Tip
              </h2>
            </div>
            <div className="px-3">
              <motion.div
                key={currentTip}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-lg p-3"
              >
                <code className="text-xs text-emerald-300 font-mono">
                  {quickTips[currentTip]}
                </code>
              </motion.div>
            </div>
          </div>

          {/* Code Examples Section */}
          <div className="p-4 border-t border-emerald-500/20">
            <div className="mb-3 flex items-center justify-between px-3">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                <Code className="w-3 h-3" />
                Code Snippets
              </h2>
              <button
                onClick={() => setShowExamples(!showExamples)}
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <ChevronRight className={`w-4 h-4 transition-transform ${showExamples ? 'rotate-90' : ''}`} />
              </button>
            </div>
            <AnimatePresence>
              {showExamples && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2 px-3 overflow-hidden"
                >
                  {codeExamples.map((example, index) => (
                    <div key={index} className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-2">
                      <div className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                        <Coffee className="w-3 h-3" />
                        {example.title}
                      </div>
                      <pre className="text-[10px] text-emerald-300 font-mono overflow-x-auto">
                        {example.code}
                      </pre>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Stats Section */}
          <div className="p-4 border-t border-emerald-500/20 bg-gradient-to-br from-indigo-500/5 to-transparent">
            <div className="mb-3">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2 flex items-center gap-2">
                <TrendingUp className="w-3 h-3" />
                Stats
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-2 px-3">
              <div className="bg-gray-900/30 border border-gray-700/30 rounded-lg p-2 text-center">
                <div className="text-xs text-gray-500">Version</div>
                <div className="text-sm font-bold text-emerald-400">1.0.0</div>
              </div>
              <div className="bg-gray-900/30 border border-gray-700/30 rounded-lg p-2 text-center">
                <div className="text-xs text-gray-500">Language</div>
                <div className="text-sm font-bold text-orange-400">Rust</div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="p-4 border-t border-emerald-500/20">
            <div className="mb-3">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2 flex items-center gap-2">
                <AlertCircle className="w-3 h-3" />
                Important
              </h2>
            </div>
            <div className="px-3 space-y-2">
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-2">
                <p className="text-xs text-yellow-300">
                  ⚠️ Recursion limit: 145
                </p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-2">
                <p className="text-xs text-red-300">
                  ❌ scan() is broken
                </p>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="p-4 border-t border-emerald-500/20">
            <div className="mb-3">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
                Resources
              </h2>
            </div>
            <div className="space-y-2">
              <a
                href="https://github.com/AadiS27/Interpreter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 group"
              >
                <Github className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-sm">GitHub Repository</span>
              </a>
              <a
                href="https://github.com/AadiS27/Interpreter/blob/main/src/syntax.md"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 group"
              >
                <FileCode className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-sm">Syntax Reference</span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-emerald-500/20 text-center bg-gradient-to-t from-black/50 to-transparent">
            <div className="mb-3 space-y-1">
              <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>Rust & Next.js</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <a 
                href="https://github.com/AadiS27/Interpreter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
              <a 
                href="https://github.com/AadiS27/Interpreter/stargazers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-all duration-200 hover:scale-110"
                aria-label="Star on GitHub"
              >
                <Star className="w-4 h-4 text-yellow-400" />
              </a>
            </div>
            <p className="text-xs text-gray-600">AOI Interpreter © 2025</p>
          </div>
          </div>
        </div>
      </aside>

      {/* Desktop Sidebar Badge */}
      <div className="hidden md:block fixed bottom-4 left-4 z-30">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-lg px-3 py-2 backdrop-blur-sm shadow-lg"
        >
          <p className="text-xs text-emerald-400 flex items-center space-x-1">
            <Rocket className="w-3 h-3" />
            <span>AOI v1.0.0</span>
          </p>
        </motion.div>
      </div>
    </>
  )
}
