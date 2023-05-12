import React, { useState } from "react";
import { SubTitle, Text, Title } from "../globalComponents";
import "../css/Contact.css";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";
import { Snackbar, Slide, IconButton } from "@material-ui/core";
import { Close, Instagram, Facebook, LinkedIn } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [open, setOpen] = useState(false);

  //Send email start
  function sendEmail(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_cwp7qv7",
        "template_80nhr2s",
        event.target,
        "-sM6vkwLlxBvvMSvF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );
    setOpen(true);
    event.target.reset();
  } //Send email end

  const closeAlertMessage = () => {
    setOpen(false);
  };

  //Translate
  const { t } = useTranslation();
  return (
    <div>
      <div className="wrapper">
        <Helmet>
          <title>{t("contactTitle")} - Maja Lazović</title>
        </Helmet>
        <Title>{t("contactTitle")}</Title>
        <div className="container-form">
          <div className="contact-form">
            <Text>{t("contactText")}</Text>

            <form onSubmit={sendEmail}>
              <label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t("labelName")}
                />
              </label>

              <label>
                <input
                  id="email-value"
                  type="email"
                  name="email"
                  required
                  placeholder={t("labelEmail")}
                />
              </label>

              <label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder={t("labelSubject")}
                />
              </label>

              <label>
                <textarea
                  type="text"
                  name="message"
                  required
                  placeholder={t("labelMessage")}
                />
              </label>

              <button title="Posalji poruku">{t("contactBtn")}</button>
            </form>

            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              TransitionComponent={Slide}
              open={open}
              autoHideDuration={2000}
              message={t("sentMessage")}
              action={
                <IconButton>
                  <Close
                    style={{ color: "#fff" }}
                    onClick={closeAlertMessage}
                  />
                </IconButton>
              }
            />
          </div>
          <div className="contact-info">
            <SubTitle>Email:</SubTitle>
            <a href="mailto: makoreografija@gmail.com">
              <Text>makoreografija@gmail.com</Text>
            </a>
            <hr />
            <SubTitle>{t("social")}:</SubTitle>
            <div className="social">
              <a href="https://www.instagram.com/majciilo/">
                <Instagram style={{ color: "#fff" }} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/in/maja-lazović-761323140">
                <LinkedIn style={{ color: "#fff" }} alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com/MaajaLazovic">
                <Facebook style={{ color: "#fff" }} alt="Facebook" />
              </a>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
