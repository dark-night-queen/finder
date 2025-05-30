import * as React from "react";
import { cn, cva } from "@/lib/utils";
import type { VariantProps } from "@/lib/utils";

const containerStyle = cva("mx-auto w-full px-4", {
  variants: {
    size: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "4xl": "max-w-4xl",
      "6xl": "max-w-6xl",
      full: "max-w-full",
    },
  },
});

type ContainerProps = {} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerStyle>;

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "2xl", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(containerStyle({ size }), className)}
      {...props}
    />
  )
);
Container.displayName = "Container";

export { Container };
