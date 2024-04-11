import React from 'react';
import './Men.css';
import Category from '../../Category';
import { useContext } from 'react';
import { myContext } from '../../../myContext';
import { mendata } from '../../Category';

const Men = () => {
  const {searchitems,setSearchitems}=useContext(myContext);
  return (
    
    <div className='men-page'>
      {
     mendata.filter((item)=>{
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
           {/* <button>add to cart</button> */}

          </div>
        )
         
      })
     }
  
  <h1 >Men</h1>
    <div className='men-nav'>
      <div className='men-nav-left'>
    <h3>FILTER SHOES</h3>
    
       

      </div>
      
    </div>
    
    <Category />
     </div>
  )
}

export default Men