"use client";

import { useState } from "react";
import {
  Plane,
  Users,
  Settings,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Zap,
  RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Gate {
  id: string;
  name: string;
  terminal: string;
  status: "available" | "occupied" | "turnaround" | "maintenance" | "conflict";
  aircraft?: {
    flight: string;
    type: string;
    eta?: string;
    etd?: string;
  };
  position: { x: number; y: number };
  resources?: string[];
}

const gates: Gate[] = [
  {
    id: "A12",
    name: "Gate A12",
    terminal: "A",
    status: "occupied",
    aircraft: { flight: "LH441", type: "A320", etd: "14:30" },
    position: { x: 100, y: 150 },
    resources: ["Crew-01", "GSE-03"],
  },
  {
    id: "A15",
    name: "Gate A15",
    terminal: "A",
    status: "turnaround",
    aircraft: { flight: "BA892", type: "B737", eta: "15:20", etd: "16:45" },
    position: { x: 200, y: 150 },
    resources: ["Crew-02"],
  },
  {
    id: "A18",
    name: "Gate A18",
    terminal: "A",
    status: "available",
    position: { x: 300, y: 150 },
  },
  {
    id: "B08",
    name: "Gate B08",
    terminal: "B",
    status: "maintenance",
    position: { x: 150, y: 250 },
  },
  {
    id: "B11",
    name: "Gate B11",
    terminal: "B",
    status: "conflict",
    aircraft: { flight: "EK203", type: "A380", eta: "16:00" },
    position: { x: 250, y: 250 },
    resources: ["Crew-03", "GSE-01"],
  },
  {
    id: "B14",
    name: "Gate B14",
    terminal: "B",
    status: "occupied",
    aircraft: { flight: "QR401", type: "A350", etd: "17:15" },
    position: { x: 350, y: 250 },
    resources: ["Crew-04", "GSE-02"],
  },
];

const resources = [
  {
    id: "Crew-01",
    name: "Ground Crew Team 1",
    type: "crew",
    status: "assigned",
    location: "Gate A12",
  },
  {
    id: "Crew-02",
    name: "Ground Crew Team 2",
    type: "crew",
    status: "assigned",
    location: "Gate A15",
  },
  {
    id: "Crew-03",
    name: "Ground Crew Team 3",
    type: "crew",
    status: "assigned",
    location: "Gate B11",
  },
  {
    id: "Crew-04",
    name: "Ground Crew Team 4",
    type: "crew",
    status: "assigned",
    location: "Gate B14",
  },
  {
    id: "Crew-05",
    name: "Ground Crew Team 5",
    type: "crew",
    status: "available",
    location: "Standby",
  },
  {
    id: "GSE-01",
    name: "GSE Unit 1",
    type: "equipment",
    status: "assigned",
    location: "Gate B11",
  },
  {
    id: "GSE-02",
    name: "GSE Unit 2",
    type: "equipment",
    status: "assigned",
    location: "Gate B14",
  },
  {
    id: "GSE-03",
    name: "GSE Unit 3",
    type: "equipment",
    status: "assigned",
    location: "Gate A12",
  },
  {
    id: "GSE-04",
    name: "GSE Unit 4",
    type: "equipment",
    status: "available",
    location: "Storage",
  },
];

const alerts = [
  {
    id: 1,
    type: "critical",
    message: "Gate B11 resource conflict detected",
    time: "2 min ago",
    action: "resolve",
  },
  {
    id: 2,
    type: "warning",
    message: "Crew Team 5 reassignment needed",
    time: "5 min ago",
    action: "assign",
  },
  {
    id: 3,
    type: "info",
    message: "Gate A12 turnaround completed",
    time: "8 min ago",
    action: "acknowledge",
  },
  {
    id: 4,
    type: "warning",
    message: "Equipment GSE-04 requires maintenance check",
    time: "12 min ago",
    action: "schedule",
  },
];

export default function OperationsPage() {
  const [selectedGate, setSelectedGate] = useState<Gate | null>(null);
  const [selectedResource, setSelectedResource] = useState<string | null>(null);

  const getGateStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 border-green-500 text-green-800";
      case "occupied":
        return "bg-blue-100 border-blue-500 text-blue-800";
      case "turnaround":
        return "bg-yellow-100 border-yellow-500 text-yellow-800";
      case "maintenance":
        return "bg-gray-100 border-gray-500 text-gray-800";
      case "conflict":
        return "bg-red-100 border-red-500 text-red-800";
      default:
        return "bg-gray-100 border-gray-500 text-gray-800";
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case "critical":
        return "text-red-600";
      case "warning":
        return "text-yellow-600";
      case "info":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "critical":
        return AlertTriangle;
      case "warning":
        return Clock;
      case "info":
        return CheckCircle;
      default:
        return AlertTriangle;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Apron Operations Center
            </h1>
            <p className="text-slate-900 mt-1">
              Real-time terminal layout and resource management
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-3 py-2 border border-slate-200 rounded-lg text-slate-900 hover:bg-slate-50 transition-colors">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-120px)]">
        {/* Main Terminal Layout */}
        <div className="flex-1 p-6">
          <div className="bg-white rounded-lg border border-slate-200 h-full relative overflow-hidden">
            {/* Terminal Background */}
            <div className="absolute inset-0 bg-slate-50 p-8">
              {/* Terminal Buildings */}
              <div className="absolute top-8 left-8 right-8 h-32 bg-slate-200 rounded-lg flex items-center justify-center">
                <span className="text-lg font-semibold text-slate-900">
                  Terminal A
                </span>
              </div>
              <div className="absolute bottom-8 left-8 right-8 h-32 bg-slate-200 rounded-lg flex items-center justify-center">
                <span className="text-lg font-semibold text-slate-900">
                  Terminal B
                </span>
              </div>

              {/* Gates */}
              {gates.map((gate) => (
                <div
                  key={gate.id}
                  className={cn(
                    "absolute w-20 h-16 rounded border-2 cursor-pointer transition-all hover:scale-105",
                    getGateStatusColor(gate.status),
                    selectedGate?.id === gate.id &&
                      "ring-2 ring-blue-500 ring-offset-2"
                  )}
                  style={{
                    left: `${gate.position.x}px`,
                    top: `${gate.position.y}px`,
                  }}
                  onClick={() => setSelectedGate(gate)}
                >
                  <div className="text-center p-1">
                    <div className="text-xs font-medium">{gate.name}</div>
                    {gate.aircraft && (
                      <div className="text-xs truncate">
                        {gate.aircraft.flight}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Resource Icons */}
              {gates.map((gate) =>
                gate.resources?.map((resourceId, index) => (
                  <div
                    key={`${gate.id}-${resourceId}`}
                    className="absolute w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors"
                    style={{
                      left: `${gate.position.x + 25 + index * 8}px`,
                      top: `${gate.position.y - 10}px`,
                    }}
                    title={resourceId}
                    onClick={() => setSelectedResource(resourceId)}
                  >
                    {resourceId.startsWith("Crew") ? (
                      <Users className="w-3 h-3 text-white" />
                    ) : (
                      <Settings className="w-3 h-3 text-white" />
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3">
              <h4 className="text-sm font-medium text-slate-900 mb-2">
                Gate Status
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-100 border border-green-500 rounded mr-2" />
                  <span>Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-100 border border-blue-500 rounded mr-2" />
                  <span>Occupied</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-100 border border-yellow-500 rounded mr-2" />
                  <span>Turnaround</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-100 border border-gray-500 rounded mr-2" />
                  <span>Maintenance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-100 border border-red-500 rounded mr-2" />
                  <span>Conflict</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-96 bg-white border-l border-slate-200 flex flex-col">
          {/* Selected Gate Info */}
          {selectedGate && (
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                {selectedGate.name} Details
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-900">Status:</span>
                  <span
                    className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium capitalize",
                      selectedGate.status === "available" &&
                        "bg-green-100 text-green-800",
                      selectedGate.status === "occupied" &&
                        "bg-blue-100 text-blue-800",
                      selectedGate.status === "turnaround" &&
                        "bg-yellow-100 text-yellow-800",
                      selectedGate.status === "maintenance" &&
                        "bg-gray-100 text-gray-800",
                      selectedGate.status === "conflict" &&
                        "bg-red-100 text-red-800"
                    )}
                  >
                    {selectedGate.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-900">Terminal:</span>
                  <span className="text-sm text-slate-900">
                    {selectedGate.terminal}
                  </span>
                </div>
                {selectedGate.aircraft && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-900">Flight:</span>
                      <span className="text-sm text-slate-900">
                        {selectedGate.aircraft.flight}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-slate-900">Aircraft:</span>
                      <span className="text-sm text-slate-900">
                        {selectedGate.aircraft.type}
                      </span>
                    </div>
                    {selectedGate.aircraft.eta && (
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-900">ETA:</span>
                        <span className="text-sm text-slate-900">
                          {selectedGate.aircraft.eta}
                        </span>
                      </div>
                    )}
                    {selectedGate.aircraft.etd && (
                      <div className="flex justify-between">
                        <span className="text-sm text-slate-900">ETD:</span>
                        <span className="text-sm text-slate-900">
                          {selectedGate.aircraft.etd}
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Assign Resources
                </button>
                <button className="w-full border border-slate-200 py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors">
                  View Schedule
                </button>
              </div>
            </div>
          )}

          {/* Available Resources */}
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Available Resources
            </h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {resources
                .filter((r) => r.status === "available")
                .map((resource) => (
                  <div
                    key={resource.id}
                    className="flex items-center justify-between p-2 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"
                    onClick={() => setSelectedResource(resource.id)}
                  >
                    <div className="flex items-center">
                      {resource.type === "crew" ? (
                        <Users className="w-4 h-4 text-slate-400 mr-2" />
                      ) : (
                        <Settings className="w-4 h-4 text-slate-400 mr-2" />
                      )}
                      <span className="text-sm text-slate-900">
                        {resource.name}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500">
                      {resource.location}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Alerts */}
          <div className="flex-1 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Active Alerts
            </h3>
            <div className="space-y-3">
              {alerts.map((alert) => {
                const IconComponent = getAlertIcon(alert.type);
                return (
                  <div
                    key={alert.id}
                    className="flex items-start space-x-3 p-3 border border-slate-200 rounded-lg"
                  >
                    <div
                      className={cn(
                        "p-1 rounded-full",
                        getAlertColor(alert.type)
                      )}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-900">{alert.message}</p>
                      <p className="text-xs text-slate-500 mt-1">
                        {alert.time}
                      </p>
                      <button className="mt-2 text-xs text-blue-600 hover:text-blue-700 font-medium text-slate-900">
                        {alert.action === "resolve" && "Resolve →"}
                        {alert.action === "assign" && "Assign →"}
                        {alert.action === "acknowledge" && "Acknowledge →"}
                        {alert.action === "schedule" && "Schedule →"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
