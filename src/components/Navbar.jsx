import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { UilImport } from "@iconscout/react-unicons";
import { handleOnMouseHover } from "./config/glowy-hover-effect";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const urlDownloadResume =
    "https://drive.google.com/uc?id=1PuSpXB12w1xXvqMgcNhKRAJ7FC3D0qcY&export=download";

  let configReactScroll = {};
  if (width >= 600) {
    configReactScroll = {
      offset: -130,
      duration: 100,
    };
  } else {
    configReactScroll = {
      offset: -100,
      duration: 100,
    };
  }

  useEffect(() => {
    for (const item of document.querySelectorAll(".navbar")) {
      item.onmousemove = (e) => handleOnMouseHover(e);
    }
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <header className="header">
      <nav className={`navbar ${isOpen && "open"}`}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={configReactScroll.offset}
          duration={configReactScroll.duration}
          className="navbar__logo"
        >
          {width >= 600 ? "Stivenns" : "Stv."}
        </Link>
        <ul className={`navbar__items ${isOpen && "open"}`}>
          <li className="navbar__item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={configReactScroll.offset}
              duration={configReactScroll.duration}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
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
              onClick={() => {
                setIsOpen(!isOpen);
              }}
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
              onClick={() => {
                setIsOpen(!isOpen);
              }}
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
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
        <a
          href={urlDownloadResume}
          className="navbar__resume"
          rel="noopener noreferrer"
        >
          <UilImport size="16" /> Resume
        </a>
        <div
          className={`navbar__toggle ${isOpen && "open"}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};
