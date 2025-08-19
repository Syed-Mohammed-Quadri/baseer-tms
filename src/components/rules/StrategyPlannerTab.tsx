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

const StrategyPlannerTab = () => {
  const [activeSubTab, setActiveSubTab] = useState("kpi-dashboard");

  const strategies = [
    {
      id: "current",
      name: "Current Strategy",
      description: "Existing allocation rules and priorities",
      status: "active",
      statusColor: "bg-green-100 text-green-800",
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
      statusColor: "bg-yellow-100 text-yellow-800",
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
      statusColor: "bg-blue-100 text-blue-800",
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
            className="bg-white border border-gray-200 rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {strategy.name}
              </h3>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${strategy.statusColor}`}
              >
                {strategy.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{strategy.description}</p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Efficiency</span>
                <div className="font-semibold text-gray-900">
                  {strategy.efficiency}%
                </div>
              </div>
              <div>
                <span className="text-gray-600">Cost</span>
                <div className="font-semibold text-gray-900">
                  ${strategy.cost}k
                </div>
              </div>
              <div>
                <span className="text-gray-600">Safety</span>
                <div className="font-semibold text-gray-900">
                  {strategy.safety}%
                </div>
              </div>
              <div>
                <span className="text-gray-600">Satisfaction</span>
                <div className="font-semibold text-gray-900">
                  {strategy.satisfaction}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sub Tabs */}
      <div className="flex border-b border-gray-200">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id)}
            className={`px-4 py-2 border-b-2 font-medium text-sm ${
              activeSubTab === tab.id
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
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
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <metric.icon className="w-5 h-5 text-gray-600 mr-2" />
                    <span className="text-sm font-medium text-gray-900">
                      {metric.name}
                    </span>
                  </div>
                  {getTrendIcon(metric.trend)}
                </div>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-gray-900">
                    {metric.value}{" "}
                    <span className="text-sm font-normal text-gray-600">
                      {metric.unit}
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{metric.targetText}</span>
                    <span className="font-medium text-gray-900">
                      {metric.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getProgressColor(
                        metric.progress
                      )}`}
                      style={{ width: `${Math.min(metric.progress, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="flex justify-between text-xs text-gray-600">
                  <span>Weight: {metric.weight}%</span>
                  <span>{metric.category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Performance Analysis */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Performance Analysis
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {performanceAnalysis.map((item) => (
                <div key={item.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-50 rounded-lg mr-4">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Current: {item.current} | Target: {item.target}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">
                          {item.percentage}%
                        </div>
                        <div className="text-sm text-gray-600">{item.gap}</div>
                      </div>
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gray-800 h-3 rounded-full"
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
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Strategy Impact
              </h3>
            </div>
            <div className="p-8 flex flex-col items-center justify-center h-64">
              <BarChart3 className="w-16 h-16 text-gray-300 mb-4" />
              <h4 className="text-lg font-medium text-gray-600 mb-2">
                Strategy comparison will be shown here
              </h4>
              <p className="text-gray-500">
                Select different strategies to compare performance
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              <p className="text-gray-900">Quick Actions</p>
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Play className="w-4 h-4 mr-2 text-gray-900" />
                <p className="text-gray-900">Run Simulation</p>
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Target className="w-4 h-4 mr-2 text-gray-900" />
                <p className="text-gray-900">Optimize Strategy</p>
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <FileText className="w-4 h-4 mr-2 text-gray-900" />
                <p className="text-gray-900">Generate Report</p>
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Shield className="w-4 h-4 mr-2 text-gray-900" />
                <p className="text-gray-900">Safety Check</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* What-If Analysis Content */}
      {activeSubTab === "what-if-analysis" && (
        <div className="space-y-6">
          {/* Scenario Configuration */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Scenario Configuration
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Scenario Type */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Scenario Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>📈 Traffic Increase</option>
                  <option>📉 Traffic Decrease</option>
                  <option>🌦️ Weather Impact</option>
                  <option>🔧 Maintenance Event</option>
                </select>

                {/* Traffic Level Slider */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Traffic Level: 120%
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="50"
                      max="200"
                      defaultValue="120"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>50%</span>
                      <span>Normal (100%)</span>
                      <span>200%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weather Conditions */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Weather Conditions
                </label>
                <select className="w-full px-3 py-2 border border-gray-200 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Normal Conditions</option>
                  <option>Heavy Rain</option>
                  <option>Strong Winds</option>
                  <option>Low Visibility</option>
                </select>

                {/* Maintenance Windows Slider */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Maintenance Windows: 10%
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="30"
                      defaultValue="10"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>0%</span>
                      <span>Normal (10%)</span>
                      <span>30%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-8">
              <button className="flex items-center px-6 py-3 w-[90%] text-center justify-center bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
                <Play className="w-4 h-4 mr-2" />
                Run What-If Analysis
              </button>
              <button className="flex items-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <BarChart3 className="w-4 h-4 mr-2 text-gray-900" />
                <p className="text-gray-900">Compare</p>
              </button>
            </div>
          </div>

          {/* Impact Analysis */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Impact Analysis
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Gate Efficiency */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">Gate Efficiency</h4>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                    📊 5%
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Current</span>
                      <span className="font-medium">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gray-800 h-2 rounded-full"
                        style={{ width: "87%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Projected</span>
                      <span className="font-medium text-green-600">82%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gray-800 h-2 rounded-full"
                        style={{ width: "82%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Utilization Rate */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">
                    Utilization Rate
                  </h4>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                    📊 4%
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Current</span>
                      <span className="font-medium">82%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gray-800 h-2 rounded-full"
                        style={{ width: "82%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Projected</span>
                      <span className="font-medium text-green-600">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gray-800 h-2 rounded-full"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operational Cost */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">
                    Operational Cost
                  </h4>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                    💰 $44k
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Current</span>
                    <span className="font-medium">$245k</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Projected</span>
                    <span className="font-medium text-green-600">$289k</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Average Delays */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">
                  Average Delays
                </h4>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">
                      18 min
                    </div>
                    <p className="text-sm text-gray-600">
                      Up from 12 min baseline
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">
                    +6 min
                  </span>
                </div>
              </div>

              {/* Resource Conflicts */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">
                  Resource Conflicts
                </h4>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">7</div>
                    <p className="text-sm text-gray-600">
                      Up from 3 conflicts baseline
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">
                    +4
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-6">
              <Zap className="w-5 h-5 text-yellow-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">
                AI Recommendations
              </h3>
            </div>

            <div className="space-y-4">
              {/* Recommendation 1 */}
              <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                <div className="p-2 bg-blue-100 rounded-full mr-4 mt-1">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">
                    Increase Remote Stand Usage
                  </h4>
                  <p className="text-sm text-blue-700">
                    Allocate 15% more narrow-body flights to remote stands to
                    reduce gate congestion
                  </p>
                </div>
              </div>

              {/* Recommendation 2 */}
              <div className="flex items-start p-4 bg-yellow-50 rounded-lg">
                <div className="p-2 bg-yellow-100 rounded-full mr-4 mt-1">
                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">
                    Adjust Turnaround Buffer
                  </h4>
                  <p className="text-sm text-yellow-700">
                    Increase turnaround buffer time by 5 minutes during high
                    traffic periods
                  </p>
                </div>
              </div>

              {/* Recommendation 3 */}
              <div className="flex items-start p-4 bg-green-50 rounded-lg">
                <div className="p-2 bg-green-100 rounded-full mr-4 mt-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">
                    Optimize Maintenance Windows
                  </h4>
                  <p className="text-sm text-green-700">
                    Schedule maintenance during 02:00-05:00 to minimize impact
                    on operations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions - moved to bottom */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              <p className="text-gray-900">Quick Actions</p>
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Play className="w-4 h-4 mr-2 text-gray-900" />
                <p className="text-gray-900">Run Simulation</p>
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Target className="w-4 h-4 mr-2 text-gray-900" />
                <p className="text-gray-900">Optimize Strategy</p>
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <FileText className="w-4 h-4 mr-2 text-gray-900" />
                <p className="text-gray-900">Generate Report</p>
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Shield className="w-4 h-4 mr-2 text-gray-900" />
                <p className="text-gray-900">Safety Check</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StrategyPlannerTab;
