import React from 'react'
function Hero() {
     return ( 
     <section className="container-fluid" id='supportHero'>
      <div className="p-5" id='supportWrapper'>
          <h4>Support Portal</h4>
          <a href="ww">Track Tickets</a>
      </div>
      <div className="row p-5 m-5">
      <div className="col-6 p-5" >
          <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg. how do i activate F&Q" /><br/>
          <a href="ww"> Track account opening</a>
          <a href="ww">Track segment activation</a>
          <a href="ww">Intraday margins</a>
          <a href="ww">Kite user manual</a>
      </div>
      <div className="col-6 p-5" >
          <h1 className='fs-3'>Featured</h1>
          <ol>
               <li><a href="ww">Current Takeovers and Delisting-January 2024</a></li>
               <li><a href="ww">Latest Intraday leverages-MIS & CQ</a></li>
          </ol>
          
          
      </div>
      </div>
      </section>
      );
}

export default Hero;