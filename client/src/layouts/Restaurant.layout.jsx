import React, {  useState } from "react";

// components
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ImageGrid from "../Components/Restaurant/imageGrid";
import RestaurantInfo from "../Components/Restaurant/Restaurantinfo";

function RestaurantLayout() {
  const [restaurant] = useState({
    images: [
      "https://b.zmtcdn.com/data/pictures/chains/3/307893/ac9e6b3236967e1e255e14e24cc0c9e7.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/3/307893/ab32e4d69281d2eb639cb9ae4850e972.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/3/307893/ab32e4d69281d2eb639cb9ae4850e972.jpg",
    ],
    name: "Bakehouse Comfort",
    cuisine: "Bakery, Desserts, Fast Food",
    address: "Biryani, Hyderabadi, Andhra, North Indian, Chinese, Desserts",
    restaurantRating: 4.1,
    deliveryRating: 3.2,
  });

//   const [images, setImages] = useState([]);

  return (
    <>
      <div className="container mx-auto px-4 mt-8 lg:px-20 pb-10">
      <Navbar />
          
        <ImageGrid images={restaurant.images} />
        <RestaurantInfo
          name={restaurant?.name}
          restaurantRating={restaurant?.restaurantRating || 0}
          deliveryRating={restaurant?.deliveryRating || 0}
          cuisine={restaurant?.cuisine}
          address={restaurant?.address}
        />
        <Footer />
      </div>
    </>
  );
}

export default RestaurantLayout;