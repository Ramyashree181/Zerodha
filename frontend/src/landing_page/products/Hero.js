import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5 border-bottom' style={{textAlign:'center',marginTop:'50px'}}>
            <h1 className='fs-3 mb-4'>Zerodha Products</h1>
            <h3 className='text-muted fs-5 mb-4'>Sleek, modern, and intuitive trading platforms</h3>
            <p>Check out our <a href='' style={{textDecoration:'none'}}>investment offerings →</a></p>
        </div>
     );
}

export default Hero;