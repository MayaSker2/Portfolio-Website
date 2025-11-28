import {
    FaReact,
    FaCss3,
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaHtml5,
    FaJsSquare,
    FaWind,
    FaCode,
    FaPhp,
    FaLaravel,
    FaGithub,
    FaComments,
    FaUsers,
    FaNodeJs,
} from "react-icons/fa";

import project_img_1 from "../assets/images/img1.png"
import project_img_2 from "../assets/images/img2.png"
import project_img_3 from "../assets/images/img3.png"
import project_img_4 from "../assets/images/img4.png"
import { BsBootstrap } from "react-icons/bs";
import { FiClock, FiHelpCircle, FiLink, FiRefreshCw, FiSmartphone} from "react-icons/fi";
import { SiNextdotjs } from "react-icons/si";

export const MENU_LINKS = [
    { id: "01", label: "Home"    , offset: -100,to: "hero"     },
    { id: "02", label: "Skills"  , offset: -80 ,to: "skills"   },
    { id: "03", label: "About Me", offset: -80 ,to: "about"    },
    { id: "04", label: "Projects", offset: -80 ,to: "projects" },
    { id: "05", label: "Contact" , offset: -80 ,to: "contact"  },
];
export const STATS = [
    { id: "01", count: "3" , label: "Years of \nExperience"   },
    { id: "02", count: "3" , label: "Certifications \nEarned" },
    { id: "03", count: "10", label: "Projects \nCompleted"    },
    { id: "04", count: "7" , label: "Happly \nClients"        },
];
export const SKILLS_TABS = [
    { id: "01", label: "All"     , value: "all"         },
    { id: "02", label: "Frontend", value: "frontend"    },
    { id: "03", label: "Backend" , value: "backend"     },
    { id: "04", label: "Tools"   , value: "tools"       },
    { id: "05", label: "Skills"  , value: "soft-skills" },
];
export const SKILLS = [
    {
        id: "01",
        icon: FaHtml5,
        skill: "HTML",
        progress: 95,
        type: "frontend",
        description: "Building clean, semantic, and well-structured web pages that follow modern standards."
    },
    {
        id: "02",
        icon: FaCss3,
        skill: "Css",
        progress: 95,
        type: "frontend",
        description: "Creating responsive and visually appealing layouts using modern CSS techniques."
    },
    {
        id: "03",
        icon: FaJsSquare,
        skill: "JavaScript",
        progress: 75,
        type: "frontend",
        description: "Developing dynamic and interactive web functionality using JavaScript and the DOM."
    },
    {
        id: "04",
        icon: FaWind,
        skill: "Tailwind CSS",
        progress: 95,
        type: "frontend",
        description: "Building fast and modern UI designs using Tailwind’s utility-based classes."
    },
    {
        id: "05",
        icon: BsBootstrap,
        skill: "Bootstrap",
        progress: 90,
        type: "frontend",
        description: "Creating consistent and responsive layouts using Bootstrap components."
    },
    {
        id: "06",
        icon: FaCode,
        skill: "TypeScript",
        progress: 70,
        type: "frontend",
        description: "Writing cleaner and more reliable code with static typing and TypeScript features."
    },
    {
        id: "07",
        icon: FaReact,
        skill: "React.js",
        progress: 96,
        type: "frontend",
        description: "Building interactive user interfaces using React, Hooks, and component-based architecture."
    },
    {
        id: "08",
        icon: FaPhp,
        skill: "PHP",
        progress: 65,
        type: "backend",
        description: "Developing back-end functionality and server-side logic using PHP."
    },
    {
        id: "09",
        icon: FaLaravel,
        skill: "Laravel",
        progress: 70,
        type: "backend",
        description: "Building structured back-end applications using Laravel MVC and Eloquent ORM."
    },
    {
        id: "10",
        icon: FaGithub,
        skill: "Git & GitHub",
        progress: 95,
        type: "tools",
        description: "Managing projects, version control, and collaboration using Git and GitHub."
    },
    {
        id: "11",
        icon: FiSmartphone,
        skill: "Responsive Design",
        progress: 95,
        type: "tools",
        description: "Ensuring websites adapt perfectly to all screen sizes and devices."
    },
    {
        id: "12",
        icon: FiLink,
        skill: "APIs",
        progress: 90,
        type: "tools",
        description: "Integrating and working with REST APIs to connect front-end and back-end systems."
    },
    {
        id: "13",
        icon: FaComments,
        skill: "Communication",
        progress: 80,
        type: "soft-skills",
        description: "Effectively communicating ideas and collaborating clearly within a team."
    },
    {
        id: "14",
        icon: FiHelpCircle,
        skill: "Problem-Solving",
        progress: 70,
        type: "soft-skills",
        description: "Analyzing issues and finding efficient technical solutions."
    },
    {
        id: "15",
        icon: FaUsers,
        skill: "Teamwork",
        progress: 85,
        type: "soft-skills",
        description: "Working collaboratively with team members to achieve shared goals."
    },
    {
        id: "16",
        icon: FiRefreshCw,
        skill: "Adaptability",
        progress: 70,
        type: "skills",
        description: "Quickly learning new tools and adapting to changes in project requirements."
    },

    {
        id: "17",
        icon: FiClock,
        skill: "Time Management",
        progress: 86,
        type: "skills",
        description: "Organizing tasks and managing deadlines efficiently."
    },
    {
        id: "18",
        icon: SiNextdotjs,
        skill: "Node.js",
        progress: 66,
        type: "backend",
        description: "Creating simple back-end logic and server-side functionality using Node.js."
    },
    {
        id: "19",
        icon: FaNodeJs,
        skill: "Next.js",
        progress: 67,
        type: "frontend",
        description: " Building optimized and SEO-friendly React applications using SSR and SSG."
    },


];
export const ABOUT_ME = {
    content: `I'm a dedicated Front-End and Full-Stack Developer skilled in creating responsive, 
    modern, and user-centered web applications. I work with React.js, JavaScript, Laravel, 
    and Tailwind CSS to build clean, dynamic, and functional interfaces.
    My journey in web development has helped me gain real experience through projects, teamwork, 
    and continuous learning. I love solving challenges, improving performance, and bringing creative
    ideas to life through code.`,

    socialLinks: [
        { id: "01", label: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/maya.msker.1" },
        { id: "02", label: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/maya_sker?igsh=Z2ZtN21pMzg1Z3g2" },
        { id: "04", label: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/maya-sker-48007836a" },
    ],
    email: "mayasker81@gmail.com",
    phone: "+963 930 665 485",
    github: "https://github.com/MayaSker2",
};
export const PROJECTS = [
    {
        id: 1,
        title: "Complete responsive Fresh Fruits Website",
        image: project_img_1,
        tags: ["React.js", "Tailwind CSS", "Html", "Css"],
        link: "https://github.com/MayaSker2/complete-responsive-fresh-fruits-website-using-reactjs-tailwind-css"
    },
    {
        id: 2,
        title: "Responsive christmas website design 🎄☃️",
        image: project_img_2,
        tags: ["Bootstrap", "Html", "Css", "JavaScript"],
        link: "https://github.com/maya-sker1/Christmas-Website"
    },

    {
        id: 3,
        title: "Complete responsive Perfume Website",
        image: project_img_3,
        tags: ["React.js", "Tailwind CSS", "Html", "Css"],
        link: "https://github.com/MayaSker2/complete-responsive-perfume-website-using-reactjs-tailwind-css"
    },


    {
        id: 4,
        title: "Complete Responsive Villa Website ",
        image: project_img_4,
        tags: ["React", "Html", "Css", "JavaScript"],
        link: "https://github.com/MayaSker2/task1-villa"
    },

];
