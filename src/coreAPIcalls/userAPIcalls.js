import React, {useEffect, useState} from "react";

export const signup = user => {
    return fetch(`https://petapp-backend.herokuapp.com/api/auth/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .catch(err => console.log(err));
  };

  export const signin = user => {
    return fetch(`https://petapp-backend.herokuapp.com/api/auth/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
  export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("jwt", JSON.stringify(data.accessToken));
      console.log(localStorage.getItem("jwt"));
      next();
    }
  };

  
  export const signout = next => {
    console.log(localStorage.getItem("jwt"));

    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      
      return fetch(`https://petapp-backend.herokuapp.com/api/auth/signout`, {
        method: "POST",
        headers: {
          "authorization": localStorage.getItem("jwt")
        }
      })
        .then(response => console.log(response))
        .catch(err => console.log(err));
    }
  };
  
  export const isAuthenticated = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("jwt")) 
      return true;
    else 
      return false;
  };