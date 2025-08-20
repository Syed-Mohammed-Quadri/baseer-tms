"use client";

import { useState } from "react";

import {
  TrendingUp,
  TrendingDown,
  Clock,
  Filter,
  Gauge,
  CheckCircle,
  Zap,
} from "lucide-react";
import TurnaroundPerformance from "@/components/analytics/TurnaroundPerformance";
import ResourceUtilization from "@/components/analytics/ResourceUtilization";
import ResourceConflicts from "@/components/analytics/ResourceConflicts";
import { useThemeStore } from "@/store/theme-store";

export default function AnalyticsPage() {
  const { theme } = useThemeStore();
  const [timeRange, setTimeRange] = useState("today");
  // const [selectedMetric, setSelectedMetric] = useState("utilization");
  const [activeTab, setActiveTab] = useState("turnaround");

  const kpis = [
    {
      label: "Resource Utilization",
      value: "41%",
      change: 3.2,
      changeType: "positive" as const,
      icon: Gauge,
      iconColor: theme === "light" ? "text-blue-600" : "text-blue-400",
    },
    {
      label: "Assignment Success Rate",
      value: "35%",
      change: 1.8,
      changeType: "positive" as const,
      icon: CheckCircle,
      iconColor: theme === "light" ? "text-green-600" : "text-green-400",
    },
    {
      label: "Avg. Turnaround Time",
      value: "149 min",
      change: -5,
      changeType: "positive" as const,
      icon: Clock,
      iconColor: theme === "light" ? "text-green-600" : "text-green-400",
    },
    {
      label: "Active Resources",
      value: "51",
      change: 2,
      changeType: "negative" as const,
      description: "2 delayed",
      icon: Zap,
      iconColor: theme === "light" ? "text-orange-600" : "text-orange-400",
    },
  ];

  const tabs = [
    { id: "turnaround", label: "Turnaround Performance" },
    { id: "utilization", label: "Resource Utilization" },
    { id: "conflicts", label: "Resource Conflicts" },
  ];

  return (
    <div
      className={`min-h-screen transition-colors ${
        theme === "light" ? "bg-slate-50" : "bg-slate-900"
      }`}
    >
      {/* Header */}
      <div
        className={`border-b px-6 py-4 transition-colors ${
          theme === "light"
            ? "bg-white border-slate-200"
            : "bg-slate-800 border-slate-700"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h1
              className={`text-2xl font-semibold transition-colors ${
                theme === "light" ? "text-slate-900" : "text-slate-100"
              }`}
            >
              Analytics Dashboard
            </h1>
            <p
              className={`mt-1 transition-colors ${
                theme === "light" ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Performance insights and operational analytics
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative inline-block">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className={`appearance-none border rounded-lg px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                  theme === "light"
                    ? "border-slate-200 text-slate-900 bg-white"
                    : "border-slate-600 text-slate-100 bg-slate-700"
                }`}
              >
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
              </select>

              {/* Custom Arrow */}
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  className={`w-4 h-4 ${
                    theme === "light" ? "text-gray-500" : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <button
              className={`flex items-center px-3 py-2 border rounded-lg transition-colors ${
                theme === "light"
                  ? "border-slate-200 text-slate-900 hover:bg-slate-50"
                  : "border-slate-600 text-slate-100 hover:bg-slate-700"
              }`}
            >
              <Filter
                className={`w-4 h-4 mr-2 ${
                  theme === "light" ? "text-slate-900" : "text-slate-100"
                }`}
              />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className={`rounded-lg border p-6 shadow-sm transition-colors ${
                theme === "light"
                  ? "bg-white border-slate-200"
                  : "bg-slate-800 border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p
                    className={`font-medium opacity-80 ${
                      theme === "light" ? "text-slate-900" : "text-slate-100"
                    }`}
                  >
                    {kpi.label}
                  </p>
                  <p
                    className={`text-3xl font-bold mt-2 ${
                      theme === "light" ? "text-slate-900" : "text-slate-100"
                    }`}
                  >
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
                  </div>
                </div>
                <kpi.icon className={`w-8 h-8 ${kpi.iconColor}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="w-full">
          {/* Tabs Navigation */}
          <div
            className={`flex border-b transition-colors ${
              theme === "light"
                ? "border-gray-200 bg-white"
                : "border-slate-700 bg-slate-800"
            }`}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? theme === "light"
                      ? "border-blue-500 text-blue-600 bg-blue-50"
                      : "border-blue-400 text-blue-300 bg-blue-900/30"
                    : theme === "light"
                    ? "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                    : "border-transparent text-slate-400 hover:text-slate-100 hover:border-slate-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            className={`p-6 transition-colors ${
              theme === "light" ? "bg-white" : "bg-slate-800"
            }`}
          >
            {activeTab === "turnaround" && <TurnaroundPerformance />}

            {activeTab === "utilization" && <ResourceUtilization />}

            {activeTab === "conflicts" && <ResourceConflicts />}
          </div>
        </div>
      </div>
    </div>
  );
}
