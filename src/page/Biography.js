import React from "react";
import { SubTitle, Text, Title, SubTitle3 } from "../globalComponents";
import Imgbio from "../images/13-min.webp";
import "../css/Biography.css";
import { Helmet } from "react-helmet";

import { useTranslation } from "react-i18next";

export default function Biography() {
  //Translate
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t("biographyTitle")} - Maja Lazovic</title>
      </Helmet>

      <div className="wrapper">
        <Title>{t("biographyTitle")}</Title>

        <div className="container-bio">
          <div className="img-bio">
            <img src={Imgbio} alt="Bio Img" />
            <div style={{ padding: 10 }}>
              <Text style={{ padding: 0 }}>{t("cv")}</Text>
              <a className="cv" href="../MajaLazovicCV.pdf" download>
                CV
              </a>
            </div>
          </div>
          <div className="text-bio">
            <SubTitle style={{ textAlign: "center", marginTop: 0 }}>
              Maja Lazović
            </SubTitle>
            <SubTitle3 style={{ textAlign: "center", marginTop: "0" }}>
              {t("biographySubtitle")}
            </SubTitle3>

            <SubTitle3 style={{ color: "var(--red-color)" }}>
              {t("biographyAboutTitle")}
            </SubTitle3>
            <Text>{t("biographyText")}</Text>

            <div className="more-info">
              <div>
                <SubTitle3 style={{ color: "var(--red-color)" }}>
                  {t("biographyDetails")}
                </SubTitle3>
                <ul style={{ color: "var(--text-color)" }}>
                  <li>{t("bioHeight")} 165cm</li>
                  <li>{t("bioWidth")} 55kg</li>
                  <li>{t("bioShoe")} 39</li>
                  <li>{t("bioEyes")}</li>
                  <li>{t("bioHair")}</li>
                  <li>{t("bioDate")} 08.10.1994.</li>
                  <li>{t("bioCounty")}</li>
                </ul>
              </div>
              <div>
                <SubTitle3 style={{ color: "var(--red-color)" }}>
                  {t("getIn")}
                </SubTitle3>
                <ul style={{ color: "var(--text-color)" }}>
                  <li>Email: makoreografija@gmail.com </li>
                  <li>Beograd, Srbija, 11211 </li>
                  <li>Instagram: majciilo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
