"use client";

import { useState } from "react";
import React from "react";
import "./about.css";
import TeamCard from "./TeamCard";
import { directorData, teamData } from "./teamAndDirectorData";


const About = () => {
  const [data, setData] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const handleButtonClick = (value) => {
    setFadeIn(true);
    setData(value);
    setTimeout(() => {
      setFadeIn(false);
    }, 1000);
  };

  return (
    <div className="about-page">
      <div className="about-above"/>
      <div className="about-container-all">
        <div className="about-headers">
          <h1
            className={`button-hover ${data === true ? 'underline' : ''}`}
            onClick={()=>handleButtonClick(true)}
          >
            {" "}
            TEAM
          </h1>
          <h1> / </h1>
          <h1
           className={`button-hover ${data === false ? 'underline' : ''}`}
            onClick={()=>handleButtonClick(false)}
          >
            VORSTAND
          </h1>
        </div>
        <div className={`${fadeIn ? 'fade-in ' : ''}about-card-container`}>
      <TeamCard data={data ? teamData : directorData} />
  </div>
      </div>
    </div>
  );
};

export default About;