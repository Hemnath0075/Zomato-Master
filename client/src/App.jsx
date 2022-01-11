import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// importing layouts
import HomeLayoutHOC from "./HOC/Homepage.hoc"
import RestaurantLayoutHoc from './HOC/Restaurant.hoc';
  

// importing pages
import HomePage from "./Pages/HomePage";
import RestaurantPage from './Pages/RestaurantPage';
import Overview from "./Components/Restaurant/Overview";


function App() {
  return (
    <>
      <HomeLayoutHOC component={HomePage} path="/"/>
      <HomeLayoutHOC component={HomePage} path="/:type"/>
      <RestaurantLayoutHoc component={RestaurantPage} path="/restaurant/:id"/>
      <RestaurantLayoutHoc component={Overview} path="/restaurant/:id/overview" />
      <RestaurantLayoutHoc component={HomePage} path="/restaurant/:id/order-online" />
      <RestaurantLayoutHoc component={HomePage} path="/restaurant/:id/reviews" />
      <RestaurantLayoutHoc component={HomePage} path="/restaurant/:id/menu" />
      <RestaurantLayoutHoc component={HomePage} path="/restaurant/:id/photos" />

    </>
  )
}

export default App;
