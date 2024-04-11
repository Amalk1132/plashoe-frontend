import React, { useState } from 'react'
import './Adminlogin.css';
import { useNavigate } from 'react-router-dom';


const Adminlogin = () => {
  const [inputs,setinputs]=useState({
    username:'',
    password:''
  })
  
  const admin={
    username:'amal',
    password:'123'

  }
  
  const navigate=useNavigate();

  const handlechange=(e)=>{
    const {name,value}=e.target;
    setinputs({...inputs,[name]:value})
    // console.log(inputs.username);


  }
  const handlesubmit=(e)=>{
    e.preventDefault();

  }
  const handleclick=()=>{
   if(inputs.username ===''||inputs.password===''){
    alert('please fill the form');
   }else if(admin.username !==inputs.username){
    alert('please enter the username')
   }else if(admin.password!==inputs.password){
    alert('please ente the passwor');
   }else if(admin.username===inputs.username &&admin.password===inputs.password){
    alert('login succesfully')
    navigate('/admin')
   }
}


  
  return (
    <div className='main-admin'><h1>Admin Login</h1>
    <div className='ad-login'>
      <form onSubmit={handlesubmit}>
        <label>username  :&nbsp;</label>
        <input style={{height:'20px',marginTop:'50px'}} type='email' name='username' value={inputs.username}
         placeholder='enter your name' onChange={handlechange}/>
        <br></br>
        <label>password :&nbsp;</label>
        <input style={{height:'20px',marginTop:'50px'}} type='email' name='password' value={inputs.password}
         placeholder='enter your email' onChange={handlechange}/>
      
        </form>
        <br></br>
        <button  className='admin-log'onClick={handleclick}>Login</button>

    </div>
    
    </div>
  )
}

export default Adminlogin;