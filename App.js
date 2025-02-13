// import Parent from "./Parent";
import React,{createContext, } from 'react';
import User1 from "./User1";

// create the context to hold the data
const DataContext = createContext()
function App() {
  // The data we want to share with user4
 const data = "Hello Iam Recat Js"
  return (
    <DataContext.Provider value={data}> 
    <User1/>
    </DataContext.Provider> 
  );

}

export default App;
export {DataContext};
