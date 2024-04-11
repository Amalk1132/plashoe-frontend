import React, { useContext } from 'react';
import {useState}from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { myContext } from '../../myContext';
import { Details } from '../Details';

const Register = () => {
const {userdata,setUserdata}=useContext(myContext);
const navigate=useNavigate();
// console.log(userdata);
    const [email,setemail]=useState('');
    const [pass,setpass]=useState('');
    const [name,setname]=useState('');

      const [person,setperson]=useState({
        name:'',
        email:"",
        password :'',
      });

    const handlesubmit=()=>{
      if(email===''||pass===''||name===''){
        alert('enter the data !');
      }else{
        setUserdata([
          ...userdata,{name:name,
          username:email,password:pass}
          ])
        alert('register success');

        person.name=name
        person.email=email
        

        Details.push(person);
        navigate('/login');
      }
    
   

    }


   

  return (
    <div className='auth-form-cotainer-reg'>
        <h2>Register</h2>

   <form className='register-form' >

    <label htmlFor='fullname'>Full name  </label>
    <input value={name}
     onChange={(e)=>setname(e.target.value)}
      type='text'
       name='fullname'
         placeholder='full name'/>

    <label htmlFor="email">email </label>

    <input value={email} 
    onChange={(e)=>setemail(e.target.value)} 
    type='email' 
    placeholder='youremail@gmail.com' 
     name='email'/>

    <label htmlFor='password'>password  </label>

    <input value={pass} 
    onChange={(e)=>setpass(e.target.value)}
     type='password' 
     placeholder='********' 
      name='password' />
      <br />
    
    <span className='span-btn' onClick={()=>handlesubmit()} type='submit'>Register</span>
   </form>
   <Link to={'/login'} style={{textDecoration:'none'}}> <span className='link-btn11' >Already have an account? Login here.</span></Link>
  
   </div>
  )
}

export default Register