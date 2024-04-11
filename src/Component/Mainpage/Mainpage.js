import React from "react";
import "./Mainpage.css";
import { useContext } from 'react';
import { myContext } from '../../myContext';
import Card from '../Card/Card';
import { Button } from "bootstrap";



const Mainpage = () => {
  const {searchitems,setSearchitems}=useContext(myContext);
  return (
    <div className="main-page">
    {
      Card.filter((item)=>{
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
              <img height='300px' src={item.image} alt="img"/>
            </div>  
            <div>
              <h4>{item.title}</h4>
            </div>
            <div>
              <h4>{item.price}</h4>
            </div>
           <button>add to cart</button>

          </div>
        )
         
      })
     }
      <div className=" main-image">
      
        <img
          src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-hero-image-bg.jpg"
          alt="shoeimage"
        />
      </div>
      <div className="main-content">
        <h1 className="main-head">Love the planet we walk on</h1>
        <p className="main-para">
          Bibendum fermentum, aenean donec pretium aliquam blandit tempor
          imperdiet arcu arcu ut nunc in dictum mauris at ut.
        </p>
        <div className=" main-btn">
          <button className="btn-men">SHOP MEN </button>
          <button className="btn-women"> SHOP WOMEN</button>
          
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
