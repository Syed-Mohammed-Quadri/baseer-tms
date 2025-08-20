import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const applyThemeToDOM = (theme: Theme) => {
  if (typeof window !== "undefined") {
    const root = document.documentElement;

    // Force remove both classes first
    root.classList.remove("light", "dark");

    // Add the current theme
    root.classList.add(theme);

    console.log("Applied theme to DOM:", theme);
    console.log("HTML classes:", root.className);
  }
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: "light",

      toggleTheme: () => {
        const currentTheme = get().theme;
        const newTheme = currentTheme === "light" ? "dark" : "light";
        console.log("Toggling from", currentTheme, "to", newTheme);
        set({ theme: newTheme });
      },

      setTheme: (theme: Theme) => {
        console.log("Setting theme to:", theme);
        set({ theme });
      },
    }),
    {
      name: "baseer-theme",
    }
  )
);
