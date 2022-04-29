import React from "react";
import { maps_api_key } from "../../localsettings";
import "./SalonMap.css"



const SalonsMap = (props) => {
    
    return(
        <div className="salon-map">
                <iframe
                    width="600"
                    height="450"
                    style={{border:0}}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/search?key=${maps_api_key}
                    &q=curly+hair+salonss+near+me`} >
                </iframe>
      </div>
        
    );
}


export default SalonsMap
