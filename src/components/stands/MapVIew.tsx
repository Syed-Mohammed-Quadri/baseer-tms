import { Settings } from "lucide-react";
import React from "react";
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

const MapView = ({ selectedGate }: { selectedGate: GateData | null }) => {
  const { theme } = useThemeStore();

  return (
    <div className="p-6">
      <div
        className={`rounded-lg border h-[600px] relative overflow-hidden transition-colors ${
          theme === "light"
            ? "bg-white border-gray-200"
            : "bg-slate-800 border-slate-700"
        }`}
      >
        {/* Terminal Building */}
        <div
          className={`absolute top-4 left-1/2 transform -translate-x-1/2 text-white px-6 py-2 rounded ${
            theme === "light" ? "bg-gray-600" : "bg-slate-600"
          }`}
        >
          Terminal
        </div>

        {/* Apron A - Contact Gates (Blue) */}
        <div
          className={`absolute top-16 left-6 right-6 h-32 border-2 border-b-2 rounded flex items-center justify-center z-10 ${
            theme === "light"
              ? "bg-blue-100 border-blue-300"
              : "bg-blue-900/30 border-blue-600"
          }`}
        >
          <div className="w-100 flex items-center justify-center h-8">
            <span
              className={`font-medium mb-20 ${
                theme === "light" ? "text-blue-700" : "text-blue-300"
              }`}
            >
              Apron A - Contact Gates
            </span>
          </div>
        </div>

        {/* Contact Gates A1-A8 */}
        <div className="absolute top-30 left-6 right-6 flex justify-between px-4 z-20">
          {["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"].map((gate) => (
            <div
              key={gate}
              className={`w-12 h-12 rounded flex items-center justify-center text-white text-xs font-medium ${
                theme === "light" ? "bg-blue-500" : "bg-blue-600"
              }`}
            >
              {gate}
            </div>
          ))}
        </div>

        {/* Apron B - Remote Stands (Green) */}
        <div
          className={`absolute top-50 left-6 right-6 h-32 border-2 rounded ${
            theme === "light"
              ? "bg-green-100 border-green-300"
              : "bg-green-900/30 border-green-600"
          }`}
        >
          <div
            className={`flex items-center justify-center h-8 border-b ${
              theme === "light" ? "border-green-300" : "border-green-600"
            }`}
          >
            <span
              className={`font-medium ${
                theme === "light" ? "text-green-700" : "text-green-300"
              }`}
            >
              Apron B - Remote Stands
            </span>
          </div>

          {/* Remote Stands Grid */}
          <div className="p-4 grid grid-cols-6 gap-4">
            {["B1", "B2", "B3", "B4", "B5", "B6"].map((stand) => (
              <div
                key={stand}
                className={`w-12 h-12 rounded flex items-center justify-center text-white text-xs font-medium ${
                  theme === "light" ? "bg-green-500" : "bg-green-600"
                }`}
              >
                {stand}
              </div>
            ))}
          </div>
          <div className="px-4 grid grid-cols-6 gap-4">
            {["B7", "B8", "B9", "B10", "B11", "B12"].map((stand) => (
              <div
                key={stand}
                className={`w-12 h-12 rounded flex items-center justify-center text-white text-xs font-medium ${
                  theme === "light" ? "bg-green-500" : "bg-green-600"
                }`}
              >
                {stand}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Stand Highlight */}
        {selectedGate && (
          <div
            className={`absolute top-96 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 rounded-lg ${
              theme === "light" ? "bg-purple-600" : "bg-purple-700"
            }`}
          >
            <div className="flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              Selected: {selectedGate.name}
              <span
                className={`ml-2 px-2 py-1 rounded text-xs ${
                  theme === "light" ? "bg-purple-800" : "bg-purple-900"
                }`}
              >
                maintenance
              </span>
            </div>
          </div>
        )}

        {/* Drop Assignment Area */}
        <div
          className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg ${
            theme === "light"
              ? "bg-yellow-400 text-gray-800"
              : "bg-yellow-500 text-gray-900"
          }`}
        >
          Drop on a stand to assign Aircraft: F38901
        </div>

        {/* Runway */}
        <div
          className={`absolute bottom-4 left-6 right-6 h-8 rounded flex items-center justify-between px-4 ${
            theme === "light" ? "bg-gray-600" : "bg-slate-600"
          }`}
        >
          <span className="text-white text-sm">Runway 09/27</span>
          <span className="text-white text-sm">27</span>
        </div>

        {/* Legend */}
        <div
          className={`absolute top-90 left-4 p-3 rounded border text-xs transition-colors ${
            theme === "light"
              ? "bg-white border-gray-200"
              : "bg-slate-700 border-slate-600"
          }`}
        >
          <div
            className={`font-medium mb-2 ${
              theme === "light" ? "text-gray-900" : "text-slate-100"
            }`}
          >
            Legend
          </div>
          <div className="space-y-1">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
              <p
                className={`${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              >
                Contact Gates
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
              <p
                className={`${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              >
                Remote Stands
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
              <p
                className={`${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              >
                Service Areas
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded mr-2"></div>
              <p
                className={`${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              >
                Taxiways
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-500 rounded mr-2"></div>
              <p
                className={`${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              >
                Runway
              </p>
            </div>
          </div>
          <div
            className={`mt-2 pt-2 border-t ${
              theme === "light"
                ? "border-gray-200 text-yellow-600"
                : "border-slate-600 text-yellow-400"
            }`}
          >
            <div>⚡ Click to select</div>
            <div>🎯 Drag to assign</div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div
          className={`p-4 rounded border transition-colors ${
            theme === "light"
              ? "bg-white border-gray-200"
              : "bg-slate-800 border-slate-700"
          }`}
        >
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <span
              className={`text-2xl font-bold ${
                theme === "light" ? "text-gray-900" : "text-slate-100"
              }`}
            >
              5
            </span>
          </div>
          <div
            className={`text-sm ${
              theme === "light" ? "text-gray-600" : "text-slate-400"
            }`}
          >
            Total Stands
          </div>
        </div>
        <div
          className={`p-4 rounded border transition-colors ${
            theme === "light"
              ? "bg-white border-gray-200"
              : "bg-slate-800 border-slate-700"
          }`}
        >
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span
              className={`text-2xl font-bold ${
                theme === "light" ? "text-gray-900" : "text-slate-100"
              }`}
            >
              3
            </span>
          </div>
          <div
            className={`text-sm ${
              theme === "light" ? "text-gray-600" : "text-slate-400"
            }`}
          >
            Total Aircraft
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
