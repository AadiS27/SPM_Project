"use client"
import { motion } from "framer-motion"
import { Code, Github, Users, Target, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="pt-20 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-center">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">AOI</span>
            </h1>
            
            <div className="bg-gray-900/50 rounded-xl p-8 border border-emerald-500/20 backdrop-blur-sm mb-8 shadow-lg">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                AOI is a minimal programming language interpreter designed to help students and developers understand
                how programming languages work under the hood. Built with Rust for performance and safety, AOI demonstrates
                core concepts of language design including tokenization, parsing, and interpretation.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                This project serves as an educational tool, providing a hands-on way to learn about compiler theory
                and language implementation while working with clean, maintainable Rust code.
              </p>
            </div>

            {/* Features */}
            <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <FeatureItem
                icon={<Target className="w-8 h-8 text-emerald-400" />}
                title="Educational Focus"
                description="Perfect for learning compiler design and language implementation"
              />
              <FeatureItem
                icon={<Lightbulb className="w-8 h-8 text-yellow-400" />}
                title="Simple Syntax"
                description="Easy-to-understand syntax inspired by popular languages"
              />
              <FeatureItem
                icon={<Code className="w-8 h-8 text-blue-400" />}
                title="Rust Powered"
                description="Built with Rust for memory safety and performance"
              />
              <FeatureItem
                icon={<Users className="w-8 h-8 text-green-400" />}
                title="Open Source"
                description="Free and open for anyone to learn from and contribute"
              />
            </div>

            {/* Technology Stack */}
            <h2 className="text-3xl font-bold text-white mb-6">Technology Stack</h2>
            <div className="bg-gray-900/50 rounded-xl p-8 border border-emerald-500/20 backdrop-blur-sm mb-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Backend</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>Rust - Core interpreter</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>Axum - Web server framework</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>Docker - Containerization</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Frontend</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>Next.js - React framework</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>TypeScript - Type safety</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>Tailwind CSS - Styling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>Framer Motion - Animations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project Goals */}
            <h2 className="text-3xl font-bold text-white mb-6">Project Goals</h2>
            <div className="bg-gray-900/50 rounded-xl p-8 border border-emerald-500/20 backdrop-blur-sm shadow-lg">
              <ol className="space-y-4 text-gray-300 text-lg">
                <li className="flex items-start space-x-3">
                  <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">1</span>
                  <span>Provide a clear, understandable example of how interpreters work</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">2</span>
                  <span>Demonstrate best practices in Rust programming and language design</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">3</span>
                  <span>Serve as an educational resource for computer science students</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">4</span>
                  <span>Make interpreter development accessible and fun to learn</span>
                </li>
              </ol>
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

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4 p-4 bg-gray-900/30 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-white font-semibold mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  )
}