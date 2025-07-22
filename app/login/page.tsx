import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LanguageToggle } from "@/components/language-toggle"
import { Activity, ArrowLeft } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-semibold text-blue-600">HealthCheck</span>
          </div>
          <LanguageToggle />
        </div>
      </header>
      <main className="container flex flex-1 items-center justify-center py-8 md:py-12">
        <div className="w-full max-w-md">
          <Link href="/" className="mb-6 inline-flex items-center text-sm text-blue-600 hover:text-blue-800">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to home
          </Link>
          <Card className="rounded-2xl shadow-sm">
            <CardHeader className="space-y-1">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-center text-2xl">Health Authority Login</CardTitle>
              <CardDescription className="text-center">Enter your credentials to access the dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m.patel@health.gov" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/forgot-password" className="text-xs text-blue-600 hover:text-blue-800">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" className="rounded-xl" />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Login
                </Button>
              </form>
              <div className="mt-4 text-center text-sm">
                <span className="text-gray-500">Don't have an account? </span>
                <Link href="/register" className="text-blue-600 hover:text-blue-800">
                  Contact your administrator
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="border-t bg-gray-50 py-6">
        <div className="container text-center text-sm text-gray-500">
          © {new Date().getFullYear()} HealthCheck. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
