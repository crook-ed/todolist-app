import React, {useState} from "react";
import "./App.css";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
