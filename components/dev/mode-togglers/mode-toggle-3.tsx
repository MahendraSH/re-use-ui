"use client";

import * as React from "react";
import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-context-menu";

export function ModeToggleThree() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Switch
        onCheckedChange={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      />
      <Label>
        <SunIcon className=" size-4 flex dark:hidden" />
        <MoonIcon className=" size-4 hidden dark:flex" />
        <span className="sr-only">Toggle theme</span>
      </Label>
    </div>
  );
}
