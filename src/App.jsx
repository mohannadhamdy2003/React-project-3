// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import Dashboard from "./Dashboard";
import './App.css'
import React from "react"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App
