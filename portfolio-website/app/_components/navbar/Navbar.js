"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./Navbar.css";
import { categories } from "./navbarItems";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "./laureus_sport_logo_ger.svg";

function Navbar() {
  const [dropdownIndex, setDropdownIndex] = useState(-1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleAccordionMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };
  const handleIndexChange = (index) => {
    setDropdownIndex(index);
  };

  return (
    <nav className="navbar">
      <div className="wrapper-container">
      <Link href="/">
        <Image src={logo} width={72} height={68} alt="Logo Laureus" />
      </Link>
      <div
        className={`nav-menu-icon ${isMenuOpen ? "active" : ""}`}
        onClick={toggleAccordionMenu}
      >
        {isMenuOpen ? (
          <CloseIcon className="nav-custom-icon" fontSize="large" />
        ) : (
          <MenuIcon className="nav-custom-icon" fontSize="large" />
        )}
      </div>

      <ul className="nav-items">
        {categories.map((category, index) => (
          <li
            key={category.id}
            className={`nav-item ${index === dropdownIndex ? "active" : ""}`}
            onMouseEnter={() => handleIndexChange(index)}
            onMouseLeave={() => handleIndexChange(-1)}
          >
            <Link href={category.path}>
              {category.title}
              <span>
                {index === dropdownIndex ? (
                  <KeyboardArrowUpIcon
                    className="nav-custom-icon"
                    fontSize="smaller"
                  />
                ) : (
                  <KeyboardArrowDownIcon
                    className="nav-custom-icon"
                    fontSize="smaller"
                  />
                )}
              </span>
            </Link>
            {index === dropdownIndex && (
              <div className="nav-dropdown">
                <ul>
                  {category.subcategories.map(
                    ({ id, path, title, description }) => (
                      <li key={id}>
                        <Link href={path}>{title}</Link>
                        <p>{description}</p>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className={`nav-accordion-menu ${isMenuOpen ? "show" : ""}`}>
        {categories.map((category) => (
          <Accordion key={category.id}>
            <AccordionSummary
              expandIcon={<KeyboardArrowDownIcon fontSize="large" />}
            >
              {category.title}
            </AccordionSummary>
            <AccordionDetails>
              <ul className="nav-accordion-submenu">
                {category.subcategories.map(
                  ({ id, path, title, description }) => (
                    <li key={id}>
                      <Link href={path}>{title}</Link>
                      <p>{description}</p>
                    </li>
                  )
                )}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
