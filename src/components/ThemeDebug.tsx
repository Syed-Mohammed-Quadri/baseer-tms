"use client";

import { useThemeStore } from "@/store/theme-store";
import { useEffect, useState } from "react";

export default function ThemeDebug() {
  const { theme, toggleTheme } = useThemeStore();
  const [domInfo, setDomInfo] = useState({
    htmlClasses: "",
    dataTheme: "",
    bodyClasses: "",
    computedStyle: "",
    isDarkMode: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateDomInfo = () => {
        const html = document.documentElement;
        const body = document.body;
        const computedStyle = window.getComputedStyle(body);
        const isDarkMode = html.classList.contains("dark");

        setDomInfo({
          htmlClasses: html.className,
          dataTheme: html.getAttribute("data-theme") || "none",
          bodyClasses: body.className,
          computedStyle: computedStyle.backgroundColor,
          isDarkMode,
        });
      };

      updateDomInfo();
      const interval = setInterval(updateDomInfo, 500);
      return () => clearInterval(interval);
    }
  }, [theme]);

  // Force inline styles based on theme for testing
  const containerStyle =
    theme === "light"
      ? {
          backgroundColor: "#ffffff",
          color: "#000000",
          borderColor: "#d1d5db",
        }
      : {
          backgroundColor: "#1f2937",
          color: "#ffffff",
          borderColor: "#4b5563",
        };

  const innerBoxStyle =
    theme === "light"
      ? {
          backgroundColor: "#f3f4f6",
          color: "#374151",
        }
      : {
          backgroundColor: "#374151",
          color: "#f3f4f6",
        };

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {/* Test with Tailwind classes */}
      <div
        className={`debug-box p-4 border rounded-lg shadow-lg text-xs font-mono max-w-xs ${
          theme === "light"
            ? "bg-white text-gray-900 border-gray-300"
            : "bg-gray-800 text-gray-100 border-gray-600"
        }`}
      >
        <h3 className="font-bold mb-2">Theme Debug (Tailwind)</h3>
        <div className="space-y-1">
          <div>
            <strong>Store Theme:</strong> {theme}
          </div>
          <div>
            <strong>HTML Classes:</strong> {domInfo.htmlClasses}
          </div>
          <div>
            <strong>Data Theme:</strong> {domInfo.dataTheme}
          </div>
          <div>
            <strong>Body BG:</strong> {domInfo.computedStyle}
          </div>
          <div>
            <strong>Dark Mode:</strong> {domInfo.isDarkMode ? "Yes" : "No"}
          </div>
        </div>
        <div
          className={`mt-2 p-2 rounded ${
            theme === "light"
              ? "bg-gray-100 text-gray-700"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Tailwind Box - Should change color
        </div>
        <button
          onClick={toggleTheme}
          className={`mt-2 px-3 py-1 rounded text-xs ${
            theme === "light"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Toggle Theme
        </button>
      </div>

      {/* Test with inline styles */}
      <div
        style={containerStyle}
        className="p-4 border rounded-lg shadow-lg text-xs font-mono max-w-xs"
      >
        <h3 className="font-bold mb-2">Theme Debug (Inline Styles)</h3>
        <div className="space-y-1">
          <div>
            <strong>Current Theme:</strong> {theme}
          </div>
        </div>
        <div style={innerBoxStyle} className="mt-2 p-2 rounded">
          Inline Styles Box - Should change color
        </div>
      </div>
    </div>
  );
}
