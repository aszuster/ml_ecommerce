import React, { createContext, useState } from "react";
import axios from "axios";

export const Context = createContext();

export function ContextController({ children }) {
  const [state, setState] = useState([]);
  const [itemDetail, setItemDetail] = useState(null);
  const [itemDescription, setItemDescription] = useState(null);

  const searchProducts = async (productName) => {
    const result = await axios(
      `https://api.mercadolibre.com/sites/MLA/search?q=%20:${productName}`
    );
    setState(result.data.results);
  };

  const searchId = async (id) => {
    const result = await axios(`https://api.mercadolibre.com/items/${id}`);
    setItemDetail(result.data);

    const resultDesc = await axios(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    setItemDescription(resultDesc.data);
  };

  return (
    <Context.Provider
      value={{
        state,
        setState,
        searchProducts,
        searchId,
        itemDetail,
        itemDescription,
      }}
    >
      {children}
    </Context.Provider>
  );
}
