import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//pages
import Pagrindinis from "./pages/pagrindinis";
import Paslaugos from "./pages/Paslaugos";
import Susisiekimas from "./pages/Susisiekimas";
//style
import "./styles/app.css";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Pagrindinis />
          </Route>

          <Route path="/paslaugos">
            <Paslaugos />
          </Route>

          <Route path="/susisiekimas">
            <Susisiekimas />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
