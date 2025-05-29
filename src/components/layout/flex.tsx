import * as React from "react";
import { cn } from "@/lib/utils";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex", className)}
      {...props}
    />
  )
);
Flex.displayName = "Flex";

export { Flex };
