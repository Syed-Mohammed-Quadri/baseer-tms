// Data for conflict resolution metrics
const resolutionMetrics = [
  { name: "Buffer Violations", incidents: 12, color: "#ef4444" },
  { name: "Resource Conflicts", incidents: 8, color: "#f97316" },
  { name: "Maintenance Windows", incidents: 15, color: "#f59e0b" },
  { name: "Schedule Changes", incidents: 25, color: "#3b82f6" },
  { name: "Weather Impact", incidents: 6, color: "#8b5cf6" },
];
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Settings } from "lucide-react";

const ResourceConflicts = () => {
  // Data for the pie chart
  const conflictAnalysisData = [
    { name: "Schedule Changes", value: 38, color: "#3b82f6" },
    { name: "Maintenance Windows", value: 23, color: "#f59e0b" },
    { name: "Buffer Violations", value: 18, color: "#ef4444" },
    { name: "Resource Conflicts", value: 12, color: "#f97316" },
    { name: "Weather Impact", value: 9, color: "#8b5cf6" },
  ];

  // Data for conflict resolution metrics
  const resolutionMetrics = [
    { name: "Buffer Violations", incidents: 12, color: "#ef4444" },
    { name: "Resource Conflicts", incidents: 8, color: "#f97316" },
    { name: "Maintenance Windows", incidents: 15, color: "#f59e0b" },
    { name: "Schedule Changes", incidents: 25, color: "#3b82f6" },
    { name: "Weather Impact", incidents: 6, color: "#8b5cf6" },
  ];

  interface CustomLabelProps {
    cx?: number;
    cy?: number;
    midAngle?: number;
    innerRadius?: number;
    outerRadius?: number;
    percent?: number;
    name?: string;
  }

  const CustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    name,
  }: CustomLabelProps) => {
    // Return null if required props are missing
    if (
      !cx ||
      !cy ||
      !midAngle ||
      !innerRadius ||
      !outerRadius ||
      !percent ||
      !name
    ) {
      return null;
    }
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#f97316"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="12"
        fontWeight="500"
      >
        {`${name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Resource Conflict Analysis - Pie Chart */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
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
                  `${name} ${Math.round(percent ?? 0 * 100)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {conflictAnalysisData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                formatter={(value) => [`${value}%`, "Percentage"]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Conflict Resolution Metrics */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
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
                <span className="text-gray-900 text-sm">{metric.name}</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-gray-900">
                  {metric.incidents}
                </span>
                <div className="text-xs text-gray-500">incidents</div>
              </div>
            </div>
          ))}
        </div>

        {/* RMS Optimization Section */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <Settings className="w-4 h-4 text-gray-600 mr-2" />
            <span className="font-medium text-gray-900">RMS Optimization</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">
                Current rule engine efficiency:
              </span>
              <span className="font-semibold text-gray-900">94.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">
                Automated conflict resolution:
              </span>
              <span className="font-semibold text-gray-900">92%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceConflicts;
