import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Onion from './components/Onion';
import Scallop from './components/Scallop';
import Plate from './components/Plate';
import projects from "./projects.json";
import Main from "./components/Main";
import HeadMain from "./components/HeadMain"
import Contact from "./components/Contact"

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
            <img src="https://i.pinimg.com/originals/55/39/e8/5539e878a707ef6e1569d21a358fa055.jpg" />
            <h1> About ME</h1>
            <HeadMain />
            <Main />
                      </div>);
          }
        } />
        <Route path="/contact" exact render={
          () => {
            return ( <div><Onion />
            <h1> <Contact /></h1>
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
        description={projects[0].description}
        location={projects[0].location}
      />
      <Scallop
        name={projects[1].name}
        image={projects[1].image}
        description={projects[1].description}
        location={projects[1].location}
      />
      <Scallop
        name={projects[2].name}
        image={projects[2].image}
        description={projects[2].description}
        location={projects[2].location}
      />
      <Scallop
        name={projects[3].name}
        image={projects[3].image}
        description={projects[3].description}
        location={projects[3].location}
      />
      <Scallop
        name={projects[4].name}
        image={projects[4].image}
        description={projects[4].description}
        location={projects[4].location}
      />
      <Scallop
        name={projects[5].name}
        image={projects[5].image}
        description={projects[5].description}
        location={projects[5].location}
      />
    </Plate>
             
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
