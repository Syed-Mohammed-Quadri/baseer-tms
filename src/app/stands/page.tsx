"use client";

import { useState } from "react";
import {
  Plane,
  Settings,
  CheckCircle,
  Search,
  RefreshCw,
  Eye,
  Map,
  X,
} from "lucide-react";
import MapVIew from "@/components/stands/MapVIew";
import ListView from "@/components/stands/ListView";
import { useThemeStore } from "@/store/theme-store";

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
  category: "Contact Gates" | "Remote Stands";
  standType: "Narrow-body" | "Wide-body";
  bridge?: boolean;
}

const gatesData: GateData[] = [
  // Contact Gates (A1-A8)
  {
    id: "A1",
    name: "A1",
    terminal: "A",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 70, y: 180 },
    category: "Contact Gates",
    standType: "Narrow-body",
    bridge: true,
  },
  {
    id: "A2",
    name: "A2",
    terminal: "A",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 140, y: 180 },
    category: "Contact Gates",
    standType: "Narrow-body",
    bridge: true,
  },
  {
    id: "A3",
    name: "A3",
    terminal: "A",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 210, y: 180 },
    category: "Contact Gates",
    standType: "Narrow-body",
    bridge: true,
  },
  {
    id: "A4",
    name: "A4",
    terminal: "A",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 280, y: 180 },
    category: "Contact Gates",
    standType: "Narrow-body",
    bridge: true,
  },
  {
    id: "A5",
    name: "A5",
    terminal: "A",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 350, y: 180 },
    category: "Contact Gates",
    standType: "Narrow-body",
    bridge: true,
  },
  {
    id: "A6",
    name: "A6",
    terminal: "A",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 420, y: 180 },
    category: "Contact Gates",
    standType: "Narrow-body",
    bridge: true,
  },
  {
    id: "A7",
    name: "A7",
    terminal: "A",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 490, y: 180 },
    category: "Contact Gates",
    standType: "Narrow-body",
    bridge: true,
  },
  {
    id: "A8",
    name: "A8",
    terminal: "A",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 560, y: 180 },
    category: "Contact Gates",
    standType: "Narrow-body",
    bridge: true,
  },

  // Remote Stands (B1-B12, green section)
  {
    id: "B1",
    name: "B1",
    terminal: "B",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 70, y: 280 },
    category: "Remote Stands",
    standType: "Narrow-body",
  },
  {
    id: "B2",
    name: "B2",
    terminal: "B",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 140, y: 280 },
    category: "Remote Stands",
    standType: "Narrow-body",
  },
  {
    id: "B3",
    name: "B3",
    terminal: "B",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 210, y: 280 },
    category: "Remote Stands",
    standType: "Narrow-body",
  },
  {
    id: "B4",
    name: "B4",
    terminal: "B",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 280, y: 280 },
    category: "Remote Stands",
    standType: "Narrow-body",
  },
  {
    id: "B5",
    name: "B5",
    terminal: "B",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 350, y: 280 },
    category: "Remote Stands",
    standType: "Narrow-body",
  },
  {
    id: "B6",
    name: "B6",
    terminal: "B",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 420, y: 280 },
    category: "Remote Stands",
    standType: "Narrow-body",
  },
  {
    id: "B7",
    name: "B7",
    terminal: "B",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 70, y: 320 },
    category: "Remote Stands",
    standType: "Narrow-body",
  },
  {
    id: "B8",
    name: "B8",
    terminal: "B",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 140, y: 320 },
    category: "Remote Stands",
    standType: "Narrow-body",
  },
  {
    id: "B9",
    name: "B9",
    terminal: "B",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 210, y: 320 },
    category: "Remote Stands",
    standType: "Narrow-body",
  },
  {
    id: "B10",
    name: "B10",
    terminal: "B",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 280, y: 320 },
    category: "Remote Stands",
    standType: "Narrow-body",
  },
  {
    id: "B11",
    name: "B11",
    terminal: "B",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 350, y: 320 },
    category: "Remote Stands",
    standType: "Narrow-body",
  },
  {
    id: "B12",
    name: "B12",
    terminal: "B",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 420, y: 320 },
    category: "Remote Stands",
    standType: "Narrow-body",
  },

  // Gates (G101-G103)
  {
    id: "G101",
    name: "G101",
    terminal: "G",
    status: "available",
    capacity: 180,
    utilization: 0,
    position: { x: 100, y: 450 },
    category: "Contact Gates",
    standType: "Narrow-body",
    bridge: true,
  },
  {
    id: "G102",
    name: "G102",
    terminal: "G",
    status: "occupied",
    capacity: 300,
    utilization: 85,
    position: { x: 200, y: 450 },
    category: "Contact Gates",
    standType: "Wide-body",
    bridge: true,
    aircraft: {
      flight: "LH441",
      type: "A330",
      registration: "D-AIUE",
      passengers: 250,
      etd: "14:30",
      progress: 75,
    },
  },
  {
    id: "G103",
    name: "G103",
    terminal: "G",
    status: "available",
    capacity: 300,
    utilization: 0,
    position: { x: 300, y: 450 },
    category: "Contact Gates",
    standType: "Wide-body",
    bridge: true,
  },

  // Remote Stands (S201, S202)
  {
    id: "S201",
    name: "S201",
    terminal: "S",
    status: "maintenance",
    capacity: 180,
    utilization: 0,
    position: { x: 100, y: 520 },
    category: "Remote Stands",
    standType: "Narrow-body",
  },
  {
    id: "S202",
    name: "S202",
    terminal: "S",
    status: "available",
    capacity: 300,
    utilization: 0,
    position: { x: 200, y: 520 },
    category: "Remote Stands",
    standType: "Wide-body",
  },
];

