"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Code, Zap, Layers, FileCode } from "lucide-react"
import type { AutocompleteItem } from "@/lib/aoiAutocomplete"

interface AutocompleteDropdownProps {
  items: AutocompleteItem[]
  selectedIndex: number
  position: { top: number; left: number }
  onSelect: (item: AutocompleteItem) => void
  theme: "dark" | "light"
}

const typeIcons = {
  keyword: Code,
  function: Zap,
  operator: Layers,
  snippet: FileCode,
}

const typeColors = {
  keyword: {
    dark: "text-purple-400 bg-purple-500/10",
    light: "text-purple-600 bg-purple-100",
  },
  function: {
    dark: "text-emerald-400 bg-emerald-500/10",
    light: "text-emerald-600 bg-emerald-100",
  },
  operator: {
    dark: "text-cyan-400 bg-cyan-500/10",
    light: "text-cyan-600 bg-cyan-100",
  },
  snippet: {
    dark: "text-orange-400 bg-orange-500/10",
    light: "text-orange-600 bg-orange-100",
  },
}

export default function AutocompleteDropdown({
  items,
  selectedIndex,
  position,
  onSelect,
  theme,
}: AutocompleteDropdownProps) {
  if (items.length === 0) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.15 }}
        className={`fixed z-[9999] w-72 max-h-60 overflow-y-auto rounded-md shadow-lg border ${
          theme === "dark"
            ? "bg-[#0f1129]/98 border-indigo-500/20"
            : "bg-white/98 border-indigo-200"
        }`}
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
        }}
      >
        <div className="py-1">
          {items.map((item, index) => {
            const Icon = typeIcons[item.type]
            const isSelected = index === selectedIndex
            const colors = typeColors[item.type]

            return (
              <div
                key={`${item.label}-${index}`}
                onClick={() => onSelect(item)}
                className={`relative px-3 py-2 cursor-pointer transition-all duration-100 ${
                  isSelected
                    ? theme === "dark"
                      ? "bg-indigo-500/15"
                      : "bg-indigo-50"
                    : theme === "dark"
                      ? "hover:bg-indigo-500/10"
                      : "hover:bg-gray-50"
                }`}
              >
                {isSelected && (
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-0.5 ${
                      theme === "dark" ? "bg-indigo-400" : "bg-indigo-500"
                    }`}
                  />
                )}

                <div className="flex items-center gap-2">
                  <div
                    className={`flex-shrink-0 w-5 h-5 rounded flex items-center justify-center ${
                      colors[theme]
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span
                      className={`text-sm font-mono ${
                        theme === "dark" ? "text-indigo-100" : "text-indigo-900"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`text-xs ml-2 ${
                        theme === "dark" ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      {item.detail}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
