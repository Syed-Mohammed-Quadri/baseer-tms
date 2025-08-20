import React from "react";
import { useThemeStore } from "@/store/theme-store";

const ResourceUtilization = () => {
  const { theme } = useThemeStore();

  return (
    <div
      className={`lg:col-span-2 rounded-lg border p-6 transition-colors ${
        theme === "light"
          ? "bg-white border-slate-200"
          : "bg-slate-800 border-slate-700"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <h3
          className={`text-lg font-semibold flex items-center transition-colors ${
            theme === "light" ? "text-slate-900" : "text-slate-100"
          }`}
        >
          <svg
            className={`w-5 h-5 mr-2 ${
              theme === "light" ? "text-slate-500" : "text-slate-400"
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
          Resource Utilization
        </h3>
      </div>

      <div className="space-y-6">
        {/* Gates & Stands */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span
                className={`font-medium transition-colors ${
                  theme === "light" ? "text-slate-900" : "text-slate-100"
                }`}
              >
                Gates & Stands
              </span>
              <span
                className={`text-sm ml-2 transition-colors ${
                  theme === "light" ? "text-slate-500" : "text-slate-400"
                }`}
              >
                38/42
              </span>
              <span
                className={`text-white text-xs px-2 py-1 rounded ml-3 ${
                  theme === "light" ? "bg-red-600" : "bg-red-500"
                }`}
              >
                1 conflict
              </span>
            </div>
            <span
              className={`font-semibold transition-colors ${
                theme === "light" ? "text-slate-900" : "text-slate-100"
              }`}
            >
              90%
            </span>
          </div>
          <div
            className={`w-full rounded-full h-3 transition-colors ${
              theme === "light" ? "bg-slate-200" : "bg-slate-600"
            }`}
          >
            <div
              className={`h-3 rounded-full transition-colors ${
                theme === "light" ? "bg-slate-600" : "bg-slate-300"
              }`}
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>

        {/* Ground Crew */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span
                className={`font-medium transition-colors ${
                  theme === "light" ? "text-slate-900" : "text-slate-100"
                }`}
              >
                Ground Crew
              </span>
              <span
                className={`text-sm ml-2 transition-colors ${
                  theme === "light" ? "text-slate-500" : "text-slate-400"
                }`}
              >
                142/156
              </span>
              <span
                className={`text-white text-xs px-2 py-1 rounded ml-3 ${
                  theme === "light" ? "bg-red-600" : "bg-red-500"
                }`}
              >
                1 conflict
              </span>
            </div>
            <span
              className={`font-semibold transition-colors ${
                theme === "light" ? "text-slate-900" : "text-slate-100"
              }`}
            >
              91%
            </span>
          </div>
          <div
            className={`w-full rounded-full h-3 transition-colors ${
              theme === "light" ? "bg-slate-200" : "bg-slate-600"
            }`}
          >
            <div
              className={`h-3 rounded-full transition-colors ${
                theme === "light" ? "bg-slate-600" : "bg-slate-300"
              }`}
              style={{ width: "91%" }}
            ></div>
          </div>
        </div>

        {/* GSE Units */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span
                className={`font-medium transition-colors ${
                  theme === "light" ? "text-slate-900" : "text-slate-100"
                }`}
              >
                GSE Units
              </span>
              <span
                className={`text-sm ml-2 transition-colors ${
                  theme === "light" ? "text-slate-500" : "text-slate-400"
                }`}
              >
                79/87
              </span>
              <span
                className={`text-white text-xs px-2 py-1 rounded ml-3 ${
                  theme === "light" ? "bg-red-600" : "bg-red-500"
                }`}
              >
                1 conflict
              </span>
            </div>
            <span
              className={`font-semibold transition-colors ${
                theme === "light" ? "text-slate-900" : "text-slate-100"
              }`}
            >
              91%
            </span>
          </div>
          <div
            className={`w-full rounded-full h-3 transition-colors ${
              theme === "light" ? "bg-slate-200" : "bg-slate-600"
            }`}
          >
            <div
              className={`h-3 rounded-full transition-colors ${
                theme === "light" ? "bg-slate-600" : "bg-slate-300"
              }`}
              style={{ width: "91%" }}
            ></div>
          </div>
        </div>

        {/* Maintenance Bays */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span
                className={`font-medium transition-colors ${
                  theme === "light" ? "text-slate-900" : "text-slate-100"
                }`}
              >
                Maintenance Bays
              </span>
              <span
                className={`text-sm ml-2 transition-colors ${
                  theme === "light" ? "text-slate-500" : "text-slate-400"
                }`}
              >
                6/8
              </span>
            </div>
            <span
              className={`font-semibold transition-colors ${
                theme === "light" ? "text-slate-900" : "text-slate-100"
              }`}
            >
              75%
            </span>
          </div>
          <div
            className={`w-full rounded-full h-3 transition-colors ${
              theme === "light" ? "bg-slate-200" : "bg-slate-600"
            }`}
          >
            <div
              className={`h-3 rounded-full transition-colors ${
                theme === "light" ? "bg-slate-600" : "bg-slate-300"
              }`}
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceUtilization;
