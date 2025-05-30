import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

type SearchItemProps = {
  name: string;
  options: {
    label: string;
    value: string;
  }[];
  onSelect: (value: string) => void;
};

export const SearchItem = ({ name, options, onSelect }: SearchItemProps) => {
  return (
    <Command>
      <CommandInput placeholder={`Search ${name}...`} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup>
          {options.map(({ value, label }) => (
            <CommandItem key={value} value={value} onSelect={onSelect}>
              {label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
