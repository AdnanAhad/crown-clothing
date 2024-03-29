import React from "react";
import "./MenuItem.scss";

function MenuItem({ title, imageUrl }) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="menu-item"
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
}

export default MenuItem;
