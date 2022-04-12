import {useState} from 'react'
import styled from "styled-components"
import {SearchOutlined} from "@material-ui/icons";
import {RemoveFromCart} from "../App"

const ButtonOpen = styled.button`
    padding: 2px ;
    font-size: 10px;
    border: none;
    outline: none;
    background: black;
    color: yellow;
    border-radius: 50%;
    cursor:pointer;
    transition: transform .5s;
    margin-left: 20px;
    &:hover{ 
    color: white;
    transform: scale(1.1);
    }
`

const ModalMain = styled.div`
   width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 2;
`

const Overlay = styled.div`
     width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(49,49,49,0.8);
    z-index: 3;
`

const ModalContent = styled.div`
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: yellow;
    border-radius: 3px;
    z-index: 4;
    min-width: 500px;
    max-height: 100vh;
    border: solid 2px black;
`

const ButtonClose = styled.button`
   position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
    border-radius: 50%;
    border: none;
    cursor:pointer;
    color:white;
    background-color: black;
    transition: transform .5s;
    &:hover{ 
    color: yellow;
    transform: scale(1.1);
    }
`

const CartCard = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0px 60px;
border-bottom: solid 0.5px black;
`

const ModalTitle = styled.h1`
font-size: 30px;
flex: 1;
`
const ModalDesc = styled.p`
font-size: 20px;
flex: 1;
`
const Total = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
    
`


const Modal = ({basket, removeHandler, minus, basketTotal}) => {
    const [modal, setModal] = useState(false);
    
    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal){
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }

  return (
      <>
      <ButtonOpen onClick={toggleModal} >
          <SearchOutlined fontSize="small"/>
      </ButtonOpen>

     

      {modal && (
            <ModalMain>

            <Overlay >

            <ModalContent>

            {basket.map((item, index) => {
        return( 
         <CartCard>
         <ModalTitle>{item.name}</ModalTitle>
         <ModalDesc>£{item.price}</ModalDesc>
        <RemoveFromCart function2={removeHandler} index={index} func3={minus} price2={item.price}/>
         </CartCard>
        )
      })}

           <Total>
            <ModalTitle>TOTAL</ModalTitle>
            <ModalDesc>£{basketTotal}</ModalDesc>
          </Total>

           <ButtonClose onClick={toggleModal} className='close-model'>X</ButtonClose>
            </ModalContent>

            </Overlay>

            </ModalMain>
         
      )}
      </>
  )
}

export default Modal