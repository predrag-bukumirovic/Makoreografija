import React, { lazy, Suspense } from "react";
import "../css/Cheerleading.css";
import { Title } from "../globalComponents";
import { Helmet } from "react-helmet";

import { useTranslation } from "react-i18next";

function Gallery() {
  const Images = lazy(() => import("../components/Gallery/Images"));
  //Translate
  const { t } = useTranslation();
  return (
    <div>
      <div className="wrapper">
        <Helmet>
          <title>{t("galleryTitle")} - Maja Lazovic</title>
        </Helmet>
        <Title>{t("galleryTitle")}</Title>

        <Suspense fallback={<div>Loading...</div>}>
          <Images />
        </Suspense>
      </div>
    </div>
  );
}

export default Gallery;

//
