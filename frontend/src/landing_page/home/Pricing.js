import React from 'react'
 
function Pricing() {
     return ( 
           <div className="container">
               <div className="row">
                    <div className="col-4">
                         <h1 className='mb-3 fs-2'>Unbeatable Pricing</h1>
                         <p>We pioneered the concept of discount broking and price transparency in India.Flat feels and no hidden charges.</p>
                         <a href='https://example.com' className='mx-5' style={{textDecoration:"none"}}>View Pricing<i className="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                    </div>
                    <div className="col-2">

                    </div>
                    <div className="col-6 mb-5">
                              <div className="row text-center">
                                   <div className="col p-3 border">
                                        <h1>₹0</h1>
                                        <p className='mb-3'>Free equity delivery and <br/>direct mutual funds</p>
                                   </div>
                                   <div className="col p-3 border">
                                        <h1>₹20</h1>
                                        <p className='mb-3'>Intraday and F&O</p>
                                   </div>
                              </div>
                    </div>
               </div>
           </div>
      );
}

export default Pricing;