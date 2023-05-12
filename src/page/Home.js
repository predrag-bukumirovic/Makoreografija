import React, { lazy } from "react";
import videoHome from "../videos/Teaser(sajt).mp4";
import VideoMobile from "../videos/promovideo.mp4";
import ImgPles from "../images/casopis.jpeg";
import "../css/Home.css";
import "../css/Cheerleading.css";
import DeskFlajer from "../images/studio2.jpeg";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Text, Title } from "../globalComponents";

const SliderCard = lazy(() => import("../components/SliderCard"));

export default function Home() {
  //Translate
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>{t("homeTitle")} - Maja Lazovic</title>
      </Helmet>

      <div className="video-home-rs">
        <video
          className="video-desktop"
          style={{ marginTop: "0" }}
          loop
          autoPlay
          muted
        >
          <source src={videoHome} type="video/mp4" />
        </video>
      </div>

      <div className="video-home-rs">
        <video
          className="video-mobile"
          style={{ marginTop: "0" }}
          loop
          autoPlay
          muted
        >
          <source src={`${VideoMobile}`} type="video/mp4" />
        </video>
      </div>

      <div className="img-polja">
        <Title>{t("studioTitle")}</Title>
        <div className="polja-container">
          <img className="mobileFlajer" src={ImgPles} alt="Polja ples" />
          <img className="deskFlajer" src={DeskFlajer} alt="Desktop flajer" />
          <Text
            style={{
              textAlign: "start",
              marginTop: "20px",
            }}
          >
            {t("studioTextHome")}
            <a className="more-link" href="/dance-studio">
              {t("btnMore")}
            </a>
          </Text>
        </div>
      </div>

      <SliderCard />
    </div>
  );
}
