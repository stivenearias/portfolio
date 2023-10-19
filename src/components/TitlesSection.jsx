import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const TitlesSection = ({ nameSection, title, subtitle }) => {
  const refTitle = useRef(null);
  const titleIsInView = useInView(refTitle);

  const mainControl = useAnimation();

  useEffect(() => {
    if (titleIsInView) {
      mainControl.start("visible");
    } else {
      mainControl.start("hidden");
    }
  }, [titleIsInView, mainControl]);

  return (
    <>
      <motion.h1
        ref={refTitle}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.7 }}
        className={`${nameSection}__title`}
      >
        {title}
      </motion.h1>
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.7 }}
        className={`${nameSection}__subtitle`}
      >
        {subtitle}
      </motion.h2>
    </>
  );
};
