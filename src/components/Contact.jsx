import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { UilMessage, UilSmileBeam, UilSad } from "@iconscout/react-unicons";
import toast, { Toaster } from "react-hot-toast";
import { TitlesSection } from "./TitlesSection";
import { motion, useAnimation, useInView } from "framer-motion";

export const Contact = () => {
  const notifyOk = () => {
    toast(
      (t) => (
        <div className="contact__resultOK">
          <div className="contact__resultOK--container">
            <UilSmileBeam />
            <div className="contact__resultOK--msg">
              Your email was sent successfully!
              <br />I will contact you soon!
            </div>
          </div>
          <button
            className="contact__resultOK--close"
            onClick={() => toast.dismiss(t.id)}
          >
            x
          </button>
        </div>
      ),
      {
        duration: 6000,
        position: "bottom-right",
        style: {
          background: "transparent",
          boxShadow: "none",
          maxWidth: "none",
          padding: "unset",
          borderRadius: "unset",
        },
      }
    );
  };

  const notifyError = ({ name, email, message }) => {
    const mailto = `mailto:stivenearias@gmail.com?subject=** I want to hire you! From ${name}&body=Hi Stivenns!%0A%0A${name} is interested in you!%0A%0AFrom email: ${email}%0A%0AMessage: ${message}%0A%0A`;

    toast(
      (t) => (
        <div className="contact__resultError">
          <div className="contact__resultError--container">
            <UilSad />
            <div className="contact__resultError--msg">
              There was a problem sending your email.
              <br />
              Please try again or write to me by clicking
              <a
                href={mailto}
                onClick={() => toast.dismiss(t.id)}
                className="contact__resultError--click"
              >
                &nbsp;here.
              </a>
            </div>
          </div>
          <button
            className="contact__resultError--close"
            onClick={() => toast.dismiss(t.id)}
          >
            x
          </button>
        </div>
      ),
      {
        duration: 10000,
        position: "bottom-right",
        style: {
          background: "transparent",
          boxShadow: "none",
          maxWidth: "none",
          padding: "unset",
          borderRadius: "unset",
        },
      }
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const form = useRef();

  const sendEmail = (data) => {
    emailjs
      .sendForm(
        "service_5ol1klm",
        "template_8j9q7lu",
        form.current,
        "n4YYMZ7a8Z2R-79rq"
      )
      .then(
        (result) => {
          notifyOk();
          reset();
        },
        (error) => {
          notifyError(data);
        }
      );
  };

  const formIsInView = useInView(form);

  const mainControl = useAnimation();

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 120 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    if (formIsInView) {
      mainControl.start("visible");
    } else {
      mainControl.start("hidden");
    }
  }, [formIsInView, mainControl]);

  return (
    <section id="contact" className="contact">
      <TitlesSection
        nameSection="contact"
        title="Contact"
        subtitle="Let's fun code together!"
      />
      <div className="contact__container">
        <motion.form
          variants={container}
          initial="hidden"
          animate={mainControl}
          id="sendEmail"
          className="contact__form"
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
        >
          <motion.div
            variants={item}
            transition={{ duration: 0.7 }}
            className="contact__input-box"
          >
            <label className="contact__label">Your Name</label>
            <input
              type="text"
              className="contact__input"
              placeholder="Enter your name"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? true : false}
            />
            {errors.name?.type === "required" && (
              <p className="contact__error">Your name is required</p>
            )}
          </motion.div>

          <motion.div
            variants={item}
            transition={{ duration: 0.7 }}
            className="contact__input-box"
          >
            <label className="contact__label">Email Address</label>
            <input
              type="email"
              className="contact__input"
              placeholder="Enter your email address"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
              })}
              aria-invalid={errors.email ? true : false}
            />
            {errors.email?.type === "required" && (
              <p className="contact__error">Your email address is required</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="contact__error">Enter a valid email</p>
            )}
          </motion.div>

          <motion.div
            variants={item}
            transition={{ duration: 0.7 }}
            className="contact__input-box"
          >
            <label className="contact__label">Your Message</label>
            <textarea
              className="contact__input contact__textarea"
              placeholder="Hello, I'm sure we can create code together. Tell me what you think and let's work together!"
              {...register("message", { required: true, maxLength: 1000 })}
              aria-invalid={errors.message ? true : false}
            />
            {errors.message?.type === "required" && (
              <p className="contact__error">Your message is required</p>
            )}
            {errors.message?.type === "maxLength" && (
              <p className="contact__error">
                Your message is very long, maximum 1000 characters
              </p>
            )}
          </motion.div>
          <motion.button
            variants={item}
            transition={{ duration: 0.7 }}
            type="submit"
            form="sendEmail"
            className="contact__submit"
          >
            Send Message
            <UilMessage />
          </motion.button>
        </motion.form>
      </div>
      <Toaster />
    </section>
  );
};
