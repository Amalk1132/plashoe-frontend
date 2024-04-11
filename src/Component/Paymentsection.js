import React from 'react'
import './Payment.css';

const Paymentsection = () => {
  return (
    <div className='pay-section'>
        <h1>Payment section</h1>
        <div className='pay-upi'> 
            <h1>UPI</h1>
        </div>
        <div className='pay-debit'>
            <h1>Debit Card</h1>
        </div>
        <div className='pay-net'>
            <h1>Net Banking</h1>
        </div>

       

    </div>
  )
}

export default Paymentsection;