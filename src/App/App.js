import React from "react";
import "./App.css";
import Lamp from '../components/Lamp/Lamp';
import Switcher from '../components/Switcher/Switcher';

function App() {
  return <div className="App">
    <Switcher name="Switcher A"/>
    <Lamp/>
    <Switcher name="Switcher B"/>
  </div>;
}

export default App;
