import React from "react";
import { HeroBanner, FooterBanner, Footer } from "../components";
const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling</h2>
        <p>Speakers</p>
      </div>
      <div className="products-container">
        {["produto1", "produto2", "produto3"].map((product) => {
          return product;
        })}
      </div>
      <Footer />
    </>
  );
};

export default Home;
