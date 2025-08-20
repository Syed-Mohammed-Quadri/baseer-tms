import { Plane } from "lucide-react";
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

const ListView = ({
  selectedGate,
  setSelectedGate,
  gatesData,
}: {
  selectedGate: GateData | null;
  gatesData: GateData[];
  setSelectedGate: React.Dispatch<React.SetStateAction<GateData | null>>;
}) => {
  const { theme } = useThemeStore();

  return (
    <div className="p-6">
      <div
        className={`rounded-lg border transition-colors ${
          theme === "light"
            ? "bg-white border-gray-200"
            : "bg-slate-800 border-slate-700"
        }`}
      >
        <div className="space-y-1">
          {[
            {
              id: "G101",
              type: "Narrow-body • Bridge",
              status: "available",
            },
            {
              id: "G102",
              type: "Wide-body • Bridge",
              status: "occupied",
              utilization: "85%",
            },
            {
              id: "G103",
              type: "Wide-body • Bridge",
              status: "available",
            },
            {
              id: "S201",
              type: "Narrow-body • Remote",
              status: "maintenance",
            },
            {
              id: "S202",
              type: "Wide-body • Remote",
              status: "available",
            },
          ].map((stand) => (
            <div
              key={stand.id}
              className={`flex items-center justify-between p-4 cursor-pointer transition-colors ${
                selectedGate?.id === stand.id
                  ? theme === "light"
                    ? "bg-blue-50 border-l-4 border-blue-500"
                    : "bg-blue-900/30 border-l-4 border-blue-500"
                  : theme === "light"
                  ? "hover:bg-gray-50"
                  : "hover:bg-slate-700"
              }`}
              onClick={() =>
                setSelectedGate(
                  gatesData.find((g) => g.id === stand.id) || null
                )
              }
            >
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded mr-3 flex items-center justify-center transition-colors ${
                    theme === "light" ? "bg-gray-100" : "bg-slate-600"
                  }`}
                >
                  <Plane
                    className={`w-4 h-4 ${
                      theme === "light" ? "text-gray-600" : "text-slate-300"
                    }`}
                  />
                </div>
                <div>
                  <div
                    className={`font-medium ${
                      theme === "light" ? "text-gray-900" : "text-slate-100"
                    }`}
                  >
                    {stand.id}
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "light" ? "text-gray-600" : "text-slate-400"
                    }`}
                  >
                    {stand.type}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {stand.utilization && (
                  <span
                    className={`text-sm ${
                      theme === "light" ? "text-gray-700" : "text-slate-300"
                    }`}
                  >
                    {stand.utilization}
                  </span>
                )}
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    stand.status === "available"
                      ? theme === "light"
                        ? "bg-green-100 text-green-800"
                        : "bg-green-900/30 text-green-300"
                      : stand.status === "occupied"
                      ? theme === "light"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-blue-900/30 text-blue-300"
                      : theme === "light"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-purple-900/30 text-purple-300"
                  }`}
                >
                  {stand.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListView;
