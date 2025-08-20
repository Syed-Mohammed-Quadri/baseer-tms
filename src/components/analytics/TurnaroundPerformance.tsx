import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  Tooltip,
} from "recharts";
import { useThemeStore } from "@/store/theme-store";

const TurnaroundPerformance = () => {
  const { theme } = useThemeStore();

  // Data for the turnaround time performance chart
  const turnaroundData = [
    { time: "00:00", value: 165 },
    { time: "01:00", value: 120 },
    { time: "02:00", value: 110 },
    { time: "03:00", value: 115 },
    { time: "04:00", value: 125 },
    { time: "05:00", value: 140 },
    { time: "06:00", value: 190 },
    { time: "07:00", value: 185 },
    { time: "08:00", value: 120 },
    { time: "09:00", value: 140 },
    { time: "10:00", value: 95 },
    { time: "11:00", value: 85 },
    { time: "12:00", value: 100 },
    { time: "13:00", value: 180 },
    { time: "14:00", value: 175 },
    { time: "15:00", value: 190 },
    { time: "16:00", value: 195 },
    { time: "17:00", value: 110 },
    { time: "18:00", value: 160 },
    { time: "19:00", value: 140 },
    { time: "20:00", value: 180 },
    { time: "21:00", value: 185 },
    { time: "22:00", value: 170 },
    { time: "23:00", value: 160 },
  ];

  // Data for resource allocation by type
  const resourceAllocationData = [
    {
      name: "Contact Stands",
      Confirmed: 6,
      Planned: 5,
      Delayed: 1,
      Maintenance: 1,
      Completed: 10,
    },
    {
      name: "Remote Stands",
      Confirmed: 2,
      Planned: 3,
      Delayed: 1,
      Maintenance: 0,
      Completed: 4,
    },
    {
      name: "Gates",
      Confirmed: 4,
      Planned: 2,
      Delayed: 0,
      Maintenance: 0,
      Completed: 6,
    },
    {
      name: "Counters",
      Confirmed: 1,
      Planned: 1,
      Delayed: 0,
      Maintenance: 0,
      Completed: 3,
    },
  ];

  // Theme-aware colors
  const textColor = theme === "light" ? "#666" : "#94a3b8";
  const gridColor = theme === "light" ? "#f0f0f0" : "#334155";
  const areaStroke = theme === "light" ? "#9ca3af" : "#64748b";
  const areaFill = theme === "light" ? "#9ca3af" : "#64748b";

  return (
    <div className="space-y-8">
      {/* Turnaround Time Performance Chart */}
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
          Turnaround Time Performance
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={turnaroundData}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: textColor }}
              />
              <YAxis
                domain={[0, 220]}
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
                labelFormatter={(value) => `Time: ${value}`}
                formatter={(value) => [`${value} min`, "Turnaround Time"]}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke={areaStroke}
                strokeWidth={2}
                fill={areaFill}
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Resource Allocation by Type Chart */}
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
          Resource Allocation by Type
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={resourceAllocationData} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: textColor }}
              />
              <YAxis
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
                formatter={(value, name) => [value, name]}
              />
              <Legend
                wrapperStyle={{
                  paddingTop: "20px",
                  color: textColor,
                }}
                iconType="circle"
              />
              <Bar dataKey="Confirmed" stackId="a" fill="#10b981" />
              <Bar dataKey="Planned" stackId="a" fill="#3b82f6" />
              <Bar dataKey="Delayed" stackId="a" fill="#ef4444" />
              <Bar dataKey="Maintenance" stackId="a" fill="#f97316" />
              <Bar dataKey="Completed" stackId="a" fill="#059669" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TurnaroundPerformance;
