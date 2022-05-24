import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='Grid'>
            <div className='copyr'>
                <div className='logofooter'>
                    <h3>TheBest.</h3>
                    <p>studios</p>
                </div>
                <div className='copyright'>Copyright © 2020. LogoIpsum. All rights reserved.</div>
                <div className='mediaicons'>
                    <div>
                        <h1>Thanks for viewing</h1>
                    </div>
                </div>
            </div>


            <div className='products'>
                <h3>products</h3>

                <ul className='productList'>
                    <li><a href="/">Best selling</a></li>
                    <li><a href="/">New Arrivals</a></li>
                    <li><a href="/">Home Decore</a></li>
                    <li><a href="/">Kitchen Accessories</a></li>
                   
                </ul>
            </div>
            <div className='info'>
                <h3>Information</h3>

                <ul className='infoList'>
                    <li><a href="/">Help Center</a></li>
                    <li><a href="/">FAQs</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Privacy Policies</a></li>
                   
                </ul>
            </div>



            <div className='subscribe'>
                <div className='newsletter'>
                    <h3>Subscribe to our newsletter</h3>
                </div>
                <div className='Input'>
                   <input type="Email" placeholder='Email' />
                 
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer