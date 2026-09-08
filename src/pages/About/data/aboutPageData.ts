export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export const statsData: StatItem[] = [
  {
    id: "years-experience",
    value: "15+",
    label: "Years Experience",
  },
  {
    id: "branch-offices",
    value: "6",
    label: "Branch Offices",
  },
  {
    id: "countries",
    value: "2",
    label: "Countries",
  },
  {
    id: "students-helped",
    value: "10,000+",
    label: "Students Helped",
  },
];

export const leadershipData: TeamMember[] = [
  {
    id: "siddhartha-poudel",
    name: "SIDDHARTHA POUDEL",
    role: "Director",
    bio: "Providing strategic direction and governance to support HIMA AUS Consultancy's mission of trusted education consulting.",
    image: "/src/assets/images/siddhartha-poudel-director.png",
  },
];
