import React from "react";
import { useTranslation } from "react-i18next";
import "../css/Footer.css";
import { SubTitle } from "../globalComponents";
import Logo from "../images/majalogo2.png";

export default function Footer() {
  //Translate
  const { t } = useTranslation();
  return (
    <div style={{ marginTop: 20 }}>
      <hr />
      <div className="footer">
        <div>
          <img style={{ marginTop: 15 }} src={Logo} alt="Logo footer" />
        </div>

        <div>
          <SubTitle style={{ marginTop: 15 }}>{t("links")}</SubTitle>
          <a href="/dance-studio">{t("studioTitle")}</a>
          <a href="/moulin-rouge">Moulin rouge</a>
          <a href="/music">{t("musicTitle")}</a>
          <a href="/kkcz">KKCZ</a>
          <a href="/f4-euroleague">F4 {t("f4Title")}</a>
          <a href="/serbian-national-team">{t("snTeamTitle")}</a>
          <a href="/gallery">{t("galleryTitle")}</a>
          <a href="/biography">{t("biographyTitle")}</a>
          <a href="/contact">{t("contactTitle")}</a>
        </div>

        <div className="footer-contact">
          <SubTitle style={{ marginTop: 15 }}>{t("contactTitle")}</SubTitle>
          <a href="mailto: makoreografija@gmail.com">
            makoreografija@gmail.com
          </a>
          <a href="https://www.makoreografija.com">www.makoreografija.com</a>

          <a href="tel: +381 66 406780">+381 66 406780</a>
        </div>

        <div>
          <SubTitle style={{ marginTop: 15 }}>{t("social")}</SubTitle>
          <a
            href="https://www.instagram.com/majciilo/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/maja-lazović-761323140"
            target="_blank"
            rel="noreferrer"
          >
            Linked in
          </a>
          <a
            href="https://www.facebook.com/MaajaLazovic"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
      <div className="copyright">
        © MAkoreografiJA 2022. | {t("by")} {""}
        <a
          className="link"
          href="https://www.gold-digital.rs"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "underline" }}
        >
          Gold Digital 
        </a>
      </div>
    </div>
  );
}
