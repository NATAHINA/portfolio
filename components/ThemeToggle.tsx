"use client";

import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      size="lg"
      variant="outline"
      onClick={() => setColorScheme(dark ? "light" : "dark")}
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </ActionIcon>
  );
}
