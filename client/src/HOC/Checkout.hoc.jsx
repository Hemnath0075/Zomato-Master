import React from "react";
import { Routes,Route } from "react-router-dom";
// importing layout
import CheckoutLayout from "../layouts/Checkout.layout";

function CheckoutLayoutHoc({ component: Component,path, ...rest }) {
  return (
    <>
      <Routes>
        <Route
          {...rest}
          path={path}
          element={
            <CheckoutLayout>
              <Component/>
            </CheckoutLayout>
          }
        />
      </Routes>
       
    </>
  );
}

export default CheckoutLayoutHoc;


