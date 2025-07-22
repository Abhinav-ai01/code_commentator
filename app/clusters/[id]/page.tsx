import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LanguageToggle } from "@/components/language-toggle"
import { ClusterCharts } from "@/components/cluster-charts"
import { Activity, ArrowLeft, Calendar, Clock, MapPin } from "lucide-react"

export default function ClusterDetailPage({ params }: { params: { id: string } }) {
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
      <main className="container flex-1 py-8">
        <Link href="/dashboard" className="mb-6 inline-flex items-center text-sm text-blue-600 hover:text-blue-800">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to dashboard
        </Link>

        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold">Fever Cluster: Nandpur Village</h1>
            <p className="text-gray-600">Cluster ID: {params.id}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              <span>Export Report</span>
            </Button>
            <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
              <Activity className="h-4 w-4" />
              <span>Take Action</span>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">27</div>
              <p className="text-sm text-red-600">+8 in last 24 hours</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Affected Area</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <div className="text-lg font-medium">3 villages</div>
              </div>
              <p className="text-sm text-gray-600">Primarily Nandpur region</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">First Reported</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <div className="text-lg font-medium">5 days ago</div>
              </div>
              <p className="text-sm text-gray-600">May 10, 2023</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Cluster Analysis</CardTitle>
              <CardDescription>Visual summary of reported symptoms and timeline</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="symptoms">
                <TabsList className="mb-4">
                  <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                  <TabsTrigger value="demographics">Demographics</TabsTrigger>
                </TabsList>
                <TabsContent value="symptoms">
                  <ClusterCharts type="symptoms" />
                </TabsContent>
                <TabsContent value="timeline">
                  <ClusterCharts type="timeline" />
                </TabsContent>
                <TabsContent value="demographics">
                  <ClusterCharts type="demographics" />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Common Symptoms</CardTitle>
              <CardDescription>Most frequently reported symptoms</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span>Fever</span>
                  <span className="font-medium">92%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Headache</span>
                  <span className="font-medium">78%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Body ache</span>
                  <span className="font-medium">65%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Fatigue</span>
                  <span className="font-medium">60%</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Nausea</span>
                  <span className="font-medium">42%</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Recommended Actions</CardTitle>
              <CardDescription>AI-suggested response measures</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 rounded-full bg-blue-100 text-center text-xs font-bold leading-5 text-blue-600">
                    1
                  </div>
                  <span>Deploy mobile testing unit to Nandpur Village</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 rounded-full bg-blue-100 text-center text-xs font-bold leading-5 text-blue-600">
                    2
                  </div>
                  <span>Increase paracetamol and ORS supplies to local clinics</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 rounded-full bg-blue-100 text-center text-xs font-bold leading-5 text-blue-600">
                    3
                  </div>
                  <span>Test water sources for contamination</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 rounded-full bg-blue-100 text-center text-xs font-bold leading-5 text-blue-600">
                    4
                  </div>
                  <span>Conduct community awareness sessions on prevention</span>
                </li>
              </ul>
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
