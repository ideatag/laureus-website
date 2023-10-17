import React from 'react';
import'./LatestLaureusNews.css';
const LatestLaureusNewsCard=({
    news:{image,title,date,externalUrl}
}) => (
    
       <a className= "latest-laureus-news-card-link" href={externalUrl} target="_blank" rel="noopener noreferrer">   
         <div className="latest-laureus-news-card-media">
           <img src={image} alt="image-news"/>
         </div>
          <div className="latest-laureus-news-card-content">
             <h3 className="latest-laureus-news-card-title">{title}</h3>
             <p className="latest-laureus-news-card-date">{date}</p>
         </div>
       </a>

    
);
export default LatestLaureusNewsCard;

