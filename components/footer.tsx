import { Code, Heart, Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Code Commenter AI</span>
            </div>
            <p className="mb-4 max-w-md text-gray-400">
              Transform your code with intelligent AI-powered comments. Make your code more readable and maintainable.
            </p>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for developers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Multi-language Support
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Smart Comments
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Code Analysis
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Export Options
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 font-semibold">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-gray-400">© 2024 Code Commenter AI. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
