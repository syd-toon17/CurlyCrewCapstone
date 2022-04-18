import React from "react";
import { api_key } from "../../localsettings"


const SalonsMap = (props) => {
    return(
        <div>
                <iframe width="450" height="250" 
                    referrerPolicy="no-referrer-when-downgrade"
    src={`https://www.google.com/maps/embed/v1/view?key=${api_key}q=Milwaukee,Wisconsin&center=-33.8569,151.215`}
                    frameBorder="0"
                    allowFullScreen>
                </iframe>
            
        
        </div>
        
    );
}


export default SalonsMap
