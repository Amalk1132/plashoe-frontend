import React from 'react'
import './Collection.css'
import Card from '../../Card/Card';
import { useContext } from 'react';
import { myContext } from '../../../myContext';


const Collection = () => {
  const {cartitems,setcartitems}=useContext(myContext);
  const {islogin}=useContext(myContext);
  const {count,setcount}=useContext(myContext);
  const {searchitems,setSearchitems}=useContext(myContext);

  const handlemove=(item)=>{
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
    <div> 
       
    

    <div className='cltn-page'> <h1>Collection Page</h1></div>
    
    <div className='collection-page'>

     { Card.filter((item)=>{
          if(searchitems=== ''){
            return item;
          }
  
          else if(item.title.toLowerCase().includes(searchitems.toLowerCase())){
            return item;
          }
             
         
        })
        .map((item) => (
        <div className="shoe-colect">
        
          <img src={item.image} />
          <div className='colection-main'>
            {

              item.title
            }
          </div>
          <div> {item.price}</div>
          <button className="shoe-btnclt1">Quick view</button>
          <button className="shoe-btnclt" onClick={()=>handlemove(item)}>Add to cart</button>
          
        </div> 
      ))}

    
    

    </div>
    </div>
   
   
  )
}

export default Collection