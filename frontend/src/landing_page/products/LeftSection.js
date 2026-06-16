import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo,learnMore, googlePlay,appStore}) {
    return ( 
        <div className='container  pt-5'>
            <div className='row pt-5'>
                <div className='col-8 p-4'>
                    <img src={imageURL} ></img> 
                    {/* Note: we don't use src='', instead we use attributes in {} eg. {imageURL}  */}
                </div>
                <div className='col-4 pr-5'>
                    <h1 className='fs-3'>{productName}</h1>
                    <p style={{lineHeight:'30px'}}>{productDescription}</p>
                    <div><a href={tryDemo}>Try Demo →</a>
                         <a href={learnMore} style={{marginLeft:'60px'}}>Learn more →</a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src={'/media/images/googlePlayBadge.svg'} /></a>
                        <a href={appStore}><img src={'/media/images/appstoreBadge.svg'} style={{marginLeft:'15px'}}/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;