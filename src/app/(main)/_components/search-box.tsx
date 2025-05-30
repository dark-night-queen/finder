"use client";

import * as React from "react";
import { SearchItem } from "./search-item";
import { Flex } from "@/components/layout";
import { Button } from "@/components/ui";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SelectedOption } from "../type";
import { ChevronRight } from "lucide-react";

type SearchBoxProps = {
  className?: string;
  label: string;
  value?: SelectedOption | null;
  options: SelectedOption[];
  setValue: (value: SelectedOption | null) => void;
};

export const SearchBox = ({
  className,
  label,
  value,
  options,
  setValue,
}: SearchBoxProps) => {
  const [open, setOpen] = React.useState(false);
  const onSelect = (value: string) => {
    const option = options.find((priority) => priority.value === value) || null;
    setValue(option);
    setOpen(false);
  };

  return (
    <Flex className={`items-center justify-between space-x-4 ${className}`}>
      <p className="text-sm text-muted-foreground">{label}</p>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="justify-start">
            {value ? value.label : <>Select {label} </>}
            <ChevronRight />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="p-0" side="right" align="start">
          <SearchItem name={label} options={options} onSelect={onSelect} />
        </PopoverContent>
      </Popover>
    </Flex>
  );
};
