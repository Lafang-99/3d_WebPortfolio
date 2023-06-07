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
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "NAMIBIA",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Finished Grade 11 AS-Level at S.t Joseph's High School-Dobra with Distinctions  ",
        "Finished Grade 12 AS-Level at Delta Secondary School-Windhoek(DSSW) with Distinctions",
        "Worked on Web Development Projects in JavaScript and CSS.",
      ],
    },
    {
      title: "Programming Competition",
      company_name: "NUST-HTTPS",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Competed in the NUST Programming Competition for High Schools and came our 3rd",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers and Students.",
      ],
    },
    {
      title: "Web Developer and Programmer",
      company_name: "NUST",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Was Admitted at Namibia University of Science and Technology for a Bachelor Of Computer Science in CyberSecurity.",
        "Participated in the NUST Annual Programming Competition for UNiversity Students and came out 2nd",
        "Started using Kali Linux and Black Arch Linux for Pentesting and Ethical Hacking.",
        "Developed a Bash Script for Wifi Auditing using Aircrack-ng and Airgeddon Scripts.",
        "Opened up a technological business startup called Tech49Originals that installs OS, does Web Dev and Provides Tech gadgets. ",
      ],
    },
    {
      title: "Programmer and Student",
      company_name: "NUST(NAMIBIA)",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developed a Bash Script for Multivector Social Engineering Attacks for Pentesting in Cybersecurity.",
        "Admitted for My 2nd Year for Bachelor of Computer Science in Cybersecurity  at Namibia University of Science and Technology",
        "Participated in The Annual NUST-SCHOEMANS Hackathon Competition",
        "Developed a Bash Script for Ethical Hacking Phishing Attack Vectors ",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Andrew Gatsi proved me wrong.",
      name: "Stacy Muheua",
      designation: "CFO",
      company: "MTC NAMIBIA",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Andrew Gatsi does.",
      name: "Lafang      Gatsi",
      designation: "OWNER",
      company: "Tech49Originals",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Andrew optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Chay-Ara Jacobs",
      designation: "Lecturer",
      company: "NUST",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Bash Script For Social Engineering",
      description:
        "A script written in Bash and Python languages that encooperates features and Functions of the Social Engineering Toolkit for Multivector Attacks.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "bashScripting",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Student Programmer and Cybersecurity Prodigy",
      description:
        "I competed in Various Programming Competition at NUST and Namibia in General. Coming Out with various accolades. The Link to these projects are in my Github repository.",
      tags: [
        {
          name: "React&Bash",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Web And Software Developer",
      description:
        "A comprehensive Development repository dedicated to my Web Applications and Software masterpieces that are cross platform.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };