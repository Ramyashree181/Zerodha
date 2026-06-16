import React from 'react';
function Awards() {
    return (  
        <div className='container mt-5'>
            <div className='row mt-5'>
                <div className='col-6'>
                    <img src={'/media/images/largestBroker.svg'} />
                </div>
                <div className='col-6 mt-3 p-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mt-2'>2+ million Zerdha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>

                    <div className='row mt-4'>
                        <div className='col-6'>
                            <ul>
                                <li className='mt-3'>
                                    Future and options
                                </li>
                                <li className='mt-3'>
                                    Comodity derivatives
                                </li>
                                <li className='mt-3'>
                                    Currency derivatives
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li className='mt-3'>
                                    Stocks & IPOs
                                </li>
                                <li className='mt-3'>
                                    Direct mutual funds
                                </li>
                                <li className='mt-3'>
                                    Bonds and Govt. Securities
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Awards;