import React from "react";

const MainNavigation = () => {
    return(
    <nav style={ {display: 'flex', justifyContent:'flex-start'} }>
        <h4 className="f3 link dim black underline pa2 pointer">Home</h4>
        <h4 className="f3 link dim black underline pa2 pointer">Goals</h4>
    </nav>
    )
}

export default MainNavigation;