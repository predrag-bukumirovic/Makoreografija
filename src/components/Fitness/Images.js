import React from "react";
import { ImageViewer } from "react-image-viewer-dv";
import { FitnessGallery } from "../../data/data";

export default function Images() {
  return (
    <div className="gallery-container">
      {FitnessGallery.map((img) => {
        return (
          <div key={img.id}>
            <ImageViewer>
              <img
                data-aos="fade-up"
                src={img.srcImgFitness}
                alt="Fitness Images"
              />
            </ImageViewer>
          </div>
        );
      })}
    </div>
  );
}
