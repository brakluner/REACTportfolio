import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Fish from './components/Fish';
import Onion from './components/Onion';
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <h2>Ted Web World</h2>
        <Route path="/" exact render={
          () => {
            return ( <div><Onion />
            <h1> Welcome FRIEND!</h1>
                      </div>);
          }
        } />
        <Route path="/contact" exact render={
          () => {
            return ( <div><Onion />
            <h1> Wooooow!</h1>
            </div>);
          }
        } />
        <Route path="/portfolio" exact render={
          () => {
            return ( <div>
              <Onion />
              <Fish />
            </div>);
          }
        } />
      </div>
      </BrowserRouter>
      <p>
        Est 2019. 
      </p>
    </div>
  );
}


export default App;
