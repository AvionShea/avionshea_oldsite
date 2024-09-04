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
  ncdor,
  partycity,
  mcdonalds,
  sheetz,
  wcpss,
  opulence,
  scraper,
  threejs,
  mysql,
  java,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About Avion",
  },
  {
    id: "experience",
    title: "Work Experience",
  },
  {
    id: "contact",
    title: "Contact Avion",
  },
];

const services = [
  {
    title: "Software Development",
    icon: mobile,
  },
  {
    title: "Bot Development",
    icon: backend,
  },
  {
    title: "Web Development",
    icon: web,
  },
];

const experiences = [
  {
    title: "Data Entry Specialist - Oracle - HR - Salary & Information Systems (40+ hours/week)",
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
    title: "Seasonal Office Assistant (40 hours/week)",
    company_name: "North Carolina Department of Revenue",
    icon: ncdor,
    iconBg: "#E6DEDD",
    date: "January 2017 - March 2017",
    points: [
      "Assisted in the preparation and organization of tax forms for data entry into the state’s tax processing system, ensuring all documents were accurately compiled and sorted.",
      "Verified and cross-referenced information on tax forms to ensure completeness and compliance with state requirements, reducing processing errors by 10%.",
      "Collaborated with a team to manage the flow of tax documents, facilitating efficient handling and timely entry of over 2,000 forms per week.",
      "Utilized office equipment and software to scan, file, and archive tax documents, maintaining an organized and accessible database for future reference.",
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
  {
    title: "Seasonal Sales Associate",
    company_name: "Party City",
    icon: partycity,
    iconBg: "#E6DEDD",
    date: "October 2013 - November 2013",
    points: [
      " Provided exceptional customer service during the busy Halloween season, assisting up to 150 customers daily with costume selection, product inquiries, and checkout processes.",
      "Maintained store organization by restocking shelves, organizing displays, and ensuring a clean, welcoming environment for customers.",
      "Efficiently processed transactions using POS systems, maintaining accuracy and speed during high-volume sales periods.",
      "Collaborated with a team of associates to set up promotional displays and in-store events, contributing to a 20% increase in seasonal sales.",
      "Demonstrated adaptability and problem-solving skills in a fast-paced retail environment, consistently meeting daily sales goals and customer satisfaction targets.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I have had  the honor of working with Avion since coming on board with Salary & Information Systems team. She played a huge part in my training. She is very patient and was able to identify that I am a visual person and quickly adapted the training to my learning style. Her knowledge of our work gave me the confidence needed to learn my job and function in a team setting. Her technical skills has giving our team an opportunity to move towards a digital platform, so our work can flow better. Her knowledge and feedback has giving great insight to our current work processing that may have needed fine tuning to ensure a better work flow. She continues to provide great feedback and is willing to help others in training as our team grows.",
    name: "Michelle C.",
    designation: "Data Analyst",
    company: "Wake County Public School System",
  },
  {
    testimonial:
      "I have had the pleasure of working with Avion as her supervisor.  I have always been impressed with her professionalism, work ethic, and dedication. Avion is very reliable and a team player; always lending a helping hand to others.  She always takes initiative and does not shy away from the difficult tasks.  I am confident that Avion will be an asset to any company/organization that she works with.",
    name: "Moné W.",
    designation: "Shift Supervisor",
    company: "Sheetz",
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
    image: scraper,
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
    image: opulence,
    source_code_link: "https://github.com/AvionShea/opulence-banking",
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
  {
    name: "Java",
    icon: java,
  },
];

export { services, technologies, experiences, testimonials, projects };