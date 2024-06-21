import React from "react";

const Slot = ({src,alt,link}) => {
    const handleClick = () => {
        window.location.href = link; 
    };

    return(
        <div>
                <img  
                    src={src}
                    width='390px' 
                    height='400px' 
                    onClick={handleClick} 
                    alt={alt}
                />
        </div>
    )
}

export default Slot;
