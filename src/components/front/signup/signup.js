import React from "react";
import "./signup.css";
import { Link,useHistory } from "react-router-dom";

const Signup = () => {
    return (
        <div className="SignUp-page">
            <div className="SignUp-image"></div>
            <form>
                <h2>Register</h2>
                <input type="text" name="name" required
                       placeholder="Name"/>

                <input type="email" name="email" required
                       placeholder="Email"  />

                <input type="password" name="password" required autoComplete="on"
                       placeholder="Password"  />

                <div className="row">
                    <button className="login-btn"  type="submit">Register</button>
                    <Link className="login-reg-btn" to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Signup;