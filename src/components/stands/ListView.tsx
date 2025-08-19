import { Plane } from "lucide-react";
import React from "react";
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
  return (
    <div className="p-6">
      <div className="bg-white rounded-lg border border-gray-200">
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
              className={`flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer text-gray-900 ${
                selectedGate?.id === stand.id
                  ? "bg-blue-50 border-l-4 border-blue-500"
                  : ""
              }`}
              onClick={() =>
                setSelectedGate(
                  gatesData.find((g) => g.id === stand.id) || null
                )
              }
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded mr-3 flex items-center justify-center">
                  <Plane className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <div className="font-medium">{stand.id}</div>
                  <div className="text-sm text-gray-900">{stand.type}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {stand.utilization && (
                  <span className="text-sm text-gray-900">
                    {stand.utilization}
                  </span>
                )}
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    stand.status === "available"
                      ? "bg-green-100 text-green-800"
                      : stand.status === "occupied"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-purple-100 text-purple-800"
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
