import Card from './Card/Card';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { myContext } from '../myContext';
import { useContext } from 'react';



const Productedit = () => {
    const {userdata, setUserdata} = useContext(myContext);
    console.log(userdata);

    const {id}=useParams();
    console.log(id);
    
    const currentitem = Card.find((item)=>item.id==id) ;

    const[image,setimage]=useState(currentitem.image);
    const [title,settitle]=useState(currentitem.title);
    const[price,setprice]=useState(currentitem.price);
    
    

  
   
   
    console.log(currentitem);

    const handleclick=()=>{
        const updatedproduct={
            ...currentitem,
            image,title,price
        };

        const updatedproducts=userdata.map((item)=>
            item.id===currentitem.id ? updatedproduct :item
        );
        setUserdata(updatedproducts);
        alert('update successfully')

    }
  return (
    <div><h1>Product edit</h1>
    <div className='prd-edit'>
        <label >name :&nbsp;</label>
        <input type='text' onChange={(e) =>settitle(e.target.value)} value={title}/>
        <br></br>
        <br></br>
        <label>price :&nbsp;</label>
        <input type='text' onChange={(e)=>setprice(e.target.value)} value={price}/>
        <br></br>
        <br></br>
        <label>image :&nbsp;</label>
        <input type='text' onChange={(e)=>setimage(e.target.value)} value={image}/>
        <br></br>
    
      
        <br></br>
        <br></br>
        <br></br>
        <button onClick={handleclick} style={{backgroundColor:'orange', borderRadius:'10px'}}>Update product</button>

    </div>
    
  

    </div>
  )
}

export default Productedit