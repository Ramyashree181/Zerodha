import React from 'react';
function Stats() {
    return (  
        <div className='container p-5'>
            <div className='row p-3'>
            <div className='col-4 pl-5 ml-5'>
                <h1 className='mb-5 fs-3'>Trust with confidence</h1>
                <h3 className='fs-4'>Customer-first always</h3>
                <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                <h3 className='fs-4'>No spam or gimmicks</h3>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.<a> Our philosophies</a>.</p>
                <h3 className='fs-4'>The Zerodha universe</h3>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <h3 className='fs-4'>Do better with money</h3>
                <p className='text-muted'>With initiatives like <a>Nudge</a> and <a>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='col-8 text-center mb-3'>
                <img src={'/media/images/ecosystem.png'} style={{width:'80%'}}/><br></br>
                <a href='' className='mx-5' style={{textDecoration:'None'}}>Explore our products <i className="fa-solid fa-arrow-right"></i></a>
                <a href='' style={{textDecoration:'None'}}>Try kite demo <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <a style={{textDecoration:'none', textAlign:'center', justifyContent:'space-between'}}><img className='mt-5 ' style={{width:"70%", height:"45px"}} src={'/media/images/pressLogos.png'} /></a>
            </div>
        </div>
    );
}

export default Stats;