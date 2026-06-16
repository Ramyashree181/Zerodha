import React from 'react';
function Education() {
    return (  
        <div className='container mb-3 mt-5'>
            <div className='row'>
                <div className='col-6 pl-5'>
                    <img src={'/media/images/education.svg'} style={{width:'70%'}}/>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-3'>Free and open market education</h1>
                    <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:'none'}}>Varsity <i className="fa-solid fa-arrow-right"></i></a>
                    <p className='text-muted mt-3'>Trading Q&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:'none'}}>Trading Q&A <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                </div>
        </div>
    );
}

export default Education;