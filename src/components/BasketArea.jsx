import { ShoppingBasketOutlined } from "@material-ui/icons"
import styled from "styled-components"


const Container = styled.div`
height: 50px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background: yellow;

`

const BasketArea = ({basketTotal}) => {
  return (
    <Container>

<h1 className="basketText"><ShoppingBasketOutlined fontSize="medium"/> Basket Total: £{basketTotal}</h1>
    </Container>
  )
}

export default BasketArea