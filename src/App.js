import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Outlet } from "react-router-dom";
// import Navbar from "./Component/Navbar/Navbar";
import Mainpage from "./Component/Mainpage/Mainpage";
// import Footer from "./Component/Footer/Footer";
// import Plashoe from "./Component/Navbar/Navpages/Plashoe";
import Men from "./Component/Navbar/Navpages/Men";
import Women from "./Component/Navbar/Navpages/Women";
import Collection from "./Component/Navbar/Navpages/Collection";
import Lookbook from "./Component/Navbar/Navpages/Lookbook";
import Sale from "./Component/Navbar/Navpages/Sale";
import Contact from "./Component/Navbar/Navpages/Contact";
import Ourstory from "./Component/Navbar/Navpages/Ourstory";
import Cartpage from "./Component/Navbar/Navpages/Cartpage";
import { Routes, Route } from "react-router-dom";
// import Loginpage from "./Component/Navbar/Navpages/Loginpage";
import Login from "./Component/Login&reg/Login";
import Register from "./Component/Login&reg/Register";
import HomeLayout from "./Component/layout/HomeLay";
import AuthLay from "./Component/layout/AuthLay";
import { myContext } from "./myContext";
// import { UserData } from "./assets/loginData";
import "bootstrap/dist/css/bootstrap.min.css";
import Paymentsection from "./Component/Paymentsection";
import Admin from "./Component/Admin";
import Adminlogin from "./Component/Adminlogin";
import Users from "./Component/Users";
import Product from "./Component/Product";
import Revenue from "./Component/Revenue";
import Productedit from "./Component/Productedit";
import Card from "./Component/Card/Card";
import Addproduct from "./Component/Addproduct";

function App() {
  const [currentform, setcurrentform] = useState("login");
  const [userdata, setUserdata] = useState(Card);
  const [searchitems, setSearchitems] = useState("");
  const [count, setcount] = useState(0);
  const [cartitems, setcartitems] = useState([]);
  const [islogin, setislogin] = useState(false);

  const toggleform = (formname) => {
    setcurrentform(formname);
    console.log(userdata);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <myContext.Provider
          value={{
            userdata,
            setUserdata,
            searchitems,
            setSearchitems,
            count,
            setcount,
            cartitems,
            setcartitems,islogin,setislogin
          }}
        >
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<Mainpage />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/lookbook" element={<Lookbook />} />
              <Route path="/sale" element={<Sale />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="/ourstory" element={<Ourstory />} />
              <Route path="/cartpage" element={<Cartpage />} />
            </Route>
            <Route path="/login" element={<AuthLay />}>
              <Route index element={<Login />} />
            
            </Route>
            <Route path="/register" element={<Register />} />
            {/* <Route path='/' element={<Plashoe/>}/>
        <Route index element={<Mainpage/>}/>
        

   
        <Route path='/loginpage' element={<Loginpage/>}/> */}
            <Route path="/payment" element={<Paymentsection />} />
            <Route path='/admin' element={<Admin />} >
            <Route path="/admin" element={<Users />} />
              <Route path="/admin/product" element={<Product />} />
              <Route path="/admin/revenue" element={<Revenue />} />
              <Route path="/admin/productedit/:id" element={<Productedit />} />
              <Route path="/admin/Addproduct" element={<Addproduct />} />
              </Route>
            <Route path='/adminlogin' element={<Adminlogin />} />
            
          </Routes>
        </myContext.Provider>

        {/* / {
        currentform ==="login" ? <Login onformswitch={toggleform}/> : <Register onformswitch={toggleform}/>

      } */}
        {/* <Navbar /> */}
        {/* <Mainpage /> */}

        {/* <Outlet/> */}

        {/* <Footer />  */}
      </div>
    </BrowserRouter>
  );
}

export default App;
