import LocalMallIcon from '@mui/icons-material/LocalMall';
import Person2Icon from '@mui/icons-material/Person2';
import './Navbar.css';
import { useContext, useState } from 'react';
import { myContext } from '../../myContext';


import { Link,Outlet } from 'react-router-dom';

const Navbar = () => {
  const {count,setcount}=useContext(myContext);
  const {searchitems,setSearchitems}=useContext(myContext);
  return (
    <div className='parent'style={{position:'sticky',top:0}}>
      <div className='nav-left'>

        <ul className='orderded'>
          <Link to={"./"} style={{textDecoration:'none'}}> <h4>PLASHOE </h4></Link>
          
         <Link to={'./men'} style={{textDecoration:'none'}}> <li className='list' >MEN</li></Link>

         <Link to={'./women'} style={{textDecoration:'none'}}> <li className='list' >WOMEN</li></Link>
         <Link to={'./collection'} style={{textDecoration:'none'}}> <li className='list' >COLLECTION</li></Link>
         <Link to={'./lookbook'} style={{textDecoration:'none'}}> <li className='list' >LOOKBOOK</li></Link>
         <Link to={'./sale'} style={{textDecoration:'none'}}> <li className='list' >SALE</li></Link>
      
         <input style={{border:'1px solid black',width:'100px',height:'30px'}} type='text' placeholder='search' onChange={(e)=>setSearchitems(e.target.value)}/>
         
        

        </ul>
      </div>
      <div className='nav-right'>
      <ul className='orderded'>
      <Link to={'./ourstory'} style={{textDecoration:'none'}}>  <li className='list' >OUR STORY</li></Link>
      <Link to={'./contact'} style={{textDecoration:'none'}}>  <li className='list' >CONTACT</li></Link>
      <Link to={'./cartpage'} style={{textDecoration:'none'}}>  <li  className='icons-nav'><LocalMallIcon  />{count}</li></Link>
      <Link to={'./login'} style={{textDecoration:'none'}}>  <li  className='icons-nav'><Person2Icon /></li></Link>

      </ul>
  
      </div>


    
        
    </div>
  )
}

export default Navbar