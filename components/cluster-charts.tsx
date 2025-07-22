"use client"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface ClusterChartsProps {
  type: "symptoms" | "timeline" | "demographics"
}

export function ClusterCharts({ type }: ClusterChartsProps) {
  // Sample data - in a real app, this would come from an API
  const symptomsData = [
    { name: "Fever", count: 25 },
    { name: "Headache", count: 21 },
    { name: "Body ache", count: 18 },
    { name: "Fatigue", count: 16 },
    { name: "Nausea", count: 11 },
    { name: "Cough", count: 8 },
    { name: "Dizziness", count: 7 },
  ]

  const timelineData = [
    { date: "May 10", cases: 3 },
    { date: "May 11", cases: 5 },
    { date: "May 12", cases: 4 },
    { date: "May 13", cases: 7 },
    { date: "May 14", cases: 8 },
    { date: "May 15", cases: 8 },
  ]

  const demographicsData = [
    { age: "0-10", male: 2, female: 3 },
    { age: "11-20", male: 3, female: 2 },
    { age: "21-30", male: 4, female: 3 },
    { age: "31-40", male: 2, female: 1 },
    { age: "41-50", male: 1, female: 2 },
    { age: "51-60", male: 2, female: 1 },
    { age: "61+", male: 1, female: 0 },
  ]

  if (type === "symptoms") {
    return (
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={symptomsData} layout="vertical">
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={80} />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }

  if (type === "timeline") {
    return (
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={timelineData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="cases"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={demographicsData}>
          <XAxis dataKey="age" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="male" fill="#3b82f6" name="Male" />
          <Bar dataKey="female" fill="#60a5fa" name="Female" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
