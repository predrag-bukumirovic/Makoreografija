import React, { lazy, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../css/Cheerleading.css";
import { Title } from "../globalComponents";
import Aos from "aos";
import "aos/dist/aos.css";
import VideoMAJA from "../videos/makoreografija.mp4";
import VideoMobile from "../videos/mobileVideo.mp4";

const Videos = lazy(() => import("../components/Makoreografija/Videos"));

export default function Makoreografija() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div>
      <div className="video-home-rs">
        <video
          className="video-desktop"
          style={{ marginTop: "0" }}
          loop
          autoPlay
          muted
        >
          <source src={`${VideoMAJA}#t=1`} type="video/mp4" />
        </video>

        <video
          className="video-mobile"
          style={{ marginTop: "0" }}
          loop
          autoPlay
          muted
        >
          <source src={`${VideoMobile}`} type="video/mp4" />
        </video>
      </div>

      <div>
        <Helmet>
          <title>MAkoreografiJA - Maja Lazovic</title>
        </Helmet>

        <div>
          <Title data-aos="zoom-in">MAkoreografiJA</Title>
          <Suspense fallback={<div>Loading videos...</div>}>
            <Videos />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
