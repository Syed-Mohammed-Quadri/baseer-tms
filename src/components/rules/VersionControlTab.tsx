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

const VersionControlTab = () => {
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
      statusColor: "bg-green-100 text-green-800",
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
      statusColor: "bg-green-100 text-green-800",
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
      statusColor: "bg-blue-100 text-blue-800",
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
      statusColor: "bg-gray-100 text-gray-800",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Action Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Create Branch */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Create Branch
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Branch Name
              </label>
              <input
                type="text"
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none text-gray-900 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="w-full flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
              <GitBranch className="w-4 h-4 mr-2" />
              Create Branch
            </button>
          </div>
        </div>

        {/* Commit Changes */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Commit Changes
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Commit Message
              </label>
              <textarea
                value={commitMessage}
                onChange={(e) => setCommitMessage(e.target.value)}
                placeholder="Describe your changes..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-200  text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
            <button className="w-full flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
              <GitCommit className="w-4 h-4 mr-2" />
              Commit
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button className="w-full flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <GitMerge className="w-4 h-4 mr-3 text-gray-600" />
              <span className="text-gray-900">Merge Branch</span>
            </button>
            <button className="w-full flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <Download className="w-4 h-4 mr-3 text-gray-600" />
              <span className="text-gray-900">Export Config</span>
            </button>
            <button className="w-full flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <Upload className="w-4 h-4 mr-3 text-gray-600" />
              <span className="text-gray-900">Import Config</span>
            </button>
          </div>
        </div>
      </div>

      {/* Section Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveSection("history")}
          className={`px-4 py-2 border-b-2 font-medium text-sm ${
            activeSection === "history"
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Version History
        </button>
        <button
          onClick={() => setActiveSection("branches")}
          className={`px-4 py-2 border-b-2 font-medium text-sm ${
            activeSection === "branches"
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Branch Management
        </button>
      </div>

      {/* Version History Section */}
      {activeSection === "history" && (
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Version History
            </h3>
          </div>
          <div className="divide-y divide-gray-200">
            {versionHistory.map((version, index) => (
              <div key={index} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 mr-3">
                        {version.version}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${version.statusColor}`}
                      >
                        {version.status}
                      </span>
                      <span className="ml-3 px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        <GitBranch className="w-3 h-3 inline mr-1" />
                        {version.branch}
                      </span>
                    </div>
                    <p className="text-gray-900 mb-3">{version.title}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
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
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Branch Management
            </h3>
          </div>
          <div className="divide-y divide-gray-200">
            {/* Main Branch */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <GitBranch className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      main
                    </h4>
                    <p className="text-sm text-gray-600">Production branch</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    active
                  </span>
                  <div className="text-right text-sm text-gray-600">
                    <div>156 commits</div>
                    <div>2 hours ago</div>
                  </div>
                  <button className="flex items-center px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-50 transition-colors">
                    <GitMerge className="w-4 h-4 mr-1 text-gray-900" />
                    <p className="text-gray-900">Merge</p>
                  </button>
                </div>
              </div>
            </div>

            {/* Feature/Optimization Branch */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <GitBranch className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      feature/optimization
                    </h4>
                    <p className="text-sm text-gray-600">
                      AI optimization features
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                    development
                  </span>
                  <div className="text-right text-sm text-gray-600">
                    <div>23 commits</div>
                    <div>1 day ago</div>
                  </div>
                  <button className="flex items-center px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-50 transition-colors">
                    <GitMerge className="w-4 h-4 mr-1 text-gray-900 " />
                    <p className="text-gray-900">Merge</p>
                  </button>
                </div>
              </div>
            </div>

            {/* Hotfix Branch */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <GitBranch className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      hotfix/gate-conflicts
                    </h4>
                    <p className="text-sm text-gray-600">
                      Gate conflict resolution
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                    completed
                  </span>
                  <div className="text-right text-sm text-gray-600">
                    <div>8 commits</div>
                    <div>3 days ago</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-50 transition-colors">
                      <GitMerge className="w-4 h-4 mr-1 text-gray-900" />
                      <p className="text-gray-900">Merge</p>
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
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
