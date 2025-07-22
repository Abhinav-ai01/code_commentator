import { Code, Github, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">Code Commenter AI</span>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Star className="mr-2 h-4 w-4" />
              Examples
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
