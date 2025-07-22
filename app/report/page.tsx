import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { LanguageToggle } from "@/components/language-toggle"
import { Activity, Mic, Upload, ArrowLeft, MapPin } from "lucide-react"

export default function ReportPage() {
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
      <main className="container flex-1 py-8 md:py-12">
        <Link href="/" className="mb-6 inline-flex items-center text-sm text-blue-600 hover:text-blue-800">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to home
        </Link>
        <div className="mx-auto max-w-2xl">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Report a Health Issue</CardTitle>
              <CardDescription>
                Provide details about the health issue you're experiencing or observing in your community.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="description">Symptom Description</Label>
                    <div className="mt-1 flex gap-2">
                      <Textarea
                        id="description"
                        placeholder="Describe the symptoms or health issue..."
                        className="min-h-32 flex-1 rounded-xl"
                      />
                      <div className="flex flex-col gap-2">
                        <Button type="button" variant="outline" size="icon" className="h-12 w-12 rounded-xl">
                          <Mic className="h-5 w-5 text-blue-600" />
                          <span className="sr-only">Record voice</span>
                        </Button>
                        <Button type="button" variant="outline" size="icon" className="h-12 w-12 rounded-xl">
                          <Upload className="h-5 w-5 text-blue-600" />
                          <span className="sr-only">Upload image</span>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="Village/Town name" className="rounded-xl" />
                      <div className="text-xs text-blue-600">
                        <button type="button" className="inline-flex items-center">
                          <MapPin className="mr-1 h-3 w-3" /> Use my current location
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reporter-type">Reporter Type</Label>
                      <Select>
                        <SelectTrigger id="reporter-type" className="rounded-xl">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="resident">Resident</SelectItem>
                          <SelectItem value="health-worker">Health Worker</SelectItem>
                          <SelectItem value="visitor">Visitor</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Urgency Level</Label>
                    <RadioGroup defaultValue="medium" className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="low" id="low" />
                        <Label htmlFor="low" className="font-normal">
                          Low
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="medium" />
                        <Label htmlFor="medium" className="font-normal">
                          Medium
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high" id="high" />
                        <Label htmlFor="high" className="font-normal">
                          High
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="emergency" id="emergency" />
                        <Label htmlFor="emergency" className="font-normal">
                          Emergency
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Submit Report
                </Button>
              </form>
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
