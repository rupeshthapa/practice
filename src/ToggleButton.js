import React, { useState } from "react";

function ToggleButton (){
    const [setOn, setOff] = useState(false);

    const handleClick = () => {
        setOff(!setOn);
    }
    return(
        <button onClick={handleClick}>{!setOn ? "Turn On" : "Turn Off"}</button>
    );
}
export default ToggleButton;