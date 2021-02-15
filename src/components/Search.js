import React, { useState, useContext } from "react";
import { Context } from "../Context";
import { useHistory } from "react-router-dom";
import MagnifyingGlass from "../img/magnifying-glass.svg";

const Search = () => {
  const { searchProducts } = useContext(Context);
  const [userInput, setUserInput] = useState("");
  const history = useHistory();

  const findProduct = (e) => {
    e.preventDefault();
    history.push("/items?search=" + userInput);
  };

  const onChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="search">
      <div>
        <form onSubmit={findProduct}>
          <input
            className="search__input"
            type="text"
            placeholder="Buscar Productos"
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
          <button>
            <img src={MagnifyingGlass} alt="buscar" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
