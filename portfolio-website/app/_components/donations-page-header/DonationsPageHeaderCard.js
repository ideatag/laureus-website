import React from "react";

const DonationsPageHeaderCard = ({ area: { link, title } }) => (
  <>
    <div>
      <a href={link}>
        <h5>{title}</h5>
      </a>
    </div>
    <span className="social-media-section-separation-dot">&#183;</span>
  </>
);

export default DonationsPageHeaderCard;
