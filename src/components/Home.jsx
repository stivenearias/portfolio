import React, { useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { UilLinkedinAlt, UilGithubAlt } from "@iconscout/react-unicons";
import { motion, useInView, useAnimation } from "framer-motion";

export const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <section id="home" className="home">
      <div className="home__container">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7 }}
          className="home__text"
        >
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
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ ease: "easeOut", duration: 0.7 }}
          className="home__img"
        >
          <img
            src="https://iili.io/J33Ci3G.jpg"
            alt="Vector of a character programming a website"
          />
        </motion.div>
        <motion.ul
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.7 }}
          className="home__redes"
        >
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
        </motion.ul>
      </div>
    </section>
  );
};
