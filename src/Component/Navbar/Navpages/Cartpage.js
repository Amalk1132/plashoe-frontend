import React, { useState } from 'react';
import './Cartpage.css';
import { myContext } from '../../../myContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Cartpage = () => {
  const { cartitems, setcartitems } = useContext(myContext);
  const { count, setcount } = useContext(myContext);


  const [totalPrice, setTotalPrice] = useState(0);
  const navigate=useNavigate()

  const handleclick = (id) => {
    const updatedcart = cartitems.filter((item) => item.id !== id);
    setcartitems(updatedcart);
    setcount(count - 1);
  };

  const increase = (item) => {
  
    item.quantity = (item.quantity || 0) + 1;
  
    setcartitems([...cartitems]); 
    updateTotalPrice();
  };
  

  const decrease = (item) => {
   
    if (item.quantity > 0) {
      item.quantity = item.quantity - 1;
      setcartitems([...cartitems]); 
      updateTotalPrice();
    }
  };

  const updateTotalPrice = () => {
   
    const total = cartitems.reduce((acc, item) => {
      return acc + (item.price * (item.quantity || 0));
    }, 0);

    setTotalPrice(total);
  };
const handlebuy=()=>{
  if(totalPrice===0){
    alert('pls add quantity')
  }else{
    navigate('/payment')

  }
}

  return (
    <>
      <h1>Cart page</h1>
      
      <div className='cart-page'>
        {cartitems.map((item) => (

         
          <div className="shoe-cart" key={item.id}>
            <img width='200px' src={item.image} alt={item.title} />
            <div className='helo'>
              {item.title}
            </div>
            <div>
              Price: {item.price}
            </div>
            <div>
              Quantity: {item.quantity || 0}
            </div>
            {/* <div>
              Subtotal: {item.price * (item.quantity || 1)}
            </div> */}
            <button onClick={() => handleclick(item.id)}>Delete</button>
            
              
            
            <button onClick={() => increase(item)}>+</button>
            <button onClick={() => decrease(item)}>-</button>
          </div>
        ))}
      </div>
      <div className="total-price">
        Total Price: {totalPrice}
        <button onClick={handlebuy}>Buy</button>
      </div>
    </>
  );
};

export default Cartpage;
