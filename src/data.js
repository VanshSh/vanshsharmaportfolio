import { FiSettings } from 'react-icons/fi'
import { HiOutlineDesktopComputer } from 'react-icons/hi'

const data = {
  // 'https://avatars.githubusercontent.com/u/81517284?s=400&u=3eaeb4a467edaebd12609865e4ab20da1c2b4ac5&v=4'Actual image
  profile_picture_url: '/vanshsharmaLogo.png',
  name: 'Vansh Sharma',
  bio: 'A front-end software developer with a passion for design who enjoys designing visually appealing interfaces and experiences.',
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
        'HTML5',
        'CSS3',
        'JavaScript(ES6)',
        'React.js',
        'Bootstrap CSS',
        'Material-UI',
        'styled-components',
        'Storybook',
        'Redux',
        'Redux Toolkit',
        'Router',
        'TypeScript',
      ],
    },
    {
      icon: <FiSettings style={{ marginRight: '10px' }} />,
      key: 'other tools and technologies',
      values: ['Git', 'Github', 'Figma', 'RESTful APIs', 'GraphQL APIs'],
    },
  ],
  experience: [
    {
      company: 'Rising Ahead',
      post: 'Software Developer Intern',
      summary:
        'Designed web moratorium calculator, that would help the borrower measure the effect on their loans if they opted for a moratorium, with the rise in their EMI and the loan duration, using HTML, CSS, and JavaScript.',
      startdate: 'June 2020',
      enddate: 'July 2020',
    },
  ],
  projects: [
    {
      name: 'Educouch - A learning management system',
      summary:
        'EduCouch is a management system intended for educational institution for managing their educational content. Serverless Application using AWS Amplify, React.js, GraphQL and Datastore.',
      repo_url: 'https://github.com/palakgupta2712/lms-app-amplify',
      live_url: 'https://edu-couch.netlify.app/',
      tags: ['Reactjs', 'Material-UI', 'AWS Amplify'],
    },
  ],
  archive_project: [],
  resume: 'https://rxresu.me/vanshsharma9354/vansh-sharma',
}
export default data
