import React from "react";
import Slider from "./Slider";
import checkIcon from './images/icon-check.svg'


function App() {
  return (
    <div className="App">
        <h1>Simple, traffic-based pricing</h1>
        <h2> Sign-up for our 30-day trial. No credit card required.  </h2>
        <Slider />
         <section className='features'> 
         <div>
           <img src= {checkIcon} alt='Check'/>
           Unlimited websites</div>
         <div>
         <img src= {checkIcon} alt='Check'/>
         100% data ownership</div>
         <div>
         <img src= {checkIcon} alt='Check'/>
         Email reports</div>
            <button className='btn start-trial'>Start my trial</button>
         </section>

    </div>
  );
}

export default App;
