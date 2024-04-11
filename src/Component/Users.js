import React from 'react'
import { Details } from './Details';
import './User.css'
import PersonIcon from '@mui/icons-material/Person';

const Users = () => {
 
  return (
  
    <div  >
        {
            Details.map((item)=>{
                return (
                    <div className='user-main-div'>
                      <section className='person'> < PersonIcon /></section>
                    
                    <div >
                    <h1>{item.id}</h1>
                    
                    </div>
                    <div>
                    <h1>{item.name}</h1>
                   
                    </div>
                    <div>
                    <h1>{item.email}</h1>
                    </div>
                  
                    </div>
                )
            })
            
        }
      
    </div>
    
  )
}

export default Users