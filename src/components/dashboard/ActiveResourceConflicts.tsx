import React from "react";
import { useThemeStore } from "@/store/theme-store";

const ActiveResourceConflicts = () => {
  const { theme } = useThemeStore();
  return (
    <div
      className={`rounded-lg border p-6 transition-colors ${
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
            theme === "light" ? "text-orange-500" : "text-orange-400"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
        Active Resource Conflicts
      </h3>

      <div className="space-y-4">
        {/* Gate A12 Conflict */}
        <div
          className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
            theme === "light" ? "bg-slate-50" : "bg-slate-700"
          }`}
        >
          <div className="flex items-start space-x-3">
            <div
              className={`p-2 rounded-full ${
                theme === "light" ? "bg-red-100" : "bg-red-900/30"
              }`}
            >
              <svg
                className={`w-4 h-4 ${
                  theme === "light" ? "text-red-600" : "text-red-400"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p
                className={`text-sm font-medium transition-colors ${
                  theme === "light" ? "text-slate-900" : "text-slate-100"
                }`}
              >
                Gate A12
              </p>
              <p
                className={`text-xs mt-1 transition-colors ${
                  theme === "light" ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Stand Assignment
              </p>
            </div>
          </div>
          <div className="text-right">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                theme === "light"
                  ? "bg-red-100 text-red-800"
                  : "bg-red-900/30 text-red-300"
              }`}
            >
              Active
            </span>
            <p
              className={`text-xs mt-1 transition-colors ${
                theme === "light" ? "text-slate-500" : "text-slate-400"
              }`}
            >
              High • 14:30
            </p>
          </div>
        </div>

        {/* Crew Team 7 Conflict */}
        <div
          className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
            theme === "light" ? "bg-slate-50" : "bg-slate-700"
          }`}
        >
          <div className="flex items-start space-x-3">
            <div
              className={`p-2 rounded-full ${
                theme === "light" ? "bg-yellow-100" : "bg-yellow-900/30"
              }`}
            >
              <svg
                className={`w-4 h-4 ${
                  theme === "light" ? "text-yellow-600" : "text-yellow-400"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p
                className={`text-sm font-medium transition-colors ${
                  theme === "light" ? "text-slate-900" : "text-slate-100"
                }`}
              >
                Crew Team 7
              </p>
              <p
                className={`text-xs mt-1 transition-colors ${
                  theme === "light" ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Schedule Overlap
              </p>
            </div>
          </div>
          <div className="text-right">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                theme === "light"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-yellow-900/30 text-yellow-300"
              }`}
            >
              Resolving
            </span>
            <p
              className={`text-xs mt-1 transition-colors ${
                theme === "light" ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Medium • 15:15
            </p>
          </div>
        </div>

        {/* GSE Unit 23 Conflict */}
        <div
          className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
            theme === "light" ? "bg-slate-50" : "bg-slate-700"
          }`}
        >
          <div className="flex items-start space-x-3">
            <div
              className={`p-2 rounded-full ${
                theme === "light" ? "bg-green-100" : "bg-green-900/30"
              }`}
            >
              <svg
                className={`w-4 h-4 ${
                  theme === "light" ? "text-green-600" : "text-green-400"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p
                className={`text-sm font-medium transition-colors ${
                  theme === "light" ? "text-slate-900" : "text-slate-100"
                }`}
              >
                GSE Unit 23
              </p>
              <p
                className={`text-xs mt-1 transition-colors ${
                  theme === "light" ? "text-slate-500" : "text-slate-400"
                }`}
              >
                Equipment Conflict
              </p>
            </div>
          </div>
          <div className="text-right">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                theme === "light"
                  ? "bg-green-100 text-green-800"
                  : "bg-green-900/30 text-green-300"
              }`}
            >
              Resolved
            </span>
            <p
              className={`text-xs mt-1 transition-colors ${
                theme === "light" ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Low • 13:45
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveResourceConflicts;
