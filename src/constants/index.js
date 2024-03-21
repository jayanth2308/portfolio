import {
    drumkit,
    mobile,
    codepen,
    backend,
    justchat,
    Travelnest,
    creator,
    web,
    MachineLearning,
    javascript,
    // typescript,
    
    devtown,
    personifwy,
    wibi,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "https://drive.google.com/file/d/18TYhk2VEmIQbSt3kfqHwe0QIjNeZH8eb/view?usp=drive_link",
      title: "Resume",
      external: true // Add a flag to indicate that this is an external link
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Front-end Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "ML Engineer",
      icon: creator,
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
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
      name: "Machine Learning",
      icon: MachineLearning,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "FullStack Developer",
      company_name: "Wibi",
      icon: wibi,
      iconBg: "#383E56",
      date: "July 2023 -  Dec 2023",
      points: [
       " Designed and developed the official website for Wibi Conference, a prestigious global event held annually.",
        "Enhanced user experience by 20% optimizing loading times and boosting SEO performance, ensuring improved usefriendliness and responsivenes",
       " Collaborated with cross-functional teams to ensure seamless navigation and maintained security through continuous monitoring and updates.",
        
      ],
    },
    {
      title: "FullStack Developer",
      company_name: "Personifwy",
      icon: personifwy,
      iconBg: "#E6DEDD",
      date: "April 2023 - July 2023",
      points: [
        "Developed HealthTracker, a full-stack website with Stable Authentication Service, achieving a 40% reduction in API execution time",
        "Improved website loading speed by 20% through developing responsive user interfaces and optimizing webpages.",
        "Optimized MongoDB for efficient content storage, resulting in a 25% Database Performance Boost, and facilitated further data processing for training ML models.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "DevTown",
      icon: devtown,
      iconBg: "#383E56",
      date: "March 2023 - April 2023",
      points: [
        "Completed 5-week internship at Internship Studio focused on Website Design.",
        "Developed proficiency in HTML, CSS, JavaScript, and Bootstrap.",
        "Designed and built an e-commerce website as part of the internship project.",
        "Gained hands-on experience in creating engaging and user-friendly web interfaces.",
      ],
    },

  ];
  
  
  
  const projects = [
    {
      name: "TravelNest",
      description:
        "Full Stack Booking site inspired by Airbnb enabled features such as user authentication and booking management allowing users to create, delete, and update their listed places for rent.",
      tags: [
        {
          name: "React.js, Node.js, Express.js, MongoDB",
          color: "blue-text-gradient",
        },
        
      
      ],
      image: Travelnest,
      source_code_link: "https://github.com/jayanth2308/Travelnest",
    },
    {
      name: "JustChat",
      description:
        "chat application that enables users to engage in real-time conversations with each other, fostering seamless communication and connectivity.",
      tags: [
        {
          name: "React.js, Node.js, Express.js, MongoDB, WebSockets",
          color: "blue-text-gradient",
        },
        /*{
          name: "JS",
          color: "green-text-gradient",
        },*/
      ],
      image: justchat,
      source_code_link: "https://github.com/jayanth2308/justchat",
    },
    {
      name: "Blog",
      description:
        "Full-stack blog website, empowering users to effortlessly create, edit, and delete their blog posts, complemented by user authentication services for enhanced security.",
      tags: [
        {
          name: "React.js, Node.js, Express.js, MongoDB, WebSockets",
          color: "blue-text-gradient",
        },
        /*{
          name: "JS",
          color: "green-text-gradient",
        },*/
      ],
      image: codepen,
      source_code_link: "https://github.com/jayanth2308/Blog",
    },
  ];
  
  export { services, technologies, experiences, projects };