const aircraftQueue = [
  {
    id: "SV1903",
    aircraft: "A320",
    size: "Size C",
    reg: "LHR-DXB",
    time: "14:25",
    status: "EARLY",
    capabilities: ["bridge", "gpu", "pca"],
  },
  {
    id: "XY1521",
    aircraft: "B777-300ER",
    size: "Size E",
    reg: "DXB-JFK",
    time: "16:15",
    status: "DELAYED",
    capabilities: ["bridge", "gpu", "pca", "wide-body"],
  },
  {
    id: "F38901",
    aircraft: "A330-300",
    size: "Size D",
    reg: "DXB-DUB",
    time: "18:30",
    status: "ONTIME",
    capabilities: ["bridge", "gpu", "pca"],
  },
];

export default function StandsPage() {
  const { theme } = useThemeStore();
  const [selectedGate, setSelectedGate] = useState<GateData | null>(
    gatesData.find((g) => g.id === "S201") || null
  );
  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

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
        return "bg-green-500";
      case "occupied":
        return "bg-blue-500";
      case "turnaround":
        return "bg-yellow-500";
      case "maintenance":
        return "bg-purple-500";
      case "conflict":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getCategoryColor = (category: string) => {
    return category === "Contact Gates"
      ? theme === "light"
        ? "bg-blue-100 border-blue-200"
        : "bg-blue-900/30 border-blue-700"
      : theme === "light"
      ? "bg-green-100 border-green-200"
      : "bg-green-900/30 border-green-700";
  };

  return (
    <div
      className={`min-h-screen transition-colors ${
        theme === "light" ? "bg-gray-50" : "bg-slate-900"
      }`}
    >
      {/* Header */}
      <div
        className={`border-b px-6 py-4 transition-colors ${
          theme === "light"
            ? "bg-white border-gray-200"
            : "bg-slate-800 border-slate-700"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div
              className={`w-8 h-8 rounded mr-3 flex items-center justify-center ${
                theme === "light" ? "bg-gray-800" : "bg-slate-700"
              }`}
            >
              <Plane className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1
                className={`text-xl font-semibold transition-colors ${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              >
                Apron Operations Center
              </h1>
              <p
                className={`text-sm transition-colors ${
                  theme === "light" ? "text-gray-600" : "text-slate-400"
                }`}
              >
                Gate and stand assignment management for aviation operations
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div
              className={`flex items-center px-3 py-1 rounded text-sm ${
                theme === "light"
                  ? "bg-green-50 text-green-700"
                  : "bg-green-900/30 text-green-300"
              }`}
            >
              <CheckCircle className="w-4 h-4 mr-1" />
              IATA Compliant
            </div>
            <div
              className={`flex items-center px-3 py-1 rounded text-sm ${
                theme === "light"
                  ? "bg-blue-50 text-blue-700"
                  : "bg-blue-900/30 text-blue-300"
              }`}
            >
              <Plane className="w-4 h-4 mr-1" />
              Multi-Airport Ready
            </div>
            <button
              className={`px-3 py-1 rounded text-sm text-white ${
                theme === "light" ? "bg-gray-800" : "bg-slate-700"
              }`}
            >
              Assignment Optimizer
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div
        className={`border-b px-6 py-3 transition-colors ${
          theme === "light"
            ? "bg-white border-gray-200"
            : "bg-slate-800 border-slate-700"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                  theme === "light" ? "text-gray-400" : "text-slate-500"
                }`}
              />
              <input
                type="text"
                placeholder="Search flights, aircraft, routes... (try 'SV1903' or 'wide-body gates')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-96 pl-9 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                  theme === "light"
                    ? "border-gray-200 bg-white text-gray-900"
                    : "border-slate-600 bg-slate-700 text-slate-100"
                }`}
              />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative inline-block">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className={`appearance-none border rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                  theme === "light"
                    ? "border-gray-200 bg-white text-gray-900"
                    : "border-slate-600 bg-slate-700 text-slate-100"
                }`}
              >
                <option value="all">All Stands</option>
                <option value="available">Available</option>
                <option value="occupied">Occupied</option>
                <option value="maintenance">Maintenance</option>
              </select>

              {/* Custom Arrow */}
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  className={`w-4 h-4 ${
                    theme === "light" ? "text-gray-500" : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <button
              className={`p-2 border rounded transition-colors ${
                theme === "light"
                  ? "border-gray-200 hover:bg-gray-50"
                  : "border-slate-600 hover:bg-slate-700"
              }`}
            >
              <Settings
                className={`w-4 h-4 ${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              />
            </button>
            <button
              className={`p-2 border rounded transition-colors ${
                theme === "light"
                  ? "border-gray-200 hover:bg-gray-50"
                  : "border-slate-600 hover:bg-slate-700"
              }`}
            >
              <RefreshCw
                className={`w-4 h-4 ${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1">
          {/* Apron & Gate Layout Header */}
          <div
            className={`border-b px-6 py-3 transition-colors ${
              theme === "light"
                ? "bg-white border-gray-200"
                : "bg-slate-800 border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Map
                  className={`w-4 h-4 mr-2 ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                />
                <span
                  className={`font-medium ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  Apron & Gate Layout
                </span>
                <span className="ml-2 bg-red-500 w-2 h-2 rounded-full"></span>
                <span
                  className={`ml-1 text-sm ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  Live
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode("map")}
                  className={`p-2 rounded transition-colors ${
                    viewMode === "map"
                      ? theme === "light"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-blue-900/30 text-blue-300"
                      : theme === "light"
                      ? "hover:bg-gray-100 text-gray-900"
                      : "hover:bg-slate-700 text-slate-100"
                  }`}
                >
                  <Map className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded transition-colors ${
                    viewMode === "list"
                      ? theme === "light"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-blue-900/30 text-blue-300"
                      : theme === "light"
                      ? "hover:bg-gray-100 text-gray-900"
                      : "hover:bg-slate-700 text-slate-100"
                  }`}
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {viewMode === "map" ? (
            /* Map View */
            <MapVIew selectedGate={selectedGate} />
          ) : (
            /* List View */
            <ListView
              selectedGate={selectedGate}
              setSelectedGate={setSelectedGate}
              gatesData={gatesData}
            />
          )}
        </div>

        {/* Right Sidebar */}
        <div
          className={`w-80 border-l transition-colors ${
            theme === "light"
              ? "bg-white border-gray-200"
              : "bg-slate-800 border-slate-700"
          }`}
        >
          {/* Aircraft Queue */}
          <div
            className={`p-4 border-b transition-colors ${
              theme === "light" ? "border-gray-200" : "border-slate-700"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium flex items-center">
                <Settings
                  className={`w-4 h-4 mr-2 ${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                />
                <p
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-slate-100"
                  }`}
                >
                  Aircraft Queue
                </p>
              </h3>
              <span
                className={`text-sm ${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              >
                3
              </span>
            </div>

            <div className="space-y-3">
              {aircraftQueue.map((aircraft) => (
                <div
                  key={aircraft.id}
                  className={`p-3 rounded transition-colors ${
                    theme === "light"
                      ? "bg-gray-50 text-gray-900"
                      : "bg-slate-700 text-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{aircraft.id}</span>
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        aircraft.status === "EARLY"
                          ? theme === "light"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-blue-900/30 text-blue-300"
                          : aircraft.status === "DELAYED"
                          ? theme === "light"
                            ? "bg-red-100 text-red-800"
                            : "bg-red-900/30 text-red-300"
                          : theme === "light"
                          ? "bg-green-100 text-green-800"
                          : "bg-green-900/30 text-green-300"
                      }`}
                    >
                      {aircraft.status}
                    </span>
                  </div>
                  <div
                    className={`text-sm mb-1 ${
                      theme === "light" ? "text-gray-700" : "text-slate-300"
                    }`}
                  >
                    {aircraft.aircraft} • {aircraft.size}
                  </div>
                  <div
                    className={`text-sm mb-2 ${
                      theme === "light" ? "text-gray-700" : "text-slate-300"
                    }`}
                  >
                    {aircraft.reg}
                  </div>
                  <div
                    className={`text-sm mb-2 ${
                      theme === "light" ? "text-gray-700" : "text-slate-300"
                    }`}
                  >
                    ⏰ {aircraft.time}
                  </div>
                  <div className="flex space-x-1">
                    {aircraft.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className={`px-1 py-0.5 text-xs rounded ${
                          theme === "light"
                            ? "bg-gray-200 text-gray-700"
                            : "bg-slate-600 text-slate-300"
                        }`}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stand Details */}
          {selectedGate && (
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium flex items-center">
                  <Settings
                    className={`w-4 h-4 mr-2 ${
                      theme === "light" ? "text-gray-900" : "text-slate-100"
                    }`}
                  />
                  <p
                    className={`${
                      theme === "light" ? "text-gray-900" : "text-slate-100"
                    }`}
                  >
                    Stand Details
                  </p>
                </h3>
                <button
                  onClick={() => setSelectedGate(null)}
                  className={`p-1 rounded transition-colors ${
                    theme === "light"
                      ? "hover:bg-gray-100"
                      : "hover:bg-slate-700"
                  }`}
                >
                  <X
                    className={`w-4 h-4 ${
                      theme === "light" ? "text-gray-900" : "text-slate-100"
                    }`}
                  />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`font-medium ${
                      theme === "light" ? "text-gray-900" : "text-slate-100"
                    }`}
                  >
                    {selectedGate.name}
                  </span>
                  <span
                    className={`px-2 py-1 text-xs rounded font-medium ${
                      theme === "light"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-purple-900/30 text-purple-300"
                    }`}
                  >
                    {selectedGate.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span
                      className={`${
                        theme === "light" ? "text-gray-600" : "text-slate-400"
                      }`}
                    >
                      Type:
                    </span>
                    <div
                      className={`font-medium ${
                        theme === "light" ? "text-gray-900" : "text-slate-100"
                      }`}
                    >
                      Remote Stand
                    </div>
                  </div>
                  <div>
                    <span
                      className={`${
                        theme === "light" ? "text-gray-600" : "text-slate-400"
                      }`}
                    >
                      Category:
                    </span>
                    <div
                      className={`font-medium ${
                        theme === "light" ? "text-gray-900" : "text-slate-100"
                      }`}
                    >
                      {selectedGate.standType}
                    </div>
                  </div>
                  <div>
                    <span
                      className={`${
                        theme === "light" ? "text-gray-600" : "text-slate-400"
                      }`}
                    >
                      Next Available:
                    </span>
                    <div
                      className={`font-medium ${
                        theme === "light" ? "text-gray-900" : "text-slate-100"
                      }`}
                    >
                      Tomorrow
                    </div>
                  </div>
                </div>

                <div>
                  <span
                    className={`text-sm ${
                      theme === "light" ? "text-gray-600" : "text-slate-400"
                    }`}
                  >
                    Capabilities:
                  </span>
                  <div className="flex space-x-1 mt-1">
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        theme === "light"
                          ? "bg-gray-100 text-gray-700"
                          : "bg-slate-600 text-slate-300"
                      }`}
                    >
                      gpu
                    </span>
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        theme === "light"
                          ? "bg-gray-100 text-gray-700"
                          : "bg-slate-600 text-slate-300"
                      }`}
                    >
                      pca
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
