"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Clock,
  DollarSign,
  Filter,
  Gauge,
  CheckCircle,
  Zap,
} from "lucide-react";
import TurnaroundPerformance from "@/components/analytics/TurnaroundPerformance";
import ResourceUtilization from "@/components/analytics/ResourceUtilization";
import ResourceConflicts from "@/components/analytics/ResourceConflicts";

const timelineData = [
  { time: "00:00", utilization: 45, conflicts: 2, efficiency: 78 },
  { time: "04:00", utilization: 32, conflicts: 1, efficiency: 85 },
  { time: "08:00", utilization: 78, conflicts: 5, efficiency: 72 },
  { time: "12:00", utilization: 95, conflicts: 8, efficiency: 68 },
  { time: "16:00", utilization: 88, conflicts: 3, efficiency: 81 },
  { time: "20:00", utilization: 67, conflicts: 2, efficiency: 84 },
];

const resourceData = [
  { name: "Gates", allocated: 38, available: 42, efficiency: 90 },
  { name: "Ground Crew", allocated: 142, available: 156, efficiency: 91 },
  { name: "GSE Units", allocated: 79, available: 87, efficiency: 91 },
  { name: "Maintenance", allocated: 6, available: 8, efficiency: 75 },
];

const performanceData = [
  { month: "Jan", onTime: 89, satisfaction: 85, efficiency: 82 },
  { month: "Feb", onTime: 92, satisfaction: 88, efficiency: 86 },
  { month: "Mar", onTime: 87, satisfaction: 83, efficiency: 84 },
  { month: "Apr", onTime: 94, satisfaction: 91, efficiency: 89 },
  { month: "May", onTime: 91, satisfaction: 89, efficiency: 87 },
  { month: "Jun", onTime: 93, satisfaction: 92, efficiency: 91 },
];

const conflictData = [
  { name: "Gate Conflicts", value: 35, color: "#ef4444" },
  { name: "Crew Conflicts", value: 28, color: "#f59e0b" },
  { name: "Equipment", value: 22, color: "#0ea5e9" },
  { name: "Scheduling", value: 15, color: "#22c55e" },
];

const kpis = [
  {
    label: "Resource Utilization",
    value: "41%",
    change: 3.2,
    changeType: "positive" as const,
    icon: Gauge,
    iconColor: "text-blue-600",
  },
  {
    label: "Assignment Success Rate",
    value: "35%",
    change: 1.8,
    changeType: "positive" as const,
    icon: CheckCircle,
    iconColor: "text-green-600",
  },
  {
    label: "Avg. Turnaround Time",
    value: "149 min",
    change: -5,
    changeType: "positive" as const,
    icon: Clock,
    iconColor: "text-green-600",
  },
  {
    label: "Active Resources",
    value: "51",
    change: 2,
    changeType: "negative" as const,
    description: "2 delayed",
    icon: Zap,
    iconColor: "text-orange-600",
  },
];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("today");
  const [selectedMetric, setSelectedMetric] = useState("utilization");
  const [activeTab, setActiveTab] = useState("turnaround");

  const tabs = [
    { id: "turnaround", label: "Turnaround Performance" },
    { id: "utilization", label: "Resource Utilization" },
    { id: "conflicts", label: "Resource Conflicts" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Analytics Dashboard
            </h1>
            <p className="text-slate-900 mt-1">
              Performance insights and operational analytics
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none text-slate-900 focus:ring-2 focus:ring-blue-500"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
            </select>
            <button className="flex items-center px-3 py-2 border text-slate-900 border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <Filter className="w-4 h-4 mr-2 text-slate-900" />
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
              className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className=" font-medium text-slate-900  opacity-80">
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
                  </div>
                </div>
                <kpi.icon className={`w-8 h-8   ${kpi.iconColor} `} />
              </div>
            </div>
          ))}
        </div>

        <div className="w-full">
          {/* Tabs Navigation */}
          <div className="flex border-b border-gray-200 bg-white">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600 bg-blue-50"
                    : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white p-6">
            {activeTab === "turnaround" && <TurnaroundPerformance />}

            {activeTab === "utilization" && <ResourceUtilization />}

            {activeTab === "conflicts" && <ResourceConflicts />}
          </div>
        </div>
      </div>
    </div>
  );
}
