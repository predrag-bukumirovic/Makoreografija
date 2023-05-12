import React from "react";
import { ImageViewer } from "react-image-viewer-dv";
import { DataImgGallery } from "../../data/data";

export default function Images() {
  return (
    <div className="gallery-container">
      {DataImgGallery.map((image) => {
        return (
          <div key={image.id}>
            <ImageViewer>
              <img src={image.srcImg} alt="Gallery" />
            </ImageViewer>
          </div>
        );
      })}
    </div>
  );
}
