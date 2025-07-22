import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LanguageToggle } from "@/components/language-toggle"
import { DashboardMap } from "@/components/dashboard-map"
import { ReportsTable } from "@/components/reports-table"
import { NotificationPanel } from "@/components/notification-panel"
import { Activity, Bell, Calendar, LogOut, MapPin, Settings, User, AlertTriangle, Pill } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-semibold text-blue-600">HealthCheck</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 flex h-2 w-2 rounded-full bg-red-500"></span>
              <span className="sr-only">Notifications</span>
            </Button>
            <LanguageToggle />
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="h-4 w-4" />
              <span className="hidden md:inline">Dr. Sharma</span>
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-gray-50 md:block">
          <div className="flex h-full flex-col">
            <div className="p-4">
              <div className="rounded-xl bg-blue-50 p-4">
                <div className="mb-2 font-medium text-blue-700">Welcome back</div>
                <div className="text-sm text-blue-600">Dr. Meera Sharma</div>
                <div className="text-xs text-blue-600">District Health Officer</div>
              </div>
            </div>
            <nav className="flex-1 space-y-1 p-2">
              <Link href="/dashboard">
                <Button variant="ghost" className="w-full justify-start">
                  <MapPin className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <Link href="/dashboard/reports">
                <Button variant="ghost" className="w-full justify-start">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Reports
                </Button>
              </Link>
              <Link href="/dashboard/clusters">
                <Button variant="ghost" className="w-full justify-start">
                  <Activity className="mr-2 h-4 w-4" />
                  Clusters
                </Button>
              </Link>
              <Link href="/dashboard/medicine">
                <Button variant="ghost" className="w-full justify-start">
                  <Pill className="mr-2 h-4 w-4" />
                  Medicine Alerts
                </Button>
              </Link>
              <Link href="/dashboard/calendar">
                <Button variant="ghost" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar
                </Button>
              </Link>
            </nav>
            <div className="border-t p-4">
              <div className="flex items-center justify-between">
                <Link href="/dashboard/settings">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Button>
                </Link>
                <Link href="/logout">
                  <Button variant="ghost" size="sm" className="gap-2 text-red-600 hover:text-red-700">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            <h1 className="mb-6 text-2xl font-bold">Health Authority Dashboard</h1>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="rounded-2xl shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Total Reports</CardTitle>
                  <CardDescription>Last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">247</div>
                  <p className="text-sm text-green-600">+12% from last month</p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Active Clusters</CardTitle>
                  <CardDescription>Requiring attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3</div>
                  <p className="text-sm text-red-600">+2 new clusters</p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Medicine Alerts</CardTitle>
                  <CardDescription>Low stock warnings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">5</div>
                  <p className="text-sm text-amber-600">Requires attention</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <Card className="rounded-2xl shadow-sm lg:col-span-2">
                <CardHeader>
                  <CardTitle>Report Distribution</CardTitle>
                  <CardDescription>Geographic distribution of health reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <DashboardMap />
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-sm">
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Recent alerts and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <NotificationPanel />
                </CardContent>
              </Card>
            </div>

            <div className="mt-6">
              <Card className="rounded-2xl shadow-sm">
                <CardHeader>
                  <CardTitle>Recent Reports</CardTitle>
                  <CardDescription>Latest health issues reported</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="all">
                    <TabsList className="mb-4">
                      <TabsTrigger value="all">All Reports</TabsTrigger>
                      <TabsTrigger value="urgent">Urgent</TabsTrigger>
                      <TabsTrigger value="pending">Pending</TabsTrigger>
                      <TabsTrigger value="resolved">Resolved</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                      <ReportsTable />
                    </TabsContent>
                    <TabsContent value="urgent">
                      <ReportsTable filter="urgent" />
                    </TabsContent>
                    <TabsContent value="pending">
                      <ReportsTable filter="pending" />
                    </TabsContent>
                    <TabsContent value="resolved">
                      <ReportsTable filter="resolved" />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
