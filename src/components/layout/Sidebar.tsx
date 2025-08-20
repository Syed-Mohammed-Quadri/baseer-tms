"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Settings,
  BarChart3,
  Users,
  Plane,
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/theme-store";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Stand & Gate Management", href: "/stands", icon: Plane },
  { name: "Resource Management", href: "/resource-management", icon: Users },
  { name: "Rule Configuration", href: "/rules", icon: Settings },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const { theme } = useThemeStore();

  return (
    <div
      className={cn(
        "bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex flex-col transition-all duration-300 h-full",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <div
              className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center",
                theme === "light"
                  ? "bg-white border border-slate-600"
                  : "bg-blue-500 dark:bg-blue-600"
              )}
            >
              <Plane
                className={cn(
                  "w-5 h-5",
                  theme === "light" ? "fill-black text-black" : "text-white"
                )}
              />
            </div>
            <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Baseer TMS
            </span>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`p-1.5 rounded-md transition-colors ${
            theme === "light"
              ? "hover:bg-slate-100 text-slate-900 hover:text-slate-700"
              : "hover:bg-slate-700 text-slate-100 hover:text-slate-200"
          }`}
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4 transition-colors" />
          ) : (
            <ChevronLeft className="w-4 h-4 transition-colors" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors group",
                    isActive
                      ? theme === "light"
                        ? "bg-blue-50 text-blue-700 border-r-2 border-blue-500"
                        : "bg-blue-900/50 text-blue-300 border-r-2 border-blue-500"
                      : theme === "light"
                      ? "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      : "text-slate-300 hover:bg-slate-700 hover:text-slate-100"
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-5 h-5 flex-shrink-0 transition-colors",
                      collapsed ? "mx-auto" : "mr-3",
                      isActive
                        ? theme === "light"
                          ? "text-blue-700"
                          : "text-blue-300"
                        : theme === "light"
                        ? "text-slate-400 group-hover:text-slate-500"
                        : "text-slate-500 group-hover:text-slate-400"
                    )}
                  />
                  {!collapsed && <span className="truncate">{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
