import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from '../views/Register.jsx';
import Login from "../views/Login.jsx";
import Home from '../views/Home.jsx';
import ProtectedRoutes from '../context/ProtectedRoutes.jsx';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
