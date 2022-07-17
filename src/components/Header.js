
import React from "react";

const Header = (props)=>{


    return(
        <div className="Header">
            { props.text && 
                <div>
                    <h1>
                        Welcome
                    </h1>
                    <p>Type the name of your city and get the current <span>temperature</span></p>
                </div>}
        </div>
    )
}

export default Header;