import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import FairyTales from "./components/FairyTales/FairyTales";
import {app} from "./base";
import AddFairyTale from "./components/AddFairyTale/AddFairyTale";

const db = app.firestore()
export {db};


export default function App(){
    return (
      <Router>
{/*
          <nav></nav>
*/}
          <ul className="header">
              <h1 className="logo">Story Teller</h1>

              <li className="header" >
                  <Link to="/" className="header">Home</Link>
              </li>
              <li className="header">
                  <Link to="/kategorie" className="header">Kategorie</Link>
              </li>
              <li className="header">
                  <Link to="/dodaj" className="header">Dodaj Bajkę</Link>
              </li>
              <li className="header">
                  <Link to="/contact" className="header">Kontakt</Link>
              </li>
          </ul>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/kategorie">
                  <FairyTales/>
              </Route>
              <Route path="/dodaj">
                  <AddFairyTale db={db}/>
              </Route>
              <Route path="/contact">
                  <Contact/>
              </Route>
          </Switch>

      </Router>


  )
}



ReactDOM.render(<App/>, document.getElementById("root"));




