import React, { lazy, Suspense, useEffect } from "react";
import "../css/Cheerleading.css";
import { Text, Title } from "../globalComponents";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Videos = lazy(() => import("../components/F4Euroleague/Videos"));

export default function F4Euroleague() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  //Translate
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>F4 {t("f4Title")} - Maja Lazovic</title>
      </Helmet>

      <div className="video-ar wrapper">
        <Title data-aos="zoom-in">F4 {t("f4Title")}</Title>
        <Text style={{ textAlign: "center" }} data-aos="zoom-in">
          {t("f4Text")}
        </Text>
        <Suspense fallback={<div>Loading videos...</div>}>
          <Videos />
        </Suspense>
      </div>
    </div>
  );
}
