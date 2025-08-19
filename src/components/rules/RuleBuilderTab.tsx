import React, { useState } from "react";
import {
  Plus,
  Search,
  Plane,
  Clock,
  MapPin,
  Users,
  Star,
  AlertTriangle,
  RefreshCw,
  Zap,
  Settings,
} from "lucide-react";
interface Rule {
  id: number;
  name: string;
  status: string;
  type: string;
  priority: number;
  components: number;
  lastModified: string;
  statusColor: string;
}
const RuleBuilderTab = () => {
  const [ruleName, setRuleName] = useState("");
  const [ruleType, setRuleType] = useState("Soft Rule");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRule, setSelectedRule] = useState<Rule | null>(null);

  const ruleLibrary = [
    {
      id: 1,
      name: "Wide-body Priority...",
      status: "active",
      type: "hard",
      priority: 9,
      components: 3,
      lastModified: "2 hours ago",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 2,
      name: "Quick Turnaround ...",
      status: "draft",
      type: "soft",
      priority: 6,
      components: 5,
      lastModified: "1 day ago",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 3,
      name: "Maintenance Win...",
      status: "testing",
      type: "hard",
      priority: 8,
      components: 2,
      lastModified: "3 hours ago",
      statusColor: "bg-blue-100 text-blue-800",
    },
  ];

  const conditionComponents = [
    {
      id: "aircraft-type",
      name: "Aircraft Type",
      description: "Filter by aircraft size/type",
      icon: Plane,
      category: "conditions",
    },
    {
      id: "time-window",
      name: "Time Window",
      description: "Check time constraints",
      icon: Clock,
      category: "conditions",
    },
    {
      id: "gate-type",
      name: "Gate Type",
      description: "Filter by gate category",
      icon: MapPin,
      category: "conditions",
    },
    {
      id: "airline",
      name: "Airline",
      description: "Filter by airline code",
      icon: Users,
      category: "conditions",
    },
    {
      id: "passenger-count",
      name: "Passenger Count",
      description: "Filter by passenger load",
      icon: Users,
      category: "conditions",
    },
  ];

  const actionComponents = [
    {
      id: "assign-gate",
      name: "Assign Gate",
      description: "Assign to specific gate",
      icon: MapPin,
      category: "actions",
    },
    {
      id: "set-priority",
      name: "Set Priority",
      description: "Set assignment priority",
      icon: Star,
      category: "actions",
    },
    {
      id: "send-notification",
      name: "Send Notification",
      description: "Trigger alert/notification",
      icon: AlertTriangle,
      category: "actions",
    },
    {
      id: "update-status",
      name: "Update Status",
      description: "Change flight status",
      icon: RefreshCw,
      category: "actions",
    },
  ];

  const logicComponents = [
    {
      id: "and",
      name: "AND",
      description: "All conditions must be true",
      icon: Zap,
      category: "logic",
    },
    {
      id: "or",
      name: "OR",
      description: "Any condition must be true",
      icon: Zap,
      category: "logic",
    },
    {
      id: "not",
      name: "NOT",
      description: "Invert condition result",
      icon: Zap,
      category: "logic",
    },
    {
      id: "if-then",
      name: "IF-THEN",
      description: "Conditional execution",
      icon: Zap,
      category: "logic",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
      {/* Left Sidebar */}
      <div className="space-y-6">
        {/* Create New Rule */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Create New Rule
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Rule Name
              </label>
              <input
                type="text"
                value={ruleName}
                onChange={(e) => setRuleName(e.target.value)}
                placeholder="Enter rule name"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Rule Type
              </label>
              <select
                value={ruleType}
                onChange={(e) => setRuleType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Soft Rule">Soft Rule</option>
                <option value="Hard Rule">Hard Rule</option>
              </select>
            </div>
            <button className="w-full flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              Create Rule
            </button>
          </div>
        </div>

        {/* Rule Library */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Rule Library
          </h3>
          <div className="space-y-3">
            {ruleLibrary.map((rule) => (
              <div
                key={rule.id}
                className="p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setSelectedRule(rule)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{rule.name}</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${rule.statusColor}`}
                  >
                    {rule.status}
                  </span>
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>
                    {rule.type} • Priority {rule.priority}
                  </div>
                  <div>{rule.components} components</div>
                  <div>{rule.lastModified}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Component Library */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Component Library
          </h3>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search components..."
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Conditions */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-gray-900">CONDITIONS</h4>
              <span className="text-sm text-gray-500">5</span>
            </div>
            <div className="space-y-2">
              {conditionComponents.map((component) => (
                <div
                  key={component.id}
                  className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <component.icon className="w-4 h-4 text-gray-600 mr-3" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      {component.name}
                    </div>
                    <div className="text-xs text-gray-600">
                      {component.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-gray-900">ACTIONS</h4>
              <span className="text-sm text-gray-500">4</span>
            </div>
            <div className="space-y-2">
              {actionComponents.map((component) => (
                <div
                  key={component.id}
                  className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <component.icon className="w-4 h-4 text-gray-600 mr-3" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      {component.name}
                    </div>
                    <div className="text-xs text-gray-600">
                      {component.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logic */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-gray-900">LOGIC</h4>
              <span className="text-sm text-gray-500">4</span>
            </div>
            <div className="space-y-2">
              {logicComponents.map((component) => (
                <div
                  key={component.id}
                  className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <Zap className="w-4 h-4 text-gray-600 mr-3" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      {component.name}
                    </div>
                    <div className="text-xs text-gray-600">
                      {component.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Rule Builder Area */}
      <div className="lg:col-span-2">
        <div className="bg-white border border-gray-200 rounded-lg h-full">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Rule Builder
            </h3>
          </div>
          <div className="p-8 flex flex-col items-center justify-center h-96">
            <div className="text-center">
              <Zap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h4 className="text-lg font-medium text-gray-600 mb-2">
                Select a rule to start building
              </h4>
              <p className="text-gray-500">
                or create a new rule to get started
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Properties Panel */}
      <div className="lg:col-span-1 lg:order-3">
        <div className="bg-white border border-gray-200 rounded-lg h-full">
          <div className="p-6 flex flex-col items-center justify-center h-64">
            <Settings className="w-12 h-12 text-gray-300 mb-4" />
            <p className="text-gray-500 text-center">
              Select a rule or component
              <br />
              to view properties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuleBuilderTab;
