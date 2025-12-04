import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './dashboard.css'


import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";
// import ReactDOM from "react-dom/client";
import Header from "../src/components/Header";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Header /> */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
