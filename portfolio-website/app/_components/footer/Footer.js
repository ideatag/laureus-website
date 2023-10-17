'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './Footer.css';
import { FooterMediaLink, FooterCard } from './FooterCard';
import { socialMediaLinks } from './footerData';
import { footerInformationLinks } from './footerData';
import IWClogo from 'public/images/footer/IWC-Logo5.png';
import MSlogo from 'public/images/footer/MSlogo.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="wrapper-container">
        <div className="partners-social-media-align">
          <div className="partners-links">
            <Link href="https://www.laureus.de/foundation/partner/">
              <img
                className="partners-image"
                src="https://www.laureus.de/wp-content/uploads/2016/04/MERCEDES-BENZ.png"
                alt="Partner-Mercedes-Benz"
              />
            </Link>
            <Link href="https://www.laureus.de/foundation/partner/">
              <Image
                className="partners-image iwc-logo"
                src={IWClogo}
                alt="Partner-IWC"
              />
            </Link>
            <Link href="https://www.laureus.de/foundation/partner/">
              <Image
                className="partners-image ms-logo"
                src={MSlogo}
                alt="Partner-Motorworld-Group"
              />
            </Link>
          </div>

          <div className="footer-information-links">
            {footerInformationLinks.map(item => (
              <FooterCard key={item.text} info={item} />
            ))}
          </div>

          <div className="footer-paragraphs-aligned">
            <p className="footer-paragraph">
              Laureus World Sports Awards Limited is a company registered in
              England and Wales (Company Number 03822952) whose registered
              office is at 15 Hill Street, London, W1J 5QT.
            </p>

            <div className="footer-horizontal-line"></div>
            <div className="copyright-credits-align">
              <p className="footer-paragraph-copyright">
                Copyright © 2000 - 2023 Laureus World Sports Awards Ltd. All
                rights reserved.
              </p>
              <p className="footer-paragraph-credits">
                Credits Images: © Getty Images; Getty Images for Laureus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
