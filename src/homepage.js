import React from "react";
import "./homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <div className="title">HATS</div>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">JACKETS</div>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">SNEAKERS</div>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">WOMENS</div>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">MENS</div>
            <span className="sub-title">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
