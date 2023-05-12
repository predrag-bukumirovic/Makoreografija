import React, { useEffect } from "react";
import "../css/SliderCard.css";
import { DataHomePage } from "../data/data";
import { ImageViewer } from "react-image-viewer-dv";
import { ArrowRight, ArrowLeft } from "@material-ui/icons";

export default function SliderCard() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft += 320;
  };

  const slideRight = (e) => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft -= 320;
    if (slider.scrollLeft === 0) {
      slider.scrollLeft = slider.scrollLeft += 2320;
    }
  };

  useEffect(() => {
    setInterval(() => {
      slideRight();
    }, 3000);
  }, []);

  return (
    <div style={{ margin: "80px 0" }}>
      {/* <Title>{t("galleryTitle")}</Title> */}
      <div id="main-slider-container">
        <div>
          <button className="slider-icon left" onClick={slideRight}>
            <ArrowLeft />.
          </button>
        </div>
        <div id="slider">
          {DataHomePage.map((img, key) => {
            return (
              <div key={key} className="slider-card">
                <ImageViewer>
                  <img src={img.srcHp} alt="Home" />
                </ImageViewer>
              </div>
            );
          })}
        </div>
        <div>
          <button className="slider-icon right" onClick={slideLeft}>
            <ArrowRight />.
          </button>
        </div>
      </div>
    </div>
  );
}
