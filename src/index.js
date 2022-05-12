import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import 'react-alice-carousel/lib/alice-carousel.css'
import './index.css'

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
