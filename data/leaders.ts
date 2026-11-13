export interface LeaderStat {
  label: string;
  value: string;
}

export interface LeaderCareerHighlight {
  role: string;
  organization: string;
  period?: string;
}

export interface Leader {
  slug: string;
  name: string;
  title: string;
  roleTag: string;
  initials: string;
  image: string;
  shortBio: string;
  bio: string[];
  quote: string;
  expertise: string[];
  stats: LeaderStat[];
  highlights?: LeaderCareerHighlight[];
  accentGradient: string;
  badgeBg: string;
  social: {
    linkedin?: string;
    email?: string;
    twitter?: string;
  };
}

export const leaders: Leader[] = [
  {
    slug: "venkatesh-gothe",
    name: "Venkatesh Gothe",
    title: "Founder & CEO",
    roleTag: "CHIEF EXECUTIVE OFFICER",
    initials: "VG",
    image: "/images/leaders/venkatesh-gothe.jpg",
    shortBio:
      "Guiding Nexora's global strategy, engineering standards, and enterprise innovation roadmap across cloud transformation and applied AI workflows.",
    bio: [
      "Venkatesh Gothe is the Founder and Chief Executive Officer of Nexora Technology Services. With more than 25 years of hands-on technology leadership, he spearheads the company's global expansion, engineering standards, and next-generation applied AI capabilities.",
      "Throughout his distinguished career, Venkatesh has architected mission-critical enterprise systems, multi-cloud platforms, and distributed systems for Fortune 500 enterprises and hyper-growth scaleups. His leadership philosophy is grounded in technical craft, radical transparency, and deep architectural rigor.",
      "Under his stewardship, Nexora has scaled into a trusted engineering co-pilot for global businesses, delivering high-velocity innovation while maintaining rigorous enterprise-grade benchmarks in data governance, scalability, and operational resilience."
    ],
    quote:
      "We founded Nexora with one immutable principle: solve high-stakes challenges with uncompromising engineering craft, absolute transparency, and genuine client ownership.",
    expertise: [
      "Enterprise Architecture",
      "Applied AI & Cloud Transformation",
      "Global Technology Strategy",
      "High-Concurrency Distributed Systems",
      "Executive Board Advisory"
    ],
    stats: [
      { label: "Industry Experience", value: "25+ Years" },
      { label: "Enterprise Deployments", value: "120+" },
      { label: "Engineering Excellence", value: "99.98% SLA" }
    ],
    highlights: [
      {
        role: "Founder & Chief Executive Officer",
        organization: "Nexora Technology Services",
        period: "Present"
      },
      {
        role: "Executive Technology Director",
        organization: "Enterprise Global Solutions",
        period: "Previous"
      },
      {
        role: "Principal Systems Architect",
        organization: "Cloud Systems International",
        period: "Previous"
      }
    ],
    accentGradient: "from-[#0051fe] via-[#2563eb] to-[#0284c7]",
    badgeBg: "bg-blue-50 text-[#0051fe] border-blue-200",
    social: {
      linkedin: "https://www.linkedin.com/company/nexora-technology-services-pvt-ltd",
      email: "info@nexoratechnology.co.in"
    }
  },
  {
    slug: "mb-sanjay",
    name: "Sanjay M. B",
    title: "COO",
    roleTag: "CHIEF OPERATING OFFICER",
    initials: "MS",
    image: "/images/leaders/mb-sanjay.jpg",
    shortBio:
      "Directing Nexora's operational architecture, delivery governance, cross-functional engineering teams, and enterprise SLA compliance across global timezones.",
    bio: [
      "M. B Sanjay serves as Chief Operating Officer at Nexora Technology Services, overseeing the firm's global operational architecture, execution frameworks, and multi-disciplinary engineering teams.",
      "With over 30 years of enterprise delivery leadership, Sanjay specializes in engineering team optimization, SOC2/ISO-grade quality frameworks, and agile governance models that consistently deliver on-time, high-impact outcomes across complex regulatory environments.",
      "His proactive approach to stakeholder alignment and delivery governance ensures that client engagements execute with predictable sprint rhythms, zero delivery surprises, and sustained production excellence."
    ],
    quote:
      "Predictability in execution and precision in delivery are what turn ambitious digital blueprints into durable, high-performing production systems.",
    expertise: [
      "Agile Delivery Governance",
      "Engineering Team Optimization",
      "Enterprise SLA Compliance",
      "Continuous Integration & QA",
      "Global Operations Scaling"
    ],
    stats: [
      { label: "Industry Experience", value: "30+ Years" },
      { label: "On-Time Sprint Delivery", value: "98.7%" },
      { label: "Global Teams Governed", value: "45+" }
    ],
    highlights: [
      {
        role: "Chief Operating Officer",
        organization: "Nexora Technology Services",
        period: "Present"
      },
      {
        role: "VP of Global Delivery & Operations",
        organization: "Global IT Services Corp",
        period: "Previous"
      },
      {
        role: "Senior Director of Engineering Operations",
        organization: "Apex Enterprise Tech",
        period: "Previous"
      }
    ],
    accentGradient: "from-[#0284c7] via-[#0051fe] to-[#1e3a8a]",
    badgeBg: "bg-sky-50 text-[#0284c7] border-sky-200",
    social: {
      linkedin: "https://www.linkedin.com/company/nexora-technology-services-pvt-ltd",
      email: "info@nexoratechnology.co.in"
    }
  }
];

export function getLeaderBySlug(slug: string): Leader | undefined {
  return leaders.find(
    (leader) => leader.slug.toLowerCase() === slug.toLowerCase()
  );
}

export function getAllLeaders(): Leader[] {
  return leaders;
}
