import React from "react";
import workData from "./config/work-data";
import { UilExternalLinkAlt } from "@iconscout/react-unicons";

export const Work = () => {
  return (
    <section id="work" className="work">
      <h1 className="work__title">Work</h1>
      <h2 className="work__subtitle">Experience and projects</h2>
      <div className="work__container">
        {workData.map((work) => {
          return (
            <article key={work.key} className="work__item">
              <div className="work__container-img">
                <img src={work.img} alt={work.title} className="work__img" />
              </div>
              <div className="work__text">
                <div className="work__first-data">
                  <p className="work__type">{work.type}</p>
                  <p className="work__position">{work.position}</p>
                  <p className="work__title-item">{work.title}</p>
                  <p className="work__date">{work.date}</p>
                </div>
                {/* Show description */}
                {Array.isArray(work.description) ? (
                  <ul className="work__descriptions">
                    {work.description.map((desc, index) => (
                      <li key={index} className="work__description">
                        {desc}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="work__descriptions">{work.description}</p>
                )}
                {/* Show tools */}
                {Array.isArray(work.tools) && (
                  <ul className="work__tools">
                    {work.tools.map((tool, index) => (
                      <li key={index} className="work__tool">
                        {tool}
                      </li>
                    ))}
                  </ul>
                )}
                {/* Show buttons */}
                <div className="work__btns">
                  {work.buttons.map((button) => {
                    return (
                      button.type === "web" && (
                        <a
                          key={button.key}
                          href={button.link}
                          target="_blank"
                          className="work__btn"
                          rel="noopener noreferrer"
                        >
                          {<UilExternalLinkAlt />}
                        </a>
                      )
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
