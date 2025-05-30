"use client";

import React from "react";
import Link from "next/link";
import { poiret_one } from "@/fonts";
import { Flex, Stack } from "@/components/layout";

import {
  JobTitles,
  WorkspaceRatings,
  Industries,
} from "./_components/glassdoor/constants";
import { SelectedOption } from "./type";
import { Button } from "@/components/ui";
import { SearchBox, SelectRating, LottieAnimation } from "./_components";

export default () => {
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
    <Flex className="items-center justify-between">
      <Stack className="h-screen justify-center gap-6">
        <Stack>
          <p className={`text-7xl ${poiret_one.className}`}>Finder.</p>
          <p>@glassdoor</p>
        </Stack>

        <Stack className="mt-4 gap-6 w-100">
          <SearchBox
            label="Industries"
            value={selectedIndustry}
            options={industryOptions}
            setValue={setSelectedIndustry}
          />
          <SearchBox
            label="Job Title"
            value={selectedJobTitle}
            options={jobTitleOptions}
            setValue={setSelectedJobTitle}
          />
          <SelectRating
            value={selectedStarRating}
            onChange={setSelectedStarRating}
          />
          <SearchBox
            label="Workplace Rating"
            value={selectedWorkplaceRating}
            options={workplaceRatingOptions}
            setValue={setSelectedWorkplaceRating}
          />
        </Stack>

        <Button className="w-100" onClick={() => {}}>
          <Link href="/search" className="text-sm w-100">
            Submit
          </Link>
        </Button>
      </Stack>

      <Stack className="max-w-[500px]">
        <LottieAnimation />
      </Stack>
    </Flex>
  );
};
