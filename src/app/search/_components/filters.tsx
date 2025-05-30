"use client";

import React from "react";
import { Stack } from "@/components/layout";
import { SelectedOption } from "@/app/(main)/type";
import {
  JobTitles,
  WorkspaceRatings,
  Industries,
} from "@/app/(main)/_components/glassdoor/constants";
import { SearchBox, SelectRating } from "@/app/(main)/_components";

export const Filters = () => {
  const jobTitleOptions: SelectedOption[] = JobTitles.map((name) => ({
    label: name,
    value: name,
  }));
  const industryOptions: SelectedOption[] = Object.entries(Industries).map(
    ([id, name]) => ({
      label: name,
      value: id,
    })
  );
  const workplaceRatingOptions: SelectedOption[] = Object.entries(
    WorkspaceRatings
  ).map(([id, name]) => ({
    label: name,
    value: id,
  }));

  const [selectedJobTitle, setSelectedJobTitle] =
    React.useState<null | SelectedOption>(null);
  const [selectedIndustry, setSelectedIndustry] =
    React.useState<null | SelectedOption>(null);
  const [selectedWorkplaceRating, setSelectedWorkplaceRating] =
    React.useState<null | SelectedOption>(null);
  const [selectedStarRating, setSelectedStarRating] = React.useState<number>(0);

  return (
    <Stack>
      <p>Search Filters</p>

      <Stack className="mt-4 gap-6 ">
        <SearchBox
          className="flex-col items-baseline gap-2"
          label="Industries"
          value={selectedIndustry}
          options={industryOptions}
          setValue={setSelectedIndustry}
        />
        <SearchBox
          className="flex-col items-baseline gap-2"
          label="Job Title"
          value={selectedJobTitle}
          options={jobTitleOptions}
          setValue={setSelectedJobTitle}
        />
        <SelectRating
          className="flex-col items-baseline gap-2"
          value={selectedStarRating}
          onChange={setSelectedStarRating}
        />
        <SearchBox
          className="flex-col items-baseline gap-2"
          label="Workplace Rating"
          value={selectedWorkplaceRating}
          options={workplaceRatingOptions}
          setValue={setSelectedWorkplaceRating}
        />
      </Stack>
    </Stack>
  );
};
