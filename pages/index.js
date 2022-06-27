import React from "react";

const Home = () => {
  return (
    <>
      HeroBanner
      <div>
        <h2>Best Selling</h2>
        <p>Speakers</p>
      </div>
      <div>
        {["produto1", "produto2", "produto3"].map((product) => {
          return product;
        })}
      </div>
      footer
    </>
  );
};

export default Home;
