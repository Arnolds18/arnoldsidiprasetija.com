export const projects = [
  // ─── Data & AI ───────────────────────────────────────────────
  {
    id: 'healthkathon',
    title: 'Healthkathon 2.0',
    subtitle: 'Healthcare Data Analytics Competition',
    category: 'data-ai',
    description:
      'Interactive Power BI dashboard built for a national healthcare data analytics competition, surfacing actionable patient insights through visual storytelling.',
    longDescription: `Healthkathon 2.0 is a national-level data analytics competition focused on the healthcare domain. I built an end-to-end Power BI dashboard that transformed raw patient datasets into clear, decision-ready visualizations for healthcare stakeholders.

The dashboard covered patient demographics, treatment outcomes, and operational metrics — all designed to surface patterns that could improve care delivery. Special attention was paid to DAX formula optimization to ensure the report was both accurate and performant.`,
    tech: ['Power BI', 'DAX', 'Data Analytics', 'Healthcare', 'Data Visualization'],
    thumbnail: '/images/works/hk-thumb.png',
    images: ['/images/works/hk.png', '/images/works/hk-cert.png'],
    github: null,
    demo: null,
    highlights: [
      'Built interactive dashboards with drill-through and cross-filter capabilities',
      'Designed DAX measures for KPI tracking: patient throughput, outcome rates, wait times',
      'Applied data storytelling principles to guide stakeholder decisions',
      'Participated in national healthcare data competition',
    ],
  },
  {
    id: 'replasc',
    title: 'Replasc',
    subtitle: 'ML-Powered Plastic Waste Awareness App',
    category: 'data-ai',
    description:
      'Mobile app raising public awareness about plastic waste and carbon emissions, powered by an ML model that classifies plastic types in real time.',
    longDescription: `Replasc (Reduce Plastic) is a capstone project that combines mobile development with machine learning to tackle the plastic pollution crisis. The app allows users to scan plastic items using their phone camera, instantly classifying the plastic type and providing guidance on proper disposal.

Beyond classification, Replasc tracks a user's recycling activity and shows the cumulative CO₂ emissions saved — turning individual actions into visible environmental impact. The ML model was trained on a custom dataset of plastic waste images, achieving solid accuracy across the seven standard plastic resin codes.`,
    tech: ['TensorFlow', 'Python', 'Android', 'Machine Learning', 'Computer Vision', 'Kotlin'],
    thumbnail: '/images/works/replasc.png',
    images: [
      '/images/works/replasc.png',
      '/images/works/replasc-01.png',
      '/images/works/replasc-login.jpg',
      '/images/works/replasc-detail.png',
      '/images/works/replasc-cert.png',
    ],
    github: null,
    demo: null,
    highlights: [
      'Trained a CNN-based image classification model on 7 plastic resin types',
      'Integrated real-time camera inference with TensorFlow Lite on-device',
      'Built CO₂ impact tracker to gamify recycling behaviour',
      'Bangkit Academy capstone project in collaboration with Indosat Ooredoo Hutchison',
    ],
  },
  {
    id: 'risaikuru',
    title: 'Risaikuru',
    subtitle: 'Deep Learning Trash Classification Web App',
    category: 'data-ai',
    description:
      'Deep learning web app for real-time trash classification using computer vision — helping users sort waste correctly with instant AI feedback.',
    longDescription: `Risaikuru (from Japanese リサイクル — recycle) is a web-based application that uses deep learning to classify trash into recyclable categories. Users upload or capture an image of their waste, and the model instantly predicts the correct disposal category.

The backend is powered by a custom-trained convolutional neural network served via a Flask API, while the frontend provides a clean, responsive interface. The model was trained and evaluated on a curated dataset with strong accuracy across organic, plastic, metal, glass, and paper categories.`,
    tech: ['Python', 'TensorFlow', 'Flask', 'Deep Learning', 'Computer Vision', 'HTML/CSS'],
    thumbnail: '/images/works/risaikuru.png',
    images: [
      '/images/works/risaikuru.png',
      '/images/works/risaikuru-01.png',
      '/images/works/risaikuru-cert.png',
    ],
    github: null,
    demo: null,
    highlights: [
      'Custom CNN trained on multi-class waste image dataset',
      'Flask REST API serving real-time image classification',
      'Responsive web frontend with drag-and-drop image upload',
      'Model achieves high accuracy across 5 waste categories',
    ],
  },
  {
    id: 'btcforecasting',
    title: 'Cryptocurrency Forecasting',
    subtitle: 'Time-Series Prediction with FbProphet',
    category: 'data-ai',
    description:
      'Time-series forecasting pipeline for cryptocurrency prices using Facebook Prophet, with automated trend decomposition and future projections.',
    longDescription: `This project builds an end-to-end forecasting pipeline for cryptocurrency price prediction using Facebook's Prophet library. Historical OHLCV data is fetched, cleaned, and fed into Prophet, which automatically handles seasonality, trend changepoints, and holiday effects.

The pipeline produces forward-looking price projections with confidence intervals and decomposes the signal into trend, weekly, and yearly components — giving analysts a clear picture of what's driving price movement. Results are visualised in interactive Plotly charts within a Jupyter notebook.`,
    tech: ['Python', 'FbProphet', 'Pandas', 'Plotly', 'Jupyter', 'Time Series'],
    thumbnail: '/images/works/btcforecasting.png',
    images: ['/images/works/btcforecasting.png', '/images/works/btc-forecasting-01.png'],
    github: null,
    demo: null,
    highlights: [
      'Automated data pipeline from API fetch to forecast output',
      'Trend and seasonality decomposition with Prophet',
      'Interactive Plotly visualisations with confidence bands',
      'Modular design — easily adaptable to any time-series asset',
    ],
  },

  // ─── App ─────────────────────────────────────────────────────
  {
    id: 'purru',
    title: 'Purru',
    subtitle: 'Cat Companion iOS App',
    category: 'app',
    description:
      "A delightful iOS companion app for cat owners — track your cat's health, daily activities, and care routines in one place.",
    longDescription: `Purru is a cat care and companion app built natively for iOS during the Apple Developer Academy program. Designed with cat owners in mind, it helps users log and monitor their cat's daily routines — feeding, health records, vet appointments, and play sessions — all in a friendly, minimal interface.

The app was developed using Swift and SwiftUI, following Apple's Human Interface Guidelines to create an experience that feels native and intuitive. Purru's design emphasises warmth and approachability, reflecting the joy of pet ownership.`,
    tech: ['Swift', 'SwiftUI', 'iOS', 'Xcode', 'CoreData'],
    thumbnail: '/images/works/purru.png',
    images: [
      '/images/works/purru-home.png',
      '/images/works/purru-02.png',
      '/images/works/purru-03.png',
      '/images/works/purru-04.png',
    ],
    github: null,
    demo: null,
    highlights: [
      'Built with SwiftUI following Apple HIG for native iOS feel',
      'CoreData persistence for offline-first cat profiles and logs',
      'Warm, friendly UI designed to reflect the joy of pet ownership',
      'Developed during Apple Developer Academy program',
    ],
  },
  {
    id: 'moneh',
    title: 'Moneh',
    subtitle: 'Personal Finance & Budgeting iOS App',
    category: 'app',
    description:
      'Personal finance iOS app with smart expense categorisation, budget tracking, and spending insights to build better money habits.',
    longDescription: `Moneh is a personal budgeting app built for iOS that helps users take control of their finances through clear tracking and meaningful insights. Users can log income and expenses, set monthly budgets per category, and view spending breakdowns in clean, readable charts.

The app was designed with simplicity at its core — no complicated setups, just a fast and honest look at where your money goes. Built with Swift and SwiftUI, Moneh leverages CoreData for local persistence and the Charts framework for financial visualisations.`,
    tech: ['Swift', 'SwiftUI', 'iOS', 'CoreData', 'Charts', 'Xcode'],
    thumbnail: '/images/works/moneh-02.png',
    images: ['/images/works/moneh-02.png', '/images/works/moneh-01.png'],
    github: null,
    demo: null,
    highlights: [
      'Category-based budget tracking with monthly limits',
      'Spending breakdown charts using Swift Charts framework',
      'Offline-first with CoreData persistence',
      'Clean, minimal UI optimised for daily quick-logging',
    ],
  },
  {
    id: 'tribie',
    title: 'Tribie',
    subtitle: 'Social Travel Platform for iOS',
    category: 'app',
    description:
      'Social platform for travel enthusiasts to share experiences, discover destinations, and connect with fellow adventurers.',
    longDescription: `Tribie is a social iOS app that turns travel into a shared experience. Users can document their trips with photos and stories, discover places recommended by real travellers, and follow people who share their wanderlust.

Built with Swift and UIKit during the Apple Developer Academy, Tribie features a feed of travel posts, a destination discovery map, user profiles, and a follow/follower social graph — all backed by Firebase for real-time data and cloud storage.`,
    tech: ['Swift', 'UIKit', 'iOS', 'Firebase', 'Xcode', 'MapKit'],
    thumbnail: '/images/works/tribie-01.png',
    images: [
      '/images/works/tribie-home.png',
      '/images/works/tribie-01.png',
      '/images/works/tribie-02.png',
      '/images/works/tribie-login.png',
    ],
    github: null,
    demo: null,
    highlights: [
      'Social feed with travel posts, likes, and comments',
      'Destination discovery with MapKit integration',
      'Firebase Realtime Database and Cloud Storage backend',
      'Follow graph and personalised travel content discovery',
    ],
  },
  {
    id: 'splitbill',
    title: 'Split Bill',
    subtitle: 'Expense Splitting iOS App',
    category: 'app',
    description:
      'Clean and fast iOS app for splitting bills among friends — handles restaurants, trips, and group expenses with zero friction.',
    longDescription: `Split Bill is a utility iOS app that removes the awkwardness of dividing group expenses. Whether it's a dinner out, a shared Airbnb, or a group trip, users can add items, assign who owes what, and instantly see the final breakdown — with support for unequal splits and tip calculations.

The app supports both light and dark mode, with a clean interface that makes settling up fast and fair. Built natively with SwiftUI, it prioritises speed: users can split a bill in under 30 seconds.`,
    tech: ['Swift', 'SwiftUI', 'iOS', 'Xcode'],
    thumbnail: '/images/works/splitbill.png',
    images: [
      '/images/works/splitbill-home.png',
      '/images/works/splitbill.png',
      '/images/works/splitbilldark.png',
    ],
    github: null,
    demo: null,
    highlights: [
      'Equal and unequal split modes with per-person item assignment',
      'Tip calculator with custom percentage input',
      'Full light and dark mode support',
      'Designed for speed — split a bill in under 30 seconds',
    ],
  },
]

export function getProject(id) {
  return projects.find((p) => p.id === id) ?? null
}

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'data-ai', label: 'Data & AI' },
  { id: 'app', label: 'App' },
]
