import React from "react";
import axios from 'axios';
import Card from './components/CardComponent/Card';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>NASA Photo Of The Day</h1>
      <Card />
    </div>
  );
}

export default App;
