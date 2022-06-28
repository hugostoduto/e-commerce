import Link from "next/link";
import React from "react";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>MID TEXT</h3>
        <img src="" alt="headephones" className="hero-banner-image" />
        <div>
          <Link href="product/id">
            <button type="button">Button Text</button>
          </Link>
          <div className="desc">
            <h5>description</h5>
            <p>Descriptions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
