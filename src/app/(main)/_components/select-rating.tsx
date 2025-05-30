import React from "react";
import { Flex } from "@/components/layout";
import { StarRating } from "@/components/ui";

type SelectRatingProps = {
  className?: string;
  value: number;
  onChange: (value: number) => void;
};

export const SelectRating = ({
  className,
  value,
  onChange,
}: SelectRatingProps) => {
  return (
    <Flex className={`items-center justify-between space-x-4 ${className}`}>
      <p className="text-sm text-muted-foreground">Company Ratings</p>
      <StarRating value={value} onChange={onChange} />
    </Flex>
  );
};
