import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  devs,
  mcdonalds,
  sheetz,
  wcpss,
  carrent,
  jobit,
  tripguide,
  threejs,
  mysql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: web
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Data Analyst - Oracle - HR - Salary & Information Systems (40+ hours/week)",
    company_name: "Wake County Public School System",
    icon: wcpss,
    iconBg: "#E6DEDD",
    date: "March 2017 - Present",
    points: [
      "Data Analysis: Analyze and identify Oracle position data, provides employment recommendations, and ensures data accuracy with an 89% accuracy rate.",
      "Collaboration: Collaborates and communicates effectively with a diverse stakeholder community, including technical staff, business users, government officials,  management, and cross-functional teams ensuring the adherence to best practices.",
      "Compliance and Reporting: Maintains workflow records, communicated employment changes with Compensation Services, and adhered to strict monthly deadlines with a 97% completion rate.",
      "Customer Support: Responds to and diagnosed user problems through discussion and troubleshooting, resolving issues, and escalating calls when necessary.",
      "Documentation: Develops clear, concise documentation of user requests, resolutions, and challenges.",
    ],
  },
  {
    title: "Records Retention Manager(40 hours/week)",
    company_name: "Wake County Public School System",
    icon: wcpss,
    iconBg: "#E6DEDD",
    date: "March 2017 - April 2018",
    points: [
      "Clerical Duties: Performed general clerical tasks such as utilizing new equipment for copying, faxing, and typing, developed and maintained personnel files, impacting a district of 20,000 employees, and complied with security procedures to ensure information remained secured and confidential.",
      "Customer Service: Managed phone calls and emails, provided information and documents, handled office visits, and assisted hiring managers by obtaining personnel records within an hour of receiving the request resulting in a 52% decrease in idle time.",
      "Issue Resolution: Investigated and resolved specific questions and concerns, and attended required meetings and training sessions.",
    ],
  },
  {
    title: "Customer Service Representative (Salesperson) (40 hours/week)",
    company_name: "Sheetz",
    icon: sheetz,
    iconBg: "#383E56",
    date: "January 2014 - March 2017",
    points: [
      "Customer Engagement: Welcomed new and regular customers to the stores with top-tier customer service.",
      "Service Excellence: Created magical experiences by serving quality food and beverages constructed to exact customer specifications in a safe, fast, and friendly manner with a 92% accuracy rate.",
      "Transaction Management: Managed transactions at check-out, monitored appropriate sales of restricted products, and successfully passed secret shopper evaluations.",
      "Store Maintenance: Maintained cleanliness in the store, kitchen, dining areas, and pumps, ensuring compliance with Quality Assurance and Health Inspection standards.",
      "Inventory Management: Ensured goods were stocked throughout the store, and assisted with daily counts and inventory checks.",
    ],
  },
  {
    title: "Crew Member",
    company_name: "McDonald's",
    icon: mcdonalds,
    iconBg: "#E6DEDD",
    date: "July 2012 - January 2014",
    points: [
      "Handled cash transactions for a multibillion-dollar company, accurately processing 91% of orders.",
      "Operated the register and Point-Of-Sale system, supporting restaurant cleanliness and learning kitchen duties by being ambitious.",
      "Cut wait times down by an average of 2 minutes, enhancing overall customer experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Job Board Scraper",
    description:
      [
        "Custom job board where users can search any job board imaginable by providing the needed information. It features automated emails by integrating Nodemailer and node-cron to send a scheduled list of scraped jobs. Being built with Node.js, Puppeteer, Nodemailer, and node-cron.",
      ],
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "nodemailer",
        color: "green-text-gradient",
      },
      {
        name: "puppeteer",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "github.com/AvionShea/jobBoardScraper",
  },
  {
    name: "Opulence Bank",
    description:
      [
        "Opulence Banking is a financial SaaS platform designed to connect with multiple bank accounts, display transactions in real-time, allow users to transfer money to other platform users, and manage finances. It features authentication, responsiveness, and real-time updates. Built with Next.js, TypeScript, Appwrite, Plaid, Dwolla, React Hook Form, Zod, TailwindCSS, Chart.js, ShadCN."
      ],
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };