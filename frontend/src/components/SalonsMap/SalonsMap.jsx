import React, { useState } from "react";
import { maps_api_key } from "../../localsettings";



const SalonsMap = (props) => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    const getLocation = () => {
        if (!navigator.geolocation) {
          setStatus('Geolocation is not supported by your browser');
        } else {
          setStatus('Locating...');
          navigator.geolocation.getCurrentPosition((position) => {
            setStatus(null);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
          }, () => {
            setStatus('Unable to retrieve your location');
          });
        }
      }
    
    return(
        <div>
            <button onClick={getLocation}>Get Location</button>
            <h1>Coordinates</h1>
            <p>{status}</p>
            {lat && <p>Latitude: {lat}</p>}
            {lng && <p>Longitude: {lng}</p>}
                <iframe
                    width="600"
                    height="450"
                    style={{border:0}}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/search?key=${maps_api_key}
                    &q=hair+salonss+in+Milwaukee`} >
                </iframe>
      </div>
        
    );
}


export default SalonsMap
