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

// import React,{useState,useEffect,useRef}from 'react';

// function CounterWithPrev(){
//   const[count,setCount]=useState(0);
//   const preCountRef=useRef();
//   useEffect(()=>{
//     preCountRef.current=count;

//   },[count])
//   return(
//     <div>
//       <p>current count:{count}</p>
    
//      <p>  prevCount : {preCountRef.current}</p>
//      <button onClick={()=> setCount(count+1)}>Increase Count</button>
        
      
//     </div>
  
      
  
//   )
// }
// export default CounterWithPrev;
// import React, { useReducer } from 'react';
// import './App.css';
// import confetti from 'canvas-confetti';

// function appleReducer(state, action) {
//   switch (action.type) {
//     case 'ADD_APPLE':
//       return state + 1;
//     case 'EAT_APPLE':
//       return state > 0 ? state - 1 : state;
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(appleReducer, 4);

//   const handleEatApple = () => {
//     if (state > 0) {
//       dispatch({ type: 'EAT_APPLE' });
//       confetti({
//         particleCount: 100,
//         spread: 70,
//         origin: { y: 0.6 }
//       });
//     }
//   };
//   const handleAddApple = () => {
//     if (state > 0) {
//       confetti({
//         particleCount: 200,
//         spread: 70,
//         origin: { y: 0.6 }
//       });
//     }
//   };

//   return (
//     <div>
//       <center>
//       <h1>NUMBER OF APPLES: {state}</h1>
//       <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
//         {Array.from({ length: state }).map((_, index) => (
//           <img
//             key={index}
//             src="https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg"
//             alt="Apple"
//             style={{ width: '150px', height: '200px', margin: '5px' }}
//           />
//         ))}
//       </div>
//       <a onClick={handleAddApple}>
//       <button className='a' onClick={() => dispatch({ type: 'ADD_APPLE' }) } >ADD APPLE</button>
//      </a>
//       {/* onClick={() => dispatch({ type: 'ADD_APPLE' }) }> */}
        
//       <button className='b' onClick={handleEatApple}>EAT APPLE</button>
//       </center>
//     </div>
//   );
// }

// export default App;

// Event Handling
// 1.onClick
// Ex:
// function App(){
//   const handleClick =()=>{
//     alert("Button Clicked");
//   }
//   return(
//     <button onClick={handleClick}>Click Me!</button>
//   )
// }
// export default App;

// 2.Change event(onChange)
// This happens when you type in a text box
// Key Points
// Target is aproperty of the event object, and is predefined by javascript fro DOM events
// event.target : always refers the element that triggered the event 
// event.target.value : The value of input elements buttons, form elements

// Ex:
// import React, {useState} from "react";
// function App(){
//   const[text, setText] = useState("");
//   // initially the value is set as empty string
//    const handleChange=(event)=>{
//     setText(event.target.value)
//     // update the text state with the value input 
//   }
//   return(
//     <div>
//       <input type="text" value={text} onChange={handleChange} />
//       <p>Your Text: {text} </p>
//     </div>
//   )
// }

// export default App;

// Mouse events(onMouseEnter, onMouseLeave)
// Thsis happens when we move the mouse over or away from the elements 

// Ex:
import React, {useState} from "react";
function App(){
  const[isHovered, setIsHovered] = useState(false);

  const handleMouseEnter=()=>{
    setIsHovered(true);
    // set as true when mouse is over
  }
  const handleMouseLeave = ()=>{
    setIsHovered(false);
    // set as false when mouse is leaves
  }
  return(
    <div>
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      style={{backgroundColor: isHovered ? 'lightblue' : 'lightgray', color: isHovered? 'red' : 'blue'}}
      >Hover Me!</button>
      {isHovered && <p>Mouse is over the button</p>}
    </div>
  )
}
export default App;