import './App.scss'
import backgroundVideo from "./assets/background.mp4";


function App () {
  return (
    <div className='video-container'>
      <video autoPlay loop muted className='background-video'>
    <source src={backgroundVideo} type='video/mp4'/>
    Your browser does not support the video tag.
    </video>
    <div className='site-overlay'>
      <h1>Dreamy Destinations</h1>
    </div>
    </div>
    
    
  );
}


export default App;
