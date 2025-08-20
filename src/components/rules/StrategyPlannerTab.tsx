import React, { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Target,
  AlertCircle,
  Play,
  Settings,
  FileText,
  Shield,
  Minus,
  Zap,
  AlertTriangle,
} from "lucide-react";
import { useThemeStore } from "@/store/theme-store";

const StrategyPlannerTab = () => {
  const { theme } = useThemeStore();
  const [activeSubTab, setActiveSubTab] = useState("kpi-dashboard");

  const strategies = [
    {
      id: "current",
      name: "Current Strategy",
      description: "Existing allocation rules and priorities",
      status: "active",
      statusColor:
        theme === "light"
          ? "bg-green-100 text-green-800"
          : "bg-green-900/30 text-green-300",
      efficiency: 87,
      cost: 245,
      safety: 94,
      satisfaction: 89,
    },
    {
      id: "ai-optimized",
      name: "AI Optimized",
      description: "Machine learning enhanced allocation",
      status: "draft",
      statusColor:
        theme === "light"
          ? "bg-yellow-100 text-yellow-800"
          : "bg-yellow-900/30 text-yellow-300",
      efficiency: 94,
      cost: 189,
      safety: 96,
      satisfaction: 93,
    },
    {
      id: "peak-season",
      name: "Peak Season",
      description: "High traffic period optimization",
      status: "testing",
      statusColor:
        theme === "light"
          ? "bg-blue-100 text-blue-800"
          : "bg-blue-900/30 text-blue-300",
      efficiency: 91,
      cost: 267,
      safety: 92,
      satisfaction: 85,
    },
  ];

  const kpiMetrics = [
    {
      id: "gate-utilization",
      name: "Gate Utilization",
      value: 87,
      unit: "%",
      target: 90,
      targetText: "Target: 90%",
      progress: 97,
      weight: 25,
      category: "Efficiency",
      icon: BarChart3,
      trend: "up",
      trendColor: "text-green-500",
    },
    {
      id: "average-delay",
      name: "Average Delay",
      value: 12.3,
      unit: "min",
      target: 10,
      targetText: "Target: 10min",
      progress: 100,
      weight: 30,
      category: "Efficiency",
      icon: TrendingDown,
      trend: "down",
      trendColor: "text-red-500",
    },
    {
      id: "operational-cost",
      name: "Operational Cost",
      value: 245,
      unit: "k$",
      target: 200,
      targetText: "Target: 200k$",
      progress: 82,
      weight: 20,
      category: "Cost",
      icon: TrendingDown,
      trend: "neutral",
      trendColor: "text-gray-500",
    },
    {
      id: "safety-score",
      name: "Safety Score",
      value: 94,
      unit: "%",
      target: 95,
      targetText: "Target: 95%",
      progress: 99,
      weight: 25,
      category: "Safety",
      icon: AlertCircle,
      trend: "up",
      trendColor: "text-green-500",
    },
  ];

  const performanceAnalysis = [
    {
      id: "gate-utilization",
      name: "Gate Utilization",
      current: 87,
      target: 90,
      percentage: 96.7,
      gap: "3.0 % gap",
      icon: BarChart3,
      trend: "up",
    },
    {
      id: "average-delay",
      name: "Average Delay",
      current: "12.3min",
      target: "10min",
      percentage: 100.0,
      gap: "Target met",
      icon: BarChart3,
      trend: "down",
    },
    {
      id: "operational-cost",
      name: "Operational Cost",
      current: "245k$",
      target: "200k$",
      percentage: 81.6,
      gap: "45.0 k$ gap",
      icon: TrendingDown,
      trend: "neutral",
    },
    {
      id: "safety-score",
      name: "Safety Score",
      current: 94,
      target: 95,
      percentage: 98.9,
      gap: "1.0 % gap",
      icon: AlertCircle,
      trend: "up",
    },
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 95) return "bg-green-500";
    if (percentage >= 80) return "bg-yellow-500";
    return "bg-red-500";
  };

  const subTabs = [
    { id: "kpi-dashboard", label: "KPI Dashboard" },
    { id: "what-if-analysis", label: "What-If Analysis" },
  ];

  return (
    <div className="space-y-6">
      {/* Strategy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {strategies.map((strategy) => (
          <div
            key={strategy.id}
            className={`border rounded-lg p-6 transition-colors ${
              theme === "light"
                ? "bg-white border-gray-200"
                : "bg-slate-800 border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3
                className={`text-lg font-semibold ${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              >
                {strategy.name}
              </h3>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${strategy.statusColor}`}
              >
                {strategy.status}
              </span>
            </div>
            <p
              className={`text-sm mb-4 ${
                theme === "light" ? "text-gray-600" : "text-slate-400"
              }`}
            >
              {strategy.description}
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span
                  className={`${
                    theme === "light" ? "text-gray-600" : "text-slate-400"
                  }`}
                >
                  Efficiency
                </span>
                <div
                  className={`font-semibold ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  {strategy.efficiency}%
                </div>
              </div>
              <div>
                <span
                  className={`${
                    theme === "light" ? "text-gray-600" : "text-slate-400"
                  }`}
                >
                  Cost
                </span>
                <div
                  className={`font-semibold ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  ${strategy.cost}k
                </div>
              </div>
              <div>
                <span
                  className={`${
                    theme === "light" ? "text-gray-600" : "text-slate-400"
                  }`}
                >
                  Safety
                </span>
                <div
                  className={`font-semibold ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  {strategy.safety}%
                </div>
              </div>
              <div>
                <span
                  className={`${
                    theme === "light" ? "text-gray-600" : "text-slate-400"
                  }`}
                >
                  Satisfaction
                </span>
                <div
                  className={`font-semibold ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  {strategy.satisfaction}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sub Tabs */}
      <div
        className={`flex border-b ${
          theme === "light" ? "border-gray-200" : "border-slate-700"
        }`}
      >
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id)}
            className={`px-4 py-2 border-b-2 font-medium text-sm transition-colors ${
              activeSubTab === tab.id
                ? theme === "light"
                  ? "border-blue-500 text-blue-600"
                  : "border-blue-400 text-blue-300"
                : theme === "light"
                ? "border-transparent text-gray-600 hover:text-gray-900"
                : "border-transparent text-slate-400 hover:text-slate-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* KPI Dashboard Content */}
      {activeSubTab === "kpi-dashboard" && (
        <div className="space-y-6">
          {/* KPI Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiMetrics.map((metric) => (
              <div
                key={metric.id}
                className={`border rounded-lg p-6 transition-colors ${
                  theme === "light"
                    ? "bg-white border-gray-200"
                    : "bg-slate-800 border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <metric.icon
                      className={`w-5 h-5 mr-2 ${
                        theme === "light" ? "text-gray-600" : "text-slate-400"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        theme === "light" ? "text-gray-900" : "text-slate-100"
                      }`}
                    >
                      {metric.name}
                    </span>
                  </div>
                  {getTrendIcon(metric.trend)}
                </div>

                <div className="mb-4">
                  <div
                    className={`text-2xl font-bold ${
                      theme === "light" ? "text-gray-900" : "text-slate-100"
                    }`}
                  >
                    {metric.value}{" "}
                    <span
                      className={`text-sm font-normal ${
                        theme === "light" ? "text-gray-600" : "text-slate-400"
                      }`}
                    >
                      {metric.unit}
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span
                      className={`${
                        theme === "light" ? "text-gray-600" : "text-slate-400"
                      }`}
                    >
                      {metric.targetText}
                    </span>
                    <span
                      className={`font-medium ${
                        theme === "light" ? "text-gray-900" : "text-slate-100"
                      }`}
                    >
                      {metric.progress}%
                    </span>
                  </div>
                  <div
                    className={`w-full rounded-full h-2 ${
                      theme === "light" ? "bg-gray-200" : "bg-slate-600"
                    }`}
                  >
                    <div
                      className={`h-2 rounded-full ${getProgressColor(
                        metric.progress
                      )}`}
                      style={{ width: `${Math.min(metric.progress, 100)}%` }}
                    />
                  </div>
                </div>

                <div
                  className={`flex justify-between text-xs ${
                    theme === "light" ? "text-gray-600" : "text-slate-400"
                  }`}
                >
                  <span>Weight: {metric.weight}%</span>
                  <span>{metric.category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Performance Analysis */}
          <div
            className={`border rounded-lg transition-colors ${
              theme === "light"
                ? "bg-white border-gray-200"
                : "bg-slate-800 border-slate-700"
            }`}
          >
            <div
              className={`p-6 border-b ${
                theme === "light" ? "border-gray-200" : "border-slate-700"
              }`}
            >
              <h3
                className={`text-lg font-semibold ${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              >
                Performance Analysis
              </h3>
            </div>
            <div
              className={`divide-y ${
                theme === "light" ? "divide-gray-200" : "divide-slate-700"
              }`}
            >
              {performanceAnalysis.map((item) => (
                <div key={item.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className={`p-2 rounded-lg mr-4 ${
                          theme === "light" ? "bg-blue-50" : "bg-blue-900/30"
                        }`}
                      >
                        <item.icon
                          className={`w-5 h-5 ${
                            theme === "light"
                              ? "text-blue-600"
                              : "text-blue-400"
                          }`}
                        />
                      </div>
                      <div>
                        <h4
                          className={`text-lg font-semibold ${
                            theme === "light"
                              ? "text-gray-900"
                              : "text-slate-100"
                          }`}
                        >
                          {item.name}
                        </h4>
                        <p
                          className={`text-sm ${
                            theme === "light"
                              ? "text-gray-600"
                              : "text-slate-400"
                          }`}
                        >
                          Current: {item.current} | Target: {item.target}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">
                          {item.percentage}%
                        </div>
                        <div
                          className={`text-sm ${
                            theme === "light"
                              ? "text-gray-600"
                              : "text-slate-400"
                          }`}
                        >
                          {item.gap}
                        </div>
                      </div>
                      <div
                        className={`w-32 rounded-full h-3 ${
                          theme === "light" ? "bg-gray-200" : "bg-slate-600"
                        }`}
                      >
                        <div
                          className={`h-3 rounded-full ${
                            theme === "light" ? "bg-gray-800" : "bg-slate-300"
                          }`}
                          style={{
                            width: `${Math.min(item.percentage, 100)}%`,
                          }}
                        />
                      </div>
                      {getTrendIcon(item.trend)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategy Impact */}
          <div
            className={`border rounded-lg transition-colors ${
              theme === "light"
                ? "bg-white border-gray-200"
                : "bg-slate-800 border-slate-700"
            }`}
          >
            <div
              className={`p-6 border-b ${
                theme === "light" ? "border-gray-200" : "border-slate-700"
              }`}
            >
              <h3
                className={`text-lg font-semibold ${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              >
                Strategy Impact
              </h3>
            </div>
            <div className="p-8 flex flex-col items-center justify-center h-64">
              <BarChart3
                className={`w-16 h-16 mb-4 ${
                  theme === "light" ? "text-gray-300" : "text-slate-600"
                }`}
              />
              <h4
                className={`text-lg font-medium mb-2 ${
                  theme === "light" ? "text-gray-600" : "text-slate-400"
                }`}
              >
                Strategy comparison will be shown here
              </h4>
              <p
                className={`${
                  theme === "light" ? "text-gray-500" : "text-slate-500"
                }`}
              >
                Select different strategies to compare performance
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div
            className={`border rounded-lg p-6 transition-colors ${
              theme === "light"
                ? "bg-white border-gray-200"
                : "bg-slate-800 border-slate-700"
            }`}
          >
            <h3
              className={`text-lg font-semibold mb-4 ${
                theme === "light" ? "text-gray-900" : "text-slate-100"
              }`}
            >
              Quick Actions
            </h3>
            <div className="flex flex-wrap gap-3">
              <button
                className={`flex items-center px-4 py-2 border rounded-lg transition-colors ${
                  theme === "light"
                    ? "border-gray-200 hover:bg-gray-50"
                    : "border-slate-600 hover:bg-slate-700"
                }`}
              >
                <Play
                  className={`w-4 h-4 mr-2 ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                />
                <span
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  Run Simulation
                </span>
              </button>
              <button
                className={`flex items-center px-4 py-2 border rounded-lg transition-colors ${
                  theme === "light"
                    ? "border-gray-200 hover:bg-gray-50"
                    : "border-slate-600 hover:bg-slate-700"
                }`}
              >
                <Target
                  className={`w-4 h-4 mr-2 ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                />
                <span
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  Optimize Strategy
                </span>
              </button>
              <button
                className={`flex items-center px-4 py-2 border rounded-lg transition-colors ${
                  theme === "light"
                    ? "border-gray-200 hover:bg-gray-50"
                    : "border-slate-600 hover:bg-slate-700"
                }`}
              >
                <FileText
                  className={`w-4 h-4 mr-2 ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                />
                <span
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  Generate Report
                </span>
              </button>
              <button
                className={`flex items-center px-4 py-2 border rounded-lg transition-colors ${
                  theme === "light"
                    ? "border-gray-200 hover:bg-gray-50"
                    : "border-slate-600 hover:bg-slate-700"
                }`}
              >
                <Shield
                  className={`w-4 h-4 mr-2 ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                />
                <span
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  Safety Check
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* What-If Analysis Content */}
      {activeSubTab === "what-if-analysis" && (
        <div className="space-y-6">
          {/* Scenario Configuration */}
          <div
            className={`border rounded-lg p-6 transition-colors ${
              theme === "light"
                ? "bg-white border-gray-200"
                : "bg-slate-800 border-slate-700"
            }`}
          >
            <h3
              className={`text-lg font-semibold mb-6 ${
                theme === "light" ? "text-gray-900" : "text-slate-100"
              }`}
            >
              Scenario Configuration
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Scenario Type */}
              <div>
                <label
                  className={`block text-sm font-medium mb-3 ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  Scenario Type
                </label>
                <select
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    theme === "light"
                      ? "border-gray-200 text-gray-900 bg-white"
                      : "border-slate-600 text-slate-100 bg-slate-700"
                  }`}
                >
                  <option>📈 Traffic Increase</option>
                  <option>📉 Traffic Decrease</option>
                  <option>🌦️ Weather Impact</option>
                  <option>🔧 Maintenance Event</option>
                </select>

                {/* Traffic Level Slider */}
                <div className="mt-6">
                  <label
                    className={`block text-sm font-medium mb-3 ${
                      theme === "light" ? "text-gray-900" : "text-slate-100"
                    }`}
                  >
                    Traffic Level: 120%
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="50"
                      max="200"
                      defaultValue="120"
                      className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                        theme === "light" ? "bg-gray-200" : "bg-slate-600"
                      }`}
                    />
                    <div
                      className={`flex justify-between text-xs mt-2 ${
                        theme === "light" ? "text-gray-500" : "text-slate-400"
                      }`}
                    >
                      <span>50%</span>
                      <span>Normal (100%)</span>
                      <span>200%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Utilization Rate */}
              <div
                className={`border rounded-lg p-4 transition-colors ${
                  theme === "light" ? "border-gray-200" : "border-slate-600"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4
                    className={`font-medium ${
                      theme === "light" ? "text-gray-900" : "text-slate-100"
                    }`}
                  >
                    Utilization Rate
                  </h4>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      theme === "light"
                        ? "bg-green-100 text-green-800"
                        : "bg-green-900/30 text-green-300"
                    }`}
                  >
                    📊 4%
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span
                        className={`${
                          theme === "light" ? "text-gray-600" : "text-slate-400"
                        }`}
                      >
                        Current
                      </span>
                      <span
                        className={`font-medium ${
                          theme === "light" ? "text-gray-900" : "text-slate-100"
                        }`}
                      >
                        82%
                      </span>
                    </div>
                    <div
                      className={`w-full rounded-full h-2 ${
                        theme === "light" ? "bg-gray-200" : "bg-slate-600"
                      }`}
                    >
                      <div
                        className={`h-2 rounded-full ${
                          theme === "light" ? "bg-gray-800" : "bg-slate-300"
                        }`}
                        style={{ width: "82%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span
                        className={`${
                          theme === "light" ? "text-gray-600" : "text-slate-400"
                        }`}
                      >
                        Projected
                      </span>
                      <span className="font-medium text-green-600">78%</span>
                    </div>
                    <div
                      className={`w-full rounded-full h-2 ${
                        theme === "light" ? "bg-gray-200" : "bg-slate-600"
                      }`}
                    >
                      <div
                        className={`h-2 rounded-full ${
                          theme === "light" ? "bg-gray-800" : "bg-slate-300"
                        }`}
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operational Cost */}
              <div
                className={`border rounded-lg p-4 transition-colors ${
                  theme === "light" ? "border-gray-200" : "border-slate-600"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4
                    className={`font-medium ${
                      theme === "light" ? "text-gray-900" : "text-slate-100"
                    }`}
                  >
                    Operational Cost
                  </h4>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      theme === "light"
                        ? "bg-green-100 text-green-800"
                        : "bg-green-900/30 text-green-300"
                    }`}
                  >
                    💰 $44k
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span
                      className={`${
                        theme === "light" ? "text-gray-600" : "text-slate-400"
                      }`}
                    >
                      Current
                    </span>
                    <span
                      className={`font-medium ${
                        theme === "light" ? "text-gray-900" : "text-slate-100"
                      }`}
                    >
                      $245k
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span
                      className={`${
                        theme === "light" ? "text-gray-600" : "text-slate-400"
                      }`}
                    >
                      Projected
                    </span>
                    <span className="font-medium text-green-600">$289k</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Average Delays */}
              <div
                className={`border rounded-lg p-4 transition-colors ${
                  theme === "light" ? "border-gray-200" : "border-slate-600"
                }`}
              >
                <h4
                  className={`font-medium mb-3 ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  Average Delays
                </h4>
                <div className="flex items-end justify-between">
                  <div>
                    <div
                      className={`text-3xl font-bold ${
                        theme === "light" ? "text-gray-900" : "text-slate-100"
                      }`}
                    >
                      18 min
                    </div>
                    <p
                      className={`text-sm ${
                        theme === "light" ? "text-gray-600" : "text-slate-400"
                      }`}
                    >
                      Up from 12 min baseline
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${
                      theme === "light"
                        ? "bg-green-100 text-green-800"
                        : "bg-green-900/30 text-green-300"
                    }`}
                  >
                    +6 min
                  </span>
                </div>
              </div>

              {/* Resource Conflicts */}
              <div
                className={`border rounded-lg p-4 transition-colors ${
                  theme === "light" ? "border-gray-200" : "border-slate-600"
                }`}
              >
                <h4
                  className={`font-medium mb-3 ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  Resource Conflicts
                </h4>
                <div className="flex items-end justify-between">
                  <div>
                    <div
                      className={`text-3xl font-bold ${
                        theme === "light" ? "text-gray-900" : "text-slate-100"
                      }`}
                    >
                      7
                    </div>
                    <p
                      className={`text-sm ${
                        theme === "light" ? "text-gray-600" : "text-slate-400"
                      }`}
                    >
                      Up from 3 conflicts baseline
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${
                      theme === "light"
                        ? "bg-green-100 text-green-800"
                        : "bg-green-900/30 text-green-300"
                    }`}
                  >
                    +4
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Recommendations */}
          <div
            className={`border rounded-lg p-6 transition-colors ${
              theme === "light"
                ? "bg-white border-gray-200"
                : "bg-slate-800 border-slate-700"
            }`}
          >
            <div className="flex items-center mb-6">
              <Zap className="w-5 h-5 text-yellow-500 mr-2" />
              <h3
                className={`text-lg font-semibold ${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              >
                AI Recommendations
              </h3>
            </div>

            <div className="space-y-4">
              {/* Recommendation 1 */}
              <div
                className={`flex items-start p-4 rounded-lg ${
                  theme === "light" ? "bg-blue-50" : "bg-blue-900/20"
                }`}
              >
                <div
                  className={`p-2 rounded-full mr-4 mt-1 ${
                    theme === "light" ? "bg-blue-100" : "bg-blue-900/30"
                  }`}
                >
                  <Target
                    className={`w-4 h-4 ${
                      theme === "light" ? "text-blue-600" : "text-blue-400"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h4
                    className={`font-medium mb-1 ${
                      theme === "light" ? "text-gray-900" : "text-slate-100"
                    }`}
                  >
                    Increase Remote Stand Usage
                  </h4>
                  <p
                    className={`text-sm ${
                      theme === "light" ? "text-blue-700" : "text-blue-300"
                    }`}
                  >
                    Allocate 15% more narrow-body flights to remote stands to
                    reduce gate congestion
                  </p>
                </div>
              </div>

              {/* Recommendation 2 */}
              <div
                className={`flex items-start p-4 rounded-lg ${
                  theme === "light" ? "bg-yellow-50" : "bg-yellow-900/20"
                }`}
              >
                <div
                  className={`p-2 rounded-full mr-4 mt-1 ${
                    theme === "light" ? "bg-yellow-100" : "bg-yellow-900/30"
                  }`}
                >
                  <AlertTriangle
                    className={`w-4 h-4 ${
                      theme === "light" ? "text-yellow-600" : "text-yellow-400"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h4
                    className={`font-medium mb-1 ${
                      theme === "light" ? "text-gray-900" : "text-slate-100"
                    }`}
                  >
                    Adjust Turnaround Buffer
                  </h4>
                  <p
                    className={`text-sm ${
                      theme === "light" ? "text-yellow-700" : "text-yellow-300"
                    }`}
                  >
                    Increase turnaround buffer time by 5 minutes during high
                    traffic periods
                  </p>
                </div>
              </div>

              {/* Recommendation 3 */}
              <div
                className={`flex items-start p-4 rounded-lg ${
                  theme === "light" ? "bg-green-50" : "bg-green-900/20"
                }`}
              >
                <div
                  className={`p-2 rounded-full mr-4 mt-1 ${
                    theme === "light" ? "bg-green-100" : "bg-green-900/30"
                  }`}
                >
                  <TrendingUp
                    className={`w-4 h-4 ${
                      theme === "light" ? "text-green-600" : "text-green-400"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h4
                    className={`font-medium mb-1 ${
                      theme === "light" ? "text-gray-900" : "text-slate-100"
                    }`}
                  >
                    Optimize Maintenance Windows
                  </h4>
                  <p
                    className={`text-sm ${
                      theme === "light" ? "text-green-700" : "text-green-300"
                    }`}
                  >
                    Schedule maintenance during 02:00-05:00 to minimize impact
                    on operations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions - moved to bottom */}
          <div
            className={`border rounded-lg p-6 transition-colors ${
              theme === "light"
                ? "bg-white border-gray-200"
                : "bg-slate-800 border-slate-700"
            }`}
          >
            <h3
              className={`text-lg font-semibold mb-4 ${
                theme === "light" ? "text-gray-900" : "text-slate-100"
              }`}
            >
              Quick Actions
            </h3>
            <div className="flex flex-wrap gap-3">
              <button
                className={`flex items-center px-4 py-2 border rounded-lg transition-colors ${
                  theme === "light"
                    ? "border-gray-200 hover:bg-gray-50"
                    : "border-slate-600 hover:bg-slate-700"
                }`}
              >
                <Play
                  className={`w-4 h-4 mr-2 ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                />
                <span
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  Run Simulation
                </span>
              </button>
              <button
                className={`flex items-center px-4 py-2 border rounded-lg transition-colors ${
                  theme === "light"
                    ? "border-gray-200 hover:bg-gray-50"
                    : "border-slate-600 hover:bg-slate-700"
                }`}
              >
                <Target
                  className={`w-4 h-4 mr-2 ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                />
                <span
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  Optimize Strategy
                </span>
              </button>
              <button
                className={`flex items-center px-4 py-2 border rounded-lg transition-colors ${
                  theme === "light"
                    ? "border-gray-200 hover:bg-gray-50"
                    : "border-slate-600 hover:bg-slate-700"
                }`}
              >
                <FileText
                  className={`w-4 h-4 mr-2 ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                />
                <span
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  Generate Report
                </span>
              </button>
              <button
                className={`flex items-center px-4 py-2 border rounded-lg transition-colors ${
                  theme === "light"
                    ? "border-gray-200 hover:bg-gray-50"
                    : "border-slate-600 hover:bg-slate-700"
                }`}
              >
                <Shield
                  className={`w-4 h-4 mr-2 ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                />
                <span
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  Safety Check
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StrategyPlannerTab;
