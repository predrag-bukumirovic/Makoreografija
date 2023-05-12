import React, { lazy, Suspense, useEffect } from "react";
import "../css/Cheerleading.css";
import "../css/Home.css";
import { Text, Title } from "../globalComponents";
import { Helmet } from "react-helmet";
import VideoKKCZ from "../videos/INTRO.mp4";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Videos = lazy(() => import("../components/KKCZ/Videos"));

export default function KKCZ() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  //Translate
  const { t } = useTranslation();
  return (
    <div>
      <div className="video-home-rs">
        <video style={{ marginTop: "0" }} loop autoPlay muted>
          <source src={`${VideoKKCZ}#t=1`} type="video/mp4" />
        </video>
      </div>
      <Helmet>
        <title>{t("kkczTitle")} - Maja Lazovic</title>
      </Helmet>
      <Title data-aos="zoom-in">{t("kkczTitle")}</Title>
      <Text style={{ textAlign: "center" }} data-aos="zoom-in">
        {t("kkczText")}
      </Text>
      <Suspense fallback={<div>Loading videos...</div>}>
        <Videos />
      </Suspense>
    </div>
  );
}
