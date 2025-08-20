"use client";

import { useState } from "react";
import {
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Plane,
  Gauge,
} from "lucide-react";
import ActiveResourceConflicts from "@/components/dashboard/ActiveResourceConflicts";
import ResourceUtilization from "@/components/dashboard/ResourceUtilization";
import CapacityPlanning from "@/components/dashboard/CapacityPlanning";
import { useThemeStore } from "@/store/theme-store";

const kpis = [
  {
    label: "Resource Utilization",
    value: "87%",
    change: null, // No change indicator shown in screenshot
    changeType: null,
    description: "Optimal efficiency",
    icon: Gauge,
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    label: "Active Conflicts",
    value: "3",
    change: null,
    changeType: null,
    description: "2 resolved today",
    icon: AlertTriangle,
    iconColor: "text-red-600 dark:text-red-400",
  },
  {
    label: "Capacity Score",
    value: "92%",
    change: null,
    changeType: null,
    description: "Above target",
    icon: TrendingUp,
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    label: "Resource Availability",
    value: "94%",
    change: null,
    changeType: null,
    description: "156 of 166 active",
    icon: CheckCircle,
    iconColor: "text-blue-600 dark:text-blue-400",
  },
];

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState("today");
  const { theme } = useThemeStore();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4 transition-colors">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 transition-colors">
              Dashboard
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1 transition-colors">
              Real-time resource optimization and capacity management
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className={`border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                theme === "light"
                  ? "border-slate-200 bg-white text-slate-900"
                  : "border-slate-600 bg-slate-700 text-slate-100"
              }`}
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
              className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 shadow-sm flex justify-between transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wide transition-colors">
                    {kpi.label}
                  </p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-2 transition-colors">
                    {kpi.value}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 transition-colors">
                    {kpi.description}
                  </p>
                </div>
              </div>

              <div>
                {kpi.icon && (
                  <div className="mt-4">
                    <kpi.icon
                      className={`w-8 h-8 ${kpi.iconColor} transition-colors`}
                    />
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
