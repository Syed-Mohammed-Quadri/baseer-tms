"use client";

import { useThemeStore } from "@/store/theme-store";
import { useEffect, useState } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  // Apply theme to DOM with forced updates
  const applyTheme = (newTheme: string) => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;

      // Force remove ALL theme-related classes
      root.classList.remove("light", "dark");

      // Force reflow to ensure classes are removed
      root.offsetHeight;

      // Add the new theme class
      root.classList.add(newTheme);

      // Also set data attribute as backup
      root.setAttribute("data-theme", newTheme);

      console.log("Applied theme:", newTheme, "Classes:", root.className);

      // Force a style recalculation
      if (document.body) {
        document.body.style.display = "none";
        document.body.offsetHeight; // Trigger reflow
        document.body.style.display = "";
      }
    }
  };

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);

    const getSystemTheme = (): "light" | "dark" => {
      if (typeof window === "undefined") return "light";
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    };

    // Check for stored theme
    const stored = localStorage.getItem("baseer-theme");
    let initialTheme: "light" | "dark" = "light";

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        initialTheme = parsed.state?.theme || getSystemTheme();
      } catch (error) {
        console.log("Error parsing stored theme, using system preference");
        initialTheme = getSystemTheme();
      }
    } else {
      initialTheme = getSystemTheme();
    }

    console.log("Initializing theme:", initialTheme);

    // Always apply the initial theme
    applyTheme(initialTheme);

    // Set theme in store if different
    if (initialTheme !== theme) {
      setTheme(initialTheme);
    }
  }, []);

  // Apply theme whenever it changes
  useEffect(() => {
    if (mounted) {
      console.log("Theme changed to:", theme);
      applyTheme(theme);
    }
  }, [theme, mounted]);

  // Show nothing until mounted to prevent hydration issues
  if (!mounted) {
    return null;
  }

  return <>{children}</>;
}
