import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { UilAngleLeftB, UilAngleRightB } from "@iconscout/react-unicons";
import { Skills } from "./Skills";

export const About = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const imgPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const imgNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="about" className="about">
      <h1 className="about__title">About</h1>
      <h2 className="about__subtitle">Why choose me?</h2>
      <div className="about__container">
        {/* Carrousel image */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <img
                src="https://iili.io/J33C64s.jpg"
                className="embla__img"
                alt="Frontend developer 1"
              />
            </div>
            <div className="embla__slide">
              <img
                src="https://iili.io/J33Ctu2.jpg"
                className="embla__img"
                alt="Frontend developer 2"
              />
            </div>
            <div className="embla__slide">
              <img
                src="https://iili.io/J33CQyl.jpg"
                className="embla__img"
                alt="Frontend developer 3"
              />
            </div>
            <div className="embla__slide">
              <img
                src="https://iili.io/J33Ci3G.jpg"
                className="embla__img"
                alt="Frontend developer 4"
              />
            </div>
          </div>
          <div className="embla__btns">
            <button className="embla__prev" onClick={imgPrev}>
              <UilAngleLeftB />
            </button>
            <button className="embla__next" onClick={imgNext}>
              <UilAngleRightB />
            </button>
          </div>
        </div>

        {/* Text container */}
        <div className="about__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <Skills />
    </section>
  );
};
