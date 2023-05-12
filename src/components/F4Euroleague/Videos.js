import React from "react";
import { F4 } from "../../data/data";

export default function Videos() {
  return (
    <div className="video-grid">
      {F4.map((video) => {
        return (
          <div key={video.id}>
            <video
              data-aos="fade-up"
              preload="none"
              poster={video.poster}
              controls
            >
              <source src={video.srcF4} type="video/mp4" />
            </video>
          </div>
        );
      })}
    </div>
  );
}
