import React from "react";
import "./Login.css";
import {Link} from 'react-router-dom';

export function Login() {
  return (
    <div className = "login-page">
      <div className="site-Title">
        Happy Hoppy
      </div>
      <div className = "login-box">
        <div>
          <label> Email: </label>
          <input type={'email'} placeholder="email@email.com"></input>
        </div>
        <div>
          <label> Password: </label>
          <input type={'password'} placeholder="Password..."></input>
        </div>
        <div>
          <p> <Link to="/Signup" >Sign Up!</Link></p>
        </div>
        <button>
          <Link to="/">Login</Link>
        </button>
      </div>  
    </div> 
  )
}

export default Login;
