"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        name="mode-toggle"
        variant="ghost"
        type="button"
        className="px-2 cursor-pointer hover:bg-transparent"
        aria-label="Toggle theme"
      >
        <div className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <Button
      name="mode-toggle"
      variant="ghost"
      type="button"
      className="px-2 cursor-pointer hover:bg-transparent"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${
        resolvedTheme === "dark" ? "light" : "dark"
      } mode`}
      aria-live="polite"
    >
      {resolvedTheme === "dark" ? (
        <MoonIcon className="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
      ) : (
        <SunIcon className="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
      )}
      <span className="sr-only">Current theme: {resolvedTheme}</span>
    </Button>
  );
}
