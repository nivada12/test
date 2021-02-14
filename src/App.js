import "./App.css";
import "./components/style/Card.css";
import ListCard from "./components/ListCard";
import NavBar from "./components/style/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Accueil from "./components/Accueil";
import Description from "./components/style/Description";
import React from "react";

// import Basket from "./components/Basket";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/Desciption" component={Description} />
        <Route path="/Products" component={ListCard} />
        {/* <Route path="/description/:id" component={Description}></Route> */}
        {/* <Route path="/panier" component={Basket}></Route> */}

        {/* <Route> path="/En savoir plus" componnet={}</Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
