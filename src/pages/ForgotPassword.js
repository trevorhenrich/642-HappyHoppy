import React from "react";
import "./Login.css";
import {Link} from 'react-router-dom';

export function ForgotPassword() {
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
      </div>
      <button>
        Request Reset Link 
      </button>
      <div>
          <p> <Link to="/Login" >Return to Log In</Link></p>
        </div>
    </div>  
  </div> 
  );
}

export default ForgotPassword;
