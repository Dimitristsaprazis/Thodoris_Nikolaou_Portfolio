import profileImage from '../images/Nikolaou-pfp.jpg'

export const profile = {
  name: 'Theodoros Nikolaou',
  title: 'Data Analyst | Reporting & Automation',
  pitch:
    'I help teams turn raw operational data into clear decisions through reporting, automation, and self-serve analytics.',
  cvUrl: '#',
  contactEmail: 'hello@nikolai-portfolio.com',
  image: profileImage,
}

export const skills = [
  'Power BI',
  'Excel',
  'VBA',
  'SQL',
  'Python',
  'Data Modeling',
  'Dashboards',
  'Automation',
  'Forecasting',
  'Stakeholder Reporting',
]

export const caseStudies = [
  {
    title: 'Campaign Tracking System',
    problem:
      'Marketing performance was being tracked across disconnected spreadsheets and channel reports, creating delayed updates and inconsistent KPI definitions across campaigns.',
    approach:
      'I standardized the KPI framework, built a central reporting model, and automated the refresh and validation process so campaign metrics were consistent and timely.',
    tools: ['Power BI', 'SQL', 'Excel', 'Data Modeling'],
    result:
      'The team reduced manual reporting effort by 60% and created a single, trusted view of campaign performance across paid, email, and partner channels.',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    ],
    iframe: '',
  },
  {
    title: 'Power BI / Pfizer Project',
    problem:
      'Leadership needed a faster, more reliable way to review sales and operational performance across markets without relying on repeated ad hoc extracts.',
    approach:
      'I designed a layered executive dashboard with drill-through views, KPI definitions, and region-by-region comparisons to support faster decision-making.',
    tools: ['Power BI', 'DAX', 'SQL', 'Executive Reporting'],
    result:
      'The dashboard shortened review cycles and gave executives a consistent, data-backed view of performance trends and risk areas.',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    ],
    iframe: '',
  },
  {
    title: 'Ocean Data Analytics',
    problem:
      'Ocean monitoring data arrived in inconsistent formats, making it difficult to compare trends and identify operational issues in a timely manner.',
    approach:
      'I consolidated the data, cleaned time-series records, and built a dashboard that emphasized seasonal patterns, anomalies, and early-warning indicators.',
    tools: ['Python', 'Pandas', 'SQL', 'Tableau'],
    result:
      'The analysis exposed seasonal fluctuations and anomaly patterns that allowed the team to plan field work and monitoring priorities more effectively.',
    images: [
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    ],
    iframe: '',
  },
  {
    title: 'Personal Python Project',
    problem:
      'A recurring reporting workflow depended on manual spreadsheet updates and repetitive copy-paste work, which created inefficiencies and version errors.',
    approach:
      'I created a Python automation workflow to extract, transform, and format the source data before generating a clean, repeatable report.',
    tools: ['Python', 'Pandas', 'OpenPyXL', 'Automation'],
    result:
      'The reporting process became faster, more repeatable, and more accurate, freeing time for deeper analysis and insight generation.',
    images: [
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    ],
    iframe: '',
  },
]

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Email', href: 'mailto:hello@nikolai-portfolio.com' },
]
