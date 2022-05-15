import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Blogs from './components/Blogs/Blogs'
import { QueryClient, QueryClientProvider } from 'react-query'
import Notification from './Items/Snackbar'
import './App.css'

const App = () => {
    const [{ themeName }] = useContext(ThemeContext)
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <div id='top' className={`${themeName} app`}>
                <Header />
                <Notification />

                <main>
                    <About />
                    <Skills />
                    <Projects />
                    <Blogs />
                    <Contact />
                </main>

                <ScrollToTop />
                <Footer />
            </div>
        </QueryClientProvider>
    )
}

export default App
