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
    name: "Straight Stair Carpet Installation",
    title: "Edmonton Stair Carpet Service",
    image: "https://images.unsplash.com/photo-1754999961467-0d6e4c2551e3?auto=format&fit=crop&w=800&q=80",
    specialties: ["Wall-to-Wall Stair Carpet", "Stair Runners", "Landing Integration"],
    bio: "Our straight stair carpet installation service is designed for clean alignment, secure fitting, and long-term durability in Edmonton homes. We ensure each tread and riser is finished for consistent appearance and safe daily use.",
    education: [
      "Best for: standard straight staircases",
      "Includes: tread and riser fitting",
      "Options: full coverage or stair runner style",
      "Finish: clean edge and transition detailing"
    ],
    availability: "Available Monday to Saturday"
  },
  {
    id: 2,
    name: "Curved & Custom Stair Carpet",
    title: "Custom Measurement and Fit",
    image: "https://images.unsplash.com/photo-1682448227631-b44e89a2bd74?auto=format&fit=crop&w=800&q=80",
    specialties: ["Curved Stairs", "Winder Stairs", "Custom Layout Planning"],
    bio: "Custom stair shapes require precise planning and careful material handling. Our team delivers detailed measurement and professional fitting for curved or irregular staircases in Edmonton properties.",
    education: [
      "Best for: curved and non-standard stairs",
      "Includes: custom measurement and templating",
      "Focus: balanced appearance and secure hold",
      "Result: consistent finish across complex stair sections"
    ],
    availability: "Available Monday to Saturday"
  },
  {
    id: 3,
    name: "Stair Runner Installation",
    title: "Decorative and Functional Stair Runners",
    image: "https://images.unsplash.com/photo-1764141011737-d7b2bd824454?auto=format&fit=crop&w=800&q=80",
    specialties: ["Runner Alignment", "Centering and Spacing", "Landing Coordination"],
    bio: "Our stair runner installation service is ideal for clients who want both style and traction. We install runners with careful centering and fastening for a clean, premium look in Edmonton homes.",
    education: [
      "Best for: design-forward stair upgrades",
      "Includes: centered runner planning",
      "Options: pattern and material guidance",
      "Finish: secure fastening and neat edge lines"
    ],
    availability: "Available Monday to Saturday"
  },
  {
    id: 4,
    name: "Stair Carpet Repair & Replacement",
    title: "Upgrade Worn or Unsafe Stair Carpet",
    image: "https://images.unsplash.com/photo-1754999961467-0d6e4c2551e3?auto=format&fit=crop&w=800&q=80",
    specialties: ["Loose Carpet Fixes", "Seam and Edge Repair", "Full Stair Re-Carpeting"],
    bio: "If your stair carpet is loose, rippled, or worn, we provide stair-focused carpet repair and replacement services in Edmonton. We improve fit and appearance while helping reduce slip and trip risks.",
    education: [
      "Best for: damaged or aging stair carpet",
      "Includes: condition assessment and options",
      "Repair choices: re-fit, seam repair, spot replacement",
      "Replacement option: full stair carpet re-installation"
    ],
    availability: "Available Monday to Saturday"
  }
];