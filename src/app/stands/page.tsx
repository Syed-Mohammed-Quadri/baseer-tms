"use client";

import { useState } from "react";
import {
  Plane,
  Clock,
  MapPin,
  Settings,
  AlertTriangle,
  CheckCircle,
  Filter,
  Search,
  MoreVertical,
  Plus,
  Minus,
  RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface GateData {
  id: string;
  name: string;
  terminal: string;
  status: "available" | "occupied" | "turnaround" | "maintenance" | "conflict";
  capacity: number;
  aircraft?: {
    flight: string;
    type: string;
    registration: string;
    passengers: number;
    eta?: string;
    etd?: string;
    progress: number;
  };
  nextAvailable?: string;
  utilization: number;
  position: { x: number; y: number };
}

const gatesData: GateData[] = [
  {
    id: "A12",
    name: "Gate A12",
    terminal: "A",
    status: "occupied",
    capacity: 300,
    aircraft: {
      flight: "LH441",
      type: "A320",
      registration: "D-AIUE",
      passengers: 180,
      etd: "14:30",
      progress: 75,
    },
    utilization: 85,
    position: { x: 150, y: 100 },
  },
  {
    id: "A15",
    name: "Gate A15",
    terminal: "A",
    status: "turnaround",
    capacity: 250,
    aircraft: {
      flight: "BA892",
      type: "B737",
      registration: "G-DOCG",
      passengers: 156,
      eta: "15:20",
      etd: "16:45",
      progress: 45,
    },
    utilization: 72,
    position: { x: 250, y: 100 },
  },
  {
    id: "A18",
    name: "Gate A18",
    terminal: "A",
    status: "available",
    capacity: 400,
    nextAvailable: "Now",
    utilization: 60,
    position: { x: 350, y: 100 },
  },
  {
    id: "A21",
    name: "Gate A21",
    terminal: "A",
    status: "available",
    capacity: 280,
    nextAvailable: "Now",
    utilization: 45,
    position: { x: 450, y: 100 },
  },
  {
    id: "B08",
    name: "Gate B08",
    terminal: "B",
    status: "maintenance",
    capacity: 350,
    nextAvailable: "18:00",
    utilization: 0,
    position: { x: 150, y: 250 },
  },
  {
    id: "B11",
    name: "Gate B11",
    terminal: "B",
    status: "conflict",
    capacity: 500,
    aircraft: {
      flight: "EK203",
      type: "A380",
      registration: "A6-EEZ",
      passengers: 420,
      eta: "16:00",
      progress: 20,
    },
    utilization: 95,
    position: { x: 250, y: 250 },
  },
  {
    id: "B14",
    name: "Gate B14",
    terminal: "B",
    status: "occupied",
    capacity: 300,
    aircraft: {
      flight: "QR401",
      type: "A350",
      registration: "A7-ALZ",
      passengers: 280,
      etd: "17:15",
      progress: 60,
    },
    utilization: 88,
    position: { x: 350, y: 250 },
  },
  {
    id: "B17",
    name: "Gate B17",
    terminal: "B",
    status: "available",
    capacity: 200,
    nextAvailable: "Now",
    utilization: 55,
    position: { x: 450, y: 250 },
  },
];

export default function StandsPage() {
  const [selectedGate, setSelectedGate] = useState<GateData | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [mapZoom, setMapZoom] = useState(1);

  const filteredGates = gatesData.filter((gate) => {
    const matchesStatus =
      filterStatus === "all" || gate.status === filterStatus;
    const matchesSearch =
      gate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gate.aircraft?.flight.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gate.terminal.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-800 border-green-200";
      case "occupied":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "turnaround":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "maintenance":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "conflict":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "available":
        return CheckCircle;
      case "occupied":
        return Plane;
      case "turnaround":
        return Clock;
      case "maintenance":
        return Settings;
      case "conflict":
        return AlertTriangle;
      default:
        return CheckCircle;
    }
  };

  const getGateMapColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-500 border-green-600";
      case "occupied":
        return "bg-blue-500 border-blue-600";
      case "turnaround":
        return "bg-yellow-500 border-yellow-600";
      case "maintenance":
        return "bg-gray-500 border-gray-600";
      case "conflict":
        return "bg-red-500 border-red-600";
      default:
        return "bg-gray-500 border-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Stand & Gate Management
            </h1>
            <p className="text-slate-900 mt-1">
              Monitor and manage gate assignments, capacity, and operations
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {/* View Toggle */}
            <div className="flex items-center border border-slate-200 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "px-3 py-1 text-sm rounded transition-colors",
                  viewMode === "grid"
                    ? "bg-blue-600 text-white"
                    : "text-slate-900 hover:bg-slate-50"
                )}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={cn(
                  "px-3 py-1 text-sm rounded transition-colors",
                  viewMode === "map"
                    ? "bg-blue-600 text-white"
                    : "text-slate-900 hover:bg-slate-50"
                )}
              >
                Map
              </button>
            </div>
            <button className="flex items-center px-3 py-2 border text-slate-900 border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-slate-200 px-6 py-3">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search gates, flights, terminals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 text-slate-900 focus:ring-blue-500"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
          >
            <option value="all">All Status</option>
            <option value="available">Available</option>
            <option value="occupied">Occupied</option>
            <option value="turnaround">Turnaround</option>
            <option value="maintenance">Maintenance</option>
            <option value="conflict">Conflict</option>
          </select>
          <button className="flex items-center px-3 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-slate-900">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </button>
        </div>
      </div>

      {/* Content */}
      {viewMode === "grid" ? (
        /* Grid View */
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGates.map((gate) => {
              const StatusIcon = getStatusIcon(gate.status);
              return (
                <div
                  key={gate.id}
                  className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedGate(gate)}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <StatusIcon className="w-5 h-5 text-slate-400 mr-2" />
                      <h3 className="font-semibold text-slate-900">
                        {gate.name}
                      </h3>
                    </div>
                    <button className="p-1 hover:bg-slate-100 rounded">
                      <MoreVertical className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>

                  {/* Terminal */}
                  <div className="text-sm text-slate-900 mb-3">
                    Terminal {gate.terminal}
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-slate-900">Status:</span>
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium capitalize border",
                        getStatusColor(gate.status)
                      )}
                    >
                      {gate.status}
                    </span>
                  </div>

                  {/* Aircraft Info */}
                  {gate.aircraft ? (
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-900">Flight:</span>
                        <span className="text-slate-900 font-medium">
                          {gate.aircraft.flight}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-900">Aircraft:</span>
                        <span className="text-slate-900">
                          {gate.aircraft.type}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-900">Passengers:</span>
                        <span className="text-slate-900">
                          {gate.aircraft.passengers}
                        </span>
                      </div>
                      {gate.aircraft.etd && (
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-900">ETD:</span>
                          <span className="text-slate-900">
                            {gate.aircraft.etd}
                          </span>
                        </div>
                      )}
                      {gate.status === "turnaround" &&
                        gate.aircraft.progress && (
                          <div className="mt-3">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-slate-900">
                                Turnaround Progress:
                              </span>
                              <span className="text-slate-900">
                                {gate.aircraft.progress}%
                              </span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${gate.aircraft.progress}%` }}
                              />
                            </div>
                          </div>
                        )}
                    </div>
                  ) : (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-900">Capacity:</span>
                        <span className="text-slate-900">
                          {gate.capacity} pax
                        </span>
                      </div>
                      {gate.nextAvailable && (
                        <div className="flex justify-between text-sm mt-2">
                          <span className="text-slate-900">Available:</span>
                          <span className="text-green-600 font-medium">
                            {gate.nextAvailable}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Utilization */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-900">Utilization:</span>
                      <span className="text-slate-900">
                        {gate.utilization}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className={cn(
                          "h-2 rounded-full transition-all duration-300",
                          gate.utilization >= 90
                            ? "bg-red-500"
                            : gate.utilization >= 70
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        )}
                        style={{ width: `${gate.utilization}%` }}
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button className="flex-1 text-xs bg-blue-600 text-white py-2 px-3 rounded hover:bg-blue-700 transition-colors">
                      Assign
                    </button>
                    <button className="flex-1 text-xs border border-slate-200 py-2 px-3 text-slate-900 rounded hover:bg-slate-50 transition-colors">
                      Schedule
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Map View */
        <div className="flex-1 p-6">
          <div className="bg-white rounded-lg border border-slate-200 h-[calc(100vh-280px)] relative overflow-hidden">
            {/* Map Controls */}
            <div className="absolute top-4 right-4 z-10 flex flex-col space-y-2">
              <button
                onClick={() => setMapZoom(Math.min(2, mapZoom + 0.25))}
                className="p-2 bg-white border border-slate-200 rounded hover:bg-slate-50 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMapZoom(1)}
                className="px-2 py-1 bg-white border border-slate-200 rounded hover:bg-slate-50 transition-colors text-xs"
              >
                Reset
              </button>
              <button
                onClick={() => setMapZoom(Math.max(0.5, mapZoom - 0.25))}
                className="p-2 bg-white border border-slate-200 rounded hover:bg-slate-50 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Map */}
            <div className="absolute inset-0 bg-slate-50 p-8 overflow-auto">
              <div
                className="relative"
                style={{
                  transform: `scale(${mapZoom})`,
                  transformOrigin: "top left",
                  width: `${100 / mapZoom}%`,
                  height: `${100 / mapZoom}%`,
                }}
              >
                {/* Terminal Buildings */}
                <div className="absolute top-0 left-0 w-full h-32 bg-blue-100 border-2 border-blue-300 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-semibold text-blue-700">
                    Terminal A
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-green-100 border-2 border-green-300 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-semibold text-green-700">
                    Terminal B
                  </span>
                </div>

                {/* Gates */}
                {filteredGates.map((gate) => (
                  <div
                    key={gate.id}
                    className={cn(
                      "absolute w-24 h-20 rounded-lg border-2 cursor-pointer transition-all hover:scale-105 flex flex-col items-center justify-center text-white font-medium",
                      getGateMapColor(gate.status),
                      selectedGate?.id === gate.id && "ring-4 ring-blue-400"
                    )}
                    style={{
                      left: `${gate.position.x}px`,
                      top: `${gate.position.y}px`,
                    }}
                    onClick={() => setSelectedGate(gate)}
                  >
                    <div className="text-sm">{gate.name}</div>
                    {gate.aircraft && (
                      <div className="text-xs opacity-90">
                        {gate.aircraft.flight}
                      </div>
                    )}
                  </div>
                ))}

                {/* Runways (decorative) */}
                <div className="absolute left-10 top-1/2 w-4/5 h-2 bg-gray-400 transform -translate-y-1/2" />
                <div className="absolute left-1/2 top-10 w-2 h-4/5 bg-gray-400 transform -translate-x-1/2" />
              </div>
            </div>

            {/* Mini Map */}
            <div className="absolute bottom-4 left-4 w-32 h-24 bg-white border border-slate-200 rounded overflow-hidden">
              <div className="relative w-full h-full bg-slate-100">
                {filteredGates.map((gate) => (
                  <div
                    key={gate.id}
                    className={cn(
                      "absolute w-2 h-2 rounded",
                      getGateMapColor(gate.status).split(" ")[0]
                    )}
                    style={{
                      left: `${(gate.position.x / 600) * 100}%`,
                      top: `${(gate.position.y / 400) * 100}%`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-3">
              <h4 className="text-sm font-medium text-slate-900 mb-2">
                Gate Status
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded mr-2" />
                  <span>Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded mr-2" />
                  <span>Occupied</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded mr-2" />
                  <span>Turnaround</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-500 rounded mr-2" />
                  <span>Maintenance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded mr-2" />
                  <span>Conflict</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Selected Gate Details Modal */}
      {selectedGate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedGate(null)}
        >
          <div
            className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">
                {selectedGate.name}
              </h3>
              <button
                onClick={() => setSelectedGate(null)}
                className="text-slate-400 hover:text-slate-900"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-900">Terminal:</span>
                  <p className="font-medium text-slate-400">
                    {selectedGate.terminal}
                  </p>
                </div>
                <div>
                  <span className="text-slate-900">Capacity:</span>
                  <p className="font-medium text-slate-400">
                    {selectedGate.capacity} passengers
                  </p>
                </div>
                <div>
                  <span className="text-slate-900">Status:</span>
                  <span
                    className={cn(
                      "inline-block px-2 py-1 rounded-full text-xs font-medium capitalize border",
                      getStatusColor(selectedGate.status)
                    )}
                  >
                    {selectedGate.status}
                  </span>
                </div>
                <div>
                  <span className="text-slate-900">Utilization:</span>
                  <p className="font-medium text-slate-400">
                    {selectedGate.utilization}%
                  </p>
                </div>
              </div>

              {selectedGate.aircraft && (
                <div className="border-t border-slate-200 pt-4">
                  <h4 className="font-medium text-slate-900 mb-2 *:">
                    Current Aircraft
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-900">Flight:</span>
                      <p className="font-medium text-slate-400">
                        {selectedGate.aircraft.flight}
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-900">Aircraft Type:</span>
                      <p className="font-medium text-slate-400">
                        {selectedGate.aircraft.type}
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-900">Registration:</span>
                      <p className="font-medium text-slate-400">
                        {selectedGate.aircraft.registration}
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-900">Passengers:</span>
                      <p className="font-medium text-slate-400">
                        {selectedGate.aircraft.passengers}
                      </p>
                    </div>
                  </div>
                  {selectedGate.aircraft.progress && (
                    <div className="mt-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-900">Progress:</span>
                        <span className="font-medium">
                          {selectedGate.aircraft.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{
                            width: `${selectedGate.aircraft.progress}%`,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex space-x-3 pt-4">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Manage Resources
                </button>
                <button className="flex-1 border border-slate-200 py-2 px-4 rounded-lg  text-slate-900  hover:bg-slate-50 transition-colors">
                  View Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
