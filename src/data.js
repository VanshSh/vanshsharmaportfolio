import { FiSettings } from 'react-icons/fi'
import { HiOutlineDesktopComputer } from 'react-icons/hi'

const data = {
  // 'https://avatars.githubusercontent.com/u/81517284?s=400&u=3eaeb4a467edaebd12609865e4ab20da1c2b4ac5&v=4'Actual image
  profile_picture_url: '/vanshsharmaLogo.png',
  name: 'Vansh Sharma',
  bio: `Results-driven Frontend Developer with 2 years of experience in creating intuitive user interfaces that enhance engagement and deliver exceptional user experiences. Currently contributing to Intangles, a leader in Digital Twin Technology, focusing on vehicle health monitoring and operational efficiency`,
  links: [
    {
      name: 'email',
      url: 'mailto:vanshsharma9354',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vanshsharma27/',
    },
    {
      name: 'github',
      url: 'https://github.com/VanshSh',
    },
  ],
  skills: [
    {
      icon: <HiOutlineDesktopComputer style={{ marginRight: '10px' }} />,
      key: 'development',
      values: [
        'JavaScript(ES6)',
        'React.js',
        'TypeScript',
        'Redux Toolkit',
        'Redux',
        'Router',
        'Material-UI',
        'Storybook',
        'styled-c omponents',
        'HTML5',
        'CSS3',
        'Bootstrap CSS',
      ],
    },
    {
      icon: <FiSettings style={{ marginRight: '10px' }} />,
      key: 'other tools and technologies',
      values: ['Git', 'Github', 'Figma', 'RESTful APIs', 'GraphQL APIs'],
    },
  ],

  projects: [
    {
      name: 'Note Taking App',
      summary:
        'This project is a React-based note-taking application developed using TypeScript. It aims to provide an intuitive and efficient way to manage notes with various features.',
      repo_url:
        'https://github.com/VanshSh/react-note-taking-app-with-ts/tree/main',
      live_url: 'https://react-note-taking-app-with-ts.vercel.app/',
      tags: ['Reactjs', 'Bootstrap', 'Moment', 'Typescript', 'Vercel'],
    },
    {
      name: 'CryptoX',
      summary:
        'Get the most up-to-date information on the most popular Cryptos, including a list of hundreds of Cryptos with recent price fluctuations. You can also get a price performance graph for 24 hours, 30 days, 3 months, and 1 year.',
      repo_url: 'https://github.com/VanshSh/CryptoX',
      live_url: 'https://cryptox2.vercel.app/',
      tags: ['Reactjs', 'Material-UI', 'Firebase', 'Chart.js', 'Vercel'],
    },
  ],
  archive_project: [],
  experience: [
    {
      company: 'Intangles Lab Pvt. Ltd. ( Pune, IN )',
      post: 'Frontend Developer',
      summary:
        'Seventh Triangle is a Direct to Consumer focussed Marketing and Technology integrated Agency.',
      points: [
        `Contributed to the development of the internal component library utilizing Storybook.`,
        `Served as the lead developer for Tiber Taber's Ecommerce platform, collaborating with an exceptional developer. Our joint efforts are focused on creating a user-friendly platform and integrating client details.`,
        'Implemented essential updates to existing features, ensuring alignment with evolving product requirements.',
      ],
      startdate: 'Feb 2024',
      enddate: 'Present',
    },
    {
      company: 'Seventh Triangle ( Noida, IN )',
      post: 'Frontend Developer',
      summary:
        'Intangles is leveraging Digital Twin Technology to enhance the operational efficiency of vehicles worldwide, offering a top-tier Vehicle Health Monitoring Platform. ',
      points: [
        ` Complete UI overhaul of various application pages for global user accessibility and internal organizational use. `,
        'Implemented essential updates to existing features, ensuring alignment with evolving product requirements.',
        ` Some features were entirely reengineered, transitioning from Angular to React, while ensuring backward compatibility.`,
      ],
      startdate: 'Oct 2022',
      enddate: 'Feb 2024',
    },
    {
      company: 'Now&Me ( Gurugram, IN )',
      post: 'Frontend Developer Intern',
      summary: '',
      points: [
        'Led a cross-functional collaboration with UX/UI design and product teams to elevate website functionality and user experience.',
        'Implemented essential updates to existing features, ensuring alignment with evolving product requirements.',
        'Orchestrated a seamless transition strategy, effectively channeling users from the web platform to the mobile app.',
      ],
      startdate: 'May 2022',
      enddate: 'Jul 2022',
    },
  ],
  resume: 'https://rxresu.me/vanshsharma9354/vansh-sharma',
}
export default data
