import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Products from "../products/products";
import Signup from "../signup/signup";
import Cart from "../cart/cart";
import Login from "../Login/login";
import Payment from "../payment/payment";

const Routes = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
    return(
       <div>
           <Switch>
                <Route path="/" exact>
                    <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
                </Route>
                <Route path="/signup" exact>
                    <Signup/>
                </Route>
                <Route path="/login" exact>
                    <Login/>
                </Route>
                <Route path="/checkout" exact>
                    <Payment/>
                </Route>
                <Route path="/cart" exact>
                    <Cart cartItems={cartItems} handleRemoveProduct={handleRemoveProduct} handleAddProduct={handleAddProduct} handleCartClearance={handleCartClearance}/>
                </Route>
          </Switch>
       </div>
    )
}

export default Routes;