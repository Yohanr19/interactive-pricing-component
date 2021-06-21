import React from "react";
import Slider from "./Slider";
import checkIcon from './images/icon-check.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <section className='intro'>
        <h1 className='main-header-text'>  Simple, traffic-based pricing</h1>
        <h2 className='main-descp'> Sign-up for our 30-day trial. No credit card required.  </h2>
        </section>
        <Slider />
         <section className='features'> 
         <div className='feature'>
           <img className='check-icon' src= {checkIcon} alt='Check'/>
           Unlimited websites</div>
         <div className='feature'>
         <img className='check-icon' src= {checkIcon} alt='Check'/>
         100% data ownership</div>
         <div className='feature'>
         <img className='check-icon' src= {checkIcon} alt='Check'/>
         Email reports</div>
            <button className='btn start-trial'>Start my trial</button>
         </section>

    </div>
  );
}

export default App;
