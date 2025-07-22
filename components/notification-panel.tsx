"use client"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Activity, Pill, CheckCircle } from "lucide-react"

export function NotificationPanel() {
  const notifications = [
    {
      id: 1,
      type: "cluster",
      title: "New Fever Cluster Detected",
      description: "5 new cases in Nandpur Village",
      time: "2 hours ago",
      icon: AlertTriangle,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      id: 2,
      type: "report",
      title: "Respiratory Issues Spike",
      description: "12 new reports in Chandpur area",
      time: "5 hours ago",
      icon: Activity,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      id: 3,
      type: "medicine",
      title: "Low Antibiotic Stock",
      description: "Amoxicillin supply running low",
      time: "1 day ago",
      icon: Pill,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      id: 4,
      type: "resolved",
      title: "Diarrhea Outbreak Contained",
      description: "Rajnagar Village situation improved",
      time: "2 days ago",
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
  ]

  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div key={notification.id} className={`flex items-start gap-3 rounded-xl p-3 ${notification.bgColor}`}>
          <div className={`mt-0.5 ${notification.color}`}>
            <notification.icon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium">{notification.title}</h4>
            <p className="text-xs text-gray-600">{notification.description}</p>
            <p className="mt-1 text-xs text-gray-500">{notification.time}</p>
          </div>
        </div>
      ))}
      <Button variant="ghost" className="w-full text-sm text-blue-600 hover:text-blue-800">
        View all notifications
      </Button>
    </div>
  )
}
