import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// importing layouts
import HomeLayoutHOC from "./HOC/Homepage.hoc"
  

// importing pages
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <>
      <HomeLayoutHOC component={HomePage} path="/"/>
      <HomeLayoutHOC component={HomePage} path="/:type"/>
    </>
  )
}

export default App;
