import React from "react";
import "./Signup.css";

export function ProfileSettings() {
  return (
    <div className = "signup-page">
    <div className="site-Title">
        Happy Hoppy
    </div>
    <div className = "signup-box">
      <div>
        <label> Full Name: </label>
        <input placeholder="Name..."></input>
      </div>
      <div>
        <label> Email: </label>
        <input type={'email'} placeholder="email@email.com"></input>
      </div>
      <div>
        <label> Password: </label>
        <input type={'password'} placeholder="Password..."></input>
      </div>
      <div>
        <label> Confirm Password: </label>
        <input type={'password'} placeholder="Password..."></input>
      </div>
      <div>
        <label> Location: </label>
        <input placeholder="Address, City, State..."></input>
      </div>
      <button>
        Save
      </button>
    </div>  
  </div>  
  );
}

export default ProfileSettings;
