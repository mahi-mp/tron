import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { Authenticate } from "../Authenticate";
import { UserSignUp } from "../Authenticate/components/UserSignUp";
import { Error404 } from "../Common/components/Error404";
import "./styles/App.module.css";
import { Home } from "../Home";
import { ProfileDetails } from "../ProfileDetails";

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
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/profileDetails/:timeStamp"
          element={
            <PrivateRoute>
              <ProfileDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/editProfileDetails/:timeStamp"
          element={
            <PrivateRoute>
              <ProfileDetails />
            </PrivateRoute>
          }
        />
        <Route exact path="/login" element={<Authenticate />} />
        <Route exact path="/signup" element={<UserSignUp />} />
        <Route exact path="/error" element={<Error404 />} />
        <Route path="*" element={<Navigate replace to="/error" />} />
      </Routes>
    </Router>
  );
}

export { App };
