import React from "react";
import Link from "next/link";

export const FooterMediaLink = ({ media: { mediaLink, icon } }) => (
  <div className="social-media-links">
    <Link href={mediaLink}>{icon}</Link>
  </div>
);

export const FooterCard = ({ info: { infoLink, text } }) => (
  <div className="footer-information-links">
    <Link className="information-link" href={infoLink}>
      {text}
    </Link>
  </div>
);
