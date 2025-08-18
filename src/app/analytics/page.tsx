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
  Calendar,
  Filter,
} from "lucide-react";

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
    label: "Average Turnaround",
    value: "143 min",
    change: -5,
    changeType: "positive" as const,
    icon: Clock,
  },
  {
    label: "On-Time Performance",
    value: "91%",
    change: 3,
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  {
    label: "Cost Efficiency",
    value: "$1.2M",
    change: -8,
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    label: "Resource Utilization",
    value: "87%",
    change: 2,
    changeType: "positive" as const,
    icon: TrendingUp,
  },
];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("today");
  const [selectedMetric, setSelectedMetric] = useState("utilization");

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
                  </div>
                </div>
                <kpi.icon className="w-8 h-8 text-slate-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Timeline Performance Chart */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Timeline Performance
              </h3>
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="text-sm border border-slate-200 rounded px-2 py-1 text-slate-900"
              >
                <option value="utilization">Utilization</option>
                <option value="conflicts">Conflicts</option>
                <option value="efficiency">Efficiency</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={timelineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="time" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey={selectedMetric}
                  stroke="#0ea5e9"
                  fill="#0ea5e9"
                  fillOpacity={0.1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Resource Allocation Chart */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Resource Allocation
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={resourceData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis type="number" stroke="#64748b" />
                <YAxis
                  dataKey="name"
                  type="category"
                  stroke="#64748b"
                  width={80}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="allocated" fill="#0ea5e9" />
                <Bar dataKey="available" fill="#e2e8f0" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Row Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Monthly Performance Trends */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Monthly Performance Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="onTime"
                  stroke="#22c55e"
                  strokeWidth={2}
                  name="On-Time %"
                />
                <Line
                  type="monotone"
                  dataKey="satisfaction"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  name="Satisfaction %"
                />
                <Line
                  type="monotone"
                  dataKey="efficiency"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  name="Efficiency %"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Conflict Distribution */}
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              Conflict Distribution
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={conflictData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {conflictData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {conflictData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-slate-900">{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Table */}
        <div className="mt-8 bg-white rounded-lg border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <h3 className="text-lg font-semibold text-slate-900">
              Resource Performance Summary
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Resource Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Utilization
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Efficiency
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Conflicts
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {resourceData.map((resource, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                      {resource.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {Math.round(
                        (resource.allocated / resource.available) * 100
                      )}
                      %
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {resource.efficiency}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {Math.floor(Math.random() * 5)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Optimal
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
