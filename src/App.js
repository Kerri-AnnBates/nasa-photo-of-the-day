import React, {useState, useEffect} from "react";
import axios from 'axios';
import Card from './components/Card';
import "./App.css";

function App() {

  let today = new Date();
  let formattedDay = ('0' + today.getDate()).slice(-2);
  let formattedMonth = ('0' + (today.getMonth()+1)).slice(-2);
  let dateString = `${today.getFullYear()}-${formattedMonth}-${formattedDay}`;
  
  const [photoData, setPhotoData] = useState({});
  const [date, setDate] = useState(dateString);

  console.log(date);
  function selectedDate(theDate) {

    setDate(theDate);
  }

  useEffect(() => {
  
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=q0FN7OgOMiUeG3yIFM9CewxN6olZq5ASzUGFAbcb&date=${date}`)
    .then(response => {
      console.log(response);
      setPhotoData(response.data);
    })
    .catch(error => {
      console.log('The data could not be returned', error);
    })
  }, [date]);

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
