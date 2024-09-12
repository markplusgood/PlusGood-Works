import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export type Position = { // Exporting Position type
  title: string;
  start: string;
  end?: string;
  description: string;
}

export type Work = {
  company: string;
  link: string;
  badges: readonly string[];
  positions: Position[];
}

export const RESUME_DATA = {
  name: "Mark Mikhalev",
  initials: "MM",
  location: "Georgia, GET",
  locationLink: "https://maps.app.goo.gl/KyTruQPXLKrH3yUj8",
  about:
    "Support automation engineer",
  summary:
<<<<<<< HEAD
    "Dedicated Customer Advocate and Automation Engineer on a mission to humanize work with bespoke AI solutions. I offer a unique skill set stemming from my rich work history and passion for helping people and learning ways of building exceptional experiences across diverse cultures and industries.",
=======
    "I am a dedicated Customer Advocate and Automation Engineer on a mission to humanize work with bespoke AI solutions. My unique skill set stems from my extensive work history across diverse industries and cultures. I am passionate about helping people, creating exceptional experiences, and making this world a better place for the generations to follow. ",
>>>>>>> developing
  avatarUrl: "https://raw.githubusercontent.com/markplusgood/plusgood.pro/main/src/images/avatar.jpeg",
  personalWebsiteUrl: "plusgood.com",
  contact: {
    email: "mark@plusgood.pro",
    tel: "https://t.me/markplusgood",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/markplusgood",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/markplusgood/",
        icon: LinkedInIcon,
      },
      
      /*
      {
        name: "X",
        url: "https://x.com/MarkPlusgood",
        icon: XIcon,
      },
      */
    ],
  },
  
  work: [
    {
      company: "TripleTen",
      link: "https://tripleten.com",
      badges: ["Remote"],
      positions: [
        {
          title: "Customer support team lead",
          start: "2023",
          end: "2023",
          description:
            "Led a technical and educational support team through a software transition, increasing team efficiency and well-being by training, building smooth processes, and implementing chatbots with self-service features.",
        },
        {
          title: "Senior customer support agent",
          start: "2021",
          end: "2023",
          description:
            "Fostered crew efficiency and user satisfaction by delivering technical and educational support, maintaining team's workflows and software integrations, and tracking team performance. Ensured team's adherence to company policies and standards and acted as a technical authority, providing expertise to colleagues and users.",
        },
        {
          title: "Customer support agent",
          start: "2020",
          end: "2021",
          description:
            "Resolved over 3,000 cases to the highest standards, ensuring 100% compliance with company standards and providing valuable technical, educational, and emotional support to hundreds of students starting their tech careers.",
        },
      ],
    },
    {
      company: "Freelance",
      link: "",
      badges: ["Remote"],
      positions: [
        {
          title: "Digital marketing manager",
          start: "2019",
          end: "2020",
          description:
            "Led PPC campaign creation and optimization on the Google and Yandex Ads network, helping to boost sales and reduce clients' marketing spend by 30%.",
        },
        {
          title: "Translator",
          start: "2019",
          end: "2020",
          description:
            "Translated and localizated diverse entertainment and business material in English, Russian, and Spanish, ensuring cultural accuracy and relevance.",
        },
      ],
    },
    {
      company: "Instaon",
      link: "https://instaon.io/en",
      badges: ["Remote"],
      positions: [
        {
          title: "Customer success manager",
          start: "2019",
          end: "2019",
          description:
            "Guided hundreds of small businesses and agencies in integrating a novel AI solution into marketing strategies before the AI hype.",
        },
        
      ],
    },
    {
      company: "Farbik",
      link: "https://farbik.ru/",
      badges: ["Remote"],
      positions: [
        {
          title: "Senior editor",
          start: "2015",
          end: "2016",
          description:
            "Supervised a distributed team of 150 content editors, copywriters, and designers in delivering valuable high-quality content that met usability and SEO standards, ensuring project long-term profitability.",
        },
        {
          title: "Web content editor",
          start: "2013",
          end: "2015",
          description:
            "Managed a team of a couple dozen copywriters and graphic designers, ensuring content alignment with SEO and usability standards.",
        },
        {
          title: "Copywriter",
          start: "2012",
          end: "2013",
          description:
            "Produced over 1,000 educational articles on various topics, ensuring style consistency, readability, and SEO compliance for maÇimum content performance and reader engagement.",
        },
      ],
    },
    // Add similar structure for other work entries...
  ] as Work[],

  skills: [
    "Software Troubleshooting",
    "Python",
    "SQL",
    "API Integration",
    "GIT",
    "JavaScript",
    "HTML",
    "CSS",
    "Data Analysis & Presentation",
    "Quality Assurance",
    "Workflow Building",
    "Customer Feedback Analysis",
    "Project Management",
    "Team Development",
    "Business Communications",
    "Technical & Creative Writing",
    "Chatbot Development",
    "CRM & Helpdesk Systems Administration",
    "Web Design",
    "Low/No-Code Development",
    "Prompt Engineering",
    "Stress Management",
    "Conflict Resolution",
    "Proactive Problem-Resolution",

  ],

  education: [
    {
      school: "Russian Law Academy of the Ministry of Justice",
      degree: "Bachelor's Degree in Civil Law",
      start: "",
      end: "",
    },
  ],

  /*  
  projects: [
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for joining communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
  */
} as const;


