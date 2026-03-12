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
    quote: "Carpet Installation Edmonton replaced our main floor carpet and the result was excellent. The crew was on time, clean, and very professional from start to finish.",
    name: "Jennifer T.",
    title: "Homeowner, Southwest Edmonton",
    image: "https://images.unsplash.com/photo-1754999961467-0d6e4c2551e3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    quote: "We hired them for stair carpet installation and could not be happier. The runner is perfectly aligned and the stairs feel safer for our kids and parents.",
    name: "Michael R.",
    title: "Client, North Edmonton",
    image: "https://images.unsplash.com/photo-1682448227631-b44e89a2bd74?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    quote: "Their carpet repair team fixed ripples and a seam issue in our basement without needing full replacement. Honest advice and great workmanship.",
    name: "Sarah W.",
    title: "Property Owner, Edmonton",
    image: "https://images.unsplash.com/photo-1764141011737-d7b2bd824454?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    quote: "Our office needed commercial carpet installation with minimal downtime. They planned the work in phases and kept everything on schedule.",
    name: "David C.",
    title: "Office Manager, Downtown Edmonton",
    image: "https://images.unsplash.com/photo-1754999961467-0d6e4c2551e3?auto=format&fit=crop&w=800&q=80"
  }
];