import React, { useContext, useState } from "react";
import "./Addproduct.css";
import { myContext } from "../myContext";
import PersonIcon from '@mui/icons-material/Person';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ImageIcon from '@mui/icons-material/Image';
import CategoryIcon from '@mui/icons-material/Category';




const Addproduct = () => {
  const {userdata,setUserdata}=useContext(myContext);
  const [inputvalue, setinputvalue] = useState({
    title: "",
    price: "",
    Category: "",
    image: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log(inputvalue.title);
    setinputvalue({ ...inputvalue, [name]: value });
  };


  const handleclick = () => {
    if(!inputvalue.title || !inputvalue.price || !inputvalue.Category||!inputvalue.image ){
      alert('pls add product');
    }else{
      userdata.push(inputvalue);
      alert('sucesss');

      

      
    }
  };

  const onsubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>hello</h1>

      <div className="addproduct">
        <form onSubmit={onsubmit}>
          <PersonIcon />
          <label>name:&nbsp;</label>
          <input
            type="text"
            name="title"
            placeholder="name"
            value={inputvalue.title}
            onChange={handlechange}
          />
          
          <br/>
          <br/>
          <CurrencyRupeeIcon />
          <label>price : &nbsp;</label>
          <input
            type="number"
            name="price"
            placeholder="price"
            value={inputvalue.price}
            onChange={handlechange}
          />
          <br />
         <br/>
         <CategoryIcon />
          <label>Category :&nbsp;</label>
          <input
            type="text"
            name="Category"
            placeholder="category"
            value={inputvalue.Category}
            onChange={handlechange}
          />
           <br/>
           <br/>
           <ImageIcon / >
          <label>image :&nbsp;</label>
          <input
            type="text"
            name="image"
            placeholder="image"
            value={inputvalue.image}
            onChange={handlechange}
          />
            <br/>
           <br/>
          <button onClick={handleclick} className="add-btn">
            Add product
          </button>
        </form>
      </div>
    </div>
  );
};
export default Addproduct;
