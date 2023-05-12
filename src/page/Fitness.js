import React, { lazy, Suspense, useEffect } from "react";
import { SubTitle, Title } from "../globalComponents";
import "../css/Cheerleading.css";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
import Images from "../components/Fitness/Images";
import { useTranslation } from "react-i18next";

const Videos = lazy(() => import("../components/Fitness/Videos"));

export default function Fitness() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  //Translate
  const { t } = useTranslation();
  return (
    <div>
      <div className="wrapper">
        <Helmet>
          <title>Fitness - Maja Lazovic</title>
        </Helmet>
        <Title>Fitness</Title>

        <Suspense fallback={<div>Loading videos...</div>}>
          <Videos />
        </Suspense>

        <SubTitle style={{ textAlign: "center" }}>{t("fitnessTitle")}</SubTitle>

        <Suspense fallback={<div>Loading images...</div>}>
          <Images />
        </Suspense>
      </div>
    </div>
  );
}
