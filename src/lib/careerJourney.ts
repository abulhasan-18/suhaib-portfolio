// lib/careerJourney.ts
export type CareerJourneyItem = {
  id: string;
  year: number;
  title: string;
  description: string;
  image: string; // ✅ added
};

export const careerJourney: CareerJourneyItem[] = [
  {
    id: "2021-01",
    year: 2021,
    title: "Factory Live Efficiency Monitoring",
    description:
      "Implemented live production tracking to improve efficiency visibility and daily management decisions.",
    image: "/career/2021-01.png",
  },
  {
    id: "2021-02",
    year: 2021,
    title: "Mobile Assembly Line Setup",
    description:
      "Supported assembly line setup and ramp-up activities with standardized workflows and layout planning.",
    image: "/career/2021-02.png",
  },
  {
    id: "2022-01",
    year: 2022,
    title: "Layout Implementation – ACP & UCW Factory",
    description:
      "Optimized facility layout and material flow to reduce motion waste and improve throughput.",
    image: "/career/2022-01.png",
  },
  {
    id: "2022-02",
    year: 2022,
    title: "Kaizen / Digitization Implementation",
    description:
      "Built a structured improvement pipeline and supported digitization initiatives for operations.",
    image: "/career/2022-02.png",
  },
  {
    id: "2023-01",
    year: 2023,
    title: "ISO 18404 Implementation",
    description:
      "Supported ISO 18404 readiness by aligning processes, evidence, governance, and audits.",
    image: "/career/2023-01.png",
  },
  {
    id: "2023-02",
    year: 2023,
    title: "55,000 SQM Factory Design & Implementation",
    description:
      "Led end-to-end design and execution planning for a large-scale manufacturing facility.",
    image: "/career/2023-02.png",
  },
  {
    id: "2024-01",
    year: 2024,
    title: "Production Scale-up & Capacity Utilization",
    description:
      "Scaled operations and improved daily output through line balancing and capacity planning.",
    image: "/career/2024-01.png",
  },
  {
    id: "2024-02",
    year: 2024,
    title: "Process Automation (Dubai Holdings)",
    description:
      "Automated process controls and approval flows to reduce manual touchpoints and improve compliance.",
    image: "/career/2024-02.png",
  },
  {
    id: "2025-01",
    year: 2025,
    title: "ISO 9000 Implementation",
    description:
      "Supported quality management system alignment and implementation planning for ISO 9000.",
    image: "/career/2025-01.png",
  },
];
