import React, {useState, useEffect} from "react";
import axios from 'axios';
import Card from './components/Card';
import "./App.css";

function App() {

  let today = new Date();
  const [photoData, setPhotoData] = useState({});
  const [date, setDate] = useState(today);
  console.log(date);
  function selectedDate() {
    let theDate = this.value;
    setDate(theDate);
  }

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
      < div className = "container" >
        <h1>NASA Photo Of The Day</h1>
        <Card data={photoData} selectDate={selectedDate}/>
      </div>
    </div>
  );
}

export default App;
