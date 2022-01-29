import React from "react";
import { Navigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import styles from "../../Authenticate/styles/Admin.module.css";
import { Layout } from "antd";

const { Content } = Layout;

/**
 * @function PrivateRoute
 * @param {Object} Object parent object paraments
 * @returns {Object} JSX.Element
 * Higher order function that validates the auth token before proceeding
 */

export const PrivateRoute = ({ children }) => {
  let accessToken =
    localStorage.getItem("auth") || localStorage.getItem("mobileToken");
  return (
    <div>
      {accessToken ? (
        <Layout style={{ height: "100vh", background: "#032345" }}>
          <Navbar />
          <Content
            style={{
              height: "90%",
              // overflow: "auto",
            }}
          >
            {children}
          </Content>
        </Layout>
      ) : (
        <Navigate replace to="/login" />
      )}
    </div>
  );
};
