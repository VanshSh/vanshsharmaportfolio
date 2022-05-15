import emailjs from 'emailjs-com'
import { contact } from '../../portfolio'
import './Contact.css'
import { ThemeContext } from '../../contexts/theme'
import { useContext } from 'react'

const Contact = () => {
    const [{ open, setOpen }] = useContext(ThemeContext)

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_9z29soa',
                'template_b70wfx4',
                e.target,
                'Eju8SDHJfCrANpTvC'
            )
            .then(
                () => {
                    setOpen(!open)
                },
                (error) => {
                    console.log(error.text)
                }
            )
        e.target.reset()
    }
    if (!contact.email) return null

    return (
        <section className='section contact center' id='contact'>
            <h2 className='section__title'>Contact</h2>
            <form onSubmit={sendEmail}>
                <input type='text' name='name' placeholder='Name' />
                <input
                    type='email'
                    name='user_email'
                    required
                    placeholder='Email'
                />
                <textarea name='message' placeholder='Message' required minLength={10} />
                <button className='submitButton' type='submit'>
                    Send
                </button>
            </form>
        </section>
    )
}

export default Contact
