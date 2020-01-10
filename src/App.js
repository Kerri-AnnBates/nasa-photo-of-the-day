import React, {useState, useEffect} from "react";
import axios from 'axios';
import Cards from './components/Card';
import "./App.css";
import { Container } from 'reactstrap';
import styled from 'styled-components';

//Styles
const AppHeader = styled.h1`
  color: #e8e8e8;
`;

function App() {

  const today = new Date();
  const formattedDay = ('0' + today.getDate()).slice(-2);
  const formattedMonth = ('0' + (today.getMonth()+1)).slice(-2);
  const dateString = `${today.getFullYear()}-${formattedMonth}-${formattedDay}`;
  
  const [photoData, setPhotoData] = useState({});
  const [date, setDate] = useState(dateString);

  // console.log(date);
  function selectedDate(theDate) {

    setDate(theDate);
  }

  //API call.
  useEffect(() => {
  
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=q0FN7OgOMiUeG3yIFM9CewxN6olZq5ASzUGFAbcb&date=${date}`)
    .then(response => {
      // console.log(response);
      setPhotoData(response.data);
    })
    .catch(error => {
      console.log('The data could not be returned', error);
    })
  }, [date]);

  // Main component.
  return (
    <div className="App">
      <Container>
        <AppHeader>NASA Photo Of The Day</AppHeader>
        <div className="row">
          <div className = "col-md-6 offset-md-3" > 
            <Cards data={photoData} selectDate={selectedDate}/>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
