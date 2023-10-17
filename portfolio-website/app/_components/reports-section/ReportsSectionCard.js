import Image from "next/image";
import React from "react";

const ReportsSectionCard = ({ area: { link, title } }) => (
  <div className="reports-section-card">
    <a href={link}>
      <Image
        className="icon"
        src="https://www.laureus.de/wp-content/themes/scroller/images/pdf-icon.svg"
        alt="PDF img"
        width={32}
        height={40}
      />
      <h5>{title}</h5>
    </a>
  </div>
);

export default ReportsSectionCard;
