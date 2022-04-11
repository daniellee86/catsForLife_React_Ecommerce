import "./App.css"
import { useState } from "react";
import { useEffect } from "react";
import  {ArrowRightAltOutlined} from "@material-ui/icons";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import BasketArea from "./components/BasketArea";

const App = () => {
  const [cats, setCats] = useState("")
  const [basket, setBasket] = useState ([])
  const [basketTotal, setBasketTotal] = useState (0)
  const [error, setError] = useState(
      { 
        error: false, 
        message: ""
      }
    )
  
    //FUNCTIONS
  const adder = (price) => {    
    let basketTotalPrice = parseInt(basketTotal) + parseInt(price)
    setBasketTotal(basketTotalPrice)    
  }
  const activeBasket  = (item) =>{
    let storedBasket = [...basket] 
    storedBasket.push(item)
    setBasket(storedBasket)    
    adder(item.price)
  }
//
  const minus = (price) => {    
    let basketTotalPrice = parseInt(basketTotal) - parseInt(price)
    setBasketTotal(basketTotalPrice)    
  } 
  const removeHandler = (index, price) => {
    let storedList = [...basket]
    storedList.splice(index, 1)
    setBasket(storedList)
    minus(price)
  } 


  //API REQUEST
  const getCats = async () => {
    try{
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=20&page=9&page=10&page=11&order=Desc")
      if(response.status !== 200){
        throw new Error("the error is...its messed up")
      }
      const data = await response.json()      

      let catNames = ['Chloe','Daniel','Fran','Anthony','Abby','Deb','Suzzanne','Mathilda','Donna','Rich','Chloe','Daniel','Fran','Anthony','Abby','Deb','Suzzanne','Mathilda','Donna','Rich']
      let arr = []
      for (let i = 0; i < 20; i++) {
        arr.push({cat: data[i], url: data[i].url , name: catNames[i], price: Math.round(((Math.random() * 200) + 150)), quantity: 1})
      }
      setCats(arr)

    }catch(e){
      setError({ error: true, message: e.message})
    }
  }

 
  //USE EFFECT CALLS ASYNC FUNCTION (Handler)
  useEffect(() => {
    getCats()
  },[])
  //IF CHECKS FOR ERROR  HANDLING
  if(!cats){
    return <p>loading...</p>
  }
  if(error.error){
    return <h1>{error.message}</h1>
  }


//  
  return(
    <div className = "wholepage">
     <div className = "Header">
       <div className = "titleBar">
         <h1 className="logo" >CATS FOR LIFE</h1>
           <div className = "navWrap">
            <ul className='list'>
              <li className='listItem'>
                 <p>Home</p>
              </li>  
              <li className='listItem'>
              <p>Terms</p>
              </li>   
              <li className='listItem'>
              <p>About</p>
              </li>   
          </ul>
          <button className="navButton" onClick={getCats}>Bring Cats</button> 
           </div>
       </div>

      <div className="textwrap"> 
        <h1 className="headertext">A new<br/>Best Friend<br/>A click away.</h1>
        <p className="headerDesc">Cats For Life is the Uk's leading pet adoption service 
          specifically tailored towards finding new homes for cats.  </p>
          <p className="learn">Learn more  <ArrowRightAltOutlined fontSize="large"/></p>
        </div>
      </div>

     

        <BasketArea basketTotal={basketTotal}/>
       
        
      
      <div className = "imageContainer1">
        {basket.map((item, index) => {
        return( 
        <div className="card">  
       
        <img className="image" src={item.url} alt="Cat"></img>
      
       
       <div className="infoWrap">
       <div className="cardPrice">
         <h2 className="cardText">{item.name}</h2>
         <h2 className="cardText">£{item.price}</h2>
        </div>
        <div className="cardButton1">
        <RemoveFromCart function2={removeHandler} index={index} func3={minus} price2={item.price}/>
        </div>
        </div>
        
       </div>
        )
      })}
      </div> 
      
      
      <div className = "imageContainer">
        {cats.map((item, index) => {
        return( 
        <div className="card">  
        
         <img className="image" src={item.url} alt="Cat"></img>
     

        <div className="infoWrap">
        <div className="cardPrice">
         <h2 className="cardText">{item.name.toUpperCase()}</h2>
         <h2 className="cardText">£{item.price}</h2>
        </div>
        <div className="cardButton">
        <AddToCart price = {item.price} cat = {item} func={activeBasket} />
        </div>
        </div>
      

      
        
        </div>
        )
      })}
      </div> 
       
      <Newsletter/> 
      <Footer/>

    </div>
  ) 
}


//ADD TO CART COMPONENT
const AddToCart = (props) => {
  return(
    <div>
      <button className="Button" onClick = { () => props.func(props.cat)}>Add to basket</button>
    </div>
  )
}


//REMOVE FROM CART COMPONENT
const RemoveFromCart = (props) => {
  return(
    <div>
      <button className="Button" onClick = { () => props.function2(props.index, props.price2)}>Remove from Basket</button>
    </div>
  )
} 
export default App