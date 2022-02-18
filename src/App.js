import React, {useState} from 'react';
import Cover from './Components/Cover/Cover';
import NavBar from './Components/NavBar/NavBar';
import ThumbNailsList from './Components/ThumbNailsList/ThumbNailsList';
import InfoSheet from './Components/InfoSheet/InfoSheet';
import Footer from './Components/Footer/Footer';
//import ThumbNailStartData from './Components/ThumbNailsList/ThumbNailStartData'
import './App.css';


const ThumbNailStartData = [
  {comName: "Bird1",
  sciName: "Birdus Unus"},
  {comName: "Bird2",
  sciName: "Birdus Duceus"},
  {comName: "Bird3",
  sciName: "Birdus Tresus"},
  {comName: "Bird4",
  sciName: "Birdus Quatrus"},
  {comName: "Bird5",
  sciName: "Birdus Cinqus"}]

  let startThumbnails = ThumbNailStartData
function App() {

  const [currentThumbNails, setThumbNails] =  useState(startThumbnails);
  const [currentCoord, setCoord] = useState({
    latitude: "",
    longitude: ""
  })

  const lat = currentCoord.latitude;
  const long = currentCoord.longitude;
    
const handleInputChange = (event) => {
 
        setCoord({...currentCoord, [event.target.name]: event.target.value})
    }
    
const handleSubmit = (event) => {
        event.preventDefault()
        const requestOptions = {
          method: 'GET',
          headers: {"X-eBirdApiToken": "3ehbfu8dqaf"},
          redirect: 'follow'}
              
        fetch(`https://api.ebird.org/v2/data/obs/geo/recent?lat=${currentCoord.latitude}&lng=${currentCoord.longitude}&sort=date&dist=50&back=30`, requestOptions)
            .then(response => response.json())
            .then(result => setThumbNails(result))
            .catch(error => console.log('error', error))}  
    

return (
  <div className='appFrame'>
    <header>
      <Cover />
      <NavBar latitude = {currentCoord.latitude} longitude = {currentCoord.longitude} handleSubmit= {handleSubmit} handleInputChange={handleInputChange}/>       
    </header>
      <ThumbNailsList latitude = {currentCoord.latitude} longitude = {currentCoord.longitude} handleSubmit= {handleSubmit} displayedThumbs = {currentThumbNails}/>  */  
      <Footer />
    </div>
  )
}

export default App;