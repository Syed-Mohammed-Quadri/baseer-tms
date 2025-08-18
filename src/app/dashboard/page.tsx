"use client";

import { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Plane,
  Users,
  MapPin,
  Timer,
} from "lucide-react";

const kpis = [
  {
    label: "Active Flights",
    value: "127",
    change: 8.2,
    changeType: "positive" as const,
    description: "12 arriving, 8 departing next hour",
    icon: Plane,
    iconColor: "text-blue-600",
  },
  {
    label: "Gate Utilization",
    value: "84%",
    change: -3.1,
    changeType: "negative" as const,
    description: "42 of 50 gates occupied",
    icon: MapPin,
    iconColor: "text-yellow-600",
  },
  {
    label: "Resource Allocation",
    value: "92%",
    change: 5.4,
    changeType: "positive" as const,
    description: "All critical resources assigned",
    icon: Users,
    iconColor: "text-green-600",
  },
  {
    label: "Average Turnaround",
    value: "47m",
    change: -12.3,
    changeType: "negative" as const,
    description: "Target: 45 minutes",
    icon: Timer,
    iconColor: "text-orange-600",
  },
];

// Dummy data for Resource Utilization chart
const utilizationData = [
  { time: "00:00", utilization: 45 },
  { time: "02:00", utilization: 38 },
  { time: "04:00", utilization: 32 },
  { time: "06:00", utilization: 55 },
  { time: "08:00", utilization: 78 },
  { time: "10:00", utilization: 85 },
  { time: "12:00", utilization: 92 },
  { time: "14:00", utilization: 88 },
  { time: "16:00", utilization: 95 },
  { time: "18:00", utilization: 87 },
  { time: "20:00", utilization: 76 },
  { time: "22:00", utilization: 65 },
];

const recentActivities = [
  {
    id: 1,
    type: "conflict_resolved",
    message: "Gate A12 conflict resolved automatically",
    timestamp: "2 minutes ago",
    icon: CheckCircle,
    color: "text-green-600",
  },
  {
    id: 2,
    type: "resource_assigned",
    message: "Ground crew team 7 assigned to Gate B15",
    timestamp: "5 minutes ago",
    icon: Plane,
    color: "text-blue-600",
  },
  {
    id: 3,
    type: "alert",
    message: "High priority: Equipment shortage detected",
    timestamp: "12 minutes ago",
    icon: AlertTriangle,
    color: "text-yellow-600",
  },
  {
    id: 4,
    type: "maintenance",
    message: "Gate C08 maintenance completed",
    timestamp: "25 minutes ago",
    icon: CheckCircle,
    color: "text-green-600",
  },
];

