import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel</h1>
        </header>
        <Travel
          quote=""
          character="Tel Aviv"
          country = "Israel"
          distance = "Bruxelles Tel Aviv 4493 km"
          image="http://www.orangesmile.com/common/img_cities_original/tel-aviv--781545-11.jpg"
        />
        <Travel
          quote=""
          character="Cinq Terres"
          country ="Italie"
          distance ="1132 km"
          image="https://www.traditours.com/cache/2-cinqueterre-italie-659-1600x650.jpg"
        />
      </div>
    );
  }
}

export default App;