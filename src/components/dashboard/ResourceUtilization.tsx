import React from "react";

const ResourceUtilization = () => {
  return (
    <div className="lg:col-span-2 bg-white rounded-lg border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900 flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-slate-500"
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
              <span className="text-slate-900 font-medium">Gates & Stands</span>
              <span className="text-slate-500 text-sm ml-2">38/42</span>
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded ml-3">
                1 conflict
              </span>
            </div>
            <span className="text-slate-900 font-semibold">90%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div
              className="bg-slate-600 h-3 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>

        {/* Ground Crew */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-slate-900 font-medium">Ground Crew</span>
              <span className="text-slate-500 text-sm ml-2">142/156</span>
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded ml-3">
                1 conflict
              </span>
            </div>
            <span className="text-slate-900 font-semibold">91%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div
              className="bg-slate-600 h-3 rounded-full"
              style={{ width: "91%" }}
            ></div>
          </div>
        </div>

        {/* GSE Units */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-slate-900 font-medium">GSE Units</span>
              <span className="text-slate-500 text-sm ml-2">79/87</span>
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded ml-3">
                1 conflict
              </span>
            </div>
            <span className="text-slate-900 font-semibold">91%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div
              className="bg-slate-600 h-3 rounded-full"
              style={{ width: "91%" }}
            ></div>
          </div>
        </div>

        {/* Maintenance Bays */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-slate-900 font-medium">
                Maintenance Bays
              </span>
              <span className="text-slate-500 text-sm ml-2">6/8</span>
            </div>
            <span className="text-slate-900 font-semibold">75%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div
              className="bg-slate-600 h-3 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceUtilization;
