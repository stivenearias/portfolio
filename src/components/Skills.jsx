import React from "react";
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
} from "devicons-react";

export const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h1 className="skills__title">Skills</h1>
      <h2 className="skills__subtitle">To bring projects to life</h2>
      <div className="skills__container">
        <div className="skills__skill">
          <Html5Plain />
          <p>HTML</p>
        </div>
        <div className="skills__skill">
          <Css3Plain />
          <p>CSS</p>
        </div>
        <div className="skills__skill">
          <JavascriptPlain />
          <p>JavaScript</p>
        </div>
        <div className="skills__skill">
          <ReactOriginal />
          <p>ReactJS</p>
        </div>
        <div className="skills__skill">
          <SassOriginal />
          <p>SASS</p>
        </div>
        <div className="skills__skill">
          <GitPlain />
          <p>Git</p>
        </div>
        <div className="skills__skill">
          <GithubOriginal />
          <p>GitHub</p>
        </div>
        <div className="skills__skill">
          <PhpPlain />
          <p>PHP</p>
        </div>
        <div className="skills__skill">
          <JqueryPlain />
          <p>JQuery</p>
        </div>
        <div className="skills__skill">
          <BootstrapPlain />
          <p>Bootstrap</p>
        </div>
      </div>
    </section>
  );
};
