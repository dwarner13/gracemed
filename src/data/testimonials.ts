export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title?: string;
  image?: string;
}

// Patient testimonials are intentionally empty. Only genuine, verified patient
// testimonials (with documented consent) should be added here.
export const testimonials: Testimonial[] = [];