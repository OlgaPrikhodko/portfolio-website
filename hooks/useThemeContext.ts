import { ThemeContext } from "@/context/theme-context";
import { useContext } from "react";

export default function useThemeContex() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeContect must be used inside ThemeContextProvider");
  }

  return context;
}
