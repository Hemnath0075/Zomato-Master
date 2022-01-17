import './App.css';
import React, {useEffect} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



// importing layouts
import HomeLayoutHOC from "./HOC/Homepage.hoc"
import RestaurantLayoutHoc from './HOC/Restaurant.hoc';
import CheckoutLayoutHOC from './HOC/Checkout.hoc';

  

// importing pages
import HomePage from "./Pages/HomePage";
import RestaurantPage from './Pages/RestaurantPage';
import Checkout from './Pages/CheckoutPage';


// importing Components
import Overview from "./Components/Restaurant/Overview";
import OrderOnline from './Components/Restaurant/Orderonline'
import Reviews from './Components/Restaurant/Reviews/Reviews';
import Menu from './Components/Restaurant/Menu/menu';
import Photos from './Components/Restaurant/Photos/Photos';
import GoogleAuth from "./Pages/GoogleAuth";
import Offers from "./Components/Offers";
// redux
import { useDispatch } from "react-redux";
import { getMySelf } from "./redux/reducers/user/user.action";




function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMySelf());
  }, [localStorage]);
  return (
    <>
      <HomeLayoutHOC component={Offers} path="/"/>
      <HomeLayoutHOC component={GoogleAuth} path="/google/:token"  />
      <HomeLayoutHOC component={HomePage} path="/:type"/>
      <RestaurantLayoutHoc component={RestaurantPage} path="/restaurant/:id"/>
      <RestaurantLayoutHoc component={Overview} path="/restaurant/:id/overview" />
      <RestaurantLayoutHoc component={OrderOnline} path="/restaurant/:id/order-online" />
      <RestaurantLayoutHoc component={Reviews} path="/restaurant/:id/reviews" />
      <RestaurantLayoutHoc component={Menu} path="/restaurant/:id/menu" />
      <RestaurantLayoutHoc component={Photos} path="/restaurant/:id/photos" />
      <CheckoutLayoutHOC component={Checkout} path="/checkout/orders"/>

    </>
  )
}

export default App;
