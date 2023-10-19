import React, { useRef, useEffect } from "react";
import { Skills } from "./Skills";
import { motion, useAnimation, useInView } from "framer-motion";
import { TitlesSection } from "./TitlesSection";

export const About = () => {
  const refContent = useRef(null);
  const contentIsInView = useInView(refContent);

  const mainControlContent = useAnimation();

  useEffect(() => {
    if (contentIsInView) {
      mainControlContent.start("visible");
    } else {
      mainControlContent.start("hidden");
    }
  }, [contentIsInView, mainControlContent]);

  return (
    <section id="about">
      <section className="about">
        <TitlesSection
          nameSection="about"
          title="About"
          subtitle="Why choose me?"
        />
        <div className="about__container">
          <div ref={refContent} className="about__text">
            <motion.img
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControlContent}
              transition={{ duration: 0.8 }}
              src="https://iili.io/J33Ci3G.jpg"
              className="about__img"
              alt="Frontend developer"
            />
            <motion.p
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControlContent}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              With over{" "}
              <span className="about__text--important">
                four years of experience
              </span>{" "}
              as a frontend developer, my meticulous and receptive approach is
              an invaluable asset. I don't view my work as a burden but as a
              constant source of{" "}
              <span className="about__text--important">
                fun and responsibility.
              </span>{" "}
              I learn quickly and am loyal, meaning I always focus on my tasks
              and have no fear of asking for help when needed, avoiding any
              impact on the team's performance.
            </motion.p>
            <br />
            <motion.p
              variants={{
                hidden: { opacity: 0, x: 110 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControlContent}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I'm passionate about
              <span className="about__text--important"> teamwork,</span> yet
              equally productive working independently. My life is guided by
              <span className="about__text--important">
                {" "}
                strong principles and values,{" "}
              </span>
              and my work ethic reflects my constant pursuit of excellence. I'm
              a natural perfectionist, and my preference for clear and
              consistent procedures ensures that projects are completed to the
              highest standards.
            </motion.p>
            <br />
            <motion.p
              variants={{
                hidden: { opacity: 0, x: 120 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControlContent}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Furthermore, my
              <span className="about__text--important">
                {" "}
                analytical and logical approach{" "}
              </span>
              to problem-solving makes me a dependable asset. My constant desire
              to learn and grow makes me give everything to be able to leave
              efficient and effective results in my work as a frontend
              developer. If you're looking for a{" "}
              <span className="about__text--important">
                highly competent frontend developer committed to quality,
              </span>{" "}
              I'm confident I'm the right choice. My ability to maintain harmony
              within the team and avoid conflicts is an added value that can
              drive your company towards success.
            </motion.p>
          </div>
        </div>
      </section>
      <Skills />
    </section>
  );
};
