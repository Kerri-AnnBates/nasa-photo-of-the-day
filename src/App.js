import React, {useState, useEffect} from "react";
import axios from 'axios';
import Card from './components/Card';
import "./App.css";

function App() {

  const [photoData, setPhotoData] = useState({});
  // const [error, setError] = useState();

  useEffect(() => {
  
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=q0FN7OgOMiUeG3yIFM9CewxN6olZq5ASzUGFAbcb`)
    .then(response => {
      console.log(response);
      setPhotoData(response.data);
    })
    .catch(error => {
      console.log('The data could not be returned', error);
    })
  }, []);

  return (
    <div className="App">
      <h1>NASA Photo Of The Day</h1>
      <Card data={photoData} />
    </div>
  );
}

export default App;
