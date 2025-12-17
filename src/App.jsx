// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/website/Auth/SignUp";
import Login from "./pages/website/Auth/Login";
import Home from "./pages/website/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import "./css/App.css";
import React, { useEffect } from "react";
import { TableDemo } from "./components/Users";
import UpdateUser from "./pages/dashboard/UpdateUser";
import CreateUser from "./pages/dashboard/CreateUser";
import RequireAuth from "./pages/website/Auth/RequireAuth";

function App() {
  // const [count, setCount] = useState(0)
// useEffect(()=>{
// fetch("http://127.0.0.1:8000/api/user/shows")
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log("not founds"));
// },[])
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="users" element={<TableDemo />} />
            <Route path="users/:id" element={<UpdateUser />} />
            <Route path="users/create" element={<CreateUser />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
