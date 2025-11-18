"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Zap, Terminal, ArrowRight, Github, Sparkles, Book } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="pt-20 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/30">
                <Sparkles className="w-16 h-16 text-emerald-400" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">AOI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A minimal, elegant programming language interpreter built with Rust. 
              Learn how interpreters work by exploring our simple yet powerful syntax.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ide"
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-lg font-semibold transition flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20"
              >
                <Terminal className="w-5 h-5" />
                <span>Try it Online</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/syntax"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg text-lg font-semibold transition backdrop-blur-sm border border-emerald-500/30"
              >
                <Book className="w-5 h-5" />
                <span>Learn Syntax</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Why Choose AOI?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Zap className="w-12 h-12 text-yellow-400" />}
                title="Lightning Fast"
                description="Built with Rust for blazing fast execution and memory safety"
              />
              <FeatureCard
                icon={<Code className="w-12 h-12 text-blue-400" />}
                title="Simple Syntax"
                description="Easy to learn syntax perfect for beginners and education"
              />
              <FeatureCard
                icon={<Terminal className="w-12 h-12 text-green-400" />}
                title="Interactive IDE"
                description="Try your code instantly in our web-based IDE"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Code Example Section */}
      <div className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-8">
              See It In Action
            </h2>
            <div className="bg-gray-900 rounded-xl p-6 border border-emerald-500/30 shadow-lg shadow-emerald-500/10">
              <pre className="text-gray-300 overflow-x-auto">
                <code>{`// Fibonacci sequence
fun fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

var result = fib(10);
write(result);  // Output: 55`}</code>
              </pre>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/ide"
                className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition"
              >
                <span>Try this code yourself</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/60 border-t border-emerald-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Built with  using Rust, Next.js, and TypeScript
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-gray-900/50 rounded-xl border border-emerald-500/20 backdrop-blur-sm hover:border-emerald-500/50 transition shadow-lg hover:shadow-emerald-500/20"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}