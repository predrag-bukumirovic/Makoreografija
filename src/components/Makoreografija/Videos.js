import React from "react";
import { MAKJAData } from "../../data/data";

export default function Videos() {
  return (
    <div className="video-grid">
      {MAKJAData.map((video) => {
        return (
          <video
            data-aos="fade-up"
            preload="none"
            poster={video.poster}
            controls
            key={video.id}
          >
            <source src={`${video.src}`} type="video/mp4" />
          </video>
        );
      })}
    </div>
  );
}
