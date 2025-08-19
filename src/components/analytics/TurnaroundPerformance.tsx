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

const TurnaroundPerformance = () => {
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

  return (
    <div className="space-y-8">
      {/* Turnaround Time Performance Chart */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Turnaround Time Performance
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={turnaroundData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#666" }}
              />
              <YAxis
                domain={[0, 220]}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#666" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  color: "black",
                }}
                labelFormatter={(value) => `Time: ${value}`}
                formatter={(value) => [`${value} min`, "Turnaround Time"]}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#9ca3af"
                strokeWidth={2}
                fill="#9ca3af"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Resource Allocation by Type Chart */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Resource Allocation by Type
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={resourceAllocationData} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#666" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#666" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  color: "black",
                }}
                formatter={(value, name) => [value, name]}
              />
              <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="circle" />
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
