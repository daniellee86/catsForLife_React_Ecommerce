import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
// import { mobile } from "../responsive";
// ${mobile({ flexDirection: "column" })}
// ${mobile({ display: "none" })}
// ${mobile({ backgroundColor: "#fff8f8" })}

const Container = styled.div`
display:flex;
color: white;
background-color: black;
`
//
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`

const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;

`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;
transition:all 0.5s ease;

&:hover{
  background-color: black;
  transform: scale(1.1);
}
`

//
const Center = styled.div`
flex: 1;
padding: 20px;

`
const Title = styled.h3` 
margin-bottom: 30px;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`
//
const Right = styled.div`
flex: 1;
padding: 20px;

`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`


//
const Footer = () => {
  return (
 
<Container>
    <Left>
        <Desc>This web app was built using React. featuring live data from The Movie Database API; 
              Filter movies according to category, live search functionality, description modals, new featured movie on 
              page refresh.
        </Desc>

        <SocialContainer>
            <SocialIcon color="3B5999" >
              <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter/>
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest/>
            </SocialIcon>
        </SocialContainer>

    </Left>

    <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Watchlist</ListItem>
          <ListItem>Reviews</ListItem>
          <ListItem>Coming Soon</ListItem>
          <ListItem>New Cinema Releases</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms</ListItem>
        </List>
    </Center>

    <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Room style={{marginRight:"10px"}}/>
            43 St Johns Road, Lancashire, BB10 456
        </ContactItem>
        <ContactItem>
            <Phone style={{marginRight:"10px"}}/>
            +44 7903075092
        </ContactItem>
        <ContactItem>
            <MailOutline style={{marginRight:"10px"}}/>
            danielclough@hotmail.com
        </ContactItem>
    </Right>


</Container>

  )
}

export default Footer