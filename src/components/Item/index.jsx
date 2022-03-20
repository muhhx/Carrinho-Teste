import * as C from "./styles"

export default function Item({ cartItem }) {
  return (
    <C.Container>
        <C.Image imageURL={cartItem.imageUrl} />
        <C.Wrapper>
            <C.Name>{cartItem.name.toUpperCase()}</C.Name>
            <C.PriceWrapper>
                <C.ListPrice>R$ {cartItem.listPrice / 100}</C.ListPrice>
                <C.SellingPrice>R$ {cartItem.sellingPrice / 100}</C.SellingPrice>
            </C.PriceWrapper>
        </C.Wrapper>
    </C.Container>
  )
}
