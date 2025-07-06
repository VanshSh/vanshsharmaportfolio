import { FiSettings } from 'react-icons/fi'
import { HiOutlineDesktopComputer } from 'react-icons/hi'

const data = {
  // 'https://avatars.githubusercontent.com/u/81517284?s=400&u=3eaeb4a467edaebd12609865e4ab20da1c2b4ac5&v=4'Actual image
  profile_picture_url: '/vanshsharmaLogo.png',
  name: 'Vansh Sharma',
  // bio: `Results-driven Frontend Developer with 2 years of experience in creating intuitive user interfaces that enhance engagement and deliver exceptional user experiences. Currently contributing to Intangles, a leader in Digital Twin Technology, focusing on vehicle health monitoring and operational efficiency`,
  bio: `Frontend Developer with 3 years’ experience delivering scalable, accessible web apps. Boosted user engagement by 30%, cut maintenance time by 40%, and reduced development time by 25% through reusable components. Led frontend delivery for major brand launches, ensuring timely releases. Passionate about creating intuitive, business-driven user experiences.`,
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
        'HTML5',
        'CSS3',
        'Bootstrap CSS',
        'Tailwind CSS',
        'React Test Library',
        'Jest',
        'Node.js',
      ],
    },
    {
      icon: <FiSettings style={{ marginRight: '10px' }} />,
      key: 'other tools and technologies',
      values: [
        'Git',
        'Github',
        'Figma',
        'RESTful APIs',
        'GraphQL APIs',
        'Webpack',
        'Vite',
        'Babel',
      ],
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
        'Intangles is leveraging Digital Twin Technology to enhance the operational efficiency of vehicles worldwide, offering a top-tier Vehicle Health Monitoring Platform. ',
      points: [
        `Boosted user engagement by 20% by revamping the UI with WCAG-compliant accessible design.`,
        `Migrated legacy features from Angular to React, improving performance and ensuring backward compatibility.`,
        `Reduced app load time by 30% through performance optimizations and lazy loading.`,
        `Built a reusable component library in Storybook, reducing UI development time by up to 30% and ensuring consistent design standards across all team.`,
        `Integrated REST & GraphQL APIs for smoother data handling and better user experience.`,
        `Reviewed ~30 PRs/week, cutting post-merge bugs by 15% via strict ESLint and code reviews.`,
        `Ensured responsive, cross-browser support, expanding accessibility across devices.`,
      ],
      startdate: 'Feb 2024',
      enddate: 'Present',
    },
    {
      company: 'Seventh Triangle ( Noida, IN )',
      post: 'Frontend Developer',
      summary:
        'Seventh Triangle is a Direct to Consumer focussed Marketing and Technology integrated Agency.',
      points: [
        'Led frontend development for 4 e-commerce platforms (V-Guard, Nish Hair, Tiber Taber, Knya Med), delivering responsive and performant UIs that contributed to a 15–20% increase in user engagement post-launch.',
        'Managed a cross-functional team of 5, ensuring 95% on-time project delivery and maintaining high client satisfaction across multiple releases.',
        'Mentored and onboarded 3+ junior developers, accelerating their ramp-up and fostering a collaborative, feedback-driven team culture.',
        'Created a frontend technical documentation guide covering commonly used patterns and components, adopted across the team to standardize development and reduce repetitive work.',
        'Enhanced accessibility and cross-browser compatibility, raising Lighthouse Accessibility scores from 48 to 91, improving UX for a wider range of users.',
      ],
      startdate: 'Oct 2022',
      enddate: 'Feb 2024',
    },
    {
      company: 'Now&Me ( Gurugram, IN )',
      post: 'Frontend Developer',
      summary: '',
      points: [
        `Implemented key feature updates and a new landing page using Zustand`,
        `Created a targeted landing page that successfully redirected 70% of users from web to mobile, driving a measurable increase in mobile user engagement and retention.`,
        `Refactored animations to enhance user experience.`,
      ],
      startdate: 'May 2022',
      enddate: 'Sep 2022',
    },
  ],
  resume: 'https://rxresu.me/vanshsharma9354/vansh-sharma',
}
export default data
