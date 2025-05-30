enum Filters {
  PAGE = "page", // accept num
  INDUSTRIES = "sector",
  JOB_TITLE = "occ",
  RATING = "overall_rating_low", // accept num
  WORKSPACE_RATING = "filterType",
}

const JobTitles = [
  "Software Engineer",
  "Senior Software Engineer",
  "Product Manager",
  "Senior Product Manager",
];

const WorkspaceRatings = {
  RATING_WORK_LIFE_BALANCE: "Work Life Balance",
  RATING_CULTURE_AND_VALUES: "Culture and Values",
  RATING_DIVERSITY_AND_INCLUSION: "Diversity and Inclusion",
  RATING_COMP_AND_BENEFITS: "Compensation and Benefits",
  RATING_CAREER_OPPORTUNITIES: "Career Opportunities",
  RATING_SENIOR_MANAGEMENT: "Senior Management",
};

const Industries = {
  10013: "Information Technology",
};

export { Filters, JobTitles, WorkspaceRatings, Industries };
