import { useTheme } from "../../context/themeContext.jsx"
import { dataHeader } from "../../data.js"
import * as C from "./styles.js"

export default function Header({ setCartOption, cartOption }) {
  const { theme, switchTheme } = useTheme()

  return (
    <C.Container>
      <C.Title>{dataHeader.title}</C.Title>
      <C.Wrapper>
        <C.Button isSelected={cartOption === 0 ? true : false} onClick={() => setCartOption(0)}>{dataHeader.cartOptionAbaixo}</C.Button>
        <C.Button isSelected={cartOption === 1 ? true : false} onClick={() => setCartOption(1)}>{dataHeader.cartOptionAcima}</C.Button>
        <C.Switch onClick={switchTheme}>
          <C.SwitchIcon src={theme === "dark" ? dataHeader.lightImage : dataHeader.darkImage} alt={dataHeader.alt}/>
        </C.Switch>
      </C.Wrapper>
    </C.Container>
  )
}
