import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./dist/styles.css";
import { ContextController } from "./Context";
import ItemDetailContainer from "./components/ItemDetailContainer";
import SearchResults from "./components/SearchResults";
import Index from "./components/Index";

function App() {
  return (
    <ContextController>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <section className="section">
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route exact path="/items">
              <SearchResults />
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>
          </Switch>
        </section>
      </BrowserRouter>
    </ContextController>
  );
}

export default App;
