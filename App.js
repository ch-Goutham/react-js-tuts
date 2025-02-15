// import Parent from "./Parent";
// import React,{createContext, } from 'react';
// import User1 from "./User1";

// // create the context to hold the data
// const DataContext = createContext()
// function App() {
//   // The data we want to share with user4
//  const data = "Hello Iam Recat Js"
//   return (
//     <DataContext.Provider value={data}> 
//     <User1/>
//     </DataContext.Provider> 
//   );

// }

// export default App;
// export {DataContext};
// import React, { useReducer } from "react";

// const ADD_APPLE = "ADD_APPLE";
// const EAT_APPLE = "EAT_APPLE";

// function appleReducer(state, action) {
//   switch (action.type) {
//     case ADD_APPLE:
//       return state + 1;
//     case EAT_APPLE:
//       return state > 0 ? state - 1 : state;
//     default:
//       return state;
//   }
// }

// function AppleCounter() {
//   const [apples, dispatch] = useReducer(appleReducer, 3);

//   return (
//     <div style={styles.container}>
//       <h1> Apple Counter </h1>
//       <h2>Apples: {apples}</h2>

//       {/* Apple Images */}
//       <div style={styles.appleContainer}>
//         {Array.from({ length: apples }).map((_, index) => (
//           <img
//             key={index}
//             src="https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
//             alt="Apple"
//             style={styles.appleImage}
//           />
//         ))}
//       </div>

//       <button style={styles.button} onClick={() => dispatch({ type: ADD_APPLE })}>
//         Add Apple
//       </button>
//       <button
//         style={{ ...styles.button, backgroundColor: apples > 0 ? "red" : "gray" }}
//         onClick={() => dispatch({ type: EAT_APPLE })}
//         disabled={apples === 0}
//       >
//         Eat Apple
//       </button>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: "center",
//     fontFamily: "Arial, sans-serif",
//     padding: "20px",
//   },
//   appleContainer: {
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     gap: "10px",
//     margin: "10px 0",
//   },
//   appleImage: {
//     width: "50px",
//     height: "50px",
//   },
//   button: {
//     margin: "10px",
//     padding: "10px 20px",
//     fontSize: "18px",
//     cursor: "pointer",
//     border: "none",
//     borderRadius: "5px",
//     backgroundColor: "green",
//     color: "white",
//   },
// };

// export default AppleCounter;

import React,{useState,useEffect,useRef}from 'react';

function CounterWithPrev(){
  const[count,setCount]=useState(0);
  const preCountRef=useRef();
  useEffect(()=>{
    preCountRef.current=count;

  },[count])
  return(
    <div>
      <p>current count:{count}</p>
    
     <p>  prevCount : {preCountRef.current}</p>
     <button onClick={()=> setCount(count+1)}>Increase Count</button>
        
      
    </div>
  
      
  
  )
}
export default CounterWithPrev;