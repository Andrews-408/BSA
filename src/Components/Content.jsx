import React from 'react';
import illustration from "./images/illustration.png"


const Content = () => {
    return (
        <div className='main-content'>
            <div className='background-layer'></div>
            <div className='left-content'>
                <h1>
                    <span className='B'>B</span>
                    <span className='S'>S</span>
                    <span className='A'>A</span> {" "}
                    DOOR TO DOOR LTD
                </h1>
                <p>"BSA Door To Door Limited" is a leading shipping company 
                    dedicated to delivering exceptional door-to-door logistics 
                    solutions.One of the leading shipping companies from United Kingdom to Ghana.
                    Located in Luton and we go every part of UK. We also deliver goods to Ghana in 2 to 4 weeks.  We take pride in our reliable and efficient delivery services that cater to both domestic 
                    and international shipments. From packages to freight, our team ensures 
                    secure and timely deliveries to your doorstep. At BSA, we strive to exceed 
                    customer expectations, offering competitive rates and personalized services 
                    tailored to your shipping needs. Trust us to handle your deliveries with utmost
                    care and professionalism, making the process smooth and hassle-free. Experience 
                    the convenience of seamless shipping solutions with BSA Door To Door Limited.
                </p>
            </div>
            <div className='right-content'>
                <img src={illustration} alt='illustration'/>
            </div>
        </div>
        );
}



export default Content;