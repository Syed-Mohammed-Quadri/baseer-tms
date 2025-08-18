"use client";

import { useState } from "react";
import {
  Settings,
  Plane,
  Users,
  AlertTriangle,
  Calendar,
  Star,
  MoreVertical,
  Edit3,
  Copy,
  Trash2,
  Plus,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ruleCategories = [
  { id: "gate", name: "Gate Rules", icon: Plane, count: 12 },
  { id: "stand", name: "Stand Rules", icon: Settings, count: 8 },
  { id: "resource", name: "Resource Allocation", icon: Users, count: 15 },
  {
    id: "conflict",
    name: "Conflict Resolution",
    icon: AlertTriangle,
    count: 6,
  },
  { id: "scheduling", name: "Scheduling Rules", icon: Calendar, count: 10 },
  { id: "priority", name: "Priority Rules", icon: Star, count: 4 },
];

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
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRule, setSelectedRule] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRules = mockRules.filter((rule) => {
    const matchesCategory =
      selectedCategory === "all" || rule.category === selectedCategory;
    const matchesSearch =
      rule.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Rule Configuration Engine
            </h1>
            <p className="text-slate-900 mt-1">
              Configure and manage automated rules for resource allocation,
              conflict resolution, and operational workflows
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              New Rule
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-120px)]">
        {/* Left Sidebar - Categories */}
        <div className="w-80 bg-white border-r border-slate-200 p-4">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-900 w-4 h-4" />
              <input
                type="text"
                placeholder="Search rules..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border text-slate-900 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-1">
            <button
              onClick={() => setSelectedCategory("all")}
              className={cn(
                "w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                selectedCategory === "all"
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-500"
                  : "text-slate-700 hover:bg-slate-50"
              )}
            >
              <Settings className="w-5 h-5 mr-3 text-slate-400" />
              All Rules
              <span className="ml-auto bg-slate-100 text-slate-900 px-2 py-1 rounded-full text-xs">
                {mockRules.length}
              </span>
            </button>

            {ruleCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                  selectedCategory === category.id
                    ? "bg-blue-50 text-blue-700 border-r-2 border-blue-500"
                    : "text-slate-700 hover:bg-slate-50"
                )}
              >
                <category.icon className="w-5 h-5 mr-3 text-slate-400" />
                {category.name}
                <span className="ml-auto bg-slate-100 text-slate-900 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content - Rule Cards Grid */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredRules.map((rule) => (
              <div
                key={rule.id}
                className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedRule(rule.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Settings className="w-5 h-5 text-slate-400 mr-2" />
                    <h3 className="font-semibold text-slate-900">
                      {rule.name}
                    </h3>
                  </div>
                  <button className="p-1 hover:bg-slate-100 rounded">
                    <MoreVertical className="w-4 h-4 text-slate-400" />
                  </button>
                </div>

                <p className="text-sm text-slate-900 mb-3">
                  {rule.description}
                </p>

                <div className="text-xs text-slate-500 mb-4">
                  Rule ID: {rule.id}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-900">Status:</span>
                    <div className="flex items-center">
                      <div
                        className={cn(
                          "w-2 h-2 rounded-full mr-2",
                          rule.status === "active"
                            ? "bg-green-500"
                            : "bg-gray-400"
                        )}
                      />
                      <span className="text-sm capitalize">{rule.status}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-900">Priority:</span>
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium capitalize",
                        getPriorityColor(rule.priority)
                      )}
                    >
                      {rule.priority}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-slate-900">
                    <span>Conditions: {rule.conditions}</span>
                    <span>Actions: {rule.actions}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      Modified {rule.lastModified}
                    </span>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 hover:bg-blue-50 text-blue-600 rounded">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:bg-blue-50 text-blue-600 rounded">
                        <Copy className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:bg-red-50 text-red-600 rounded">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredRules.length === 0 && (
            <div className="text-center py-12">
              <Settings className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-2">
                No rules found
              </h3>
              <p className="text-slate-900 mb-4">
                No rules match your current filters.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Create New Rule
              </button>
            </div>
          )}
        </div>

        {/* Right Panel - Rule Details */}
        {selectedRule && (
          <div className="w-96 bg-white border-l border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Rule Details
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-slate-700 mb-2">
                  Rule Preview
                </h4>
                <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-900">
                  Selected rule details will appear here...
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-slate-700 mb-2">
                  Conditions
                </h4>
                <div className="space-y-2">
                  <div className="bg-blue-50 rounded-lg p-3 text-sm">
                    <span className="font-medium text-blue-900">IF</span>
                    <span className="text-blue-700 ml-2">
                      Aircraft size is Large
                    </span>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-sm">
                    <span className="font-medium text-blue-900">AND</span>
                    <span className="text-blue-700 ml-2">
                      Gate capacity ≥ 300 passengers
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-slate-700 mb-2">
                  Actions
                </h4>
                <div className="space-y-2">
                  <div className="bg-green-50 rounded-lg p-3 text-sm">
                    <span className="font-medium text-green-900">THEN</span>
                    <span className="text-green-700 ml-2">
                      Assign to Terminal A gates
                    </span>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-sm">
                    <span className="font-medium text-green-900">AND</span>
                    <span className="text-green-700 ml-2">
                      Set priority to High
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-slate-700 mb-2">
                  Execution History
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-900">Last executed:</span>
                    <span className="text-slate-900">2 hours ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-900">Success rate:</span>
                    <span className="text-green-600">98.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-900">Total executions:</span>
                    <span className="text-slate-900">1,247</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Test Rule
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
