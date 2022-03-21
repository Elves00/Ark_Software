import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function Hello({library}){
  
  return(<div>
    <h1>It's time to {library}</h1>
  </div>);
}
ReactDOM.render(
 
  <React.StrictMode>
    <App />
    <h1>"Hello"</h1>
    <Hello library="disco" />
  </React.StrictMode>,
 
  document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
