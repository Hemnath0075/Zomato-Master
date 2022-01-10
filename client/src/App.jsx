import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// importing layouts
import HomeLayoutHOC from "./HOC/Homepage.hoc"
import RestaurantLayoutHoc from './HOC/Restaurant.hoc';
  

// importing pages
import HomePage from "./Pages/HomePage";
// import RestaurantPage from './Pages/RestaurantPage';


function App() {
  return (
    <>
      <HomeLayoutHOC component={HomePage} path="/"/>
      <HomeLayoutHOC component={HomePage} path="/:type"/>
      <RestaurantLayoutHoc component={HomePage} path="/restaurant/:id"/>
    </>
  )
}

export default App;
