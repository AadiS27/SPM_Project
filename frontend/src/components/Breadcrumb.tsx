"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { useSidebar } from "./SidebarProvider"

export default function Breadcrumb() {
  const pathname = usePathname()
  const { isOpen } = useSidebar()
  
  // Don't show breadcrumb on home page
  if (pathname === "/") return null

  const pathSegments = pathname.split("/").filter(segment => segment !== "")
  
  const getPageName = (segment: string) => {
    const nameMap: { [key: string]: string } = {
      "about": "About",
      "syntax": "Syntax Guide",
      "ide": "IDE Playground"
    }
    return nameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
  }

  return (
    <nav className={`sticky top-0 z-30 flex items-center space-x-2 py-3 bg-gray-900/80 border-b border-emerald-500/20 backdrop-blur-md transition-all duration-300 ${
      isOpen ? 'pl-6' : 'pl-20'
    }`}>
      <Link 
        href="/" 
        className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
        aria-label="Home"
      >
        <Home className="w-4 h-4" />
      </Link>
      {pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/")
        const isLast = index === pathSegments.length - 1
        
        return (
          <div key={segment} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-gray-600" />
            {isLast ? (
              <span className="text-emerald-400 font-medium text-sm">
                {getPageName(segment)}
              </span>
            ) : (
              <Link 
                href={href}
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
              >
                {getPageName(segment)}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
