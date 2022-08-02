import { ThemeProvider } from 'styled-components'
import Button from './components/Button'
import theme from './styles/theme'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button />
      </ThemeProvider>
    </div>
  )
}

export default App
