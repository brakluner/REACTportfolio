import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Fish from './components/Fish';
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <h2>Assortment Monkey</h2>
        <Route path="/" exact render={
          () => {
            return ( <div><h1> Welcome FRIEND!</h1>
                      <a href='/about'>Do You Like BEans!</a><br></br>
                      <a href='/user'>Dolphin Pizza</a></div>);
          }
        } />
        <Route path="/about" exact render={
          () => {
            return ( <h1> Wooooow!</h1>);
          }
        } />
        <Route path="/user" exact render={
          () => {
            return ( <Fish />);
          }
        } />
      </div>
      </BrowserRouter>
      <p>
        Ass Hat Ass. 
      </p>
    </div>
  );
}


export default App;
