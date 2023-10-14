import React from "react";
import { Link } from "react-scroll";
import { UilLinkedinAlt, UilGithubAlt } from "@iconscout/react-unicons";

export const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__container">
        <div className="home__text">
          <h1 className="home__title">
            Hi! My name is <span>Stivenns</span>
          </h1>
          <h2 className="home__subtitle">I'm Frontend Developer</h2>
          <p className="home__description">
            I enjoy what I do and I learn quickly, that's why I don't just work,
            I have fun and that's why my results reflect effectiveness.
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
            className="home__btn"
          >
            Hire me
          </Link>
        </div>
        <div className="home__img">
          <img
            src="https://iili.io/J33Ci3G.jpg"
            alt="Vector of a character programming a website"
          />
        </div>
        <ul className="home__redes">
          <li className="home__red">
            <a
              href="https://www.linkedin.com/in/stivenns/"
              target="_blank"
              rel="noreferrer"
            >
              <UilLinkedinAlt />
            </a>
          </li>
          <li className="home__red">
            <a
              href="https://github.com/stivenearias"
              target="_blank"
              rel="noreferrer"
            >
              <UilGithubAlt />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
