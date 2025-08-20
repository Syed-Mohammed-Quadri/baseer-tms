import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useThemeStore } from "@/store/theme-store";

const ResourceUtilization = () => {
  const { theme } = useThemeStore();

  // Data for the main bar chart
  const resourceData = [
    { name: "Gates", value: 42, active: 12 },
    { name: "Contact Stands", value: 33, active: 24 },
    { name: "Remote Stands", value: 30, active: 10 },
    { name: "Counters", value: 60, active: 5 },
  ];

  // Theme-aware colors
  const textColor = theme === "light" ? "#9ca3af" : "#94a3b8";
  const gridColor = theme === "light" ? "#f0f0f0" : "#334155";
  const barFill = theme === "light" ? "#1f2937" : "#3b82f6"; // Blue bars for dark theme

  return (
    <div className="space-y-8">
      {/* Main Bar Chart */}
      <div
        className={`p-6 rounded-lg border transition-colors ${
          theme === "light"
            ? "bg-white border-gray-200"
            : "bg-slate-800 border-slate-700"
        }`}
      >
        <h3
          className={`text-lg font-semibold mb-6 transition-colors ${
            theme === "light" ? "text-gray-900" : "text-slate-100"
          }`}
        >
          Resource Utilization by Type
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={resourceData} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: textColor }}
              />
              <YAxis
                domain={[0, 60]}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: textColor }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme === "light" ? "white" : "#1e293b",
                  border:
                    theme === "light"
                      ? "1px solid #e5e7eb"
                      : "1px solid #475569",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  color: theme === "light" ? "black" : "white",
                }}
                formatter={(value) => [`${value}%`, "Utilization"]}
              />
              <Bar
                dataKey="value"
                fill={barFill}
                radius={[0, 0, 0, 0]}
                barSize={120}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resourceData.map((resource) => (
          <div
            key={resource.name}
            className={`p-6 rounded-lg border transition-colors ${
              theme === "light"
                ? "bg-white border-gray-200"
                : "bg-slate-800 border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h4
                className={`text-lg font-semibold transition-colors ${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              >
                {resource.name}
              </h4>
              <span
                className={`text-2xl font-bold transition-colors ${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              >
                {resource.value}%
              </span>
            </div>

            {/* Progress Bar */}
            {/* Progress Bar */}
            <div className="mb-4">
              <div
                className={`w-full rounded-full h-2 transition-colors ${
                  theme === "light" ? "bg-gray-200" : "bg-slate-600"
                }`}
              >
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    theme === "light" ? "bg-gray-800" : "bg-blue-500"
                  }`}
                  style={{ width: `${resource.value}%` }}
                />
              </div>
            </div>

            {/* Active Resources */}
            <div
              className={`text-sm transition-colors ${
                theme === "light" ? "text-gray-600" : "text-slate-400"
              }`}
            >
              Active: {resource.active} resources
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceUtilization;
