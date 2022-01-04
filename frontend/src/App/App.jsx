import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Map } from "../Map";
import "./styles/App.css";

/**
 * @function App
 * @returns {Object} Handles Routes
 * includes normal and private routes
 * Followed react router 6 and above version
 */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Map />} />
      </Routes>
    </Router>
  );
}

export { App };
