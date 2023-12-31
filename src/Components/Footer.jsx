import React from 'react';



const Footer = () => {
    return (
        <div className='footer' id='contact'>
            <div className='address'>
                <div>
                    <span className='heading'>{" "}Location (UK)</span>
                    <span>99 Dorrington close, Luton LU3 1XP</span>
                </div>
                <div>
                    <span className='heading'>{" "}Contact</span>
                    <span>07427 029116</span>
                    <span>07828076386</span>
                </div>
            </div>
            <div className='address'>
            <div>
                    <span className='heading'>{" "}Location(GHANA)</span>
                    <span>Accra, Amasamman</span>
                </div>
                <div>
                    <span className='heading'>{" "}Contact</span>
                    <span>+233544920960</span>
                    <span>+233545275956</span>
                    <span>+233246220721</span>
                </div>
            </div>
            <div className='address'>
                <div>
                    <span className='heading'>Registration</span>
                    <span>
                        BSA Door To Door LTD is been registered in England and Wales
                    </span>
                </div>
                <div>
                    <span className='heading'># Company Number</span>
                    <span>
                        15030214
                    </span>
                </div>
            </div>
            <div className='address'>
                <div>
                    <span className='heading'>Social media</span>
                    <span style={{display: 'flex', alignItems: "center"}}>
                        <a href='https://www.facebook.com/profile.php?id=100095080851294' target='_blank' rel="noreferrer">Facebook</a>
                    </span>
                </div>
            </div>
        </div>
        );
}



export default Footer;