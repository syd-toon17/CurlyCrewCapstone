import React from "react";
import { useState } from "react";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const ProfilePage = (props) =>{

    function ToggleButtonGroupControlled() {
        const [value, setValue] = useState([1, 3]);
      
        const handleChange = (val) => setValue(val);
      
        return (
          <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
            <ToggleButton id="tbg-btn-1" value={1}>
              Self
            </ToggleButton>
            <ToggleButton id="tbg-btn-2" value={2}>
              Other
            </ToggleButton>

          </ToggleButtonGroup>
        );
      }
      
      return(
      <ToggleButtonGroupControlled />
      );
    
};

export default ProfilePage