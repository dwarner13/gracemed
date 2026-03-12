import {
  Home,
  Clock,
  Award,
  Activity,
  Users,
  Briefcase
} from 'lucide-react';
import React from 'react';

export interface Service {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ReactNode;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Carpet Installation Edmonton",
    slug: "carpet-installation-edmonton",
    shortDescription: "Professional wall-to-wall carpet installation for Edmonton homes, rental units, and renovation projects.",
    fullDescription: `
      <h2>Carpet Installation Edmonton</h2>
      <p>Our core service is professional carpet installation in Edmonton with careful preparation, clean finishing, and reliable timelines. We install carpet in bedrooms, living spaces, basements, and full-home projects.</p>

      <h3>What Is Included</h3>
      <ul>
        <li>Room measurement and installation planning</li>
        <li>Underlay recommendations for comfort and durability</li>
        <li>Secure seam and transition installation</li>
        <li>Trim work and edge finishing</li>
        <li>Post-install walkthrough and cleanup</li>
      </ul>

      <h3>Why Edmonton Clients Book This Service</h3>
      <p>Professional installation protects your carpet investment and improves long-term performance. Our team focuses on fit, finish, and durability for high-traffic Edmonton homes.</p>
    `,
    icon: React.createElement(Home, { size: 40 }),
    metaTitle: "Carpet Installation Edmonton | Residential Carpet Experts",
    metaDescription: "Professional carpet installation in Edmonton for homes and rental properties with clean finishing and reliable service.",
    keywords: "carpet installation Edmonton, residential carpet installation Edmonton, home carpet installers"
  },
  {
    id: 2,
    title: "Stair Carpet Installation",
    slug: "stair-carpet-installation-edmonton",
    shortDescription: "Precision stair carpet installation in Edmonton for straight stairs, landings, and custom stair layouts.",
    fullDescription: `
      <h2>Stair Carpet Installation Edmonton</h2>
      <p>Stairs require tight fitting, secure fastening, and consistent alignment. We provide stair carpet installation in Edmonton that balances safety, comfort, and appearance.</p>

      <h3>Common Stair Services</h3>
      <ul>
        <li>Full stair carpeting installation</li>
        <li>Stair runner fitting and alignment</li>
        <li>Landing and edge finishing</li>
        <li>Replacement of worn stair carpet</li>
        <li>Transition finishing at top and bottom stairs</li>
      </ul>

      <h3>Built for Daily Use</h3>
      <p>Our stair carpet methods are designed to reduce movement and edge lifting in high-traffic areas, helping your carpet last longer in busy Edmonton households.</p>
    `,
    icon: React.createElement(Clock, { size: 40 }),
    metaTitle: "Stair Carpet Installation Edmonton | Runner & Full Stair Carpet",
    metaDescription: "Expert stair carpet installation in Edmonton with secure fitting, precise alignment, and clean finishing.",
    keywords: "stair carpet installation Edmonton, stair runner installation Edmonton, carpet on stairs Edmonton"
  },
  {
    id: 3,
    title: "Carpet Repair",
    slug: "carpet-repair-edmonton",
    shortDescription: "Professional carpet repair in Edmonton for ripples, seam issues, worn sections, and localized damage.",
    fullDescription: `
      <h2>Carpet Repair Edmonton</h2>
      <p>Not every carpet issue needs full replacement. Our Edmonton carpet repair service restores appearance and function where possible, saving time and cost.</p>

      <h3>Repair Services Include</h3>
      <ul>
        <li>Carpet stretching to remove ripples</li>
        <li>Seam repair and re-seaming</li>
        <li>Patch repair for burns and stains</li>
        <li>Edge and transition repair</li>
        <li>Minor re-fits in doorways and corners</li>
      </ul>

      <h3>When Repair Is the Right Choice</h3>
      <p>If damage is localized and the surrounding carpet is still in good condition, repair is often the most practical option for Edmonton homeowners and landlords.</p>
    `,
    icon: React.createElement(Award, { size: 40 }),
    metaTitle: "Carpet Repair Edmonton | Stretching, Seams & Patching",
    metaDescription: "Trusted carpet repair in Edmonton for ripples, seam separation, and localized damage restoration.",
    keywords: "carpet repair Edmonton, carpet stretching Edmonton, carpet seam repair Edmonton, carpet patch repair"
  },
  {
    id: 4,
    title: "Commercial Carpet Installation",
    slug: "commercial-carpet-installation-edmonton",
    shortDescription: "Commercial carpet installation in Edmonton for offices, retail units, and multi-tenant buildings.",
    fullDescription: `
      <h2>Commercial Carpet Installation Edmonton</h2>
      <p>We provide commercial carpet installation for Edmonton offices and business spaces with scheduling that minimizes disruption to operations.</p>

      <h3>Commercial Service Highlights</h3>
      <ul>
        <li>Office carpet installation</li>
        <li>Retail carpet replacement</li>
        <li>Tenant improvement flooring projects</li>
        <li>Phased installation schedules</li>
        <li>After-hours and weekend options</li>
      </ul>

      <h3>Built for Business Timelines</h3>
      <p>Our commercial process focuses on access coordination, clean work zones, and predictable completion to support your Edmonton business needs.</p>
    `,
    icon: React.createElement(Activity, { size: 40 }),
    metaTitle: "Commercial Carpet Installation Edmonton | Office & Retail Carpet",
    metaDescription: "Commercial carpet installation in Edmonton with efficient scheduling and professional results for business interiors.",
    keywords: "commercial carpet installation Edmonton, office carpet installers Edmonton, retail carpet installation"
  },
  {
    id: 5,
    title: "Residential Carpet Installation",
    slug: "residential-carpet-installation-edmonton",
    shortDescription: "Residential carpet installation in Edmonton for bedrooms, basements, living rooms, and full-home flooring upgrades.",
    fullDescription: `
      <h2>Residential Carpet Installation Edmonton</h2>
      <p>Our residential carpet installation service is built for Edmonton homeowners who want comfort, style, and long-term durability in their living spaces.</p>

      <h3>Residential Service Includes</h3>
      <ul>
        <li>Room-by-room carpet installation planning</li>
        <li>Recommendations for family and pet-friendly options</li>
        <li>Professional underlay and carpet fitting</li>
        <li>Clean edge finishing and transitions</li>
        <li>Final walkthrough and cleanup</li>
      </ul>

      <h3>Perfect for Home Renovations</h3>
      <p>Whether you are updating one room or a full home, we help Edmonton residents choose and install carpet that matches their budget and design goals.</p>
    `,
    icon: React.createElement(Users, { size: 40 }),
    metaTitle: "Residential Carpet Installation Edmonton | Home Carpet Services",
    metaDescription: "Professional residential carpet installation in Edmonton for homes, suites, and renovation projects.",
    keywords: "residential carpet installation Edmonton, home carpet installers Edmonton, bedroom carpet installation"
  },
  {
    id: 6,
    title: "Carpet Replacement",
    slug: "carpet-replacement-edmonton",
    shortDescription: "Complete carpet replacement in Edmonton including old carpet removal, underlay updates, and new installation.",
    fullDescription: `
      <h2>Carpet Replacement Edmonton</h2>
      <p>When existing carpet is worn, stained, or past its service life, we provide full carpet replacement in Edmonton with professional installation from start to finish.</p>

      <h3>What Carpet Replacement Includes</h3>
      <ul>
        <li>Removal and disposal of old carpet</li>
        <li>Subfloor inspection and preparation</li>
        <li>Installation of new underlay and carpet</li>
        <li>Seam and transition finishing</li>
        <li>Project cleanup and quality check</li>
      </ul>

      <h3>Upgrade Your Space</h3>
      <p>New carpet can transform comfort and appearance while improving durability. We offer replacement options for homes and businesses across Edmonton.</p>
    `,
    icon: React.createElement(Briefcase, { size: 40 }),
    metaTitle: "Carpet Replacement Edmonton | Remove and Install New Carpet",
    metaDescription: "Carpet replacement in Edmonton with old carpet removal, underlay installation, and clean finishing.",
    keywords: "carpet replacement Edmonton, replace old carpet Edmonton, new carpet installation Edmonton"
  }
];