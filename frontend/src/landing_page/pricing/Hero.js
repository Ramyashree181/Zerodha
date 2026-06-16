import React from 'react';

function Hero() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center mb-5'>
                <h2>Charges</h2>
                <p className='text-muted mb-5 fs-5'>List of all charges and taxes</p>
            </div>
            <div className='row mb-5' style={{display:'flex',justifyContent:'space-between', margin:'100px'}}>
                <div className='col-4'>
                    <img src={'/media/images/pricing0.svg'}/>
                    <p className='fs-3 text-center'>Free equity delivery</p>
                    <p className='text-muted text-center'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img src={'/media/images/other-trades.svg'}/>
                    <p className='fs-3 text-center'>Intraday and F&O trades</p>
                    <p className='text-muted text-center'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                    <img src={'/media/images/pricing0.svg'}/>
                    <p className='fs-3 text-center'>Free direct MF</p>
                    <p className='text-muted text-center'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;