import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const localTheme = localStorage.getItem('themeName')
const ThemeProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [themeName, setThemeName] = useState(localTheme || 'light')

    const toggleTheme = () => {
        const name = themeName === 'dark' ? 'light' : 'dark'
        localStorage.setItem('themeName', name)
        setThemeName(name)
    }

    return (
        <ThemeContext.Provider
            value={[{ themeName, toggleTheme, open, setOpen }]}
        >
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
