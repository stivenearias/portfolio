import React from "react";
import { Skills } from "./Skills";

export const About = () => {
  return (
    <section id="about" className="about">
      <h1 className="about__title">About</h1>
      <h2 className="about__subtitle">Why choose me?</h2>
      <div className="about__container">
        <div className="about__text">
          <img
            src="https://iili.io/J33Ci3G.jpg"
            className="about__img"
            alt="Frontend developer"
          />
          <p>
            With over{" "}
            <span className="about__text--important">
              four years of experience
            </span>{" "}
            as a frontend developer, my meticulous and receptive approach is an
            invaluable asset. I don't view my work as a burden but as a constant
            source of{" "}
            <span className="about__text--important">
              fun and responsibility.
            </span>{" "}
            I learn quickly and am loyal, meaning I always focus on my tasks and
            have no fear of asking for help when needed, avoiding any impact on
            the team's performance.
          </p>
          <br />
          <p>
            I'm passionate about
            <span className="about__text--important"> teamwork,</span> yet
            equally productive working independently. My life is guided by
            <span className="about__text--important">
              {" "}
              strong principles and values,{" "}
            </span>
            and my work ethic reflects my constant pursuit of excellence. I'm a
            natural perfectionist, and my preference for clear and consistent
            procedures ensures that projects are completed to the highest
            standards.
          </p>
          <br />
          <p>
            Furthermore, my
            <span className="about__text--important">
              {" "}
              analytical and logical approach{" "}
            </span>
            to problem-solving makes me a dependable asset. My constant desire
            to learn and grow ensures that I stay updated on the latest trends
            and technologies in frontend development. If you're looking for a{" "}
            <span className="about__text--important">
              highly competent frontend developer committed to quality,
            </span>{" "}
            I'm confident I'm the right choice. My ability to maintain harmony
            within the team and avoid conflicts is an added value that can drive
            your company towards success.
          </p>
        </div>
      </div>

      <Skills />
    </section>
  );
};
