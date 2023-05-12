import React from "react";
import { DataFitness } from "../../data/data";

export default function Videos() {
  return (
    <div className="video-grid">
      {DataFitness.map((video) => {
        return (
          <div key={video.id}>
            <video preload="none" poster={video.poster} controls>
              <source src={`${video.srcFitness}`} type="video/mp4" />
            </video>
          </div>
        );
      })}
    </div>
  );
}
