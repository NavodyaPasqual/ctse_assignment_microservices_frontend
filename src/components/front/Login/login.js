import React from "react";
import "./login.css";
import { Link,useHistory } from "react-router-dom";

const Login = () => {
    return (
        <div className="SignUp-page">
            <div className="SignUp-image"></div>
            <form>
                <h2>Log in</h2>
                <input type="email" name="email" required
                       placeholder="Email"  />

                <input type="password" name="password" required autoComplete="on"
                       placeholder="Password"  />

                <div className="row">
                    <button className="login-btn"  type="submit">Login</button>
                    <Link className="login-reg-btn" to="/signup">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;