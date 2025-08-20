"use client";

import { useState } from "react";
import { Settings, BarChart3, TrendingUp } from "lucide-react";
import RuleConfigurationEngine from "@/components/rules/RuleConfigurationEngine";
import VersionControlTab from "@/components/rules/VersionControlTab";
import RuleBuilderTab from "@/components/rules/RuleBuilderTab";
import StrategyPlannerTab from "@/components/rules/StrategyPlannerTab";
import { useThemeStore } from "@/store/theme-store";

const mockRules = [
  {
    id: "RUL-001",
    name: "Gate Assignment Priority",
    category: "gate",
    status: "active" as const,
    priority: "high" as const,
    conditions: 3,
    actions: 2,
    description:
      "Prioritize gate assignment based on aircraft size and passenger count",
    lastModified: "2 hours ago",
  },
  {
    id: "RUL-002",
    name: "Crew Schedule Overlap",
    category: "conflict",
    status: "active" as const,
    priority: "medium" as const,
    conditions: 2,
    actions: 1,
    description: "Prevent crew scheduling conflicts during shift changes",
    lastModified: "1 day ago",
  },
  {
    id: "RUL-003",
    name: "Equipment Maintenance Window",
    category: "scheduling",
    status: "inactive" as const,
    priority: "low" as const,
    conditions: 4,
    actions: 3,
    description: "Schedule maintenance during low traffic periods",
    lastModified: "3 days ago",
  },
  {
    id: "RUL-004",
    name: "International Flight Priority",
    category: "priority",
    status: "active" as const,
    priority: "high" as const,
    conditions: 2,
    actions: 2,
    description: "Give priority to international flights for gate assignments",
    lastModified: "1 week ago",
  },
  {
    id: "RUL-005",
    name: "Ground Crew Allocation",
    category: "resource",
    status: "active" as const,
    priority: "medium" as const,
    conditions: 5,
    actions: 3,
    description: "Automatically allocate ground crew based on aircraft type",
    lastModified: "2 weeks ago",
  },
  {
    id: "RUL-006",
    name: "Stand Capacity Management",
    category: "stand",
    status: "active" as const,
    priority: "medium" as const,
    conditions: 3,
    actions: 2,
    description: "Manage stand capacity to prevent overcrowding",
    lastModified: "1 month ago",
  },
];

export default function RulesPage() {
  const { theme } = useThemeStore();
  const [selectedCategory, setSelectedCategory] = useState("all");
  // const [selectedRule, setSelectedRule] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("rule-builder");

  const filteredRules = mockRules.filter((rule) => {
    const matchesCategory =
      selectedCategory === "all" || rule.category === selectedCategory;
    const matchesSearch =
      rule.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const tabs = [
    {
      id: "rule-builder",
      title: "Rule Builder",
      icon: Settings,
    },
    {
      id: "strategy-planner",
      title: "Strategy Planner",
      icon: BarChart3,
    },
    {
      id: "version-control",
      title: "Version Control",
      icon: TrendingUp,
    },
  ];

  return (
    <div
      className={`min-h-screen p-6 transition-colors ${
        theme === "light" ? "bg-slate-50" : "bg-slate-900"
      }`}
    >
      <RuleConfigurationEngine />

      {/* Tabs */}
      <div
        className={`rounded-lg border transition-colors ${
          theme === "light"
            ? "bg-white border-gray-200"
            : "bg-slate-800 border-slate-700"
        }`}
      >
        <div
          className={`flex border-b transition-colors ${
            theme === "light" ? "border-gray-200" : "border-slate-700"
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-6 py-4 text-sm font-medium border-b-2 transition-colors flex items-center justify-center ${
                activeTab === tab.id
                  ? theme === "light"
                    ? "border-blue-500 text-blue-600 bg-blue-50"
                    : "border-blue-400 text-blue-300 bg-blue-900/30"
                  : theme === "light"
                  ? "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                  : "border-transparent text-slate-400 hover:text-slate-100 hover:border-slate-600"
              }`}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "rule-builder" && <RuleBuilderTab />}

          {activeTab === "strategy-planner" && <StrategyPlannerTab />}

          {activeTab === "version-control" && <VersionControlTab />}
        </div>
      </div>
    </div>
  );
}
