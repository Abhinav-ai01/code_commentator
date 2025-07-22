"use client"

export function DashboardMap() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-blue-50">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-2 text-sm text-gray-500">Interactive Map</div>
          <div className="text-lg font-medium text-blue-600">Health Report Heatmap</div>
        </div>
      </div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        {/* Simplified map outline */}
        <path d="M100,100 L700,100 L700,300 L100,300 Z" stroke="#94a3b8" strokeWidth="2" fill="transparent" />

        {/* Heatmap spots */}
        <circle cx="250" cy="150" r="30" fill="rgba(239, 68, 68, 0.2)" />
        <circle cx="250" cy="150" r="20" fill="rgba(239, 68, 68, 0.3)" />
        <circle cx="250" cy="150" r="10" fill="rgba(239, 68, 68, 0.5)" />

        <circle cx="450" cy="200" r="40" fill="rgba(239, 68, 68, 0.2)" />
        <circle cx="450" cy="200" r="25" fill="rgba(239, 68, 68, 0.3)" />
        <circle cx="450" cy="200" r="15" fill="rgba(239, 68, 68, 0.5)" />

        <circle cx="600" cy="250" r="35" fill="rgba(239, 68, 68, 0.2)" />
        <circle cx="600" cy="250" r="20" fill="rgba(239, 68, 68, 0.3)" />
        <circle cx="600" cy="250" r="10" fill="rgba(239, 68, 68, 0.5)" />

        {/* Villages/towns */}
        <circle cx="250" cy="150" r="5" fill="#1e40af" />
        <text x="260" y="145" fontSize="12" fill="#1e40af">
          Nandpur
        </text>

        <circle cx="450" cy="200" r="5" fill="#1e40af" />
        <text x="460" y="195" fontSize="12" fill="#1e40af">
          Chandpur
        </text>

        <circle cx="600" cy="250" r="5" fill="#1e40af" />
        <text x="610" y="245" fontSize="12" fill="#1e40af">
          Rajnagar
        </text>
      </svg>
    </div>
  )
}
