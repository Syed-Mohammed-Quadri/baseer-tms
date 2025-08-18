"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Settings,
  BarChart3,
  Users,
  Calendar,
  MapPin,
  Plane,
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Rule Configuration", href: "/rules", icon: Settings },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Resource Management", href: "/resource-management", icon: Users },
  { name: "Resource Planning", href: "/resource-planning", icon: Calendar },
  { name: "Operations Center", href: "/operations", icon: MapPin },
  { name: "Stand & Gate Management", href: "/stands", icon: Plane },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "bg-white border-r border-slate-200 flex flex-col transition-all duration-300 sticky top-0 h-screen",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200">
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-slate-900">
              Baseer TMS
            </span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 hover:bg-slate-100 rounded-md transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4 text-slate-900" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-slate-900" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
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
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-500"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <item.icon
                    className={cn(
                      "w-5 h-5 flex-shrink-0",
                      collapsed ? "mx-auto" : "mr-3",
                      isActive
                        ? "text-blue-700"
                        : "text-slate-400 group-hover:text-slate-500"
                    )}
                  />
                  {!collapsed && <span className="truncate">{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User section */}
      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-slate-700">RH</span>
          </div>
          {!collapsed && (
            <div className="ml-3">
              <p className="text-sm font-medium text-slate-700">RUH - RIYADH</p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
