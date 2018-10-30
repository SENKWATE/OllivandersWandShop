import React, { Component } from 'react';
import logo from './logo.svg';
import staff from './staff.png';
import './App.css';
import wands from './wands';
import WandsList from "./WandsList"
import WandCard from "./WandCard"

class App extends Component {
  render() {
    return (
      <div className="App backG">
        <header className="App-header">
          <img src={staff} className="App-logo" alt="logo" />
          <h1 className="App-title welcome" style={{marginTop: 20}}>Welcome to Ollivanders Wand Shop</h1>
        </header>

        <div className="content col-10">
            <WandsList wands={wands}/>
        </div>
      </div>


            //  <div id="app" className="container-fluid container">
            //   <div className="jumbotron mm">
            //     <div className="row">
            //       <div className="content col-12">
            //         <WandsList wands={wands} />
            //       </div>
            //     </div>
            //   </div>
            // </div>

    );
  }
}

export default App;
