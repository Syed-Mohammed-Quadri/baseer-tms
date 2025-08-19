"use client";

import { Search, Moon, Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-white border-b border-slate-200 px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search flights, gates, resources..."
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 bg-slate-50"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <Moon className="w-5 h-5 text-slate-600" />
          </button>

          {/* Notifications */}
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors relative">
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-slate-900">RUH - RIYADH</p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
            <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-slate-700">RH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
