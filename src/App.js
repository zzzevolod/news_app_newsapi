import React, { Component } from 'react';
import LeftFilters from "./components/LeftFilters";
import Articles from "./components/Articles";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css'
import './App.css';
class App extends Component {

  render() {
    return (
      <div className="App">
          <section className="app-container row container-fluid">
          <LeftFilters/>
          <Articles/>
          </section>
      </div>
    );
  }
}

export default App;
