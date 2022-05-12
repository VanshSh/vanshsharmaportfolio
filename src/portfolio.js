const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'Vansh Sharma',
  title: 'VS',
}

const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Vansh Sharma',
    role: 'Frontend Developer',
    description: `I'm self-taught passionate Frontend Developer from India. I am passionate about creating beautiful and functional web apps. I'm also a fan of the latest technologies and I'm always learning new things. I am regular technical blogs writer and keep sharing the Web Development related content on social media.`,
    resume: 'Resume',
    social: {
        linkedin: 'https://www.linkedin.com/in/vanshsharma27/',
        github: 'https://github.com/VanshSh',
        twitter: 'https://twitter.com/Vanshsh2701',
        hashnode: 'https://vanshsharma.hashnode.dev/',
        resume: 'Resume',
    },
}

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'CryptoX',
        description:
            'Get the most up-to-date information on the most popular Cryptos, as well as a list of hundreds of Cryptos with recent price fluctuations. You can also get a performance graph for 24 hours, 30 days, 3 months, and 1 year. ',
        stack: ['React', 'Firebase', 'MaterialUI', 'Chart.js'],
        sourceCode: 'https://github.com/VanshSh/CryptoX',
        livePreview: 'https://cryptox2.vercel.app/',
    },
    {
        name: 'UIWizard',
        description:
            'UIWizard is Smaller, Faster and Easier to Use component library built using the HTML , CSS and little bit JavaScript.',
        stack: ['HTML', 'CSS', 'JavaScript', 'Google Icon'],
        sourceCode: 'https://github.com/VanshSh/UIWizard',
        livePreview: 'https://uiwizard.netlify.app/',
    },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Firebase',
  'Material UI',
  'Redux',
  'Git',
  'GitHub',
]

const contact = {
 
  email: 'vanshsharma9354@gmail.com',
}

export { header, about, projects, skills, contact }
