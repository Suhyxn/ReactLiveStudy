import { ThemeProvider } from 'styled-components'
import Button from './components/Button'
import theme from './styles/theme'
import GlobalStyle from './styles/globalStyle'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Button />
      </ThemeProvider>
    </div>
  )
}

export default App
