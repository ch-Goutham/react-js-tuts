import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Routing from './Routing';
//import Chc from './Chc';
//import Fhc from './Fhc';
//import DataFetch from './DataFetch';
// import ClassEx from './ClassEx';
// import FormHandling from './FormHandling';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App/>
    {/* <ClassEx name="React JS"/>
    <FormHandling/> */} 
    {/* <Chc/>
    <Fhc/> */}
    {/* <DataFetch/> */}
    {/* <Routing/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
