import React from "react";

const ItemDetail = ({
  id,
  title,
  price,
  images,
  condition,
  sold_quantity,
  description,
}) => {
  if (condition === "new") {
    condition = "Nuevo";
  } else {
    condition = "Usado";
  }

  return (
    <div className="detailWrapper">
      <img src={images[0].url} alt={title} />
      <div>
        <p className="buyingInfo">
          {condition} - {sold_quantity} vendidos
        </p>
        <h2 className="title">{title}</h2>
        <h1 className="price">
          $ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </h1>

        <a href="#">
          <div className="comprar">Comprar</div>
        </a>
      </div>
      <div className="desc">
        <h1 className="titleDesc">Descripción del producto</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
