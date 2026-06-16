import React from 'react';

function Universe() {
    return ( 
        <div className='container text-center pt-5 m-5'>
            <h3 className='mb-4'>The Zerodha Universe</h3>
            <p className='mb-4'>Extend your trading and investment experience even further with our partner platforms</p>
            <div className='row mt-5'>
                <div className='col-2'></div>
                <div className='col-3'>
                    <img src={'/media/images/zerodhaFundhouse.png'} style={{height:'70px', width:'200px'}}/>
                    <p className='text-muted text-center'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className='col-3'>
                    <img src={'/media/images/sensibullLogo.svg'} style={{height:'100px', width:'200px'}}/>
                    <p className='text-muted text-center'>Options trading platform that lests you create stratergies, analyze positions and examine data points like open interest, FII/DII and more.</p>
                </div>
                <div className='col-3'>
                    <img src={'/media/images/tijori.svg'} style={{height:'100px', width:'200px'}}/>
                    <p className='text-muted text-center'>investment research platform that offers detailed insights on stocks, sectors, supply chains and more.</p>
                </div>
            </div>
            <div className='row mb-5 mt-5'>
                <div className='col-2'></div>
                <div className='col-3'>
                    <img src={'/media/images/streakLogo.png'} style={{height:'70px', width:'200px'}} />
                    <p className='text-muted text-center'>Systematic trading platform that allows you to create and backtest stratergies without coding.</p>
                </div>
                <div className='col-3'>
                    <img src={'/media/images/smallcaseLogo.png'} style={{height:'70px', width:'200px'}}/>
                    <p className='text-muted text-center'>Thematic investing platform that helps you invest in diversified baskets of stacks on ETFs.</p>
                </div>
                <div className='col-3'>
                    <img src={'/media/images/dittoLogo.png'} style={{height:'70px', width:'200px'}}/>
                    <p className='text-muted text-center'>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
            </div>
            <button className='p-3 btn btn-primary fs-5' style={{width:"15%" , margin:"0 auto",borderRadius:"2px"}}>Sign Up for free</button>
        </div>
     );
}

export default Universe;