import React from 'react'
import sliderIcon from './images/icon-slider.svg'

const Slider = () => {
    let pagesview = 100;
    let amount = 16;
    // Make those stateful
    return (
        <div id='slider'>
            <h3> {pagesview + 'K'}Pageviews</h3>
            <div className='slider-bar'>
                <div className='slider-empty'> </div>
                <div> <img src={sliderIcon} alt='slider'/> </div>
                <div className='slider-full'> </div>
            </div>
            <text> 
            ${amount}/month
            </text>

            <div className= 'monthly-yearly'>
             <text>Monthly Billing</text> 
            <div className='choise-outside'> 
             <div className='inner-choise'> 
                 </div>  
               
                  </div>
            Yearly Billing
            <text>  Yearly Billing</text> 
             <div className='discount'>-25% {/*25% discount text should be used when on desktop view*/}</div>
            </div>
        </div>
    )
}

export default Slider
