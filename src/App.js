import React, {useEffect, useState} from 'react'
import Cover from './Components/Cover/Cover'
import NavBar from './Components/NavBar/NavBar'
import ThumbNailsList from './Components/ThumbNailsList/ThumbNailsList'
import InfoSheet from './Components/InfoSheet/InfoSheet'
import Footer from './Components/Footer/Footer'
import './App.css';



function App() {
  const startThumbnails = [
    {comName: "Bird1",
    sciName: "Birdus Unus"},
    {comName: "Bird2",
    sciName: "Birdus Duceus"},
    {comName: "Bird3",
    sciName: "Birdus Tresus"},
    {comName: "Bird4",
    sciName: "Birdus Quatrus"},
    {comName: "Bird5",
    sciName: "Birdus Cinqus"},
  ]
  
  const [currentThumbNails, setThumbNails] = useState(startThumbnails);
  
  const [currentCoord, setCoord] = useState({
    latitude: "",
    longitude: "",
  })

const handleChange = (event) => {
  setCoord({...currentCoord, [event.target.name]: event.target.value})
  //setThumbNails({...currentThumbNails, [event.target.name]: event.target.value})
}

const handleSubmit = (event) => {
  event.preventDefault();

  const requestOptions = {
    method: 'GET',
    headers: {"X-eBirdApiToken": "3ehbfu8dqaf"},
    redirect: 'follow'};

  fetch(`https://api.ebird.org/v2/data/obs/geo/recent?lat=${currentCoord.latitude}&lng=${currentCoord.longitude}&sort=date&dist=50&back=30`, requestOptions)
    .then(response => response.json())
    .then(result => setThumbNails(result))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    console.log(currentCoord);
    setCoord({latitude: "", longitude: ""})
    console.log(currentThumbNails)}

    const mappedThumbnails = currentThumbNails.map((singleThumbnail, index) => {
      return(
      <div key={index} className="thumbNail"><p>{singleThumbnail.comName}</p></div>
    )})
  
  return (
    <div className='appFrame'>
      <header>
        <Cover />
        <nav><ul><li>Home</li></ul>
        <form className='coordForm' onSubmit={handleSubmit}>
            <input type='text' name='latitude' placeholder='Latitude' value={currentCoord.latitude} onChange={handleChange}/>
            <input type='text' name='longitude' placeholder='Longitude' value={currentCoord.longitude} onChange={handleChange}/>
            <button>Find</button>
        </form></nav>
{/*   <NavBar/> */}  
      </header>
      <main className="thumbNailsList">
      {mappedThumbnails ? mappedThumbnails : 'Loading...'}
        </main>
      
 {/*  <InfoSheet/>
      <ThumbNailsList />  */}  
        <Footer />
    </div>);
}

export default App;