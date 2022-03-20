import { useEffect, useState } from "react"

import Header from "../Header"
import CurrentCart from "../CurrentCart"
import * as C from "./styles.js"

export default function Cart() {
    const [cartWithoutFreeShipping, setCartWithoutFreeShipping] = useState(null)
    const [cartWithFreeShipping, setCartWithFreeShipping] = useState(null)
    const [cartOption, setCartOption] = useState(0)
  
    useEffect(() => {
      const getDataWithoutFreeShipping = async () => {
        const response = await fetch("abaixo-10-reais.json")
        const data = await response.json()
        setCartWithoutFreeShipping(data)
      }

      const getDataWithFreeShipping = async () => {
        const response = await fetch("acima-10-reais.json")
        const data = await response.json()
        setCartWithFreeShipping(data)
      }
  
      getDataWithoutFreeShipping()
      getDataWithFreeShipping()
    }, [])

  return (
    <C.Background>
      <C.Container>
        <Header setCartOption={setCartOption} cartOption={cartOption}/>
        <CurrentCart currentCart={cartOption === 0 ? cartWithoutFreeShipping : cartWithFreeShipping}/>
      </C.Container>
    </C.Background>
  )
}
