"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export default function ThemeToggleBtn() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full h-10 w-10 cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Sun className="h-10 w-10 scale-100 dark:scale-0" />
      ) : (
        <Moon className="h-10 w-10 scale-0 dark:scale-100" />
      )}
    </Button>
  );
}
