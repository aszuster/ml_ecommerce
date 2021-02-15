import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Item = ({ title, price, province, image, id }) => {
  return (
    <div className="results">
      <NavLink to={`/item/${id}`}>
        <div className="imageWrapper">
          <img src={image} alt={title} />
        </div>
      </NavLink>
      <div className="results__info">
        <h2>${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h2>
        <div>
          <NavLink to={`/item/${id}`}>
            <h3>{title}</h3>
          </NavLink>
        </div>
      </div>
      <div className="results__address">
        <p>{province}</p>
      </div>
    </div>
  );
};
export default Item;
