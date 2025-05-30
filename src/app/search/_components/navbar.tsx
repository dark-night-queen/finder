import React from "react";
import { poiret_one } from "@/fonts";
import { Box } from "@/components/layout";

export const Navbar = () => {
  return (
    <Box className="border-b-2 w-screen border-accent-foreground px-6 py-2">
      <p className={`text-3xl ${poiret_one.className}`}>Finder.</p>
    </Box>
  );
};
