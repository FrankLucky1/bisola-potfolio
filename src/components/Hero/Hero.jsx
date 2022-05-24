import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
      <section>
    <div className='hero'>
        <div className='container1'>
            <nav>
                <div className='logo'>
                    <h3>TheBest.</h3>
                    <p>studios</p>
                </div>
                <div className='items'>
                    <ul className='navItems'>
                        <li>Work</li>
                        <li>About</li>
                        <li><a href="#Footer">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <div className='heroBody'>
                <div className='content'>
                    <h1>We Create The Best Space To Fit Your Style</h1>
                    <h3>Make your dream home a reality. We combine premium design and materials to give you the best satisfaction of your home. You can expect to receive the best experience from us.</h3>

                    <button>Book a consultant</button>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Hero