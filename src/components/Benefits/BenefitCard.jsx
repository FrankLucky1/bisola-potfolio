import React from 'react'
import "./Card.css"

export const BenefitCard = () => {
  return (
    <div className='container'>
        <div className='cards'>
            <div className='grid-item card'>
                <main>
                <h3>Premium Quality</h3>
                <p>Regardless of the price of furniture or accessories you choose we offer the best and premium quality to our customers</p>
                </main>           
            </div>

            <div className='bgImage card'>
            </div>
            
            <div className='card2 card'>
                <main>
                <h3>Warranty</h3>
                <p>Regardless of the price of furniture or accessories you choose we offer the best and premium quality to our customers</p>
                </main>            
            </div>

            <div className='bgImage2 card'>
            </div>

            <div className='card3 card'>
                <main>
                <h3>Free Shipping</h3>
                <p>Regardless of the price of furniture or accessories you choose we offer the best and premium quality to our customers</p>
                </main>
            </div>

            <div className='bgImage3 card'>
              
            </div>
            
        </div>
    </div>
  )
}
export default BenefitCard;