export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  categories: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Commercial Carpet Installation Edmonton: Project Planning Guide",
    slug: "commercial-carpet-installation-edmonton-project-planning",
    excerpt: "A practical guide for Edmonton businesses planning commercial carpet installation with minimal disruption and reliable timelines.",
    content: `
      <h2>Commercial Carpet Installation Edmonton Planning</h2>
      <p>Commercial carpet installation projects succeed when planning is done before materials arrive. For Edmonton offices and retail spaces, a clear schedule reduces disruption and helps teams stay productive.</p>
      <h3>Start with Site and Scope</h3>
      <ul>
        <li>Confirm total square footage and access routes</li>
        <li>Identify high-priority zones and phased areas</li>
        <li>Define after-hours or weekend work windows</li>
      </ul>
      <h3>Material and Performance Selection</h3>
      <p>Choose carpet style based on traffic, maintenance expectations, and design goals. Durable materials with practical cleaning performance are often best for busy Edmonton commercial spaces.</p>
      <h3>Minimize Downtime</h3>
      <p>Staged installation lets you keep key operations running while flooring work progresses area by area. This approach is common for occupied office and retail environments.</p>
      <h3>Final Handover</h3>
      <p>At completion, review seams, transitions, and edge conditions with your installer. A final walkthrough ensures quality and confirms readiness for regular use.</p>
    `,
    author: "Carpet Installation Edmonton Team",
    date: "March 5, 2026",
    image: "https://images.unsplash.com/photo-1754999961467-0d6e4c2551e3?auto=format&fit=crop&w=1350&q=80",
    categories: ["Commercial Carpet Installation", "Project Planning"],
    metaTitle: "Commercial Carpet Installation Edmonton Planning Guide",
    metaDescription: "Plan your Edmonton commercial carpet installation with phased scheduling, material selection, and efficient project coordination.",
    keywords: "commercial carpet installation Edmonton, office carpet planning Edmonton, retail carpet project"
  },
  {
    id: 2,
    title: "Stair Carpet Installation Edmonton: Safety and Style Tips",
    slug: "stair-carpet-installation-edmonton-safety-style-tips",
    excerpt: "How to choose stair carpet in Edmonton for better traction, clean design, and long-term durability.",
    content: `
      <h2>Stair Carpet Installation Edmonton Tips</h2>
      <p>Stair carpet should improve both safety and appearance. Edmonton homes with active households benefit from carpet styles that hold up under repeated foot traffic.</p>
      <h3>Prioritize Traction</h3>
      <p>Choose carpet textures and underlay combinations that increase grip and reduce slip risk, especially in family homes and rental properties.</p>
      <h3>Focus on Fit and Fastening</h3>
      <ul>
        <li>Use precise stair measurements</li>
        <li>Secure all edges and transitions</li>
        <li>Maintain consistent alignment from top to bottom</li>
      </ul>
      <h3>Design Without Compromise</h3>
      <p>Stair runners provide a custom look while preserving visible wood edges. Full-stair carpet offers full coverage and added sound reduction.</p>
      <h3>Plan for Maintenance</h3>
      <p>Select materials based on cleaning habits, traffic levels, and long-term wear expectations so your stair carpet performs well over time.</p>
    `,
    author: "Carpet Installation Edmonton Team",
    date: "February 17, 2026",
    image: "https://images.unsplash.com/photo-1754999961467-0d6e4c2551e3?auto=format&fit=crop&w=1350&q=80",
    categories: ["Stair Carpet Installation", "Residential Carpet"],
    metaTitle: "Stair Carpet Installation Edmonton: Safety and Style Tips",
    metaDescription: "Learn how to choose stair carpet in Edmonton for safe traction, clean design, and lasting performance.",
    keywords: "stair carpet installation Edmonton, stair runner Edmonton, safe stair carpet"
  },
  {
    id: 3,
    title: "Carpet Repair Edmonton: Repair vs Replacement",
    slug: "carpet-repair-edmonton-repair-vs-replacement",
    excerpt: "Not sure whether to repair or replace your carpet in Edmonton? Use this quick guide to make the right decision.",
    content: `
      <h2>Carpet Repair Edmonton: When to Repair vs Replace</h2>
      <p>Many Edmonton property owners ask whether damaged carpet can be repaired. The answer depends on damage location, carpet age, and overall wear condition.</p>
      <h3>Choose Repair When</h3>
      <ul>
        <li>Damage is isolated to one area</li>
        <li>Seams are opening but surrounding carpet is healthy</li>
        <li>Ripples can be corrected with stretching</li>
      </ul>
      <h3>Choose Replacement When</h3>
      <ul>
        <li>Large sections are worn or stained</li>
        <li>Carpet backing is failing in multiple zones</li>
        <li>You want a full visual and performance upgrade</li>
      </ul>
      <h3>Cost and Timeline Considerations</h3>
      <p>Repairs are often faster and lower cost for localized damage. Full replacement is better for long-term value when carpet condition is poor across most of the space.</p>
      <h3>Professional Assessment Matters</h3>
      <p>A quick onsite review gives you a clear recommendation and avoids unnecessary spending on short-term fixes that will not last.</p>
    `,
    author: "Carpet Installation Edmonton Team",
    date: "January 29, 2026",
    image: "https://images.unsplash.com/photo-1764141011737-d7b2bd824454?auto=format&fit=crop&w=1350&q=80",
    categories: ["Carpet Repair", "Carpet Replacement"],
    metaTitle: "Carpet Repair Edmonton: Repair vs Replacement Guide",
    metaDescription: "Learn when carpet repair in Edmonton is enough and when full carpet replacement is the smarter long-term choice.",
    keywords: "carpet repair Edmonton, carpet replacement Edmonton, repair vs replace carpet"
  }
];