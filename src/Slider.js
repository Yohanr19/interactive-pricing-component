import React from 'react'
import sliderIcon from './images/icon-slider.svg'
import './Slider.css'

const Slider = () => {
    let pagesview = 100;
    let amount = 16.00;
    // Make those stateful
    return (
        <div id='slider'>
            <h3 className='pageviews'> {pagesview + 'K'} Pageviews</h3>
            <div className='slider-bar'>
               <div className='slider-empty'> 
                  <div className='slider-full'> </div>
               </div>
                <div className='slider-icon-container'> <img className='slider-icon' src={sliderIcon} alt='slider'/> </div>
            </div>
            <text className='amount'> 
            <strong className='amount-strong'>${amount}</strong>/month
            </text>
            <div className= 'monthly-yearly'>
             <text>Monthly Billing</text> 
            <div className='choise-outside'> 
             <div className='inner-choise'> 
                 </div>  
                  </div>
            <text>  Yearly Billing</text> 
             <div className='discount'>-25% {/*25% discount text should be used when on desktop view*/}</div>
            </div>
        </div>
    )
}

export default Slider
