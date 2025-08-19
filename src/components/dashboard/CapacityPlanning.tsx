import React from "react";

const CapacityPlanning = () => {
  return (
    <div className="mt-8 bg-white rounded-lg border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center">
        <svg
          className="w-5 h-5 mr-2 text-slate-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        Capacity Planning & Forecast
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Terminal A Gates */}
        <div className="bg-slate-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-slate-900">
              Terminal A Gates
            </h4>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
              Near Capacity
            </span>
          </div>

          <div className="space-y-3">
            {/* Current */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-600">Current</span>
                <span className="text-sm font-semibold text-slate-900">
                  85%
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-slate-800 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            {/* Forecast */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-600">Forecast</span>
                <span className="text-sm font-semibold text-red-600">92%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: "92%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Ground Crew */}
        <div className="bg-slate-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-slate-900">Ground Crew</h4>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Optimal
            </span>
          </div>

          <div className="space-y-3">
            {/* Current */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-600">Current</span>
                <span className="text-sm font-semibold text-slate-900">
                  91%
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-slate-800 h-2 rounded-full"
                  style={{ width: "91%" }}
                ></div>
              </div>
            </div>

            {/* Forecast */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-600">Forecast</span>
                <span className="text-sm font-semibold text-green-600">
                  87%
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "87%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* GSE Equipment */}
        <div className="bg-slate-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-slate-900">
              GSE Equipment
            </h4>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Monitor
            </span>
          </div>

          <div className="space-y-3">
            {/* Current */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-600">Current</span>
                <span className="text-sm font-semibold text-slate-900">
                  91%
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-slate-800 h-2 rounded-full"
                  style={{ width: "91%" }}
                ></div>
              </div>
            </div>

            {/* Forecast */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-600">Forecast</span>
                <span className="text-sm font-semibold text-orange-600">
                  94%
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: "94%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Baggage Systems */}
        <div className="bg-slate-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-slate-900">
              Baggage Systems
            </h4>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Optimal
            </span>
          </div>

          <div className="space-y-3">
            {/* Current */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-600">Current</span>
                <span className="text-sm font-semibold text-slate-900">
                  78%
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-slate-800 h-2 rounded-full"
                  style={{ width: "78%" }}
                ></div>
              </div>
            </div>

            {/* Forecast */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-600">Forecast</span>
                <span className="text-sm font-semibold text-green-600">
                  82%
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "82%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapacityPlanning;
