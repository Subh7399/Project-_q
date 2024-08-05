"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle({ ...props }) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div {...props}>
      <button
        onClick={() => {
          if (theme == "corporate") setTheme("business");
          if (theme == "business") setTheme("corporate");
        }}
      >
        {theme == "corporate" ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
}
