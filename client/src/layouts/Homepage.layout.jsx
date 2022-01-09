import React  from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FoodTab from "../Components/FoodTab";

function HomeLayout({children}) {
    return (
        // this is fragment
        <div>
            <Navbar/>
            <FoodTab/>
            <div className="container mx-auto px-4 lg:px-20">{children}</div>
            <Footer/>
        </div>
        
       
    );
}

export default HomeLayout;


