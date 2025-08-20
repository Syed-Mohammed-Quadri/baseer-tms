import React, { useState } from "react";
import {
  GitBranch,
  GitCommit,
  Download,
  Upload,
  GitMerge,
  Calendar,
  User,
  FileText,
} from "lucide-react";
import { useThemeStore } from "@/store/theme-store";

const VersionControlTab = () => {
  const { theme } = useThemeStore();
  const [branchName, setBranchName] = useState("feature/new-rules");
  const [commitMessage, setCommitMessage] = useState("");
  const [activeSection, setActiveSection] = useState("history");

  const versionHistory = [
    {
      version: "v2.1.0",
      status: "production",
      branch: "main",
      title: "Added wide-body priority rules and safety buffers",
      author: "System Admin",
      date: "2024-01-15 14:30",
      changes: "12 changes",
      rules: "45 rules",
      statusColor:
        theme === "light"
          ? "bg-green-100 text-green-800"
          : "bg-green-900/30 text-green-300",
    },
    {
      version: "v2.0.3",
      status: "production",
      branch: "main",
      title: "Hotfix: Resolved gate assignment conflicts during peak hours",
      author: "Operations Team",
      date: "2024-01-14 09:15",
      changes: "3 changes",
      rules: "43 rules",
      statusColor:
        theme === "light"
          ? "bg-green-100 text-green-800"
          : "bg-green-900/30 text-green-300",
    },
    {
      version: "v2.1.0-beta",
      status: "staging",
      branch: "feature/optimization",
      title: "Beta: AI-enhanced allocation algorithms",
      author: "Dev Team",
      date: "2024-01-13 16:45",
      changes: "8 changes",
      rules: "47 rules",
      statusColor:
        theme === "light"
          ? "bg-blue-100 text-blue-800"
          : "bg-blue-900/30 text-blue-300",
    },
    {
      version: "v2.0.2",
      status: "archived",
      branch: "main",
      title: "Updated turnaround time calculations",
      author: "System Admin",
      date: "2024-01-12 11:20",
      changes: "5 changes",
      rules: "40 rules",
      statusColor:
        theme === "light"
          ? "bg-gray-100 text-gray-800"
          : "bg-gray-900/30 text-gray-300",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Action Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Create Branch */}
        <div
          className={`border rounded-lg p-6 transition-colors ${
            theme === "light"
              ? "bg-white border-gray-200"
              : "bg-slate-800 border-slate-700"
          }`}
        >
          <h3
            className={`text-lg font-semibold mb-4 ${
              theme === "light" ? "text-gray-900" : "text-slate-100"
            }`}
          >
            Create Branch
          </h3>
          <div className="space-y-4">
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              >
                Branch Name
              </label>
              <input
                type="text"
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                  theme === "light"
                    ? "border-gray-200 text-gray-900 bg-white"
                    : "border-slate-600 text-slate-100 bg-slate-700"
                }`}
              />
            </div>
            <button
              className={`w-full flex items-center justify-center px-4 py-2 text-white rounded-lg transition-colors ${
                theme === "light"
                  ? "bg-gray-600 hover:bg-gray-700"
                  : "bg-slate-600 hover:bg-slate-700"
              }`}
            >
              <GitBranch className="w-4 h-4 mr-2" />
              Create Branch
            </button>
          </div>
        </div>

        {/* Commit Changes */}
        <div
          className={`border rounded-lg p-6 transition-colors ${
            theme === "light"
              ? "bg-white border-gray-200"
              : "bg-slate-800 border-slate-700"
          }`}
        >
          <h3
            className={`text-lg font-semibold mb-4 ${
              theme === "light" ? "text-gray-900" : "text-slate-100"
            }`}
          >
            Commit Changes
          </h3>
          <div className="space-y-4">
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              >
                Commit Message
              </label>
              <textarea
                value={commitMessage}
                onChange={(e) => setCommitMessage(e.target.value)}
                placeholder="Describe your changes..."
                rows={3}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-colors ${
                  theme === "light"
                    ? "border-gray-200 text-gray-900 bg-white placeholder:text-gray-500"
                    : "border-slate-600 text-slate-100 bg-slate-700 placeholder:text-slate-400"
                }`}
              />
            </div>
            <button
              className={`w-full flex items-center justify-center px-4 py-2 text-white rounded-lg transition-colors ${
                theme === "light"
                  ? "bg-gray-600 hover:bg-gray-700"
                  : "bg-slate-600 hover:bg-slate-700"
              }`}
            >
              <GitCommit className="w-4 h-4 mr-2" />
              Commit
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div
          className={`border rounded-lg p-6 transition-colors ${
            theme === "light"
              ? "bg-white border-gray-200"
              : "bg-slate-800 border-slate-700"
          }`}
        >
          <h3
            className={`text-lg font-semibold mb-4 ${
              theme === "light" ? "text-gray-900" : "text-slate-100"
            }`}
          >
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button
              className={`w-full flex items-center px-4 py-2 border rounded-lg transition-colors text-left ${
                theme === "light"
                  ? "border-gray-200 hover:bg-gray-50"
                  : "border-slate-600 hover:bg-slate-700"
              }`}
            >
              <GitMerge
                className={`w-4 h-4 mr-3 ${
                  theme === "light" ? "text-gray-600" : "text-slate-400"
                }`}
              />
              <span
                className={`${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              >
                Merge Branch
              </span>
            </button>
            <button
              className={`w-full flex items-center px-4 py-2 border rounded-lg transition-colors text-left ${
                theme === "light"
                  ? "border-gray-200 hover:bg-gray-50"
                  : "border-slate-600 hover:bg-slate-700"
              }`}
            >
              <Download
                className={`w-4 h-4 mr-3 ${
                  theme === "light" ? "text-gray-600" : "text-slate-400"
                }`}
              />
              <span
                className={`${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              >
                Export Config
              </span>
            </button>
            <button
              className={`w-full flex items-center px-4 py-2 border rounded-lg transition-colors text-left ${
                theme === "light"
                  ? "border-gray-200 hover:bg-gray-50"
                  : "border-slate-600 hover:bg-slate-700"
              }`}
            >
              <Upload
                className={`w-4 h-4 mr-3 ${
                  theme === "light" ? "text-gray-600" : "text-slate-400"
                }`}
              />
              <span
                className={`${
                  theme === "light" ? "text-gray-900" : "text-slate-100"
                }`}
              >
                Import Config
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Section Tabs */}
      <div
        className={`flex border-b ${
          theme === "light" ? "border-gray-200" : "border-slate-700"
        }`}
      >
        <button
          onClick={() => setActiveSection("history")}
          className={`px-4 py-2 border-b-2 font-medium text-sm transition-colors ${
            activeSection === "history"
              ? theme === "light"
                ? "border-blue-500 text-blue-600"
                : "border-blue-400 text-blue-300"
              : theme === "light"
              ? "border-transparent text-gray-600 hover:text-gray-900"
              : "border-transparent text-slate-400 hover:text-slate-100"
          }`}
        >
          Version History
        </button>
        <button
          onClick={() => setActiveSection("branches")}
          className={`px-4 py-2 border-b-2 font-medium text-sm transition-colors ${
            activeSection === "branches"
              ? theme === "light"
                ? "border-blue-500 text-blue-600"
                : "border-blue-400 text-blue-300"
              : theme === "light"
              ? "border-transparent text-gray-600 hover:text-gray-900"
              : "border-transparent text-slate-400 hover:text-slate-100"
          }`}
        >
          Branch Management
        </button>
      </div>

      {/* Version History Section */}
      {activeSection === "history" && (
        <div
          className={`border rounded-lg transition-colors ${
            theme === "light"
              ? "bg-white border-gray-200"
              : "bg-slate-800 border-slate-700"
          }`}
        >
          <div
            className={`p-6 border-b ${
              theme === "light" ? "border-gray-200" : "border-slate-700"
            }`}
          >
            <h3
              className={`text-lg font-semibold ${
                theme === "light" ? "text-gray-900" : "text-slate-100"
              }`}
            >
              Version History
            </h3>
          </div>
          <div
            className={`divide-y ${
              theme === "light" ? "divide-gray-200" : "divide-slate-700"
            }`}
          >
            {versionHistory.map((version, index) => (
              <div key={index} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h4
                        className={`text-lg font-semibold mr-3 ${
                          theme === "light" ? "text-gray-900" : "text-slate-100"
                        }`}
                      >
                        {version.version}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${version.statusColor}`}
                      >
                        {version.status}
                      </span>
                      <span
                        className={`ml-3 px-2 py-1 rounded text-xs font-medium ${
                          theme === "light"
                            ? "bg-gray-100 text-gray-700"
                            : "bg-slate-600 text-slate-300"
                        }`}
                      >
                        <GitBranch className="w-3 h-3 inline mr-1" />
                        {version.branch}
                      </span>
                    </div>
                    <p
                      className={`mb-3 ${
                        theme === "light" ? "text-gray-900" : "text-slate-100"
                      }`}
                    >
                      {version.title}
                    </p>
                    <div
                      className={`flex items-center space-x-6 text-sm ${
                        theme === "light" ? "text-gray-600" : "text-slate-400"
                      }`}
                    >
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {version.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {version.date}
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        {version.changes}
                      </div>
                      <span>{version.rules}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Branch Management Section */}
      {activeSection === "branches" && (
        <div
          className={`border rounded-lg transition-colors ${
            theme === "light"
              ? "bg-white border-gray-200"
              : "bg-slate-800 border-slate-700"
          }`}
        >
          <div
            className={`p-6 border-b ${
              theme === "light" ? "border-gray-200" : "border-slate-700"
            }`}
          >
            <h3
              className={`text-lg font-semibold ${
                theme === "light" ? "text-gray-900" : "text-slate-100"
              }`}
            >
              Branch Management
            </h3>
          </div>
          <div
            className={`divide-y ${
              theme === "light" ? "divide-gray-200" : "divide-slate-700"
            }`}
          >
            {/* Main Branch */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <GitBranch
                    className={`w-5 h-5 mr-3 ${
                      theme === "light" ? "text-gray-400" : "text-slate-500"
                    }`}
                  />
                  <div>
                    <h4
                      className={`text-lg font-semibold ${
                        theme === "light" ? "text-gray-900" : "text-slate-100"
                      }`}
                    >
                      main
                    </h4>
                    <p
                      className={`text-sm ${
                        theme === "light" ? "text-gray-600" : "text-slate-400"
                      }`}
                    >
                      Production branch
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      theme === "light"
                        ? "bg-green-100 text-green-800"
                        : "bg-green-900/30 text-green-300"
                    }`}
                  >
                    active
                  </span>
                  <div
                    className={`text-right text-sm ${
                      theme === "light" ? "text-gray-600" : "text-slate-400"
                    }`}
                  >
                    <div>156 commits</div>
                    <div>2 hours ago</div>
                  </div>
                  <button
                    className={`flex items-center px-3 py-1 border rounded text-sm transition-colors ${
                      theme === "light"
                        ? "border-gray-200 hover:bg-gray-50"
                        : "border-slate-600 hover:bg-slate-700"
                    }`}
                  >
                    <GitMerge
                      className={`w-4 h-4 mr-1 ${
                        theme === "light" ? "text-gray-900" : "text-slate-100"
                      }`}
                    />
                    <p
                      className={`${
                        theme === "light" ? "text-gray-900" : "text-slate-100"
                      }`}
                    >
                      Merge
                    </p>
                  </button>
                </div>
              </div>
            </div>

            {/* Feature/Optimization Branch */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <GitBranch
                    className={`w-5 h-5 mr-3 ${
                      theme === "light" ? "text-gray-400" : "text-slate-500"
                    }`}
                  />
                  <div>
                    <h4
                      className={`text-lg font-semibold ${
                        theme === "light" ? "text-gray-900" : "text-slate-100"
                      }`}
                    >
                      feature/optimization
                    </h4>
                    <p
                      className={`text-sm ${
                        theme === "light" ? "text-gray-600" : "text-slate-400"
                      }`}
                    >
                      AI optimization features
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      theme === "light"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-yellow-900/30 text-yellow-300"
                    }`}
                  >
                    development
                  </span>
                  <div
                    className={`text-right text-sm ${
                      theme === "light" ? "text-gray-600" : "text-slate-400"
                    }`}
                  >
                    <div>23 commits</div>
                    <div>1 day ago</div>
                  </div>
                  <button
                    className={`flex items-center px-3 py-1 border rounded text-sm transition-colors ${
                      theme === "light"
                        ? "border-gray-200 hover:bg-gray-50"
                        : "border-slate-600 hover:bg-slate-700"
                    }`}
                  >
                    <GitMerge
                      className={`w-4 h-4 mr-1 ${
                        theme === "light" ? "text-gray-900" : "text-slate-100"
                      }`}
                    />
                    <p
                      className={`${
                        theme === "light" ? "text-gray-900" : "text-slate-100"
                      }`}
                    >
                      Merge
                    </p>
                  </button>
                </div>
              </div>
            </div>

            {/* Hotfix Branch */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <GitBranch
                    className={`w-5 h-5 mr-3 ${
                      theme === "light" ? "text-gray-400" : "text-slate-500"
                    }`}
                  />
                  <div>
                    <h4
                      className={`text-lg font-semibold ${
                        theme === "light" ? "text-gray-900" : "text-slate-100"
                      }`}
                    >
                      hotfix/gate-conflicts
                    </h4>
                    <p
                      className={`text-sm ${
                        theme === "light" ? "text-gray-600" : "text-slate-400"
                      }`}
                    >
                      Gate conflict resolution
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      theme === "light"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-purple-900/30 text-purple-300"
                    }`}
                  >
                    completed
                  </span>
                  <div
                    className={`text-right text-sm ${
                      theme === "light" ? "text-gray-600" : "text-slate-400"
                    }`}
                  >
                    <div>8 commits</div>
                    <div>3 days ago</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      className={`flex items-center px-3 py-1 border rounded text-sm transition-colors ${
                        theme === "light"
                          ? "border-gray-200 hover:bg-gray-50"
                          : "border-slate-600 hover:bg-slate-700"
                      }`}
                    >
                      <GitMerge
                        className={`w-4 h-4 mr-1 ${
                          theme === "light" ? "text-gray-900" : "text-slate-100"
                        }`}
                      />
                      <p
                        className={`${
                          theme === "light" ? "text-gray-900" : "text-slate-100"
                        }`}
                      >
                        Merge
                      </p>
                    </button>
                    <button
                      className={`p-1 transition-colors ${
                        theme === "light"
                          ? "text-gray-400 hover:text-gray-600"
                          : "text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VersionControlTab;
