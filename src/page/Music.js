import React from "react";
import { SubTitle, Title } from "../globalComponents";
import "../css/Music.css";
import { Helmet } from "react-helmet";
import LazyLoad from "react-lazyload";
import { useTranslation } from "react-i18next";

export default function Music() {
  //Translate
  const { t } = useTranslation();
  return (
    <div>
      <div className="wrapper">
        <Helmet>
          <title>{t("musicTitle")} - Maja Lazovic</title>
        </Helmet>
        <Title>{t("musicTitle")}</Title>

        <div className="row-music">
          <div>
            <SubTitle>THCF - Gde si poš'o (OFFICIAL VIDEO), Dancer</SubTitle>
            <LazyLoad height={315}>
              <iframe
                height="315"
                src="https://www.youtube.com/embed/mAWDgpRs044"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </LazyLoad>
          </div>

          <div>
            <SubTitle>
              Dženan Lončarević „Nema suza“ - Qualification for Eurovision Song
              Contest, Dancer
            </SubTitle>
            <LazyLoad height={315}>
              <iframe
                height="315"
                src="https://www.youtube-nocookie.com/embed/STrJkVCa_KA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </LazyLoad>
          </div>
          <div>
            <SubTitle>Zdravko Ćolić „Ono malo sreće“ , Dancer</SubTitle>
            <LazyLoad height={315}>
              <iframe
                height="315"
                src="https://www.youtube.com/embed/gdQsAbF2CsU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </LazyLoad>
          </div>
          <div>
            <SubTitle>Bajaga i instruktori „Bilo bi lako“, Dancer</SubTitle>
            <LazyLoad height={315}>
              <iframe
                height="315"
                src="https://www.youtube.com/embed/JRbo3Q88XXY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </LazyLoad>
          </div>
          <div>
            <SubTitle>
              Rasta i Ljupka Stević „Ćao, Ćao“, Choreographer and dancer
            </SubTitle>
            <LazyLoad height={315}>
              <iframe
                height="315"
                frameBorder="0"
                src="https://www.youtube.com/embed/UWOSr8ExfQA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
}
