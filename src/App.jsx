import './App.scss'
import backgroundVideo from "./assets/background.mp4";


function App () {
  return (
    <video autoPlay loop muted className='background-video'>
    <source src={backgroundVideo} type='video/mp4'/>
    Your browser does not support the video tag.
    </video>
  );
}


export default App;
