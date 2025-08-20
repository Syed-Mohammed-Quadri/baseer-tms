import React from "react";
import { Settings, BarChart3, TrendingUp, RefreshCw } from "lucide-react";
import { useThemeStore } from "@/store/theme-store";

const RuleConfigurationEngine = () => {
  const { theme } = useThemeStore();

  const stats = [
    {
      title: "Active Rules",
      value: "12",
      icon: Settings,
      iconColor: theme === "light" ? "text-gray-600" : "text-slate-400",
    },
    {
      title: "Strategies",
      value: "3",
      icon: BarChart3,
      iconColor: theme === "light" ? "text-blue-600" : "text-blue-400",
    },
    {
      title: "Efficiency",
      value: "94.7%",
      icon: TrendingUp,
      iconColor: theme === "light" ? "text-green-600" : "text-green-400",
    },
    {
      title: "Pending",
      value: "5",
      icon: RefreshCw,
      iconColor: theme === "light" ? "text-red-600" : "text-red-400",
    },
  ];

  return (
    <div
      className={`transition-colors ${
        theme === "light" ? "bg-gray-50" : "bg-slate-900"
      }`}
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1
              className={`text-2xl font-semibold ${
                theme === "light" ? "text-gray-900" : "text-slate-100"
              }`}
            >
              Rule Configuration Engine
            </h1>
            <p
              className={`mt-1 ${
                theme === "light" ? "text-gray-600" : "text-slate-400"
              }`}
            >
              Advanced rule management and allocation strategy optimization
            </p>
          </div>
          <div
            className={`flex items-center px-3 py-2 rounded-lg ${
              theme === "light"
                ? "bg-green-50 text-green-700"
                : "bg-green-900/30 text-green-300"
            }`}
          >
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
            className={`rounded-lg border p-6 transition-colors ${
              theme === "light"
                ? "bg-white border-gray-300"
                : "bg-slate-800 border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`text-sm mb-1 ${
                    theme === "light" ? "text-gray-600" : "text-slate-400"
                  }`}
                >
                  {stat.title}
                </p>
                <p
                  className={`text-3xl font-bold ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  {stat.value}
                </p>
              </div>
              <div
                className={`p-2 rounded-lg ${
                  theme === "light" ? "bg-gray-50" : "bg-slate-700"
                }`}
              >
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
