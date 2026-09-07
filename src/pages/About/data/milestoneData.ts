export interface Milestone {
  id: string;
  year: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  side: "left" | "right";
}

export const milestoneData: Milestone[] = [
  {
    id: "itahari-2020",
    year: "2020",
    city: "Itahari",
    address: "Itahari-6, Biratnagar line, Besides Prime Bank",
    phone: "+94 766066000",
    email: "Itahari@himaaus.com",
    side: "right",
  },
  {
    id: "melbourne-2013",
    year: "2013",
    city: "Melbourne",
    address: "World Trade Centre, 61 Flinders St, Tower 4 - Level 10, Melbourne, 3008 VIC",
    phone: "+61 3 96002052",
    email: "melbourne@himaaus.com",
    side: "left",
  },
  {
    id: "pokhara-2012",
    year: "2012",
    city: "Pokhara",
    address: "Buddha Marg, New Road -9, Pokhara",
    phone: "+97761 521918",
    email: "pokhara@himaaus.com",
    side: "right",
  },
  {
    id: "kathmandu-2010",
    year: "2010",
    city: "Kathmandu",
    address: "Kalikasthan-29, Kalika Marga, Kathmandu",
    phone: "01-4534944",
    email: "kathmandu@himaaus.com",
    side: "left",
  },
  {
    id: "sydney-2008",
    year: "2008",
    city: "Sydney",
    address: "Suite 1201, Level 12, 370 Pitt Street , Sydney 2000",
    phone: "+6129269 0551",
    email: "info@himaaus.com",
    side: "right",
  },
];
