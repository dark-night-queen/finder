import * as React from "react";
import { cn } from "@/lib/utils";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: number;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 2, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(`grid grid-cols-${cols}`, className)}
      {...props}
    />
  )
);
Grid.displayName = "Grid";

export { Grid };
