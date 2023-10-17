import React from "react";
import "./LatestLaureusNews.css";
import LatestLaureusNewsCard from "./LatestLaureusNewsCard";
import { data } from "./LatestLaureusNewsData";
import { Button } from "@mui/material";

const LatestLaureusNews = () => (
  <div className="latest-laureus-news-container">
    <h2 className="latest-laureus-news-title">AKTUELLE LAUREUS NEUIGKEITEN</h2>
    <div className="card-container">
      {data.map((item) => (
        <LatestLaureusNewsCard key={item.title} news={item} />
      ))}
    </div>
    <div className="latest-laureus-news-button-container">
      <a
        className="latest-laureus-news-link"
        href="https://www.laureus.com/news"
      >
        <Button className="latest-laureus-news-button" variant="contained">
          MEHR LADEN
        </Button>
      </a>
    </div>
  </div>
);
export default LatestLaureusNews;
