import React from "react";
import { Settings, BarChart3, TrendingUp, RefreshCw } from "lucide-react";

const RuleConfigurationEngine = () => {
  const stats = [
    {
      title: "Active Rules",
      value: "12",
      icon: Settings,
      iconColor: "text-gray-600",
    },
    {
      title: "Strategies",
      value: "3",
      icon: BarChart3,
      iconColor: "text-blue-600",
    },
    {
      title: "Efficiency",
      value: "94.7%",
      icon: TrendingUp,
      iconColor: "text-green-600",
    },
    {
      title: "Pending",
      value: "5",
      icon: RefreshCw,
      iconColor: "text-red-600",
    },
  ];

  return (
    <div className=" bg-gray-50 ">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Rule Configuration Engine
            </h1>
            <p className="text-gray-600 mt-1">
              Advanced rule management and allocation strategy optimization
            </p>
          </div>
          <div className="flex items-center bg-green-50 text-green-700 px-3 py-2 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm font-medium">System Active</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-300 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className="p-2 bg-gray-50 rounded-lg">
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RuleConfigurationEngine;
