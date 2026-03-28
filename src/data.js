export const personal = {
  name: 'Zun Myat Hsu',
  title: 'Data Analyst',
  tagline: 'Turning complex data into clear decisions.',
  email: 'zunmyathsu31@gmail.com',
  phone: '+65 8171 2119',
  linkedin: 'https://www.linkedin.com/in/zun-myat-hsu-16365b212/',
  github: 'https://github.com/zunm3133',
  location: 'Singapore',
  summary: 'Data & Business Analyst with over 2 years of experience in analytics, process improvement, and end-to-end data pipeline development. I translate complex technical findings into strategic recommendations for cross-functional leadership, with a focus on financial analysis, budgeting, and business performance through data-driven reporting.',
}

export const experience = [
  {
    role: 'Data Analyst',
    company: 'J.J Transportation Services',
    period: 'Jan 2023 — Oct 2025',
    bullets: [
      'Collaborated with operations and marketing stakeholders to integrate disparate data sources—including CRM and logistics software—into a unified dashboard using Power BI and Tableau, providing a single source of truth that improved decision-making speed by 20%.',
      'Owned the end-to-end delivery of data analytics projects by leveraging Python and SQL to extract, clean, and analyze complex supply chain datasets, ensuring 99.9% data integrity through automated validation protocols while identifying bottlenecks to improve on-time delivery by 15%.',
      'Facilitated monthly data-driven strategy sessions and managed project documentation using G-Suite applications (Google Sheets, Docs, Slides) and MS Excel (PivotTables, VLOOKUP, Power Query), reducing report generation time by 30% and streamlining cross-functional communication for regional stakeholders.',
      'Served as the primary liaison between technical teams and business stakeholders, facilitating Agile/Scrum ceremonies, utilizing Jira for sprint tracking and issue management, utilizing Confluence for requirement documentation and project tracking, and coordinating User Acceptance Testing (UAT) to ensure all data solutions were validated against business requirements before final deployment.',
      'Maintained rigorous documentation of data definitions, business rules, and analytical methodologies to ensure full audit-readiness and seamless knowledge transfer for cross-functional stakeholders.',
      'Partnered with cross-functional leadership to conduct comprehensive business analysis, identifying operational inefficiencies and translating findings into data-driven strategic initiatives that optimized resource allocation.',
      'Demonstrated autonomous decision-making in managing end-to-end data pipeline deployments, effectively prioritizing technical requirements to ensure project delivery aligned with critical business objectives.',
    ],
  },
  {
    role: 'Logistics Coordinator',
    company: 'Su Myat Aung Company Limited',
    period: 'Feb 2019 — Dec 2022',
    bullets: [
      'Organised and managed all required shipping paperwork, invoices, and customs documentation to maintain operational compliance.',
      'Controlled the supply chain by applying proactive decision-making and effective time management to resolve logistical delays and maintain service-level agreements.',
    ],
  },
]

export const education = [
  {
    degree: 'Bachelor of Science (Hons) in Computing Science',
    institution: 'Coventry University',
    year: 'Mar 2026',
  },
  {
    degree: 'Higher Diploma in Infocomm Technology',
    institution: 'TMC Academy',
    year: 'Feb 2024',
  },
]

export const certifications = [
  { name: 'Google Data Analytics Specialization', issuer: 'Google', year: '2023' },
  { name: 'Google Business Intelligence Specialization', issuer: 'Google', year: '2024' },
  { name: 'IBM Data Science Specialization', issuer: 'IBM', year: '2024' },
]

export const skills = [
  {
    category: 'Analytics & Data Science',
    items: ['Python', 'R', 'Pandas', 'NumPy', 'Scikit-learn', 'SciPy', 'Statistical Analysis', 'EDA'],
  },
  {
    category: 'Data Engineering',
    items: ['SQL', 'ETL Pipelines', 'Data Pipeline Development', 'Data Documentation', 'SQLite', 'MongoDB'],
  },
  {
    category: 'Business Intelligence',
    items: ['Power BI', 'DAX', 'Tableau', 'MS Excel', 'Google Sheets', 'Dashboard Design'],
  },
  {
    category: 'Development',
    items: ['React', 'Node.js', 'Express', 'JavaScript', 'Git', 'REST API'],
  },
  {
    category: 'Business & Strategy',
    items: ['Stakeholder Management', 'Agile / Scrum', 'UAT', 'SDLC', 'Strategic Planning', 'Budget Management', 'Vendor Management'],
  },
]

