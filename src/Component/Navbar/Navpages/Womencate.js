import React, { useState } from "react";
import './Womencate.css';
import Card from "../../Card/Card";
import { myContext } from "../../../myContext";
import { useContext } from "react";



export let womendata=[]

const Womencate = () => {
  const [data, setdata] = useState(Card);
  const {islogin}=useContext(myContext);
  const {cartitems,setcartitems}=useContext(myContext);
  const {count,setcount}=useContext(myContext);
  
  const women = Card.filter((item)=>item.Category =='women');

  womendata = women;

  const handlechange=(item)=>{
    if(!islogin){
      alert('pls login first');
    }else{
      const isitemincart = cartitems.some((obj)=>item.title===obj.title);

if(isitemincart){
  alert('item already added to cart');
}else{
  alert('item added to cart');
  setcount(count+1);
  cartitems.push(item);
}

    }
    
  

    
  }

  return (
    <div className="collection-page">
        
        {
    women.map((item) => (
        <div className="shoe-colect">
        
          <img src={item.image} />
          <div className='colection-main'>
            {

              item.title
            }
          </div>
          <div> {item.price}</div>
          <button className="shoe-btnclt1">Quick view</button>
          <button className="shoe-btnclt" onClick={()=>handlechange(item)}>Add to cart</button>
          
        </div> 
      ))}

   
    </div>
  );
};

export default Womencate;

