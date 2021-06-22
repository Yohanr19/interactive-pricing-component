import React, {useState , useEffect} from 'react'
import './Slider.css'

const Slider = () => {
    const [amount, setAmount] = useState(16);
    const [isMonth, setisMonth] = useState(true);
    const [deviceWidth, setDeviceWidth] = useState (window.innerWidth)
    const handleChange = function(e) {
            setAmount(e.target.value)
    }
    const handleMonthYear = function(e) {
           if (isMonth === true) {
               setisMonth(false);
            }
            else { 
                setisMonth(true)
            }
    }
    useEffect ( ()=> {
        if (window.innerWidth > 750) {
            document.getElementsByClassName('discount')[0].textContent = '-25% discount'
        }
        else {
            document.getElementsByClassName('discount')[0].textContent = '-25%'
        }
        window.addEventListener('resize', (e)=> {
            setDeviceWidth(window.innerWidth)
            if (window.innerWidth > 750) {
                document.getElementsByClassName('discount')[0].textContent = '-25% discount'
            }
            else {
                document.getElementsByClassName('discount')[0].textContent = '-25%'
            }
        })
        return window.removeEventListener('resize', (e)=> {
            setDeviceWidth(window.innerWidth)
        })
    }, []) 
    console.log(deviceWidth)
    let varPercentage = (amount/30)*100;
    return (
        <section id='slider-section'>
            <h3 className='pageviews'> {Math.round(amount*6.25) + 'K'} Pageviews</h3>
            <div className='slider-bar'>
                <input 
                className='slider'
                type='range' 
                min='1'
                 max='30' 
                 value={amount} 
                 onInput={handleChange}></input>
                  <div style={{width: varPercentage+'%'}} className='slider-full'> </div>
                  <div className='slider-empty'> </div>
            </div>
            <div className='amount'> 
            <strong className='amount-strong'>${isMonth? amount: (amount*12)*0.75}</strong>/{isMonth? 'month': 'year'}
            </div>
            <div className= 'monthly-yearly'>
             <div>Monthly Billing</div> 
            <div className='choise-outside' onClick={handleMonthYear}> 
             <div className='inner-choise' style={{left:isMonth?'7%':'55%'}}> 
                 </div>  
                  </div>
            <div>  Yearly Billing</div> 
             <div className='discount'></div>
            </div>
        </section>
    )
}

export default Slider
