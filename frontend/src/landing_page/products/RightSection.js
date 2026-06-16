import React from 'react';

function RightSection({imageURL, productName, productDescription,learnMore}) {
    return ( 
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-3 p-5 ' style={{marginTop:'150px', paddingLeft:'50px'}}>
                    <h1 className='fs-3'>{productName}</h1>
                    <p style={{lineHeight:'30px',paddingTop:'10px'}}>{productDescription}</p>
                    <div>
                         <a href={learnMore} >Learn more →</a>
                    </div>
                </div>
                <div className='col-1'></div>
                <div className='col-7 p-4'>
                    <img src={imageURL} className='ml-5'></img> 
                    {/* Note: we don't use src='', instead we use attributes in {} eg. {imageURL}  */}
                </div>
            </div>
     );
}

export default RightSection;