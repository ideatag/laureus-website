import React from 'react';
import'./Banner.css';
const Banner = () => {
    return (
        
        <div className="containerblock">
        <div className="container">
        <h4 className="container-h4">Spenden</h4>
        <h3 className="container-h3">Helfen Sie mit</h3>
        <p className='container-p'>Aus aktuellem Anlass unterstützt Laureus Sport for Good mit den gesammelten Spenden Organisationen, die geflüchteten Kindern und ihren Familien schnell und unbürokratisch Hilfe leisten. </p>
        <a className="fancybox-iframe" href="https://spenden.twingle.de/laureus-sport-for-good-foundation-germany-austria/ukraine-hilfsfond/tw6229c29b7973b/page" aria-controls="fancybox-wrap" aria-haspopup="dialog">
            <div className="spendebtn">Spenden</div>
            </a>
        
        </div>
    </div>
        
    );
};

export default Banner ;