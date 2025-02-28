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

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Family Physician, Medical Director",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specialties: ["Family Medicine", "Preventative Care", "Women's Health"],
    bio: "Dr. Sarah Johnson has been practicing family medicine for over 15 years. As the Medical Director of Grace Family Medical Clinic, she is committed to providing comprehensive, patient-centered care to the Edmonton community. Dr. Johnson takes a holistic approach to healthcare, focusing on preventative medicine and building long-term relationships with her patients.",
    education: [
      "MD, University of Alberta",
      "Residency in Family Medicine, University of Calgary",
      "Board Certified in Family Medicine",
      "Fellow of the College of Family Physicians of Canada"
    ],
    availability: "Monday, Tuesday, Thursday: 9:00 AM - 5:00 PM"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    title: "Family Physician",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specialties: ["Family Medicine", "Pediatrics", "Sports Medicine"],
    bio: "Dr. Michael Chen joined Grace Family Medical Clinic in 2018 after completing his residency in family medicine. He has a special interest in pediatrics and sports medicine, helping patients of all ages maintain active, healthy lifestyles. Dr. Chen is known for his approachable manner and thorough, evidence-based approach to patient care.",
    education: [
      "MD, University of British Columbia",
      "Residency in Family Medicine, University of Alberta",
      "Certificate of Added Competence in Sports Medicine",
      "Board Certified in Family Medicine"
    ],
    availability: "Monday, Wednesday, Friday: 8:00 AM - 4:00 PM"
  },
  {
    id: 3,
    name: "Dr. Amina Patel",
    title: "Family Physician",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specialties: ["Family Medicine", "Chronic Disease Management", "Geriatrics"],
    bio: "Dr. Amina Patel brings over 10 years of experience in family medicine to Grace Family Medical Clinic. She specializes in chronic disease management and geriatric care, helping patients navigate complex health conditions with compassion and expertise. Dr. Patel is dedicated to providing personalized care that addresses the unique needs of each patient.",
    education: [
      "MD, McMaster University",
      "Residency in Family Medicine, University of Toronto",
      "Fellowship in Geriatric Medicine",
      "Board Certified in Family Medicine"
    ],
    availability: "Tuesday, Thursday, Friday: 9:00 AM - 5:00 PM"
  },
  {
    id: 4,
    name: "Dr. Robert Wilson",
    title: "Family Physician",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specialties: ["Family Medicine", "Mental Health", "Preventative Care"],
    bio: "Dr. Robert Wilson joined our clinic in 2020, bringing expertise in mental health care within family practice. He believes in the importance of addressing both physical and mental health aspects for complete patient wellbeing. Dr. Wilson creates a supportive environment where patients feel comfortable discussing all aspects of their health.",
    education: [
      "MD, Dalhousie University",
      "Residency in Family Medicine, University of Alberta",
      "Additional Training in Mental Health Care",
      "Board Certified in Family Medicine"
    ],
    availability: "Monday, Wednesday, Thursday: 10:00 AM - 6:00 PM"
  }
];