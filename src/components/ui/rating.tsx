"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { cn, cva } from "@/lib/utils";
import type { VariantProps } from "@/lib/utils";

const starRatingStyle = cva("flex space-x-1", { variants: {} });
const starStyle = cva("cursor-pointer transition-colors", {
  variants: {
    filled: {
      true: "text-yellow-400 fill-yellow-500",
      false: "text-gray-300",
    },
  },
});

type StarRatingProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> &
  VariantProps<typeof starRatingStyle> & {
    value?: number;
    max?: number;
    onChange?: (value: number) => void;
  };

const StarRating = React.forwardRef<HTMLDivElement, StarRatingProps>(
  (props, ref) => {
    const { className, value = 0, max = 5, onChange, ...restProps } = props;
    const [hovered, setHovered] = React.useState<number | null>(null);

    return (
      <div
        ref={ref}
        className={cn(starRatingStyle(), className)}
        {...restProps}
      >
        {Array.from({ length: max }, (_, i) => {
          const filled = (hovered ?? value) > i;
          return (
            <Star
              key={i}
              className={cn(starStyle({ filled }))}
              onMouseEnter={() => setHovered(i + 1)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onChange?.(i + 1)}
            />
          );
        })}
      </div>
    );
  }
);

StarRating.displayName = "StarRating";

export { StarRating };
