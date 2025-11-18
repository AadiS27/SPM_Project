"use client"
import { Menu } from "lucide-react"
import { useSidebar } from "./SidebarProvider"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function SidebarToggle() {
  const { isOpen, toggleSidebar } = useSidebar()
  const [showTooltip, setShowTooltip] = useState(false)

  // Only show toggle button when sidebar is closed
  if (isOpen) return null

  return (
    <div className="relative">
      <motion.button
        onClick={toggleSidebar}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="fixed top-4 left-4 z-[60] p-2.5 bg-gradient-to-br from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-emerald-500/50 group border border-emerald-400/20"
        aria-label="Open sidebar"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Menu className="w-5 h-5" />
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="fixed top-4 left-16 z-[60] px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg shadow-lg border border-emerald-500/20 whitespace-nowrap pointer-events-none"
          >
            Open sidebar
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 border-l border-b border-emerald-500/20 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
