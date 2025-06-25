import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  github,
  carrent,
  jobit,
  tripguide,
  JeeLMS,
  GoogleGeminiChatbot,
  FreshCart,
  Yummy,
  StartReact,
  ToDoList,
  Weather,
  RouteJobFair,
  DevFolio,
  CRUDS,
  AdminDashBoard,
  MyPortfolio
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Frontend Developer", icon: web },
  { title: "React / Next.js Developer", icon: mobile },
  { title: "API Integration Specialist", icon: backend },
  { title: "Team Player", icon: creator },
];


const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  // { name: "Next.js", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git", icon: git },
];

const experiences = [
  {
    title: "Graduation Project - JeeLMS",
    company_name: "Benha University",
    icon: github,
    iconBg: "#383E56",
    date: "2025 - 2026",
    points: [
      "Built a smart LMS with role-based access and modular 'spaces' for each course.",
      "Key features: attendance, quizzes, assignments, chat, reporting.",
      "Tech stack: React (Web), Node.js (Backend), Flutter (Mobile).",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ahmed is an exceptional frontend developer. His work on JeeLMS demonstrated deep understanding of user experience and clean coding.",
    name: "Mohamed Salem",
    designation: "Supervisor",
    company: "Benha University",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "I've collaborated with Ahmed on multiple projects — he's always proactive, fast-learning, and delivers clean React code.",
    name: "Omar Nabil",
    designation: "Developer",
    company: "Freelance Partner",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    testimonial:
      "Ahmed consistently meets deadlines and contributes creative solutions. He’s a strong team player with great attention to UI detail.",
    name: "Rana Youssef",
    designation: "UI/UX Designer",
    company: "Freelance",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const projects = [
  {
  name: "Personal Portfolio",
  description:
    "A sleek and responsive portfolio built with React and Tailwind CSS to showcase my projects, skills, and contact info.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "tailwind", color: "green-text-gradient" },
    { name: "framer-motion", color: "pink-text-gradient" }
  ],
  image: MyPortfolio,
  source_code_link: "https://github.com/AGbreel/My_3D_portfolio"
}
,

  {
    name: "JeeLMS",
    description:
      "Smart LMS platform with chat, attendance, quizzes, reports & roles (Admin/Instructor/Student).",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "flutter", color: "pink-text-gradient" },
    ],
    image: JeeLMS,
    source_code_link: "https://github.com/AGbreel", // Replace with exact repo
  },

  {
    name: "Fresh Cart",
    description:
      "E-commerce app with register/login, wishlist, cart, payment and order management.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: FreshCart,
    source_code_link: "https://github.com/AGbreel/e-commerce-with-react",
  },

  {
    name: "Google Gemini Chatbot",
    description:
      "Web chatbot using Gemini AI for smart interaction and Q&A.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "ai", color: "green-text-gradient" },
    ],
    image: GoogleGeminiChatbot,
    source_code_link: "https://github.com/AGbreel/Google-Gemini-Chatbot",
  },

  {
    name: "Start-Framework-React",
    description:
      "Starter React framework project for learning and experimenting with components and JSX.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
    ],
    image: StartReact,
    source_code_link: "https://github.com/AGbreel/Start-Framework-React-",
  },

  {
    name: "Admin Dashboard",
    description:
      "Interactive dashboard that displays business metrics, charts, and recent transactions using API data and React.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "chartjs", color: "green-text-gradient" },
      { name: "api", color: "pink-text-gradient" },
    ],
    image: AdminDashBoard,
    source_code_link: "https://github.com/AGbreel/Customer-Transactions",
  },

  {
    name: "Yummy",
    description:
      "Food explorer app with meal categories, area filters, and random meal API integration.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
    ],
    image: Yummy,
    source_code_link: "https://github.com/AGbreel/Yummy",
  },

  {
    name: "RouteJobFair",
    description:
      "Event site showing countdown timer and participant list.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
    ],
    image: RouteJobFair,
    source_code_link: "https://github.com/AGbreel/RouteJobFair",
  },

  {
    name: "Weather App",
    description:
      "Fetches real-time weather using geolocation and search input via weather API.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
    ],
    image: Weather,
    source_code_link: "https://github.com/AGbreel/Weather-App",
  },

  {
    name: "To-Do List",
    description:
      "Daily task manager with filtering between completed and uncompleted tasks.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
    ],
    image: ToDoList,
    source_code_link: "https://github.com/AGbreel/TO-DO-list",
  },

  {
    name: "CRUDS",
    description:
      "Product management system with tax/ads/discount calculation and price display.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
    ],
    image: CRUDS,
    source_code_link: "https://github.com/AGbreel/TOTAL-CRUDS",
  },

  {
    name: "DevFolio",
    description:
      "Portfolio template using HTML, CSS, and Bootstrap 5 with sticky navbar and clean layout.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "bootstrap", color: "pink-text-gradient" },
    ],
    image: DevFolio,
    source_code_link: "https://github.com/AGbreel/DevFolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
