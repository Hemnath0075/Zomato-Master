import React  from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function HomeLayout({children}) {
    return (
        // this is fragment
        <div>
            <Navbar/>
            <div className="container mx-auto px-4 lg:px-20">{children}</div>
            <Footer/>
        </div>
        
       
    );
}

export default HomeLayout;


