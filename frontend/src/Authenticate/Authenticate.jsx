import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Card, message } from "antd";
import { adminAction } from "./state/actions";
import { Login } from "./components/Login";
import styles from "./styles/Admin.module.css";

function Authenticate() {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(adminAction.getAuthentication(values));
  };

  const { authError } = useSelector((state) => state.authenticate);

  let accessToken = localStorage.getItem("auth");

  useEffect(() => {
    if (authError) {
      message.error("Login failed: Invalid username or password.");
    }
    return () => {
      dispatch(adminAction.resetError());
    };
  }, [authError, dispatch]);

  return accessToken ? (
    <Navigate replace to="/" />
  ) : (
    <div className={styles.alignAdmin}>
      <Card className={styles.custForm}>
        <Login onFinish={onFinish} />
      </Card>
    </div>
  );
}

export { Authenticate };
