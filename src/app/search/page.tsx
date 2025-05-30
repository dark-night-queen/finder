import React from "react";
import { Box, Flex } from "@/components/layout";
import { DataTableDemo } from "./_components/data-table";
import { Filters } from "./_components/filters";

export default () => {
  return (
    <Flex>
      <Box className="w-full pr-4">
        <DataTableDemo />
      </Box>

      <Box className="border-l-2 h-screen border-accent-foreground pl-4 py-2">
        <Filters />
      </Box>
    </Flex>
  );
};
