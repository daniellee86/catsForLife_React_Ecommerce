import { Send } from '@material-ui/icons'
import styled from "styled-components"
// import { mobile } from "../responsive";
// ${mobile({ textAlign: "center" })}
// ${mobile({ width: "80%" })}


const Container = styled.div`
height: 60vh;
width: 100%;
background: rgb(255,189,53);
background: linear-gradient(90deg, rgba(255,189,53,1) 0%, rgba(81,146,89,1) 100%);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: 70px;
margin: 0;
`
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;

`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border:2px solid lightgray;

`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`
const Button = styled.button`
flex: 1;
border:none;
background-color: black;
color: white;
`

const Newsletter = () => {
  return (
   
    <Container>
        <Title>Newsletter</Title>
        <Desc>Let's connect. Receive updates on your favourite Movies.</Desc>
        <InputContainer>
        <Input placeholder='Your email'/>
        <Button>
            <Send/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter