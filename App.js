import React from 'react'
// import './App.css';

import Welcome from './Welcome';

const App =()=>{
  return(
    <div style={{textAlign:'center', color:'red'}}>
     <Welcome greeting='welcome to' name='React'/>
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
