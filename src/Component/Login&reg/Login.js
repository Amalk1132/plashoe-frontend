import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
// import {UserData} from "../../assets/loginData"
import { myContext } from "../../myContext";
import { useContext } from "react";

const Login = () => {
  const {userdata}=useContext(myContext);
 const {islogin,setislogin}=useContext(myContext);


const [username,setUsername] =useState("");
const [password,setPassword] =useState("");

const currentuser = userdata.filter(item=>item.username===username);
const navigate =useNavigate();
 


console.log(currentuser);

  function handlesubmit(){
    if(username===""&&password===""){  
     alert('enter values') ;
      
    }else if(currentuser.length===0){
alert('user does not exist')
     
    }else if(currentuser[0].password===password){
      navigate("/")
      setislogin(true);
    
  }else{
    alert('incorrect password');
  }}
  return (
    <>

        <section>
          <div className="auth-form-container">
            <h2>Login</h2>

            <form className="login-form">
              <label htmlFor="email">email </label>
              <input
                value={username}
                type="email"
                placeholder="youremail@gmail.com"
                name="email"
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <label htmlFor="password">password </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="enter password"
                name="password"
                required
              />

           
            </form>
            <br></br>
            <button classname='submit-log' type="submit-btn" onClick={() => handlesubmit()}>Log in</button>
<Link to={'/register'} > <button className='link-btn' >Need an Account ? Login here.</button></Link>
<br></br>
 <Link to={'/adminlogin'}><button className="admin-1">Admin </button></Link>

          </div>
        </section>
    
    </>
  );
};

export default Login;
