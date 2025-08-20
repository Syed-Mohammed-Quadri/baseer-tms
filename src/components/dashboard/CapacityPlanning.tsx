import React from "react";
import { useThemeStore } from "@/store/theme-store";

const CapacityPlanning = () => {
  const { theme } = useThemeStore();

  return (
    <div
      className={`mt-8 rounded-lg border p-6 transition-colors ${
        theme === "light"
          ? "bg-white border-slate-200"
          : "bg-slate-800 border-slate-700"
      }`}
    >
      <h3
        className={`text-lg font-semibold mb-6 flex items-center transition-colors ${
          theme === "light" ? "text-slate-900" : "text-slate-100"
        }`}
      >
        <svg
          className={`w-5 h-5 mr-2 ${
            theme === "light" ? "text-slate-600" : "text-slate-400"
          }`}
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
        <div
          className={`rounded-lg p-4 transition-colors ${
            theme === "light" ? "bg-slate-50" : "bg-slate-700"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h4
              className={`text-sm font-medium transition-colors ${
                theme === "light" ? "text-slate-900" : "text-slate-100"
              }`}
            >
              Terminal A Gates
            </h4>
            <span
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                theme === "light"
                  ? "bg-red-100 text-red-800"
                  : "bg-red-900/30 text-red-300"
              }`}
            >
              Near Capacity
            </span>
          </div>

          <div className="space-y-3">
            {/* Current */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-xs transition-colors ${
                    theme === "light" ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  Current
                </span>
                <span
                  className={`text-sm font-semibold transition-colors ${
                    theme === "light" ? "text-slate-900" : "text-slate-100"
                  }`}
                >
                  85%
                </span>
              </div>
              <div
                className={`w-full rounded-full h-2 transition-colors ${
                  theme === "light" ? "bg-slate-200" : "bg-slate-600"
                }`}
              >
                <div
                  className={`h-2 rounded-full transition-colors ${
                    theme === "light" ? "bg-slate-800" : "bg-slate-300"
                  }`}
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            {/* Forecast */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-xs transition-colors ${
                    theme === "light" ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  Forecast
                </span>
                <span
                  className={`text-sm font-semibold transition-colors ${
                    theme === "light" ? "text-red-600" : "text-red-400"
                  }`}
                >
                  92%
                </span>
              </div>
              <div
                className={`w-full rounded-full h-2 transition-colors ${
                  theme === "light" ? "bg-slate-200" : "bg-slate-600"
                }`}
              >
                <div
                  className={`h-2 rounded-full transition-colors ${
                    theme === "light" ? "bg-red-500" : "bg-red-400"
                  }`}
                  style={{ width: "92%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Ground Crew */}
        <div
          className={`rounded-lg p-4 transition-colors ${
            theme === "light" ? "bg-slate-50" : "bg-slate-700"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h4
              className={`text-sm font-medium transition-colors ${
                theme === "light" ? "text-slate-900" : "text-slate-100"
              }`}
            >
              Ground Crew
            </h4>
            <span
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                theme === "light"
                  ? "bg-green-100 text-green-800"
                  : "bg-green-900/30 text-green-300"
              }`}
            >
              Optimal
            </span>
          </div>

          <div className="space-y-3">
            {/* Current */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-xs transition-colors ${
                    theme === "light" ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  Current
                </span>
                <span
                  className={`text-sm font-semibold transition-colors ${
                    theme === "light" ? "text-slate-900" : "text-slate-100"
                  }`}
                >
                  91%
                </span>
              </div>
              <div
                className={`w-full rounded-full h-2 transition-colors ${
                  theme === "light" ? "bg-slate-200" : "bg-slate-600"
                }`}
              >
                <div
                  className={`h-2 rounded-full transition-colors ${
                    theme === "light" ? "bg-slate-800" : "bg-slate-300"
                  }`}
                  style={{ width: "91%" }}
                ></div>
              </div>
            </div>

            {/* Forecast */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-xs transition-colors ${
                    theme === "light" ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  Forecast
                </span>
                <span
                  className={`text-sm font-semibold transition-colors ${
                    theme === "light" ? "text-green-600" : "text-green-400"
                  }`}
                >
                  87%
                </span>
              </div>
              <div
                className={`w-full rounded-full h-2 transition-colors ${
                  theme === "light" ? "bg-slate-200" : "bg-slate-600"
                }`}
              >
                <div
                  className={`h-2 rounded-full transition-colors ${
                    theme === "light" ? "bg-green-500" : "bg-green-400"
                  }`}
                  style={{ width: "87%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* GSE Equipment */}
        <div
          className={`rounded-lg p-4 transition-colors ${
            theme === "light" ? "bg-slate-50" : "bg-slate-700"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h4
              className={`text-sm font-medium transition-colors ${
                theme === "light" ? "text-slate-900" : "text-slate-100"
              }`}
            >
              GSE Equipment
            </h4>
            <span
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                theme === "light"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-blue-900/30 text-blue-300"
              }`}
            >
              Monitor
            </span>
          </div>

          <div className="space-y-3">
            {/* Current */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-xs transition-colors ${
                    theme === "light" ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  Current
                </span>
                <span
                  className={`text-sm font-semibold transition-colors ${
                    theme === "light" ? "text-slate-900" : "text-slate-100"
                  }`}
                >
                  91%
                </span>
              </div>
              <div
                className={`w-full rounded-full h-2 transition-colors ${
                  theme === "light" ? "bg-slate-200" : "bg-slate-600"
                }`}
              >
                <div
                  className={`h-2 rounded-full transition-colors ${
                    theme === "light" ? "bg-slate-800" : "bg-slate-300"
                  }`}
                  style={{ width: "91%" }}
                ></div>
              </div>
            </div>

            {/* Forecast */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-xs transition-colors ${
                    theme === "light" ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  Forecast
                </span>
                <span
                  className={`text-sm font-semibold transition-colors ${
                    theme === "light" ? "text-orange-600" : "text-orange-400"
                  }`}
                >
                  94%
                </span>
              </div>
              <div
                className={`w-full rounded-full h-2 transition-colors ${
                  theme === "light" ? "bg-slate-200" : "bg-slate-600"
                }`}
              >
                <div
                  className={`h-2 rounded-full transition-colors ${
                    theme === "light" ? "bg-orange-500" : "bg-orange-400"
                  }`}
                  style={{ width: "94%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Baggage Systems */}
        <div
          className={`rounded-lg p-4 transition-colors ${
            theme === "light" ? "bg-slate-50" : "bg-slate-700"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h4
              className={`text-sm font-medium transition-colors ${
                theme === "light" ? "text-slate-900" : "text-slate-100"
              }`}
            >
              Baggage Systems
            </h4>
            <span
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                theme === "light"
                  ? "bg-green-100 text-green-800"
                  : "bg-green-900/30 text-green-300"
              }`}
            >
              Optimal
            </span>
          </div>

          <div className="space-y-3">
            {/* Current */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-xs transition-colors ${
                    theme === "light" ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  Current
                </span>
                <span
                  className={`text-sm font-semibold transition-colors ${
                    theme === "light" ? "text-slate-900" : "text-slate-100"
                  }`}
                >
                  78%
                </span>
              </div>
              <div
                className={`w-full rounded-full h-2 transition-colors ${
                  theme === "light" ? "bg-slate-200" : "bg-slate-600"
                }`}
              >
                <div
                  className={`h-2 rounded-full transition-colors ${
                    theme === "light" ? "bg-slate-800" : "bg-slate-300"
                  }`}
                  style={{ width: "78%" }}
                ></div>
              </div>
            </div>

            {/* Forecast */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-xs transition-colors ${
                    theme === "light" ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  Forecast
                </span>
                <span
                  className={`text-sm font-semibold transition-colors ${
                    theme === "light" ? "text-green-600" : "text-green-400"
                  }`}
                >
                  82%
                </span>
              </div>
              <div
                className={`w-full rounded-full h-2 transition-colors ${
                  theme === "light" ? "bg-slate-200" : "bg-slate-600"
                }`}
              >
                <div
                  className={`h-2 rounded-full transition-colors ${
                    theme === "light" ? "bg-green-500" : "bg-green-400"
                  }`}
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
