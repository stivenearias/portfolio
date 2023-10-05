import React from "react";
import { Link } from "react-scroll";
import { UilImport } from "@iconscout/react-unicons";
// import "../js/GlowyHoverEffect";

export const Navbar = () => {
  const urlDownloadResume =
    "https://drive.google.com/uc?id=1PuSpXB12w1xXvqMgcNhKRAJ7FC3D0qcY&export=download";
  const configReactScroll = {
    offset: -100,
    duration: 100,
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={configReactScroll.offset}
          duration={configReactScroll.duration}
          className="navbar__logo"
        >
          Stivenns
        </Link>
        <ul className="navbar__items">
          <li className="navbar__item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={configReactScroll.offset}
              duration={configReactScroll.duration}
            >
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={configReactScroll.offset}
              duration={configReactScroll.duration}
            >
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={configReactScroll.offset}
              duration={configReactScroll.duration}
            >
              Work
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={configReactScroll.offset}
              duration={configReactScroll.duration}
            >
              Contact
            </Link>
          </li>
          <li className="navbar__item">
            <a
              href={urlDownloadResume}
              className="navbar__resume"
              rel="noopener noreferrer"
            >
              <UilImport size="16" /> Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
