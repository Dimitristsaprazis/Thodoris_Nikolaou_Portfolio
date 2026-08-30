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

export const siteContent = {
  en: {
    profile: {
      name: 'Theodoros Nikolaou',
      title: 'Data Analyst | Reporting & Automation',
      pitch:
        'I help teams turn raw operational data into clear decisions through reporting, automation, and self-serve analytics.',
      cvUrl: '#',
      contactEmail: 'hello@nikolai-portfolio.com',
      image: profileImage,
    },
    hero: {
      badge: 'Data Analyst',
      cta: 'Let’s talk',
      cv: 'Download CV',
      scroll: 'Scroll',
    },
    projects: {
      eyebrow: 'Selected Work',
      title: 'Projects',
      viewAll: 'View all',
      caseStudy: 'Case study',
      outcome: 'Outcome',
    },
    footer: {
      label: 'Contact',
      heading: 'Let’s build something measurable.',
      description:
        'I turn messy data into clear decisions, sharp dashboards, and business-ready insight.',
      email: 'Email me',
      tags: ['Data analysis', 'Dashboarding', 'Insights'],
    },
    language: {
      en: 'EN',
      el: 'EL',
    },
  },
  el: {
    profile: {
      name: 'Θεόδωρος Νικολάου',
      title: 'Data Analyst | Reporting & Automation',
      pitch:
        'Βοηθάω ομάδες να μετατρέπουν τα ακατέργαστα δεδομένα σε σαφείς αποφάσεις μέσω αναφορών, αυτοματοποίησης και αυτοεξυπηρέτησης analytics.',
      cvUrl: '#',
      contactEmail: 'hello@nikolai-portfolio.com',
      image: profileImage,
    },
    hero: {
      badge: 'Data Analyst',
      cta: 'Ας μιλήσουμε',
      cv: 'Κατέβασμα CV',
      scroll: 'Κύλιση',
    },
    projects: {
      eyebrow: 'Επιλεγμένα Έργα',
      title: 'Έργα',
      viewAll: 'Προβολή όλων',
      caseStudy: 'Μελέτη περίπτωσης',
      outcome: 'Αποτέλεσμα',
    },
    footer: {
      label: 'Επικοινωνία',
      heading: 'Ας δημιουργήσουμε κάτι μετρήσιμο.',
      description:
        'Μετατρέπω τα ακατάστατα δεδομένα σε σαφείς αποφάσεις, ξεκάθαρα dashboards και επιχειρηματική γνώση.',
      email: 'Στείλτε email',
      tags: ['Ανάλυση δεδομένων', 'Dashboarding', 'Insights'],
    },
    language: {
      en: 'EN',
      el: 'EL',
    },
  },
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

export const caseStudies = {
  en: [
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
  ],
  el: [
    {
      title: 'Σύστημα Παρακολούθησης Καμπανιών',
      problem:
        'Η απόδοση των καμπανιών παρακολουθούνταν σε αποσπασματικά spreadsheets και αναφορές καναλιών, δημιουργώντας καθυστερημένες ενημερώσεις και ασταθή ορισμό KPI σε όλη τη διάρκεια των καμπανιών.',
      approach:
        'Σταθεροποίησα το πλαίσιο KPI, δημιούργησα ένα κεντρικό μοντέλο αναφοράς και αυτοματοποίησα την ανανέωση και την επικύρωση ώστε οι μετρήσεις να είναι συνεπείς και έγκαιρες.',
      tools: ['Power BI', 'SQL', 'Excel', 'Data Modeling'],
      result:
        'Η ομάδα μείωσε το χειροκίνητο workload αναφορών κατά 60% και δημιούργησε ένα ενιαίο, αξιόπιστο view απόδοσης καμπανιών σε paid, email και partner κανάλια.',
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      ],
      iframe: '',
    },
    {
      title: 'Έργο Power BI / Pfizer',
      problem:
        'Η διοίκηση χρειαζόταν έναν ταχύτερο και πιο αξιόπιστο τρόπο να αξιολογεί την πωλήσεις και τη λειτουργική απόδοση σε αγορές χωρίς να βασίζεται σε επαναλαμβανόμενες ad hoc εξαγωγές.',
      approach:
        'Σχεδίασα ένα layered executive dashboard με drill-through views, ορισμούς KPI και συγκρίσεις ανά περιοχή για να υποστηρίξω ταχύτερες αποφάσεις.',
      tools: ['Power BI', 'DAX', 'SQL', 'Executive Reporting'],
      result:
        'Το dashboard μείωσε τους χρόνους αναθεώρησης και έδωσε στη διοίκηση ένα συνεπές, δεδομενοκεντρικό view για τάσεις απόδοσης και περιοχές κινδύνου.',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      ],
      iframe: '',
    },
    {
      title: 'Ocean Data Analytics',
      problem:
        'Τα δεδομένα παρακολούθησης ωκεανών έφταναν σε ασυνεπή μορφή, καθιστώντας δύσκολη τη σύγκριση τάσεων και την ανίχνευση λειτουργικών ζητημάτων εγκαίρως.',
      approach:
        'Συγχώνευσα τα δεδομένα, καθάρισα τις χρονοσειρές και δημιούργησα dashboard που έδινε έμφαση σε εποχιακά μοτίβα, ανωμαλίες και δείκτες προειδοποίησης.',
      tools: ['Python', 'Pandas', 'SQL', 'Tableau'],
      result:
        'Η ανάλυση αποκάλυψε εποχιακές διακυμάνσεις και μοτίβα ανωμαλιών που επέτρεψαν στην ομάδα να προγραμματίζει καλύτερα το πεδίο και τις προτεραιότητες παρακολούθησης.',
      images: [
        'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
      ],
      iframe: '',
    },
    {
      title: 'Προσωπικό Python Project',
      problem:
        'Μια επαναλαμβανόμενη ροή αναφορών εξαρτιόταν από χειροκίνητες ενημερώσεις σε spreadsheets και επαναλαμβανόμενες εργασίες copy-paste, αυξάνοντας την αναποτελεσματικότητα και τα λάθη εκδοχής.',
      approach:
        'Δημιούργησα ένα Python automation workflow για να εξάγω, μετασχηματίσω και διαμορφώσω τα δεδομένα πριν δημιουργήσω μια καθαρή, επαναλαμβανόμενη αναφορά.',
      tools: ['Python', 'Pandas', 'OpenPyXL', 'Automation'],
      result:
        'Η διαδικασία αναφορών έγινε ταχύτερη, πιο επαναλαμβανόμενη και ακριβέστερη, ελευθερώνοντας χρόνο για βαθύτερη ανάλυση και παραγωγή insight.',
      images: [
        'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
      ],
      iframe: '',
    },
  ],
}

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Email', href: 'mailto:hello@nikolai-portfolio.com' },
]
