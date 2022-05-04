const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://vanshikarana.vercel.app/',
  title: 'VS',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Vansh Sharma',
  role: 'Software Developer',
  description:
    "I love to develop websites and play around with different technologies. I have also worked with languages like Java and Python. I am highly motivated and responsible towards my work. If my knowledge of programming and technologies can be put to good use by you or your organization you can reach out to me by email.",
  resume: 'https://github.com/Vanshika-Rana/resume/blob/main/resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/vanshikarana/',
    github: 'https://github.com/Vanshika-Rana',
    twitter: 'https://twitter.com/aahiknsv',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Social Circle',
    description:
      'A dApp built on Ethereum blockchain that allows you to connect your wallet and drop a few messages :)',
    stack: ['Solidity', 'React', 'Ethereum'],
    sourceCode: 'https://github.com/Vanshika-Rana/Social-Circle',
    livePreview: 'https://social-circle.vercel.app/',
  },
  {
    name: 'Tasteful Recipes',
    description:
      'This web app makes use of Edamam recipes API and offers recipes for various dishes. ',
    stack: ['React', 'Styled Components', 'Edamam API'],
    sourceCode: 'https://github.com/Vanshika-Rana/Tasteful-Recipes',
    livePreview: 'https://hardcore-morse-8d4aa1.netlify.app/',
  },
  {
    name: 'RCMND',
    description:
      "This app recommends you K-Dramas similar to the one you ABSOLUTELY love <3",
    stack: ['Python', 'Streamlit'],
    sourceCode: 'https://github.com/Vanshika-Rana/RCMND',
    livePreview: 'https://rcmnd-kdrama.herokuapp.com/',
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
