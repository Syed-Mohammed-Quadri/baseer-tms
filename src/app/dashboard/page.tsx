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
  Gauge,
} from "lucide-react";
import ActiveResourceConflicts from "@/components/dashboard/ActiveResourceConflicts";
import ResourceUtilization from "@/components/dashboard/ResourceUtilization";
import CapacityPlanning from "@/components/dashboard/CapacityPlanning";

const kpis = [
  {
    label: "Resource Utilization",
    value: "87%",
    change: null, // No change indicator shown in screenshot
    changeType: null,
    description: "Optimal efficiency",
    icon: Gauge,
    iconColor: "text-blue-600",
  },
  {
    label: "Active Conflicts",
    value: "3",
    change: null,
    changeType: null,
    description: "2 resolved today",
    icon: AlertTriangle,
    iconColor: "text-red-600",
  },
  {
    label: "Capacity Score",
    value: "92%",
    change: null,
    changeType: null,
    description: "Above target",
    icon: TrendingUp,
    iconColor: "text-green-600",
  },
  {
    label: "Resource Availability",
    value: "94%",
    change: null,
    changeType: null,
    description: "156 of 166 active",
    icon: CheckCircle,
    iconColor: "text-blue-600",
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
              className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm flex justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900 uppercase tracking-wide">
                    {kpi.label}
                  </p>
                  <p className="text-3xl font-bold text-slate-900 mt-2">
                    {kpi.value}
                  </p>
                  {/* <div className="flex items-center mt-2">
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
                  </div> */}
                  <p className="text-sm text-slate-900 mt-1">
                    {kpi.description}
                  </p>
                </div>
              </div>

              <div>
                {kpi.icon && (
                  <div className="mt-4">
                    <kpi.icon className={`w-8 h-8 ${kpi.iconColor}`} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ActiveResourceConflicts />

          {/* Resource Status Chart */}
          <ResourceUtilization />
        </div>

        {/* Capacity Planning & Forecast */}
        <CapacityPlanning />
      </div>
    </div>
  );
}
