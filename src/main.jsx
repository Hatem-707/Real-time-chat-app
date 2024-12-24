import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

var d = new Date();
var hours = d.getHours();

let morning = hours<12 ? true: false;

if (morning) {
  document.documentElement.style.setProperty(
    "--background-image", morning ? "url('sun.jpg')" : "url('moon.png')"
  )
  document.documentElement.style.setProperty(
    "--theme-color", morning ? "rgba(63.5,76.1,75.7,0.7)":"rgba(19.6, 20.4, 28.2, 0.7)"
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
