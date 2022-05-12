import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
    const { name, role, description, social, resume } = about

    return (
        <div className='about center'>
            {name && (
                <h1>
                    Hey! I am <span className='about__name'>{name}.</span>
                </h1>
            )}

            {role && <h2 className='about__role'>A {role}.</h2>}
            <p className='about__desc'>{description && description}</p>

            <div className='about__contact center'>
                {resume && (
                    <a href={resume} download>
                        <span type='button' className='btn btn--outline'>
                            Resume
                        </span>
                    </a>
                )}

                {social && (
                    <>
                        {social.github && (
                            <a
                                href={social.github}
                                aria-label='github'
                                className='link link--icon'
                            >
                                <GitHubIcon />
                            </a>
                        )}

                        {social.linkedin && (
                            <a
                                href={social.linkedin}
                                aria-label='linkedin'
                                className='link link--icon'
                            >
                                <LinkedInIcon />
                            </a>
                        )}
                        {social.twitter && (
                            <a
                                href={social.twitter}
                                aria-label='twitter'
                                className='link link--icon'
                            >
                                <TwitterIcon />
                            </a>
                        )}
                        {social.hashnode && (
                            <a
                                href={social.hashnode}
                                className='link link--icon'
                            >
                                <img
                                    src='https://img.icons8.com/color/26/000000/hashnode.png'
                                    className='link link--icon'
                                />
                            </a>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default About
