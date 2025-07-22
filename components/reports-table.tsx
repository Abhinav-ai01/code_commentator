"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye } from "lucide-react"

interface ReportsTableProps {
  filter?: "urgent" | "pending" | "resolved"
}

export function ReportsTable({ filter }: ReportsTableProps) {
  // Sample data - in a real app, this would come from an API
  const reports = [
    {
      id: "REP-1234",
      date: "2023-05-15",
      location: "Nandpur Village",
      symptoms: "Fever, cough, body ache",
      urgency: "high",
      status: "pending",
    },
    {
      id: "REP-1235",
      date: "2023-05-14",
      location: "Chandpur Village",
      symptoms: "Skin rash, itching",
      urgency: "medium",
      status: "pending",
    },
    {
      id: "REP-1236",
      date: "2023-05-13",
      location: "Rajnagar Village",
      symptoms: "Diarrhea, vomiting",
      urgency: "high",
      status: "pending",
    },
    {
      id: "REP-1237",
      date: "2023-05-12",
      location: "Nandpur Village",
      symptoms: "Headache, fever",
      urgency: "low",
      status: "resolved",
    },
    {
      id: "REP-1238",
      date: "2023-05-11",
      location: "Chandpur Village",
      symptoms: "Cough, cold, fever",
      urgency: "medium",
      status: "resolved",
    },
  ]

  // Filter reports based on the filter prop
  const filteredReports = filter
    ? reports.filter((report) => {
        if (filter === "urgent") return report.urgency === "high"
        return report.status === filter
      })
    : reports

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="hidden md:table-cell">Symptoms</TableHead>
            <TableHead>Urgency</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredReports.map((report) => (
            <TableRow key={report.id}>
              <TableCell className="font-medium">{report.id}</TableCell>
              <TableCell>{report.date}</TableCell>
              <TableCell>{report.location}</TableCell>
              <TableCell className="hidden max-w-[200px] truncate md:table-cell">{report.symptoms}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    report.urgency === "high"
                      ? "border-red-500 text-red-500"
                      : report.urgency === "medium"
                        ? "border-amber-500 text-amber-500"
                        : "border-green-500 text-green-500"
                  }
                >
                  {report.urgency}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    report.status === "pending" ? "border-blue-500 text-blue-500" : "border-green-500 text-green-500"
                  }
                >
                  {report.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">View details</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
