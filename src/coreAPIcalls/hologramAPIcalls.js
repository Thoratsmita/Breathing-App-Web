import React, {useEffect, useState} from "react";


export function HologramLocationAPI() {
  const [items, setItems] = useState([]);
  
      return fetch(`https://dashboard.hologram.io/api/1/devices/locations`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials : {
        "apikey" : "3C5RA1S9M8at5M3Ikv3tiTItnUqBBV"
      }
    })
    .then(res => res.json())
    .then(
      (res) => {
        setItems(res.data);
        console.log(res.data);
      })
    .catch(err => console.log(err));
  }


 export const trialAPI = () => {
   return (
     <h1>Trial</h1>
   )
  }




  




  /*var request = new XMLHttpRequest();

request.open('GET', 'https://dashboard.hologram.io/api/1/devices/locations?orgid=&orgids=&tagid=&tagname=&sim=&limit=&startafter=&id=&ids=&linkid=&phone=&tunnelable=&name=&type=&withlocation=&imei=&imei-sv=');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();*/