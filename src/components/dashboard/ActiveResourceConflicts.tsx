import React from "react";

const ActiveResourceConflicts = () => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center">
        <svg
          className="w-5 h-5 mr-2 text-orange-500"
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
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-full bg-red-100">
              <svg
                className="w-4 h-4 text-red-600"
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
              <p className="text-sm font-medium text-slate-900">Gate A12</p>
              <p className="text-xs text-slate-500 mt-1">Stand Assignment</p>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              Active
            </span>
            <p className="text-xs text-slate-500 mt-1">High • 14:30</p>
          </div>
        </div>

        {/* Crew Team 7 Conflict */}
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-full bg-yellow-100">
              <svg
                className="w-4 h-4 text-yellow-600"
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
              <p className="text-sm font-medium text-slate-900">Crew Team 7</p>
              <p className="text-xs text-slate-500 mt-1">Schedule Overlap</p>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              Resolving
            </span>
            <p className="text-xs text-slate-500 mt-1">Medium • 15:15</p>
          </div>
        </div>

        {/* GSE Unit 23 Conflict */}
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-full bg-green-100">
              <svg
                className="w-4 h-4 text-green-600"
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
              <p className="text-sm font-medium text-slate-900">GSE Unit 23</p>
              <p className="text-xs text-slate-500 mt-1">Equipment Conflict</p>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Resolved
            </span>
            <p className="text-xs text-slate-500 mt-1">Low • 13:45</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveResourceConflicts;
