import Image from "next/image";
import React from "react";

const SocialFocusAreasCard = ({
  area: { image, altText, title, paragraph },
}) => (
  <div className="social-focus-area-card">
    <Image
      className="social-focus-area-image"
      src={image}
      alt={altText}
      width={85}
      height={85}
    />
    <h5 className="social-focus-area-title">{title}</h5>
    <p className="social-focus-area-paragraph">{paragraph}</p>
  </div>
);

export default SocialFocusAreasCard;
