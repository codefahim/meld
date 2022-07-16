import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Controller/Home/Index";
import Login from "../../Controller/Login/Index";

const Router:React.FC =()=> {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default Router;