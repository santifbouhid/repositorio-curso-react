import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5erwBeQd93tSLrRrdTg3aEuIS-2GFWAQ",
  authDomain: "curso-react-bouhid.firebaseapp.com",
  projectId: "curso-react-bouhid",
  storageBucket: "curso-react-bouhid.appspot.com",
  messagingSenderId: "190013854934",
  appId: "1:190013854934:web:aabd1ae0b69d29de82e577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