export const projects = [
  {
    id: 'olist',
    category: 'Data Analytics',
    emoji: '🛒',
    title: 'E-Commerce Sales & Customer Behaviour Analysis',
    description: 'End-to-end analysis of 100,000+ real Brazilian orders from the Olist marketplace. Built RFM customer segmentation, cohort retention heatmap, and SQL window function queries with an interactive Tableau dashboard.',
    highlights: [
      '97% of customers never return — critical retention gap identified',
      'Black Friday Nov 2017: 3× revenue spike in a single month',
      'Top 5% of customers drive 25% of total platform revenue',
    ],
    tags: ['Python', 'SQL', 'Pandas', 'Tableau', 'RFM Segmentation', 'Cohort Analysis'],
    github: 'https://github.com/zunm3133/ecommerce-analysis',
    live: '',
  },
  {
    id: 'social',
    category: 'Marketing Analytics',
    emoji: '📊',
    title: 'Social Media Campaign Performance Analytics',
    description: 'Analysis of 300,000 ad campaigns across Facebook, Instagram, Pinterest and Twitter. A/B testing with statistical significance using SciPy t-tests, CTR/ROAS/CPC calculation, conversion funnel analysis, and budget reallocation recommendations.',
    highlights: [
      'Instagram vs Twitter: statistically significant difference (p = 0.0043)',
      '94% click-to-conversion drop-off — landing page issue, not ad creative',
      'Budget reallocation model estimated +$12k monthly revenue uplift',
    ],
    tags: ['Python', 'SciPy', 'A/B Testing', 'Tableau', 'Excel', 'openpyxl'],
    github: 'https://github.com/zunm3133/socialmedia_campaign_performance_analysis',
    live: '',
  },
  {
    id: 'churn',
    category: 'Machine Learning',
    emoji: '🏦',
    title: 'Bank Customer Churn Prediction & Risk Segmentation',
    description: 'ML project predicting which bank customers will churn using Logistic Regression and Random Forest on 10,000 customer records. Includes SMOTE class balancing, ROC-AUC evaluation, feature importance analysis, and a Power BI risk dashboard.',
    highlights: [
      'Logistic Regression with 85%+ accuracy; Random Forest ROC-AUC: 0.87',
      'Germany churn rate 2× higher than France — market-specific risk identified',
      'Customers with 3+ products churn at near 100% — bundling issue confirmed',
    ],
    tags: ['Python', 'Scikit-learn', 'Random Forest', 'SMOTE', 'ROC-AUC', 'Power BI'],
    github: 'https://github.com/zunm3133/bank-churn-prediction',
    live: '',
  },
  {
    id: 'hospital',
    category: 'Healthcare Analytics',
    emoji: '🏥',
    title: 'Hospital Readmission & Patient Outcome Analysis',
    description: 'Healthcare analytics on 101,766 real clinical encounters from 130 US hospitals. 30-day readmission rate calculation, SQL clinical views, patient risk stratification using a points-based scoring system, and a Power BI clinical dashboard with drill-through.',
    highlights: [
      'Patients on 20+ medications readmit at ~3× the rate of low-medication patients',
      'Prior inpatient visits: single strongest predictor of 30-day readmission',
      'Circulatory & respiratory diagnoses drive highest-cost readmission population',
    ],
    tags: ['Python', 'SQL', 'SQLite', 'Power BI', 'Risk Stratification', 'ICD-9'],
    github: 'https://github.com/zunm3133/hospital-readmission-analysis',
    live: '',
  },
  {
    id: 'rental',
    category: 'Full-Stack Development',
    emoji: '🏠',
    title: 'Property Rental Management System',
    description: 'Full-stack property rental management platform designed to streamline tenant management, lease tracking, maintenance requests, and payment processing for landlords and property managers.',
    highlights: [
      'Tenant onboarding, lease management, and automated rent reminders',
      'Maintenance request tracking with status updates and history',
      'Financial reporting dashboard for rent collection and expenses',
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
    github: 'https://github.com/zunm3133/PropertyRental',
    live: '',
  },
  // {
  //   id: 'freshbasket',
  //   category: 'Full-Stack Development',
  //   emoji: '🥬',
  //   title: 'FreshBasket — MERN E-Commerce Platform',
  //   description: 'Full-stack grocery e-commerce application with MongoDB, Express, React and Node.js. Features JWT authentication, product management, real-time cart with free delivery progress, 3-step checkout, order history, and a full admin panel.',
  //   highlights: [
  //     'JWT authentication with role-based admin access control',
  //     'Real-time cart updates with free delivery progress bar',
  //     'Admin dashboard: product CRUD, order status management, user management',
  //   ],
  //   tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'CSS Modules'],
  //   github: 'https://github.com/zunmyathsu/freshbasket-mern',
  //   live: '',
  // },
]
