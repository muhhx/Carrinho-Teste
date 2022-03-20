import { dataCart } from "../../data"
import Item from "../Item"
import * as C from "./styles"

export default function CurrentCart({ currentCart }) {    
  return (
      <C.Container>
          <C.Items>
            {!currentCart ? "LOADING..." :
            currentCart?.items.map((item, index) => (
                <Item key={index} cartItem={item} />
            ))}
          </C.Items>
          <C.FooterWrapper>
            <C.Footer>
                <C.PriceWrapper>
                    <C.Title>{dataCart.title}</C.Title>
                    {currentCart ? <C.Title>R$ {currentCart?.totalizers[0].value / 100}</C.Title> : ""}
                </C.PriceWrapper>
                {currentCart?.totalizers[0].value / 100 > 10 ? <C.FreeShipping>{dataCart.freeShipping}</C.FreeShipping> : ""}
            </C.Footer>
            <C.Checkout>
              <C.CheckoutButton>{dataCart.checkoutOption}</C.CheckoutButton>
            </C.Checkout>
          </C.FooterWrapper>
      </C.Container>
  )
}
