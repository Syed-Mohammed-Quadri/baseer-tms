"use client";

import { useState } from "react";
import {
  Plane,
  Users,
  Settings,
  Wrench,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ResourceBlock {
  id: string;
  start: number; // hour in 24h format
  duration: number; // hours
  title: string;
  type: "gate" | "crew" | "equipment" | "maintenance";
  status: "normal" | "conflict" | "maintenance";
  details?: string;
}

const resources = [
  {
    id: "gate-a12",
    name: "Gate A12",
    type: "gate" as const,
    icon: Plane,
    status: "active",
  },
  {
    id: "gate-a15",
    name: "Gate A15",
    type: "gate" as const,
    icon: Plane,
    status: "active",
  },
  {
    id: "gate-b08",
    name: "Gate B08",
    type: "gate" as const,
    icon: Plane,
    status: "maintenance",
  },
  {
    id: "crew-01",
    name: "Crew Team 1",
    type: "crew" as const,
    icon: Users,
    status: "active",
  },
  {
    id: "crew-02",
    name: "Crew Team 2",
    type: "crew" as const,
    icon: Users,
    status: "active",
  },
  {
    id: "crew-03",
    name: "Crew Team 3",
    type: "crew" as const,
    icon: Users,
    status: "active",
  },
  {
    id: "gse-01",
    name: "GSE Unit 1",
    type: "equipment" as const,
    icon: Settings,
    status: "active",
  },
  {
    id: "gse-02",
    name: "GSE Unit 2",
    type: "equipment" as const,
    icon: Settings,
    status: "conflict",
  },
  {
    id: "maint-01",
    name: "Maintenance Bay 1",
    type: "maintenance" as const,
    icon: Wrench,
    status: "active",
  },
];

const mockBlocks: Record<string, ResourceBlock[]> = {
  "gate-a12": [
    {
      id: "1",
      start: 8,
      duration: 2,
      title: "LH441 - A320",
      type: "gate",
      status: "normal",
    },
    {
      id: "2",
      start: 12,
      duration: 1.5,
      title: "BA892 - B737",
      type: "gate",
      status: "normal",
    },
    {
      id: "3",
      start: 16,
      duration: 3,
      title: "EK203 - A380",
      type: "gate",
      status: "conflict",
    },
  ],
  "gate-a15": [
    {
      id: "4",
      start: 10,
      duration: 1,
      title: "QR401 - A350",
      type: "gate",
      status: "normal",
    },
    {
      id: "5",
      start: 14,
      duration: 2,
      title: "SV123 - B777",
      type: "gate",
      status: "normal",
    },
  ],
  "gate-b08": [
    {
      id: "6",
      start: 6,
      duration: 8,
      title: "Scheduled Maintenance",
      type: "maintenance",
      status: "maintenance",
    },
  ],
  "crew-01": [
    {
      id: "7",
      start: 7,
      duration: 8,
      title: "Morning Shift",
      type: "crew",
      status: "normal",
    },
  ],
  "crew-02": [
    {
      id: "8",
      start: 15,
      duration: 8,
      title: "Evening Shift",
      type: "crew",
      status: "normal",
    },
  ],
  "crew-03": [
    {
      id: "9",
      start: 9,
      duration: 4,
      title: "Peak Hours",
      type: "crew",
      status: "normal",
    },
    {
      id: "10",
      start: 18,
      duration: 4,
      title: "Evening Rush",
      type: "crew",
      status: "conflict",
    },
  ],
  "gse-01": [
    {
      id: "11",
      start: 8,
      duration: 6,
      title: "Terminal A Operations",
      type: "equipment",
      status: "normal",
    },
  ],
  "gse-02": [
    {
      id: "12",
      start: 10,
      duration: 4,
      title: "Terminal B Operations",
      type: "equipment",
      status: "conflict",
    },
  ],
  "maint-01": [
    {
      id: "13",
      start: 1,
      duration: 5,
      title: "Night Maintenance",
      type: "maintenance",
      status: "normal",
    },
  ],
};

const hours = Array.from({ length: 24 }, (_, i) => i);

export default function ResourcePlanningPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getBlockColor = (type: string, status: string) => {
    if (status === "conflict") return "bg-red-500 border-red-600";
    if (status === "maintenance") return "bg-yellow-500 border-yellow-600";

    switch (type) {
      case "gate":
        return "bg-blue-500 border-blue-600";
      case "crew":
        return "bg-green-500 border-green-600";
      case "equipment":
        return "bg-purple-500 border-purple-600";
      case "maintenance":
        return "bg-yellow-500 border-yellow-600";
      default:
        return "bg-gray-500 border-gray-600";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "maintenance":
        return "bg-yellow-500";
      case "conflict":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const formatTime = (hour: number) => {
    return `${hour.toString().padStart(2, "0")}:00`;
  };

  const currentHour = new Date().getHours();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Resource Planning
            </h1>
            <p className="text-slate-900 mt-1">
              Schedule and manage resource allocation with timeline view
            </p>
          </div>
          <div className="flex items-center space-x-4 text-slate-900">
            <input
              type="date"
              value={selectedDate.toISOString().split("T")[0]}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
              className="border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center border border-slate-200 rounded-lg">
              <button
                onClick={() => setZoom(Math.max(0.5, zoom - 0.25))}
                className="p-2 hover:bg-slate-50 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoom(1)}
                className="px-3 py-2 text-sm border-x border-slate-200 hover:bg-slate-50 transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => setZoom(Math.min(2, zoom + 0.25))}
                className="p-2 hover:bg-slate-50 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Resource List */}
        <div
          className={cn(
            "bg-white border-r border-slate-200 flex-shrink-0 transition-all duration-300",
            collapsed ? "w-16" : "w-80"
          )}
        >
          <div className="p-4 border-b border-slate-200 flex items-center justify-between">
            {!collapsed && (
              <h3 className="font-semibold text-slate-900">Resources</h3>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-1 hover:bg-slate-100 rounded"
            >
              {collapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="overflow-y-auto">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="flex items-center p-3 hover:bg-slate-50 border-b border-slate-100"
              >
                <div className="flex items-center flex-1">
                  <resource.icon className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                  {!collapsed && (
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900 truncate">
                        {resource.name}
                      </p>
                      <div className="flex items-center mt-1">
                        <div
                          className={cn(
                            "w-2 h-2 rounded-full mr-2",
                            getStatusColor(resource.status)
                          )}
                        />
                        <span className="text-xs text-slate-500 capitalize">
                          {resource.status}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Timeline Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Timeline Header */}
          <div className="bg-slate-50 border-b border-slate-200 p-4">
            <div
              className="flex items-center"
              style={{ transform: `scaleX(${zoom})`, transformOrigin: "left" }}
            >
              {hours.map((hour) => (
                <div
                  key={hour}
                  className="flex-shrink-0 w-20 text-center relative"
                >
                  <span className="text-sm text-slate-900">
                    {formatTime(hour)}
                  </span>
                  {hour === currentHour && (
                    <div className="absolute top-6 left-1/2 w-0.5 h-4 bg-red-500 transform -translate-x-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Content */}
          <div className="flex-1 overflow-auto">
            {resources.map((resource, resourceIndex) => (
              <div
                key={resource.id}
                className={cn(
                  "border-b border-slate-100 relative",
                  resourceIndex % 2 === 0 ? "bg-white" : "bg-slate-50"
                )}
                style={{ height: "48px" }}
              >
                {/* Grid lines */}
                <div
                  className="absolute inset-0 flex"
                  style={{
                    transform: `scaleX(${zoom})`,
                    transformOrigin: "left",
                  }}
                >
                  {hours.map((hour) => (
                    <div
                      key={hour}
                      className="w-20 border-r border-slate-100 flex-shrink-0"
                    />
                  ))}
                </div>

                {/* Current time indicator */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10"
                  style={{
                    left: `${currentHour * 80 * zoom}px`,
                    transform: `scaleX(${1 / zoom})`,
                  }}
                />

                {/* Resource blocks */}
                <div
                  className="absolute inset-0"
                  style={{
                    transform: `scaleX(${zoom})`,
                    transformOrigin: "left",
                  }}
                >
                  {mockBlocks[resource.id]?.map((block) => (
                    <div
                      key={block.id}
                      className={cn(
                        "absolute top-1 bottom-1 rounded border-l-2 flex items-center px-2 text-white text-xs font-medium cursor-pointer hover:opacity-80 transition-opacity",
                        getBlockColor(block.type, block.status)
                      )}
                      style={{
                        left: `${block.start * 80}px`,
                        width: `${block.duration * 80}px`,
                      }}
                      title={`${block.title} (${formatTime(
                        block.start
                      )} - ${formatTime(block.start + block.duration)})`}
                    >
                      <span
                        className="truncate"
                        style={{ transform: `scaleX(${1 / zoom})` }}
                      >
                        {block.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white border-t border-slate-200 px-6 py-3 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded mr-2" />
              <span className="text-sm text-slate-900">Gates</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded mr-2" />
              <span className="text-sm text-slate-900">Crew</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded mr-2" />
              <span className="text-sm text-slate-900">Equipment</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded mr-2" />
              <span className="text-sm text-slate-900">Maintenance</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded mr-2" />
              <span className="text-sm text-slate-900">Conflicts</span>
            </div>
          </div>
          <div className="flex items-center text-sm text-slate-500">
            <div className="w-0.5 h-4 bg-red-500 mr-2" />
            Current Time: {formatTime(currentHour)}
          </div>
        </div>
      </div>
    </div>
  );
}
