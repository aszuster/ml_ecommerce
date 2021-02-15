import React, { useEffect, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { Context } from "../Context";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { searchId, itemDetail, itemDescription } = useContext(Context);
  const { id } = useParams();

  useEffect(async () => {
    await searchId(id);
  }, [id]);

  return (
    <div className="container">
      {itemDetail && itemDescription ? (
        <ItemDetail
          id={itemDetail.id}
          title={itemDetail.title}
          price={itemDetail.price}
          images={itemDetail.pictures}
          condition={itemDetail.condition}
          sold_quantity={itemDetail.sold_quantity}
          description={itemDescription.plain_text}
        />
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
};

export default ItemDetailContainer;
