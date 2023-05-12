import { useTranslation } from "react-i18next";
import React from "react";
import { Helmet } from "react-helmet";
import { SubTitle, Text, Title } from "../globalComponents";
import "../css/Cheerleading.css";
import flajer from "../images/flajer.jpeg";
import { StudioData } from "../data/data";
import { ImageViewer } from "react-image-viewer-dv";
import LazyLoad from "react-lazyload";

export default function Studio() {
  //Translate
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <Helmet>
        <title>{t("studioTitle")} Makoreografija - Maja Lazovic</title>
      </Helmet>
      <Title>{t("studioTitle")}</Title>

      <div className="container-fkajer">
        <div className="imgFlajer">
          <img className="mobileFlajer" src={flajer} alt="Mobile studio" />
        </div>
        <div className="text-flajer">
          <Text style={{ textAlign: "start" }}>{t("studioText")}</Text>
          <Text>{t("studioText2")}</Text>
          <ul className="studio-ul">
            <li>
              <Text>{t("li1")}</Text>
            </li>
            <li>
              <Text>{t("li2")}</Text>
            </li>
            <li>
              <Text>{t("li3")}</Text>
            </li>
            <li>
              <Text>{t("li4")}</Text>
            </li>
            <li>
              <Text>{t("li5")}</Text>
            </li>
          </ul>
          <Text>{t("studioText3")}</Text>
          <Text>
            {t("studioNumber")}{" "}
            <a style={{ color: "#00aeff" }} href="tel: +381 66 406780">
              +381 66 406780
            </a>
          </Text>
        </div>
      </div>

      <div className="gallery-container">
        {StudioData.map((image) => {
          return (
            <div key={image.id}>
              <ImageViewer>
                <img src={image.src} alt="Gallery" />
              </ImageViewer>
            </div>
          );
        })}
      </div>

      <div className="maps-container">
        <div className="maps">
          <div>
            <SubTitle>Kolarčeva 3</SubTitle>
            <LazyLoad height={450}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5449.622186464029!2d20.454500044493564!3d44.81634066408164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab20f720b71%3A0x48f9e2965483e7c!2sKolar%C4%8Deva%203%2C%20Beograd%2011000!5e0!3m2!1sen!2srs!4v1669579275023!5m2!1sen!2srs" 
                width="600"
                height="450" 
                title="Kolarčeva 3"
                style={{ border: 0, borderRadius: 10 }}
                allowfullscreen="" 
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </LazyLoad>
          </div>
          <div>
            <SubTitle>Resavska 28</SubTitle>
            <LazyLoad height={450}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.6834928372214!2d20.463141051379395!3d44.80763857899617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa66b992305%3A0xd83d4ecbae3c2375!2sResavska%2028%2C%20Beograd%2011000!5e0!3m2!1sen!2srs!4v1660211547633!5m2!1sen!2srs"
                width="600"
                height="450"
                title="Resavska 28"
                style={{ border: 0, borderRadius: 10 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
}
