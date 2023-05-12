import React from "react";
import { DataMusical } from "../data/data";
import { Text, Title } from "../globalComponents";
import "../css/Cheerleading.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function Musical() {
  //Translate
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Musical - Maja Lazovic</title>
      </Helmet>

      <div className="wrapper">
        <Title>Musical</Title>
        <Text style={{ textAlign: "center" }}>{t("musicalText")}</Text>
        <div className="video-grid">
          {DataMusical.map((video) => {
            return (
              <div key={video.id}>
                <video data-aos="fade-up" controls>
                  <source src={video.srcMusical} type="video/mp4" />
                </video>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
