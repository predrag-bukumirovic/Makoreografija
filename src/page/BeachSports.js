import React from "react";
import "../css/Cheerleading.css";
import { DataBeachSports } from "../data/data";
import { SubTitle, Text, Title } from "../globalComponents";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function BeachSports() {
  //Translate
  const { t } = useTranslation();
  return (
    <div>
      <div className="wrapper">
        <Helmet>
          <title>{t("beachTitle")} - Maja Lazovic</title>
        </Helmet>
        <Title>{t("beachTitle")}</Title>
        {DataBeachSports.map((video) => {
          return (
            <div key={video.id} className="vidoes-snt">
              <SubTitle>{video.title}</SubTitle>

              <video controls>
                <source src={video.srcBeach} type="video/mp4" />
              </video>

              <Text>{t("snText")}</Text>
            </div>
          );
        })}
      </div>
    </div>
  );
}
