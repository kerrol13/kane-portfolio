import cemetery from "../assets/images/cemetery.avif";
import dashboard from "../assets/images/dashboard.avif";
import football from "../assets/images/football.avif";
import gawanke from "../assets/images/gawanke.avif";
import icecream from "../assets/images/icecream.avif";
import kasina from "../assets/images/kasina.avif";
import kasinaAi from "../assets/images/kasinaAi.avif";
import libary from "../assets/images/library.avif";
import oldPort from "../assets/images/oldPort.avif";
import onboarding from "../assets/images/onboarding.avif";
import salveo from "../assets/images/salveo.avif";
import AspNetIcon from "../components/icons/AspNetIcon";
import CSharpIcon from "../components/icons/CSharpIcon";
import CssIcon from "../components/icons/CssIcon";
import HtmlIcon from "../components/icons/HtmlIcon";
import JqueryIcon from "../components/icons/JqueryIcon";
import JSIcon from "../components/icons/JSIcon";
import MsSqlServerIcon from "../components/icons/MsSqlServerIcon";
import MySqlIcon from "../components/icons/MySqlIcon";
import Photoshop from "../components/icons/Photoshop";
import PhpIcon from "../components/icons/PhpIcon";
import PhytonIcon from "../components/icons/PhytonIcon";
import ReactIcon from "../components/icons/ReactIcon";
import TailwindIcon from "../components/icons/TailwindIcon";
import VisualBasicIcon from "../components/icons/VisualBasicIcon";
import Xd from "../components/icons/Xd";

const tools = {
  react: <ReactIcon color="white" title="ReactJs" />,
  tailwind: <TailwindIcon color="white" title="Tailwind CSS" />,
  csharp: <CSharpIcon color="white" title="C#" />,
  aspnet: <AspNetIcon color="white" title="Asp.Net" />,
  mssql: <MsSqlServerIcon color="white" title="MsSql Server" />,
  photoshop: <Photoshop color="white" title="Adobe Photoshop" />,
  xd: <Xd color="white" title="Adobe XD" />,
  html: <HtmlIcon color="white" title="HTML" />,
  css: <CssIcon color="white" title="CSS" />,
  js: <JSIcon color="white" title="Javascript" />,
  jquery: <JqueryIcon color="white" title="JQuery" />,
  mySql: <MySqlIcon color="white" title="MySql" />,
  php: <PhpIcon color="white" title="Php" />,
  phyton: <PhytonIcon color="white" title="Phyton" />,
  visualBasic: <VisualBasicIcon color="white" title="Visual Basic" />,
};

const PROJECT_INFO = [
  {
    src: kasinaAi,
    alt: "Kasina AI Project",
    title: "Kasina AI",
    about:
      "A modern web app that lets you build your own AI chatbot in minutes. Upload your files, train your AI, and deploy a smart customer service assistant that knows your business. Simple user management and website integration included.",
    tools: [
      tools.react,
      tools.tailwind,
      tools.csharp,
      tools.aspnet,
      tools.mssql,
    ],
    details: [2024, "Developed", "Company Project"],
  },
  {
    src: dashboard,
    alt: "MVP Dashboard Project",
    title: "MVP Dashboard",
    about:
      "It's a sleek web app designed to display company's analytics data in style. Plus, it offers effortless user management, allowing users to easily assign roles.",
    tools: [
      tools.react,
      tools.tailwind,
      tools.csharp,
      tools.aspnet,
      tools.mssql,
    ],
    details: [2024, "Developed", "Company Project"],
  },
  {
    src: onboarding,
    alt: "MVP Onboarding Project",
    title: "MVP Onboarding",
    about:
      "A web app designed to streamline the onboarding process. It sends email notifications to welcome new employees, automatically creates accounts for the company ERP, and offers user management features for assigning roles.",
    tools: [
      tools.react,
      tools.tailwind,
      tools.csharp,
      tools.aspnet,
      tools.mssql,
    ],
    details: [2024, "Developed", "Company Project"],
  },
  {
    src: football,
    alt: "Football Match Project",
    title: "Football Match",
    about:
      "It's a sleek web app designed to display company's analytics data in style. Plus, it offers effortless user management, allowing users to easily assign roles.",
    tools: [
      tools.react,
      tools.tailwind,
      tools.csharp,
      tools.aspnet,
      tools.mssql,
    ],
    details: [2024, "Prototype", "Company Project"],
  },
  {
    src: kasina,
    alt: "Kasina ReDesign Project",
    title: "Kasina ReDesign",
    about:
      "I revamped the company's current ERP system design, giving it a simple and fresh new look.",
    tools: [tools.xd, tools.photoshop],
    details: [2023, "Designed", "Personal Project"],
  },
  {
    src: oldPort,
    alt: "My Portfolio 2022 Project",
    title: "My Portfolio 2022",
    about:
      "This is my old portfolio from 2022. It showcases the projects, skills, and accomplishments I achieved during that year. While it reflects my work and capabilities at the time, I have since evolved and expanded my expertise. This portfolio serves as a snapshot of my professional journey and growth up to 2022.",
    tools: [
      tools.xd,
      tools.photoshop,
      tools.html,
      tools.css,
      tools.js,
      tools.jquery,
    ],
    details: [2022, "Developed", "Personal Project"],
  },
  {
    src: gawanke,
    alt: "GawanKe Project",
    title: "GawanKe",
    about:
      "The web app I created for our capstone project, in partnership with PESO Santa Rita, Pampanga. Designed to assist blue-collar workers and the local community by offering home services. You can post or find work on this website.",
    tools: [
      tools.xd,
      tools.photoshop,
      tools.html,
      tools.css,
      tools.js,
      tools.jquery,
      tools.php,
      tools.mySql,
    ],
    details: [2022, "Developed", "Capstone Project"],
  },
  {
    src: cemetery,
    alt: "Cemetery Map Project",
    title: "Cemetery Map",
    about:
      "Your go-to offline map for locating graves in cemeteries! I developed this project during my third year of college for a major subject. It makes finding specific grave locations easy.",
    tools: [tools.photoshop, tools.visualBasic, tools.mySql],
    details: [2021, "Developed", "School Project"],
  },
  {
    src: libary,
    alt: "Library Management Project",
    title: "Library Management",
    about:
      "Your offline solution for efficiently managing library operations! Developed during my second year of college for a major subject, this app simplifies encoding student book borrowings.",
    tools: [tools.phyton, tools.mySql],
    details: [2020, "Developed", "School Project"],
  },
  {
    src: icecream,
    alt: "100 ice Cream Design",
    title: "100 ice Cream Design",
    about:
      "I challenged myself by creating an ice cream website to improve my skills. While designing it with Photoshop, I realized that Adobe XD would have made the process smoother. But hey, every challenge is a chance to learn and grow, right?",
    tools: [tools.photoshop],
    details: [2018, "Designed", "Personal Project"],
  },
  {
    src: salveo,
    alt: "Salveo World Design",
    title: "Salveo World Design",
    about:
      "I took on the challenge of redesigning our company website to improve my skills. Using Photoshop, I created a fresh new look for our online presence.",
    tools: [tools.photoshop],
    details: [2018, "Designed", "Personal Project"],
  },
];
export const PROJECT_INTRO =
  "Here are my projects, showcasing my skills, creativity, and dedication to building high-quality software solutions as a software developer.";
export default PROJECT_INFO;
