import React from "react";
import { useForm } from "react-hook-form";
import { UilMessage } from "@iconscout/react-unicons";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendMail = (data) => {
    console.log(data);
  };

  return (
    <section id="contact" className="contact">
      <h1 className="contact__title">Contact</h1>
      <h2 className="contact__subtitle">Let's fun code together!</h2>
      <div className="contact__container">
        <form
          id="sendMail"
          className="contact__form"
          onSubmit={handleSubmit(sendMail)}
        >
          <div className="contact__input-box">
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
          </div>

          <div className="contact__input-box">
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
          </div>

          <div className="contact__input-box">
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
          </div>
          <button type="submit" form="sendMail" className="contact__submit">
            Send Message
            <UilMessage />
          </button>
        </form>
      </div>
    </section>
  );
};
