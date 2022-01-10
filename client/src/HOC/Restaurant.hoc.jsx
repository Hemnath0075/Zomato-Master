import React from "react";
import {Routes,Route} from 'react-router-dom';


// layout
import RestaurantLayout from "../layouts/Restaurant.layout";

function RestaurantLayoutHoc({ component: Component,path, ...rest }) {
  return (
    <>
            <Routes>
                <Route
                    {...rest}
                    path={path}
                    element={
                        <RestaurantLayout>
                            <Component/>
                        </RestaurantLayout>
                    }
                />
            </Routes>
        </>
  );
}

export default RestaurantLayoutHoc;