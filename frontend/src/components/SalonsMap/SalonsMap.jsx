import React from "react";
import { maps_api_key } from "../../localsettings"


const SalonsMap = (props) => {
    return(
        <div>
                <iframe
                    width="600"
                    height="450"
                    // style="border:0"
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
