import React from "react";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import PersonIcon from '@mui/icons-material/Person';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WalletIcon from '@mui/icons-material/Wallet';
import AddCardIcon from '@mui/icons-material/AddCard';
import HomeIcon from '@mui/icons-material/Home';
import './Admin.css';
import { Outlet } from "react-router-dom";
import {Link} from 'react-router-dom';



const Admin=()=>{
    return (
        <>
        <div className="admin-container"> 
        <div className="admin-left">
            <h1 style={{color:'white', fontFamily:'cursive'}}>Admin</h1>
            <br></br>
            <br></br>
          <Link to='/admin'><button className="btn-adm1">  <PersonIcon />&nbsp;Users</button></Link> 
           <Link to='/admin/product' ><button className="btn-adm2"><FormatListBulletedIcon  />&nbsp; Products</button></Link> 
           <Link to='/admin/revenue'><button className="btn-adm3"> <WalletIcon />&nbsp;Revenue</button></Link> 
           <Link to='/admin/addproduct'><button className="btn-adm4"> <AddCardIcon />&nbsp;Add product</button></Link>
           <Link to='/'><button className="btn-adm5"> <HomeIcon />&nbsp;Home</button></Link>



        </div>
        <div className="admin-right">
            <h1>  <h1>hello,Amal <WavingHandIcon style={{color:"yellow",rotate:"270deg"}} /></h1></h1>
            <div className="admin-right-btm">
                <Outlet />

        </div>

        </div>
        
          
            
           
          
           
            
        </div>
        </>
    )

}
export default Admin;
