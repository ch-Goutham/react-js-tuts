import React, { useContext } from "react";
import { DataContext } from "./App";


function User4(){
    const data= useContext(DataContext);
  return (
<div>
      {data.name}
      {data.Email}
    </div>
  )
}

export default User4
