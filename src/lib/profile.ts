export type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
};

export const profile = {
  name: "Mohammed Suhaib",
  headline:
    "Business Excellence • Digital Transformation • Governance & Performance • System Assessor • Certified LSSBB",
  location: "Dubai, United Arab Emirates",
  email: "suhaib1601@gmail.com",
  phone: "+971 58 299 3464",
  phoneAlt: "0555775449",
  linkedin: "https://www.linkedin.com/in/mohammed-suhaib-business-excellence",
  summary:
    "Result-oriented professional with extensive experience in Business Process Management, Automation, Digitization, Governance, and Operational Excellence. Worked across manufacturing, construction, and real estate services—building a strong cross-functional skill set.",
  stats: [
    { label: "Enterprise processes registered", value: "400+" },
    { label: "Savings delivered (Six Sigma)", value: "AED 2M+" },
    { label: "Digitization projects led", value: "6+" },
    { label: "Plant capacity improvement", value: "182%" },
  ],
  highlights: [
    "Developed the enterprise-wide process register of 400+ processes and leading maturity assessments (Level 1 Standardization to Level 5 Automation).",
    "Developed corporate governance frameworks, including organization-wide DOA matrices and deployed the automated triggers on CRM, ERP, and other enterprise systems, enabling seamless approvals for all authority levels resulting in timely service completion.",
    "Successfully executed multiple ERP implementations across different business units.",
    "Led and implemented 6+ digitization projects globally for manufacturing organizations including customized software solutions for KPI monitoring, KAIZEN tracking, productivity, quality, and inventory management reporting. ",
    "Facilitated Six Sigma workshops and mentored 4 DMAIC projects (defects reduction, inventory optimization, productivity improvement, scrap reduction), achieving over AED 2M in savings.",
    "Spearheaded the initiative for ISO 18404 certification, making the company the first in the GCC to attain it.",
    "Worked with C-suite executives as project lead for greenfield developments of glass and aluminum manufacturing facilities (~50,000 sq.m) in Ras Al Khaimah and Sharjah.",
    "Drove a major cost optimization program in a sofa manufacturing plant, achieving 30% labor cost reduction, and supported the setup of a state-of-the-art furniture unit in India through line-balancing strategies.",
    "Contributed to establishing an automotive seat-cover manufacturing facility in Andhra Pradesh, India.",
  ],
  skills: {
    "Operational Excellence": [
      "Lean",
      "Kaizen",
      "Line Balancing",
      "Cycle Time Reduction",
      "VSM",
      "Time/Work Studies",
    ],
    "Governance & Performance": [
      "BSC",
      "KPI",
      "OKR",
      "DOA",
      "Compliance Audits",
      "Insight Reporting",
    ],
    "Digital & Analytics": [
      "Automation",
      "Digitization",
      "ERP Implementation",
      "Power BI",
      "Process Modelling (BPM)",
    ],
    Tools: ["MS Visio", "AutoCAD"],
    Frameworks: ["DMAIC", "ISO", "DQA", "EFQM", "TQM (Deming-aligned)"],
  },
  languages: [
    { name: "Tamil", level: "Native / Bilingual" },
    { name: "English", level: "Full Professional" },
    { name: "Malayalam", level: "Limited Working" },
  ],
  certifications: [
    "Lean Six Sigma Green Belt (Certified)",
    "Project Management Essentials (Certified)",
    "Business Analysis – Process Modelling",
    "OKR Foundations",
  ],
  awards: ["HSE Hero – Safety Excellence"],
  education: [
    {
      school: "Manipal Academy of Higher Education (MAHE), Dubai",
      degree: "MBA, Business Analytics and Data Science",
      dates: "Oct 2024 – Oct 2026",
    },
    {
      school: "Anna University, Chennai",
      degree: "BE, Mechanical Engineering",
      dates: "",
    },
  ],
  experience: [
    {
      company: "TECOM Group Dubai",
      location: "Dubai, United Arab Emirates",
      role: "Process & Policy Specialist",
      start: "Jun 2024",
      end: "Present",
      bullets: [
        "Streamlining the end-to-end customer journey by standardizing business processes and connecting key customer touchpoints.",
        "Driving transformation projects—bridging process inputs to IT teams to integrate customer portals with CCRM and eliminate manual touchpoints.",
        "Implementing and continuously updating Delegation of Authority (DOA) to enable faster decision-making within defined authority limits.",
        "Ensuring DOA compliance by conducting planned audits and cross-verifying approval hierarchies with authority limits.",
        "Presenting insight reports to CEO and Board: growth, financials, improvement areas, non-compliance, and Balanced Scorecard performance.",
      ],
    },
    {
      company: "Sobha Realty",
      location: "Ras al-Khaimah, United Arab Emirates",
      role: "Business Excellence Executive",
      start: "Nov 2021",
      end: "May 2024",
      bullets: [
        "Designed and executed a 55,000 sq.m manufacturing facility from scratch: layout, material flow, inventory, capacity, machinery, and manpower planning.",
        "Led a team of engineers/technicians across automation, digitization, and process standardization.",
        "Facilitated cross-functional teams to achieve ISO 18404 certification; contributed to TQM initiatives aligned to the Deming Award.",
        "Supported Lean Six Sigma Black Belt and Green Belt projects—data collection, improvements, implementation.",
        "Owned the Idea Management System: tracked Kaizen activities and visualized progress via Power BI for leadership.",
      ],
    },
    {
      company: "Lean Synergy",
      location: "Bangalore Urban, Karnataka, India",
      role: "Lean Consultant",
      start: "Aug 2020",
      end: "Oct 2021",
      bullets: [
        "Reduced manpower cost per unit by 59.2% through productivity improvements, line balancing, and lean layout design.",
        "Increased plant capacity from 85 sofas/day to 240 sofas/day (182% improvement) while sustaining reduced labor expenses.",
      ],
    },
    {
      company: "Haworth",
      location: "Chennai, Tamil Nadu, India",
      role: "Engineering Assistant",
      start: "Jul 2019",
      end: "Jul 2020",
      bullets: [
        "Waste elimination via VSM",
        "Conducted time/work studies",
        "Implemented Lean tools",
      ],
    },
  ] satisfies ExperienceItem[],
};

