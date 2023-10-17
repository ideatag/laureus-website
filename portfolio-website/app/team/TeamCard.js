import React from "react";
import "./about.css";
import { BackgroundHero } from "../_components/common/common-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { formatTextWithBoldWords } from "./Utils";

const TeamCard = ({ data }) => (
  <div>
  {data.map(({ image, text, contact, email }) => (
      <div key={text} className="about-card-container">
        <BackgroundHero
          key={text}
          image={image}
          className="about-image-sizing"
        />
        <div className="about-info">
          <p className="about-text">{formatTextWithBoldWords(text)}</p>
          {email && (
            <div className="align-contacts">
              <p>{contact}</p>
              <div className="about-email">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>{email}</p>
              </div>
            </div>
          )}
        </div>
      </div>
  ))}
  </div>
  
);

export default TeamCard;
