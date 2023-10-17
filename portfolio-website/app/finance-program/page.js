"use client";
import React from "react";
import "./finance.css";
import DomainIcon from "@mui/icons-material/Domain";
import HistoryIcon from "@mui/icons-material/History";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import InterestsIcon from "@mui/icons-material/Interests";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import website from "./Laureus-website.png";
import location from "./Laureus-location.png";

const page = () => {
  return (
    <div className="finance-page">
      <div className="finance-above" />
      <div className="finance-container-all">
        <div className="finance-main-container">
          <div className="finance-left-content">
            <h1 className="finance-title">ABSEITS</h1>
            <p>
              Jugendliche Straftäter*innen in Salzburg sind in der Mehrzahl
              Wiederholungstäter*innen – ein deutliches Indiz, dass die
              Resozialisierung straffällig gewordener junger Menschen nicht gut
              funktioniert. Delinquente Jugendliche haben nach der Haft
              teilweise keinen Zugang zum Arbeitsmarkt, werden strukturell
              diskriminiert oder stigmatisiert und leiden so unter Frustration
              und Perspektivlosigkeit. Die Unterstützungsmaßnahmen der
              Bewährungshilfe greifen oft erst nach der Haft und lassen so
              wertvolle Zeit während der Inhaftierung verstreichen. Die Vision
              von abseits ist eine Gesellschaft, in der alle Jugendlichen die
              Chance erhalten, ein selbstbestimmtes Leben zu führen und als
              wertvolles Mitglied der Gesellschaft angesehen zu werden. In einer
              einmaligen Kombination aus Präventionsarbeit und Angeboten in der
              Justizvollzugsanstalt werden vor allem junge Männer in prekären
              Lebenssituationen über Fußball erreicht. Der Sport ist hierbei das
              zentrale Medium für den Beziehungsaufbau und dient der Förderung
              von Kompetenzen, die eine aktive Teilhabe an der Gesellschaft
              ermöglichen. Durch ein zusätzliches Mentoring-Programm ermöglicht
              „abseits“, den jungen Menschen einen Zugang zum Arbeitsmarkt und
              begleitet die Unternehmen bei der Integration der neuen
              Teammitglieder.
            </p>
            <div className="finance-details-text">
              <ul>
                <li>
                  <DomainIcon />
                  Trägerorganisation: <span>AKZENTE SALZBURG</span>
                </li>
                <li>
                  <HistoryIcon />
                  Unterstützt von Laureus seit: <span> 2018</span>
                </li>
                <li>
                  <PeopleOutlineIcon />
                  Teilnehmende: <span>junge Erwachsene (14-25 Jahre)</span>
                </li>
                <li>
                  <SportsSoccerIcon />
                  Sportarten: <span> Fußball</span>
                </li>
                <li>
                  <InterestsIcon />
                  Social focus areas:{" "}
                  <span>Inklusive Gesellschaft, Gesundheit</span>
                </li>
                <li>
                  <LocationOnIcon />
                  Standort: <span>Salzburg, Österreich</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="finance-right-content" />
        </div>
        <div className="finance-footer">
          <h1>
            Sie möchten mehr über das Laureus Förderprogramm abseits erfahren?
          </h1>
          <p>Hier geht’s zum Onlineauftritt des Programms:</p>
          <div className="finance-footer-image-links">
            <Image src={website} alt="website-image" />
            <Image src={location} alt="location-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
