import React from "react";
import { UilLinkedinAlt, UilGithubAlt } from "@iconscout/react-unicons";

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__redes">
        <li className="footer__red">
          <a
            href="https://www.linkedin.com/in/stivenns/"
            target="_blank"
            rel="noreferrer"
          >
            <UilLinkedinAlt />
          </a>
        </li>
        <li className="footer__red">
          <a
            href="https://github.com/stivenearias"
            target="_blank"
            rel="noreferrer"
          >
            <UilGithubAlt />
          </a>
        </li>
      </ul>
      &copy; Stivenns {new Date().getFullYear()}
    </footer>
  );
};
