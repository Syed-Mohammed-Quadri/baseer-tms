import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Settings } from "lucide-react";
import { useThemeStore } from "@/store/theme-store"; // Ensure this import path matches your project

const ResourceConflicts = () => {
  const { theme } = useThemeStore();

  const conflictAnalysisData = [
    { name: "Schedule Changes", value: 38, color: "#3b82f6" },
    { name: "Maintenance Windows", value: 23, color: "#f59e0b" },
    { name: "Buffer Violations", value: 18, color: "#ef4444" },
    { name: "Resource Conflicts", value: 12, color: "#f97316" },
    { name: "Weather Impact", value: 9, color: "#8b5cf6" },
  ];

  const resolutionMetrics = [
    { name: "Buffer Violations", incidents: 12, color: "#ef4444" },
    { name: "Resource Conflicts", incidents: 8, color: "#f97316" },
    { name: "Maintenance Windows", incidents: 15, color: "#f59e0b" },
    { name: "Schedule Changes", incidents: 25, color: "#3b82f6" },
    { name: "Weather Impact", incidents: 6, color: "#8b5cf6" },
  ];

  // Theme-specific colors
  const cardBg = theme === "light" ? "bg-white" : "bg-slate-800";
  const borderClr = theme === "light" ? "border-gray-200" : "border-slate-700";
  const textMain = theme === "light" ? "text-gray-900" : "text-slate-100";
  const textSub = theme === "light" ? "text-gray-600" : "text-slate-400";
  const textIncidents = theme === "light" ? "text-gray-900" : "text-slate-100";
  const tooltipBg = theme === "light" ? "white" : "#1e293b";
  const tooltipBorder =
    theme === "light" ? "1px solid #e5e7eb" : "1px solid #475569";
  const tooltipColor = theme === "light" ? "black" : "white";
  const rmsBg = theme === "light" ? "bg-gray-100" : "bg-slate-700";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Resource Conflict Analysis - Pie Chart */}
      <div
        className={`${cardBg} p-6 rounded-lg border ${borderClr} transition-colors`}
      >
        <h3
          className={`text-lg font-semibold mb-6 transition-colors ${textMain}`}
        >
          Resource Conflict Analysis
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={conflictAnalysisData}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ name, percent }) =>
                  `${name} ${Math.round((percent ?? 0) * 100)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {conflictAnalysisData.map((entry, index) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: tooltipBorder,
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  color: tooltipColor,
                }}
                formatter={(value) => [`${value}%`, "Percentage"]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Conflict Resolution Metrics */}
      <div
        className={`${cardBg} p-6 rounded-lg border ${borderClr} transition-colors`}
      >
        <h3
          className={`text-lg font-semibold mb-6 transition-colors ${textMain}`}
        >
          Conflict Resolution Metrics
        </h3>
        {/* Metrics List */}
        <div className="space-y-4 mb-6">
          {resolutionMetrics.map((metric) => (
            <div
              key={metric.name}
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: metric.color }}
                />
                <span className={`text-sm transition-colors ${textMain}`}>
                  {metric.name}
                </span>
              </div>
              <div className="text-right">
                <span
                  className={`text-2xl font-bold transition-colors ${textIncidents}`}
                >
                  {metric.incidents}
                </span>
                <div className={`text-xs transition-colors ${textSub}`}>
                  incidents
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* RMS Optimization Section */}
        <div className={`${rmsBg} p-4 rounded-lg transition-colors`}>
          <div className="flex items-center mb-3">
            <Settings className={`w-4 h-4 mr-2 ${textSub}`} />
            <span className={`font-medium ${textMain}`}>RMS Optimization</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className={textSub}>Current rule engine efficiency:</span>
              <span className={`font-semibold ${textMain}`}>94.2%</span>
            </div>
            <div className="flex justify-between">
              <span className={textSub}>Automated conflict resolution:</span>
              <span className={`font-semibold ${textMain}`}>92%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceConflicts;
