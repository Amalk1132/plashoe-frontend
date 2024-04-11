import React from 'react'
import './Women.css'
import Womencate from './Womencate'
import { useContext } from 'react';
import { myContext } from '../../../myContext';
import { womendata } from './Womencate';




const Women = () => {
  const {searchitems,setSearchitems}=useContext(myContext);
  return (
    <div className='women-page'>
         {
    womendata.filter((item)=>{
        if(searchitems=== ''){
          return null;
        }

        else if(item.title.toLowerCase().includes(searchitems.toLowerCase())){
          return item;
        }
           
       
      })
      .map((item)=>{
        return (
          <div  style={{zIndex:'1'}}>
            <div>
              <img height='300px' src={item.image}/>
            </div>  
            <div>
              <h4>{item.title}</h4>
            </div>
            <div>
              <h4>{item.price}</h4>
            </div>
           <button >add to cart</button>

          </div>
        )
         
      })
     }
      <h1>Women</h1>
    <Womencate />
   

    
    
    
    </div>
  )
}

export default Women