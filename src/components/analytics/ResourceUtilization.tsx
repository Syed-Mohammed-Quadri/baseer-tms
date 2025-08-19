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

const ResourceUtilization = () => {
  // Data for the main bar chart
  const resourceData = [
    { name: "Gates", value: 42, active: 12 },
    { name: "Contact Stands", value: 33, active: 24 },
    { name: "Remote Stands", value: 30, active: 10 },
    { name: "Counters", value: 60, active: 5 },
  ];

  return (
    <div className="space-y-8">
      {/* Main Bar Chart */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Resource Utilization by Type
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={resourceData} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9ca3af" }}
              />
              <YAxis
                domain={[0, 60]}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9ca3af" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                formatter={(value) => [`${value}%`, "Utilization"]}
              />
              <Bar
                dataKey="value"
                fill="#1f2937"
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
            className="bg-white p-6 rounded-lg border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">
                {resource.name}
              </h4>
              <span className="text-2xl font-bold text-gray-900">
                {resource.value}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gray-800 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${resource.value}%` }}
                />
              </div>
            </div>

            {/* Active Resources */}
            <div className="text-sm text-gray-600">
              Active: {resource.active} resources
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceUtilization;
