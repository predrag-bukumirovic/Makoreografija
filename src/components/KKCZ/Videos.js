import React from "react";
import { DataCheerleading } from "../../data/data";

export default function Videos() {
  return (
    <div className="video-grid">
      {DataCheerleading.map((video) => {
        return (
          <div key={video.id}>
            <video
              data-aos="fade-up"
              preload="none"
              poster={video.poster}
              controls
            >
              <source src={`${video.srcKKCZ}`} type="video/mp4" />
            </video>
          </div>
        );
      })}
    </div>
  );
}
