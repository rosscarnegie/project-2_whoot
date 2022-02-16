import Cover from './Components/Cover/Cover'
import NavBar from './Components/NavBar/NavBar'
import ThumbNailsList from './Components/ThumbNailsList/ThumbNailsList'
import InfoSheet from './Components/InfoSheet/InfoSheet'
import Footer from './Components/Footer/Footer'
import './App.css';


function App() {
  return (
    <div className='appFrame'>
      <header>
        <Cover />
        <NavBar/>
      </header>
      {/*<ThumbNailsList />*/}
        <InfoSheet/>
        <Footer />
    </div>);
}

export default App;
