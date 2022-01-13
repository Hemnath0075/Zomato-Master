import React from "react";
import { Route } from "react-router-dom";
// importing layout
import CheckoutLayout from "../layouts/Checkout.layout";

function CheckoutLayoutHoc({ component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <CheckoutLayout>
            <Component {...props} />
          </CheckoutLayout>
        )}
      />
    </>
  );
}

export default CheckoutLayoutHoc;