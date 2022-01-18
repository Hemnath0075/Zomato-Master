import React from 'react'
import Slider from "react-slick";


//component
import DeliveryCategory from "./deliveryCategory.jsx";
import {NextArrow,PrevArrow} from '../carouselArrows';

function DeliveryCaurosel() {
    const categories = [
        {
          image:
            "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
          title: "biryani",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/cf9/08bf86a8c902df8e6d703e374391ecf9.jpg",
          title: "Kesari Bath",
        },
        {
          image:
            "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
          title: "Chicken",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_images/aebeb88b78a4a83ea9e727f234899bed1602781186.png",
          title: "Chaat",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_images/770ba11e5159e6740d68f71f1b838a261612463246.png",
          title: "Cake",
        },
        {
          image:
            "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
          title: "Rolls",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/06a/af146087e76aed8c0baa90a84a6f206a.jpg",
          title: "Sagu",
        },
      ];
      const settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide:true,
        responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 5,
                },
              },
        ],
        arrows:true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplaySpeed: 2000,
        cssEase: "linear"
        
        
      };
      
    return (<>
            <h1 className="text-xl mb-4 font-semibold">
        We Have Something Special For You
      </h1>
      
      <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
        {categories.map((food) => (
          <DeliveryCategory {...food} />
        ))}
      </div>
      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((food) => (
            <DeliveryCategory {...food} />
          ))}
        </Slider>
      </div>
    </>
    )
}

export default DeliveryCaurosel;
