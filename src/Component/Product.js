import React from 'react'
import Card from './Card/Card';
import './Products.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { myContext } from '../myContext';

const Product = () => {
  const {userdata,setUserdata}=useContext(myContext);

  const handleclick=(itemid)=>{
    const deleatecart=userdata.filter((product)=>product.id!==itemid)
    setUserdata(deleatecart);

  }

  
  return (
    <div>
    <h1>Produc list</h1>
    <div className='prod-main'>
        

        {
          userdata.map((item)=>{
            return(
              <div className='prod-child'>
              <img src={item.image}/>
              <h1>{item.Category}</h1>
              <h1>{item.title}</h1>
              <h1>{item.price}</h1>
              <Link to={`/admin/productedit/${item.id}`}><button className='edit-btn'>edit</button></Link>&nbsp;&nbsp;&nbsp;
             
              <button onClick={()=>handleclick(item.id)}  className='edit-delet'>delete</button>
              </div>
            )
          })
        }
        
    </div>
    </div>
  )
}

export default Product;