import React from 'react'
import './Sale.css'

const Sale = () => {
  return (
    <div className='sale-page'>
      <div className='sale-h1'> <h1>Sale</h1>
      </div>
      <div className='sale-img'>
        <div className='sale-img1'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJ3jOd-qv_ofOHPS76RIxtqfEMPV0qbDh9A&usqp=CAU'/>
        <section className='sec-1'>  <h4>Refer a frind</h4>
        <h1>Get 20% OFF</h1>
        <button className='sale-btn'>LEARN MORE</button>
        </section>
       
        </div>
      
        <div className='sale-img2'>
            <img src='https://grownandflown.com/wp-content/uploads/2019/04/College-student--768x562.jpg'/>
            <section className='sec-2'>
              <h4>Promotion</h4>
              <h1>Student Discount</h1>
              <button className='sale-btn'>LEARN MORE</button>
            </section>
            </div>
      

      </div>
      
    </div>
  )
}

export default Sale