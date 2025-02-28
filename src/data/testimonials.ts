export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title?: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Dr. Johnson and the entire staff at Grace Family Medical Clinic have been taking care of my family for years. They are always professional, caring, and take the time to really listen to our concerns. I wouldn't trust our health to anyone else.",
    name: "Jennifer Thompson",
    title: "Patient for 5 years",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    quote: "After struggling to find a doctor who would take my chronic pain seriously, I found Dr. Patel. She worked with me to develop a comprehensive treatment plan that has significantly improved my quality of life. The clinic staff is always friendly and accommodating.",
    name: "Michael Rodriguez",
    title: "Patient for 3 years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    quote: "As a new parent, I had so many questions and concerns about my baby's health. Dr. Chen has been incredibly supportive, providing expert guidance and reassurance. The clinic's same-day appointments for children have been a lifesaver on multiple occasions.",
    name: "Sarah Williams",
    title: "Patient for 2 years",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    quote: "I recently moved to Edmonton and was worried about finding quality healthcare. Grace Family Medical Clinic exceeded my expectations. The online booking system is convenient, wait times are minimal, and Dr. Wilson takes the time to explain everything thoroughly.",
    name: "David Chen",
    title: "New patient",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];