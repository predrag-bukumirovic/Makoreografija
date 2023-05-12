import React from "react";
import "../css/Cheerleading.css";
import { DataSerbiaTeam } from "../data/data";
import { Text, Title } from "../globalComponents";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function SerbianNationalTeam() {
  //Translate
  const { t } = useTranslation();
  return (
    <div>
      <div className="wrapper">
        <Helmet>
          <title>{t("snTeamTitle")} - Maja Lazovic</title>
        </Helmet>
        <Title>{t("snTeamTitle")}</Title>
        {DataSerbiaTeam.map((video) => {
          return (
            <div key={video.id} className="vidoes-snt">
              <video controls>
                <source src={video.srcSrbTeam} type="video/mp4" />
              </video>

              <Text>{t("snText")}</Text>
            </div>
          );
        })}
      </div>
    </div>
  );
}
