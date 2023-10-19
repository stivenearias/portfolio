import React, { useRef, useEffect } from "react";
import workData from "./config/work-data";
import { UilExternalLinkAlt } from "@iconscout/react-unicons";
import { TitlesSection } from "./TitlesSection";
import { motion, useAnimation, useInView } from "framer-motion";

export const Work = () => {
  const refWorks = useRef(null);
  const workIsInView = useInView(refWorks, { once: true });

  const mainControl = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: -40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        staggerChildren: 0.15,
        delayChildren: 0.25,
      },
    }),
  };

  useEffect(() => {
    if (workIsInView) {
      mainControl.start("visible");
    } else {
      mainControl.start("hidden");
    }
  }, [workIsInView, mainControl]);

  return (
    <section id="work" className="work">
      <TitlesSection
        nameSection="work"
        title="Work"
        subtitle="Experience and projects"
      />
      <div ref={refWorks} className="work__container">
        {workData.map((work, i) => {
          return (
            <motion.article
              custom={i + 1}
              variants={variants}
              initial="hidden"
              animate={mainControl}
              whileHover={{ scale: 1.05 }}
              key={work.key}
              className="work__item"
            >
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
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};
