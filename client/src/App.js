import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Fish from './components/Fish';
import Onion from './components/Onion';
import Scallop from './components/Scallop';
import Plate from './components/Plate';
import projects from "./projects.json";
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
              <Plate>
      <h1 className="title">projects List</h1>
      <Scallop
        name={projects[0].name}
        image={projects[0].image}
        occupation={projects[0].occupation}
        location={projects[0].location}
      />
      <Scallop
        name={projects[1].name}
        image={projects[1].image}
        occupation={projects[1].occupation}
        location={projects[1].location}
      />
      <Scallop
        name={projects[2].name}
        image={projects[2].image}
        occupation={projects[2].occupation}
        location={projects[2].location}
      />
      <Scallop
        name={projects[3].name}
        image={projects[3].image}
        occupation={projects[3].occupation}
        location={projects[3].location}
      />
      <Scallop
        name={projects[4].name}
        image={projects[4].image}
        occupation={projects[4].occupation}
        location={projects[4].location}
      />
      <Scallop
        name={projects[5].name}
        image={projects[5].image}
        occupation={projects[5].occupation}
        location={projects[5].location}
      />
    </Plate>
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
