import { Navigate, Outlet } from "react-router-dom"
import {User} from "../context/Usercontext"

import React, { useContext } from 'react'

const RequireAuth = () => {
    const user=useContext(User)
  return user.auth.userdetail ? <Outlet /> : <Navigate to="/Login" />;
  
//   return user ? <Outlet /> : <Navigate to="/login" replace />;
  
}

export default RequireAuth