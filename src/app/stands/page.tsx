"use client";

import { useState } from "react";
import {
  Plane,
  Clock,
  Settings,
  AlertTriangle,
  CheckCircle,
  Filter,
  Search,
  MoreVertical,
  Plus,
  Minus,
  RefreshCw,
  Eye,
  Map,
  X,
  List,
} from "lucide-react";
import MapVIew from "@/components/stands/MapVIew";
import ListView from "@/components/stands/ListView";

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
      ? "bg-blue-100 border-blue-200"
      : "bg-green-100 border-green-200";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-800 rounded mr-3 flex items-center justify-center">
              <Plane className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Apron Operations Center
              </h1>
              <p className="text-sm text-gray-900">
                Gate and stand assignment management for aviation operations
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-green-50 text-green-700 px-3 py-1 rounded text-sm">
              <CheckCircle className="w-4 h-4 mr-1" />
              IATA Compliant
            </div>
            <div className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm">
              <Plane className="w-4 h-4 mr-1" />
              Multi-Airport Ready
            </div>
            <button className="bg-gray-800 text-white px-3 py-1 rounded text-sm">
              Assignment Optimizer
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search flights, aircraft, routes... (try 'SV1903' or 'wide-body gates')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-96 pl-9 pr-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            >
              <option value="all">All Stands</option>
              <option value="available">Available</option>
              <option value="occupied">Occupied</option>
              <option value="maintenance">Maintenance</option>
            </select>
            <button className="p-2 border border-gray-200 rounded hover:bg-gray-50">
              <Settings className="w-4 h-4 text-gray-900" />
            </button>
            <button className="p-2 border border-gray-200 rounded hover:bg-gray-50">
              <RefreshCw className="w-4 h-4 text-gray-900" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1">
          {/* Apron & Gate Layout Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Map className="w-4 h-4 mr-2 text-gray-900" />
                <span className="font-medium text-gray-900">
                  Apron & Gate Layout
                </span>
                <span className="ml-2 bg-red-500 w-2 h-2 rounded-full"></span>
                <span className="ml-1 text-sm text-gray-900">Live</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode("map")}
                  className={`p-2 rounded ${
                    viewMode === "map"
                      ? "bg-blue-100 text-blue-600"
                      : "hover:bg-gray-100 text-gray-900"
                  }`}
                >
                  <Map className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${
                    viewMode === "list"
                      ? "bg-blue-100 text-blue-600"
                      : "hover:bg-gray-100 text-gray-900"
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
        <div className="w-80 bg-white border-l border-gray-200">
          {/* Aircraft Queue */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium flex items-center">
                <Settings className="w-4 h-4 mr-2 text-gray-900" />
                <p className="text-gray-900">Aircraft Queue</p>
              </h3>
              <span className="text-sm text-gray-900">3</span>
            </div>

            <div className="space-y-3">
              {aircraftQueue.map((aircraft) => (
                <div
                  key={aircraft.id}
                  className="p-3 bg-gray-50 rounded text-gray-900"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{aircraft.id}</span>
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        aircraft.status === "EARLY"
                          ? "bg-blue-100 text-blue-800"
                          : aircraft.status === "DELAYED"
                          ? "bg-red-100 text-red-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {aircraft.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-900 mb-1">
                    {aircraft.aircraft} • {aircraft.size}
                  </div>
                  <div className="text-sm text-gray-900 mb-2">
                    {aircraft.reg}
                  </div>
                  <div className="text-sm text-gray-900 mb-2">
                    ⏰ {aircraft.time}
                  </div>
                  <div className="flex space-x-1">
                    {aircraft.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-1 py-0.5 bg-gray-200 text-gray-700 text-xs rounded"
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
                  <Settings className="w-4 h-4 mr-2 text-gray-900" />
                  <p className="text-gray-900">Stand Details</p>
                </h3>
                <button
                  onClick={() => setSelectedGate(null)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">
                    {selectedGate.name}
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded font-medium">
                    {selectedGate.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-900">Type:</span>
                    <div className="font-medium text-gray-900">
                      Remote Stand
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-900">Category:</span>
                    <div className="font-medium text-gray-900 ">
                      {selectedGate.standType}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-900">Next Available:</span>
                    <div className="font-medium text-gray-900">Tomorrow</div>
                  </div>
                </div>

                <div>
                  <span className="text-gray-900 text-sm">Capabilities:</span>
                  <div className="flex space-x-1 mt-1">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      gpu
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
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
