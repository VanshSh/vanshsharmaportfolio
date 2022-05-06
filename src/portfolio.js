const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'VS',
}

const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Vansh Sharma',
    role: 'Software Developer',
    description: 'I am sel taught web developer.',
    resume: '',
    social: {
        linkedin: 'https://www.linkedin.com/in/vanshsharma27/',
        github: 'https://github.com/VanshSh',
        twitter: 'https://twitter.com/Vanshsh2701',
    },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project1',
    description:
      'It is Projecct1',
    stack: ['React'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Project 2',
    description:
      'It is projecct 2 ',
    stack: ['React', 'Styled Components', 'Edamam API'],
    sourceCode: '',
    livePreview: '',
  },
 
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Material UI',
  'Chakra UI',
  'Styled Components',
  'Git',
  'Next JS',
  'Solidity',
  'Python',
  'Java',
  'WordPress',
  'MySQL',
]

const contact = {
 
  email: 'vanshsharma9354@gmail.com',
}

export { header, about, projects, skills, contact }
