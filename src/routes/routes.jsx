import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoutes from './private.routes';

import Home from "../views/Home";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import ControlPanel from "../views/ControlPanel";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/panel' element={<ControlPanel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;