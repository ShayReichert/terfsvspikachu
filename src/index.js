import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//  import AppPresent from './selectCharacter/AppPresent';


ReactDOM.render(
  //  <AppPresent />
  
   <App />
  , 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//<React.StrictMode></React.StrictMode>


// AppPresent : selectCharacter
// App : terfs vs pikachu