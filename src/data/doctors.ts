export interface Doctor {
  id: number;
  name: string;
  title: string;
  image: string;
  specialties: string[];
  bio: string;
  education: string[];
  availability: string;
}

// Physician profiles are intentionally empty pending verification. Only real,
// verified physicians affiliated with the clinic should be listed here.
export const doctors: Doctor[] = [];