import React from 'react'
import { Route, Routes } from "react-router-dom";
import Regsiter from '../pages/Regsiter';
import Login from "../pages/Login";
import Home from '../pages/Home';

const Routing = () => {
  return (
    <>

    <Routes>
      <Route path='/register' Component={Regsiter}/>
      <Route path='/login' Component={Login}/>
      <Route path='/' Component={Home}/>
    </Routes>

    </>
  )
}

export default Routing