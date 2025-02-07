import React from 'react'
// import './App.css';
import Lists from './Lists';
import Welcome from './Welcome';
import Greeting from './CondRen';

const App =()=>{
const isLoggedIn=false;

  return(
    // <div style={{textAlign:'center', color:'red'}}>
    //  <Welcome greeting='welcome to' name='React'/>
    // </div>
    <div>
      {/* <Greeting isLoggedIn={isLoggedIn}/> */}
      <Lists/>
    </div>
  )
}
// const Welcome=()=><h1 className='message'>Hello World</h1>
// function App(){
//   return(
//     <div>
//       <Welcome/>
//     </div>
    
//   )
  
// }
export default App;