export const reviews = [
  {
    name: "Dr. Alexander Kuttappan M.B.A., Ph.D",
    title:
      "Executive Vice President – People & Business Excellence @ Texcoms Group",
    quote:
      "I had the pleasure of having Suhaib in my team, and I can confidently say he is a meticulous and diligent professional with a true “go-getter” attitude. His hands-on experience in implementing Lean, TQM, and Six Sigma projects demonstrates both his technical excellence and commitment to continuous improvement.\n\nWhat truly sets Suhaib apart is his integrity and empathy — he consistently gives voice to the voiceless and ensures every perspective is heard. A rare combination of operational excellence and human sensitivity, Suhaib is an invaluable asset to any organisation. Wish him only the best always!",
  },
  {
    name: "Santosh Govind Bhosale",
    title: "Management Consultant @ ELean Consulting",
    quote:
      "I’m proud to recommend Suhaib, an exceptionally disciplined and driven Operational Excellence professional I had the privilege to mentor during our pioneering Lean Six Sigma ISO 18404:2015 standard implementation journey at Sobha Facades.\n\nSuhaib played a critical role in the world’s first ISO 18404 Lean Six Sigma standard deployment in manufacturing. He consistently demonstrated precision in data analysis, strong discipline in execution, eagerness to learn, and an excellent grasp of Lean Six Sigma principles aligned with ISO 18404.\n\nSuhaib approaches challenges with clarity and persistence, turning complexity into actionable insights. I confidently recommend him for roles focused on process improvement, quality, data-driven decision-making, or transformation.",
  },
  {
    name: "Lafir Ali Rinos Mohamed Nizamin",
    title: "Lead Quality Assurance @ Emirates Industrial Panel",
    quote:
      "Working with Suhaib has been an absolute pleasure. He brings a unique combination of technical expertise, practical thinking, and a data-driven approach that consistently delivers results.\n\nOne of his greatest strengths is his ability to communicate complex ideas in a way that's easy for everyone to understand, making collaboration effortless. Strategic yet results-focused, Suhaib is a professional who adds value wherever he goes.",
  },
  {
    name: "Subra Vaithin",
    title: "Founder & Principal Consultant @ E-Lean Consulting",
    quote:
      "I'm thrilled to recommend Suhaib, an exceptional Operational Excellence Engineer I had the pleasure of training as a Lean Six Sigma Black Belt. His dedication to process improvement and attention to detail is unparalleled.\n\nDuring his tenure at Sobha, Suhaib demonstrated excellence in process optimization, problem-solving, data analysis, and collaboration. His ability to simplify complex ideas makes him a valuable asset to any organization seeking operational excellence.",
  },
  {
    name: "Deepak Kesavan",
    title: "Project Management Specialist @ Rheo AI",
    quote:
      "Suhaib is a visionary with a strong technical background in lean principles, production planning, and facility design. He possesses extensive knowledge in business excellence, process management, and policy deployment.\n\nData-driven and straightforward in his approach, Suhaib was a pleasure to work with at Sobha. I highly recommend him for any product- or service-based business transformation programs.",
  },
  {
    name: "Venkatesh Babu",
    title: "Deputy Manager @ Deloitte",
    quote:
      "I had a great time working with Suhaib during a project at a leading furniture manufacturer. Adaptability and agility are his major strength areas. He is a very down-to-earth person, and I would easily rank him as the best professional I have managed so far.\n\nI would strongly recommend him for implementing manufacturing transformation programs to achieve extraordinary results.",
  },
  {
    name: "Gowtham Vijayaragavan, SHRM-SCP",
    title: "Talent & Performance Specialist @ Raibal Holding",
    quote:
      "Suhaib is a highly self-motivated and responsible individual with a consistently clear thought process. He never hesitates to learn new things from his fellow colleagues.\n\nHe enjoys challenges, always gives his best, and is a great team player whom teams can truly rely on. Wishing him a great career ahead.",
  },
];

/**
 * Note: reviews above are placeholders to give you a ready-made "Reviews" section.
 * Swap them with real testimonials when you have them.
 */
