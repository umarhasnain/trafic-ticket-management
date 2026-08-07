"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="relative flex h-12 w-24 items-center rounded-full bg-slate-200 dark:bg-slate-800 p-1 transition-all duration-500 shadow-lg hover:shadow-xl"
    >
      {/* Stars */}
      <span
        className={`absolute right-4 text-[10px] transition-all duration-500 ${
          isDark ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >
        ✨
      </span>

      {/* Clouds */}
      <span
        className={`absolute left-4 text-xs transition-all duration-500 ${
          !isDark ? "opacity-100" : "opacity-0"
        }`}
      >
        ☁️
      </span>

      {/* Sliding Circle */}
      <span
        className={`absolute flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all duration-500 ${
          isDark ? "translate-x-12" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <FiMoon className="text-indigo-600 text-xl" />
        ) : (
          <FiSun className="text-yellow-500 text-xl" />
        )}
      </span>
    </button>
  );
}