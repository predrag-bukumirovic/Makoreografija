import React from "react";
import "../css/Cheerleading.css";
import { DataTvShow } from "../data/data";
import Zivizasvojustvar from "../videos/zivizasvojustvar.mp4";
import { Text, Title } from "../globalComponents";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function CommercialsTvShow() {
  //Translate
  const { t } = useTranslation();

  return (
    <div>
      <div className="video-ar wrapper">
        <Helmet>
          <title>{t("tvTitle")} - Maja Lazovic</title>
        </Helmet>
        <Title>{t("tvTitle")}</Title>
        <div className="video-grid">
          {DataTvShow.map((video) => {
            return (
              <div key={video.id}>
                <video controls>
                  <source src={video.srcTvShow} type="video/mp4" />
                </video>
              </div>
            );
          })}
          <div>
            <video controls>
              <source src={Zivizasvojustvar} type="video/mp4" />
            </video>

            <Text>{t("snText")}</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
