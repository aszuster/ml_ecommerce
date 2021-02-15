import React, { useContext, useEffect } from "react";
import queryString from "query-string";

import { useHistory } from "react-router-dom";
import { Context } from "../Context";
import Item from "./Item";

const SearchResults = () => {
  const { state, searchProducts } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    const urlParams = queryString.parse(history.location.search);
    searchProducts(urlParams.search);
  }, []);

  return (
    <div className="container">
      <div className="resultsContainer">
        {state.length &&
          state.slice(0, 4).map((item, i) => {
            return (
              <div key={i} className="resultsWrapper">
                <Item
                  title={item.title}
                  price={item.price}
                  province={item.address.state_name}
                  image={item.thumbnail}
                  id={item.id}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default SearchResults;
