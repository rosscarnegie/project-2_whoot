import React, {useState, useEffect} from 'react';
import Cover from './Components/Cover/Cover';
import NavBar from './Components/NavBar/NavBar';
import ThumbNailsList from './Components/ThumbNailsList/ThumbNailsList';
import Footer from './Components/Footer/Footer';
import ThumbNailStartData from './Components/ThumbNailsList/ThumbNailStartData'
import {BrowserRouter as Router, Routes, Route, Link, Switch} from "react-router-dom";
import Issue from './Pages/Issue'
import Privacy from './Pages/Privacy'
import './App.css';

let startThumbnails = ThumbNailStartData;

function App() {

  const [currentThumbNails, setThumbNails] =  useState(startThumbnails);
  const [currentCoord, setCoord] = useState({
    latitude: "",
    longitude: ""
  })
    

  const handleInputChange = (event) => {
    setCoord({...currentCoord, [event.target.name]: event.target.value})
 }

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'GET',
      headers: {"X-eBirdApiToken": "3ehbfu8dqaf"},
      redirect: 'follow'
    }
              
    fetch(`https://api.ebird.org/v2/data/obs/geo/recent?lat=${currentCoord.latitude}&lng=${currentCoord.longitude}&sort=date&dist=50&back=30`, requestOptions)
      .then(response => response.json())
      .then(result => setThumbNails(result))
      .catch(error => console.log('error', error))

    //getData()
  }

return (

  <div className='appFrame'>
    <header>
      <Cover />
      <NavBar latitude = {currentCoord.latitude} longitude = {currentCoord.longitude} handleSubmit= {handleSubmit} handleInputChange={handleInputChange}/>       
    </header>
    <Routes>
      <Route exact path = '/'  element={<ThumbNailsList latitude = {currentCoord.latitude} longitude = {currentCoord.longitude} handleSubmit= {handleSubmit} displayedThumbs = {currentThumbNails}/>} />
      <Route exact path ='/Issue'  element={<Issue />} />
      <Route exact path ='/Privacy'  element={<Privacy />}/>
    </Routes> 
    <Footer />
  
    </div>

)

};

export default App;