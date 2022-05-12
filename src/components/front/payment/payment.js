import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./payment.css";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

class Payment extends Component {

    createOrder(data, actions) {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        description: " Des",
                        currency_code: "USD",
                        value: 200,
                    }
                },
            ],
        });
    }

    onApprove(data, actions) {
        return actions.order.capture()
            .then(() => {
                this.props.history.push({
                    pathname: '/cart'
                });
            })
    }

    render() {

        return (
            <div className="payment-container">
                <div className="row top">
                    <div className="col-2">
                        <div className="card-payment">
                            <div className="cartScreenInfo">
                                <p>Total payment: $200</p>
                            </div>
                        </div>
                        <div className="card-payment card-payment-body">
                            <PayPalButton
                                createOrder={(data, actions) => this.createOrder(data, actions)}
                                onApprove={(data, actions) => this.onApprove(data, actions)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Payment;