import React from "react";
import "./cart.css";
import { Link, useHistory } from "react-router-dom";

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) => {
    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
    const history = useHistory();

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            <div className="cartScreen">
                <div className="cartScreenLeft">
                    <div className="clear-cart">
                        <button className="back-button" onClick={() => history.push("/")}>
                            Back To Shopping
                        </button>
                        {cartItems.length >= 1 && (
                            <button className="clear-cart-button" onClick={handleCartClearance}>
                                Empty Your Cart
                            </button>
                        )}
                    </div>
                    {cartItems.length === 0 ? (
                        <p>
                            Your cart is empty...
                        </p>
                    ) : (cartItems.map((item) => (
                        <div className="cartItem">
                            <div className="cartItemImage">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <Link to={"#"} className="cartItemsName">
                                <p>{item.name}</p>
                            </Link>
                            <p className="cartItemPrice">${item.quantity} * {item.price}</p>
                            <div className="cartItemSelect">
                                <button className="cart-items-add" onClick={() => handleAddProduct(item)}>
                                    +
                                </button>
                                <button className="cart-items-remove" onClick={() => handleRemoveProduct(item)}>
                                    -
                                </button>
                            </div>
                            <button className="cartItemDelete" onClick={() => handleRemoveProduct(item)}>
                                <i className="fas fa-trash"></i>
                            </button>
                        </div>
                    )))}
                </div>
                <div className="cartScreenRight">
                    <div className="cartScreenInfo">
                        <p>Total Price: ${totalPrice.toFixed(2)}</p>
                    </div>
                    <div>
                        <Link to={{
                            pathname: "/checkout",
                            data: totalPrice
                        }}>
                            <button>Proceed To checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;