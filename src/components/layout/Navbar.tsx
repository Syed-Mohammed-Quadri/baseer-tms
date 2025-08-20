"use client";

import { useThemeStore } from "@/store/theme-store";
import { Search, Moon, Sun, Bell, User } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleTheme = () => {
    console.log("Before toggle - Current theme:", theme);
    toggleTheme();

    // Debug after a small delay
    setTimeout(() => {
      console.log(
        "After toggle - HTML classes:",
        document.documentElement.className
      );
    }, 100);
  };

  // Prevent hydration mismatch - show neutral skeleton
  if (!mounted) {
    return (
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-3 transition-colors duration-200">
        <div className="flex items-center justify-between">
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search flights, gates, resources..."
                className="w-full pl-9 pr-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-700 transition-colors duration-200 placeholder:text-slate-500 dark:placeholder:text-slate-400"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Theme toggle placeholder */}
            <div className="w-8 h-8 p-2">
              <div className="w-4 h-4 bg-slate-300 dark:bg-slate-600 rounded animate-pulse"></div>
            </div>
            {/* Notifications placeholder */}
            <div className="w-8 h-8 p-2">
              <div className="w-4 h-4 bg-slate-300 dark:bg-slate-600 rounded animate-pulse"></div>
            </div>
            {/* User profile placeholder */}
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100 transition-colors duration-200">
                  RUH - RIYADH
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 transition-colors duration-200">
                  Administrator
                </p>
              </div>
              <div className="w-8 h-8 bg-slate-300 dark:bg-slate-600 rounded-full flex items-center justify-center transition-colors duration-200">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors duration-200">
                  RH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-3 transition-colors duration-200">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search flights, gates, resources..."
              className="w-full pl-9 pr-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-700 transition-colors duration-200 placeholder:text-slate-500 dark:placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={handleToggleTheme}
            className={`p-2 rounded-lg transition-colors duration-200 group ${
              theme === "light"
                ? "hover:bg-slate-100 text-slate-600 hover:text-slate-700"
                : "hover:bg-slate-700 text-slate-300 hover:text-slate-200"
            }`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 transition-colors duration-200" />
            ) : (
              <Moon className="w-5 h-5 transition-colors duration-200" />
            )}
          </button>

          {/* Notifications */}
          <button
            className={`p-2 rounded-lg transition-colors duration-200 relative ${
              theme === "light"
                ? "hover:bg-slate-100 text-slate-600 hover:text-slate-700"
                : "hover:bg-slate-700 text-slate-300 hover:text-slate-200"
            }`}
          >
            <Bell className="w-5 h-5 transition-colors duration-200" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100 transition-colors duration-200">
                RUH - RIYADH
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 transition-colors duration-200">
                Administrator
              </p>
            </div>
            <div className="w-8 h-8 bg-slate-300 dark:bg-slate-600 rounded-full flex items-center justify-center transition-colors duration-200">
              <span className="text-sm font-medium text-slate-200 dark:text-slate-200 transition-colors duration-200">
                RH
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
