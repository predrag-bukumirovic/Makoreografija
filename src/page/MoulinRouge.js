import React, { useEffect } from "react";
import { ContainerTitle, SubTitle, Text } from "../globalComponents";
import PlesomDoPariza from "../videos/MajaLazovic_plesomdoPariza.mp4";
import "../css/Mouling.css";
import "../css/Cheerleading.css";
import { DataMoulin } from "../data/data";
import MoulinImg from "../images/06-min.webp";
import PlesomDoParizaPoster from "../images/viceposter.jpeg";
import { ImageViewer } from "react-image-viewer-dv";
import Helmet from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
import LazyLoad from "react-lazyload";
import { useTranslation } from "react-i18next";

export default function MoulinRouge() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  //Translate
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Moulin Rouge - Maja Lazovic</title>
      </Helmet>

      <div className="wrapper">
        <ContainerTitle className="mou-img">
          <img src={MoulinImg} alt="MoulinImg" />
        </ContainerTitle>
        <div className="container-video">
          <video
            data-aos="zoom-in"
            preload="none"
            poster={PlesomDoParizaPoster}
            controls
            className="moulin-video"
          >
            <source src={PlesomDoPariza} type="video/mp4" />
          </video>

          <Text data-aos="zoom-in">{t("moulinText")}</Text>

          <div>
            <SubTitle data-aos="zoom-in">
              {t("moulinTitle")} - Moulin Rouge
            </SubTitle>

            <LazyLoad height={900}>
              <iframe
                frameBorder="0"
                data-aos="fade-up"
                height="600"
                className="full-show"
                src="https://www.youtube.com/embed/Nxq64UBO2no"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </LazyLoad>
          </div>

          <div>
            <SubTitle data-aos="zoom-in">
              {t("galleryTitle")} - Moulin Rouge
            </SubTitle>
            <div className="gallery-container">
              {DataMoulin.map((img) => {
                return (
                  <div key={img.id}>
                    <ImageViewer>
                      <img data-aos="fade-up" src={img.src} alt="Img Moulin" />
                    </ImageViewer>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