const quickActionStats = {
  conflicts: {
    total: 5,
    critical: 2,
    resolvedToday: 12,
  },
  scheduling: {
    pendingRequests: 8,
    completedToday: 34,
    efficiency: 94,
  },
  operations: {
    activeGates: 42,
    delayedFlights: 3,
    onTimePerformance: 89,
  },
};

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState("today");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
            <p className="text-slate-900 mt-1">
              Real-time resource optimization and capacity management
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 text-slate-900 focus:ring-blue-500"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="custom">Custom</option>
            </select>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900 uppercase tracking-wide">
                    {kpi.label}
                  </p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">
                    {kpi.value}
                  </p>
                  <div className="flex items-center mt-2">
                    {kpi.changeType === "positive" ? (
                      <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        kpi.changeType === "positive"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {kpi.change > 0 ? "+" : ""}
                      {kpi.change}%
                    </span>
                    <span className="text-sm text-slate-500 ml-2">
                      vs yesterday
                    </span>
                  </div>
                  <p className="text-sm text-slate-900 mt-1">
                    {kpi.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Resource Status Chart */}
          {/* Resource Status Chart */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Resource Utilization
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-slate-500">Last 24 hours</span>
              </div>
            </div>

            {/* Custom Chart Implementation */}
            <div className="relative h-80 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-6">
              {/* Chart Background Grid */}
              <div className="absolute inset-6">
                {/* Horizontal grid lines with labels */}
                {[100, 75, 50, 25, 0].map((value) => (
                  <div
                    key={value}
                    className="absolute w-full flex items-center"
                    style={{ top: `${100 - value}%` }}
                  >
                    <span className="text-xs text-slate-400 w-10 text-right mr-3">
                      {value}%
                    </span>
                    <div className="flex-1 h-px bg-slate-200 opacity-50" />
                  </div>
                ))}
              </div>

              {/* Chart Area */}
              <div className="relative h-full pl-12 pb-8">
                {/* Time labels */}
                <div className="absolute bottom-0 left-12 right-0 flex justify-between text-xs text-slate-400">
                  {utilizationData.map(
                    (point, index) =>
                      index % 2 === 0 && <span key={index}>{point.time}</span>
                  )}
                </div>

                {/* Chart Line using CSS */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  style={{
                    left: "3rem",
                    bottom: "2rem",
                    width: "calc(100% - 3rem)",
                    height: "calc(100% - 2rem)",
                  }}
                >
                  {/* Chart area background */}
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
                      <stop
                        offset="100%"
                        stopColor="#0ea5e9"
                        stopOpacity="0.02"
                      />
                    </linearGradient>
                  </defs>

                  {/* Fill area under the line */}
                  <polygon
                    fill="url(#chartGradient)"
                    points={`0,100 ${utilizationData
                      .map((point, index) => {
                        const x = (index / (utilizationData.length - 1)) * 100;
                        const y = 100 - point.utilization;
                        return `${x},${y}`;
                      })
                      .join(" ")} 100,100`}
                  />

                  {/* Main chart line */}
                  <polyline
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={utilizationData
                      .map((point, index) => {
                        const x = (index / (utilizationData.length - 1)) * 100;
                        const y = 100 - point.utilization;
                        return `${x}%,${y}%`;
                      })
                      .join(" ")}
                  />

                  {/* Data points */}
                  {utilizationData.map((point, index) => {
                    const x = (index / (utilizationData.length - 1)) * 100;
                    const y = 100 - point.utilization;
                    return (
                      <g key={index}>
                        <circle
                          cx={`${x}%`}
                          cy={`${y}%`}
                          r="4"
                          fill="#ffffff"
                          stroke="#0ea5e9"
                          strokeWidth="2"
                          className="hover:r-6 cursor-pointer transition-all"
                        />
                        {/* Tooltip on hover */}
                        <circle
                          cx={`${x}%`}
                          cy={`${y}%`}
                          r="12"
                          fill="transparent"
                          className="cursor-pointer"
                        >
                          <title>{`${point.time}: ${point.utilization}% utilization`}</title>
                        </circle>
                      </g>
                    );
                  })}
                </svg>

                {/* Current value indicator */}
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-sm border border-slate-200 px-3 py-2">
                  <div className="text-xs text-slate-500">Current</div>
                  <div className="text-lg font-bold text-blue-600">
                    {utilizationData[utilizationData.length - 1]?.utilization}%
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Legend and Stats */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" />
                  <span className="text-sm text-slate-900">
                    Resource Utilization
                  </span>
                </div>
                <div className="text-sm text-slate-500">
                  Peak:{" "}
                  <span className="font-semibold text-slate-900">95%</span> at
                  16:00
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="text-green-600">
                  <span className="text-slate-500">Avg:</span>{" "}
                  <span className="font-semibold">74%</span>
                </div>
                <div className="text-blue-600">
                  <span className="text-slate-500">Target:</span>{" "}
                  <span className="font-semibold">80%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Recent Activities
            </h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div
                    className={`p-2 rounded-full bg-slate-100 ${activity.color}`}
                  >
                    <activity.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-900">{activity.message}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      {activity.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
              View all activities →
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="relative flex flex-col items-start p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors group">
              <div className="flex items-center justify-between w-full mb-3">
                <div className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="text-sm text-slate-900 font-medium">
                    Resolve Conflicts
                  </span>
                </div>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>

              {/* Mini conflict chart */}
              <div className="w-full h-8 bg-red-50 rounded mb-2 relative overflow-hidden">
                <div className="absolute inset-0 flex items-end space-x-1 p-1">
                  {[40, 60, 80, 50, 70, 90, 75].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-red-400 rounded-sm opacity-70"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="text-left text-xs text-slate-900 space-y-1">
                <p>
                  <span className="font-semibold text-red-600">
                    {quickActionStats.conflicts.total}
                  </span>{" "}
                  active conflicts
                </p>
                <p>
                  <span className="font-semibold text-red-700">
                    {quickActionStats.conflicts.critical}
                  </span>{" "}
                  critical priority
                </p>
                <p className="text-green-600">
                  <span className="font-semibold">
                    {quickActionStats.conflicts.resolvedToday}
                  </span>{" "}
                  resolved today
                </p>
              </div>
            </button>

            <button className="relative flex flex-col items-start p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors group">
              <div className="flex items-center justify-between w-full mb-3">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-slate-900">
                    Schedule Resources
                  </span>
                </div>
                <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  {quickActionStats.scheduling.efficiency}%
                </div>
              </div>

              {/* Mini scheduling chart */}
              <div className="w-full h-8 bg-blue-50 rounded mb-2 relative overflow-hidden">
                <div className="absolute inset-0 flex items-end space-x-1 p-1">
                  {[30, 45, 60, 75, 85, 95, 90].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-blue-400 rounded-sm"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="text-left text-xs text-slate-900 space-y-1">
                <p>
                  <span className="font-semibold text-blue-600">
                    {quickActionStats.scheduling.pendingRequests}
                  </span>{" "}
                  pending requests
                </p>
                <p>
                  <span className="font-semibold text-green-600">
                    {quickActionStats.scheduling.completedToday}
                  </span>{" "}
                  completed today
                </p>
                <p className="text-blue-600">Efficiency trending up</p>
              </div>
            </button>

            <button className="relative flex flex-col items-start p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors group">
              <div className="flex items-center justify-between w-full mb-3">
                <div className="flex items-center">
                  <Plane className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-slate-900">
                    View Operations
                  </span>
                </div>
                <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  Live
                </div>
              </div>

              {/* Mini operations chart */}
              <div className="w-full h-8 bg-green-50 rounded mb-2 relative overflow-hidden">
                <div className="absolute inset-0 flex items-end space-x-1 p-1">
                  {[65, 70, 85, 90, 85, 88, 92].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-green-400 rounded-sm"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="text-left text-xs text-slate-900 space-y-1">
                <p>
                  <span className="font-semibold text-green-600">
                    {quickActionStats.operations.activeGates}
                  </span>{" "}
                  active gates
                </p>
                <p>
                  <span className="font-semibold text-orange-600">
                    {quickActionStats.operations.delayedFlights}
                  </span>{" "}
                  delayed flights
                </p>
                <p className="text-green-600">
                  <span className="font-semibold">
                    {quickActionStats.operations.onTimePerformance}%
                  </span>{" "}
                  on-time performance
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
