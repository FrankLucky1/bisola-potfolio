import React from 'react'
import "./review.css"

const Review = () => {
  return (
    
    <div className='review'>
        <h2>What our clients are saying</h2>
     
          <div className='review-container'>
             
              <div className='ceo'>
                <div className='user'>
                  <h3>Mobisola Olasehinde</h3>
                  <p>CEO, Weird Clothing Company</p> 
                  <p>
                    <span className='quote1'><h6>``</h6></span>
                    <br /> 
                    
                    Make your dream home a reality. We combine premium design and materials to give you the best satisfaction of your home. You can expect to receive the best experience from us.
                   
                    <br />
                    <span className='quote2'><h6>``</h6></span>
                  </p>
                  </div>

              </div>
          

              <div className='alignment'>
                <div className='main-picture'>
              </div>
                 
              </div>
          </div>
        
    </div>
  )
}

export default Review