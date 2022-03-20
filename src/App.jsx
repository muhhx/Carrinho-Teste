import { useTheme } from "./context/themeContext"

import Cart from "./components/Cart"

import { themeLight, themeDark } from "./styles/themes"
import { GlobalStyle } from "./styles/globalStyle"
import { ThemeProvider } from "styled-components"

function App() {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
      <GlobalStyle />
      <Cart />
    </ThemeProvider>
  )
}

export default App
