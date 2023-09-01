import {
  mobile,
  backend,
  gamer,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  amazon,
  tesla,
  anbu,
  shopify,
  befriends,
  atelier,
  sdc,
  poke,
  threejs,
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Gamer",
    icon: gamer,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
];

const experiences = [
  {
    title: "Customer Service Rep.",
    company_name: "Anbu Ops",
    icon: anbu,
    iconBg: "#383E56",
    date: "Sep 2016 - Dec 2017",
    points: [
      "Exceeded monthly revenue quota by implementing effective refund solutions for clients.",
      "Fostered client loyalty through attentive support and delivering satisfactory outcomes for product and service requests.",
      "Provided guidance and coaching to representatives, enhancing their performance in interactions with clients.",
    ],
  },
  {
    title: "Independent Contractor",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Present",
    points: [
      "Executed timely delivery of customer orders, ensuring satisfaction and adherence to specific requests.",
      "Maintained a high level of productivity by managing 120+ orders per day while following delivery instructions.",
      "Effectively managed expenses associated with deliveries, including personal vehicle usage.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const projects = [
  {
    name: "BeFriends",
    description:
      "BeFriends is a social networking app where users can create FriendCircles based on their interests, join FriendCircles created by other users and chat with them, and find local users with shared interests.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "PERN",
        color: "orange-text-gradient",
      },
    ],
    image: befriends,
    source_code_link: "https://github.com/seanjung23/BeFriends/",
  },
  {
    name: "Atelier: Product Details",
    description:
      "Atelier-Product-Details is a front end development project that allows you to explore a given product with an overview, related products, question and answers associated with it, and ratings and reviews. Each of these modules have various levels of interactivity such as carousels, search bars, list sorting, and list filter settings. The page interacts with the Atelier API to present product information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restAPI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "third-partyAPI",
        color: "orange-text-gradient",
      },
    ],
    image: atelier,
    source_code_link: "https://github.com/seanjung23/Atelier-Product-Details/",
  },
  {
    name: "Atelier-Reviews-API",
    description:
      "Atelier-Reviews-API is a high-performing and reliable back-end architecture designed using optimization techniques and performance testing.",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: sdc,
    source_code_link: "https://github.com/seanjung23/Atelier-Reviews-API/",
  },
  {
    name: "Poke-Collection",
    description:
      "Poke-Collection is a side project with the concept of creating a pokemon collection tracker for users to keep track of all collected their pokemon cards.",
    tags: [
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "MERN",
        color: "orange-text-gradient",
      },
      {
        name: "third-partyAPI",
        color: "blue-text-gradient",
      },
    ],
    image: poke,
    source_code_link: "https://github.com/seanjung23/Poke-Collection/",
  },
];

export { services, technologies, experiences, projects };
