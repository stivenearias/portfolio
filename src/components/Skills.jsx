import React, { useRef, useEffect } from "react";
import {
  Html5Plain,
  Css3Plain,
  JavascriptPlain,
  ReactOriginal,
  SassOriginal,
  GitPlain,
  GithubOriginal,
  PhpPlain,
  JqueryPlain,
  BootstrapPlain,
  TypescriptPlain,
  JavaPlain,
  NodejsPlain,
  ExpressOriginal,
  MongodbPlain,
  AzuresqldatabasePlain,
} from "devicons-react";
import { TitlesSection } from "./TitlesSection";
import { motion, useAnimation, useInView } from "framer-motion";

export const Skills = () => {
  const refSkills = useRef(null);
  const skillIsInView = useInView(refSkills, { once: true });

  const mainControl = useAnimation();

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (skillIsInView) {
      mainControl.start("visible");
    } else {
      mainControl.start("hidden");
    }
  }, [skillIsInView, mainControl]);

  return (
    <section id="skills" className="skills">
      <TitlesSection
        nameSection="skills"
        title="Skills"
        subtitle="To bring projects to life"
      />

      <motion.div
        ref={refSkills}
        variants={container}
        initial="hidden"
        animate={mainControl}
        className="skills__container"
      >
        <motion.div variants={item} className="skills__skill">
          <Html5Plain />
          <p>HTML</p>
        </motion.div>
        <motion.div variants={item} className="skills__skill">
          <Css3Plain />
          <p>CSS</p>
        </motion.div>
        <motion.div variants={item} className="skills__skill">
          <SassOriginal />
          <p>SASS</p>
        </motion.div>
        <motion.div variants={item} className="skills__skill">
          <JavascriptPlain />
          <p>JavaScript</p>
        </motion.div>
        <motion.div variants={item} className="skills__skill">
          <TypescriptPlain />
          <p>TypeScript</p>
        </motion.div>
        <motion.div variants={item} className="skills__skill">
          <ReactOriginal />
          <p>ReactJS</p>
        </motion.div>
        <motion.div variants={item} className="skills__skill">
          <NodejsPlain />
          <p>NodeJS</p>
        </motion.div>
        <motion.div variants={item} className="skills__skill">
          <ExpressOriginal />
          <p>ExpressJS</p>
        </motion.div>
        <motion.div variants={item} className="skills__skill">
          <MongodbPlain />
          <p>MongoDB</p>
        </motion.div>
        <motion.div variants={item} className="skills__skill">
          <AzuresqldatabasePlain />
          <p>SQL</p>
        </motion.div>
        <motion.div variants={item} className="skills__skill">
          <GitPlain />
          <p>Git</p>
        </motion.div>
        <motion.div variants={item} className="skills__skill">
          <GithubOriginal />
          <p>GitHub</p>
        </motion.div>
        <motion.div variants={item} className="skills__skill">
          <JavaPlain />
          <p>Java</p>
        </motion.div>
        <motion.div variants={item} className="skills__skill">
          <PhpPlain />
          <p>PHP</p>
        </motion.div>
        <motion.div variants={item} className="skills__skill">
          <JqueryPlain />
          <p>JQuery</p>
        </motion.div>
        <motion.div variants={item} className="skills__skill">
          <BootstrapPlain />
          <p>Bootstrap</p>
        </motion.div>
      </motion.div>
    </section>
  );
};
