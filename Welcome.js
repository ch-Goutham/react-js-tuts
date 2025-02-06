import React from "react";

const Welcome=(props)=>{
    const{greeting, name } = props;
    return(
        <h1 className="message">{greeting},{name}</h1>
    )
}
export default Welcome;