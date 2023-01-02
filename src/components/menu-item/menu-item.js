import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  const handleGoToNextPage = () => {
    navigate(`${linkUrl}`);
  };
  return (
    <div className={`${size} menu-item`} onClick={handleGoToNextPage}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <div className="title">{title}</div>
        <span className="sub-title">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
