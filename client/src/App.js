import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Onion from './components/Onion';
import Scallop from './components/Scallop';
import Plate from './components/Plate';
import projects from "./projects.json";
import Main from "./components/Main";
import HeadMain from "./components/HeadMain";
import Contact from "./components/Contact";
import Parsley from "./components/Parsley";
import Shrimp from "./components/Shrimp";
import Snail from "./components/Snail";
import { profilePic, scurryScallop, scurryShrimp } from "./lib/effects";

import "./App.css";


    
export default class App extends Component {

  componentDidMount(){
    scurryScallop();
    scurryShrimp();
  }

  render() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <h2>Ted Web World</h2>
        <Route path="/" exact render={
          () => {
            return ( <div><Onion />
            <h1> About ME</h1>
            <img onClick={profilePic} onMouseEnter={profilePic} className="profile" src="https://i.pinimg.com/originals/55/39/e8/5539e878a707ef6e1569d21a358fa055.jpg" />
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
      <h1 className="title">Projects List</h1>
      <Scallop {...scurryScallop()}
        name={projects[0].name}
        image={projects[0].image}
        description={projects[0].description}
        location={projects[0].location}
      />
      <Shrimp {...scurryShrimp()}
        name={projects[1].name}
        image={projects[1].image}
        description={projects[1].description}
        location={projects[1].location}
      />
      <Snail
        name={projects[6].name}
        image={projects[6].image}
        description={projects[6].description}
        location={projects[6].location}
      />
      <Shrimp
        name={projects[3].name}
        image={projects[3].image}
        description={projects[3].description}
        location={projects[3].location}
      />
      <Scallop
        name={projects[2].name}
        image={projects[2].image}
        description={projects[2].description}
        location={projects[2].location}
      />
      <Shrimp
        name={projects[4].name}
        image={projects[4].image}
        description={projects[4].description}
        location={projects[4].location}
      />
      <Snail
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
     <Parsley />
    </div>
  );
}

}

