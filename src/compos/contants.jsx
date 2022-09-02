import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Contants = ({ lightmode, darkmode }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yfl4yvh",
        "template_0initsy",
        form.current,
        "user_Haw7geORIGqUyOapjh7SU"
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(false);
          setMessageSent(true);
          setLoading(false);
        },
        (error) => {
          setSuccess(false);
          setError(true);
          setLoading(false);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" style={{ color: lightmode ? "black" : "#e0e0e0" }}>
      <div className="contact__section--title--cont">
        <h2
          className="contact__section--title section__title"
          data-aos="fade-up"
        >
          Lets <span className="blue"> Talk</span>.
        </h2>
      </div>
      <div className="contact__form--cont">
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div
            className="contact__form--name"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <input
              disabled={messageSent || loading}
              type="text"
              className="form__name"
              placeholder="Name..."
              required
              name="name"
              style={{
                color: lightmode ? "black" : "#e0e0e0",
                background: lightmode ? "#e0e0e0" : "#0f0f0f",
                border: darkmode && "solid 1px white",
              }}
            />
          </div>
          <div
            className="contact__form--email"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <input
              disabled={messageSent || loading}
              type="email"
              name="email"
              placeholder="E-mail..."
              required
              className="form__email"
              style={{
                color: lightmode ? "black" : "#e0e0e0",
                background: lightmode ? "#e0e0e0" : "#0f0f0f",
                border: darkmode && "solid 1px white",
              }}
            />
          </div>
          <div
            className="contact__form--message"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <textarea
              disabled={messageSent || loading}
              type="text"
              name="message"
              placeholder="Message..."
              required
              className="form__message"
              style={{
                color: lightmode ? "black" : "#e0e0e0",
                background: lightmode ? "#e0e0e0" : "#0f0f0f",
                border: darkmode && "solid 1px white",
              }}
            />
          </div>
          {loading ? (
            <div className="contact__form--laoding-bar--cont contact__form--btn">
              <ClipLoader
                size={25}
                color={lightmode ? "#e0e0e0" : "black"}
                className="contact__form--laoding-bar"
              />
            </div>
          ) : (
            <button
              className="contact__form--btn"
              data-aos="fade-up"
              data-aos-duration="3500"
              style={{ color: lightmode ? "#e0e0e0" : "black" }}
            >
              <>
                <div className="svg-wrapper-1">
                  <div class="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>
                  <input
                    type="submit"
                    value="Send"
                    className="form__submit"
                    style={{ color: lightmode ? "#e0e0e0" : "black" }}
                  />
                </span>
              </>
            </button>
          )}
          {success && (
            <div
              style={{ color: lightmode ? "black" : "#e0e0e0" }}
              className="contacts__success--cont"
            >
              Success! your message has successfully reached me.
            </div>
          )}
          {error && (
            <div
              style={{ color: lightmode ? "black" : "#e0e0e0" }}
              className="contacts__error--cont"
            >
              Error! seems like there is something wrong...
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

AOS.init();
export default Contants;
