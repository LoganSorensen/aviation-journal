import React from "react";

const Home = () => {
  return (
    <div>
      <div className="image-window">
          <h1>Logo</h1>
          <div className="cta">
              <span>Check out some stuff!</span>
              <a href='#featured'><i className="fas fa-chevron-down"></i></a>
          </div>
      </div>
      <div className="transition"></div>
      <div className="lower-content" id='featured'>
        <div className="featured-article"></div>
        <div className="featured-articles">
            <div className="article"></div>
            <div className="article"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
