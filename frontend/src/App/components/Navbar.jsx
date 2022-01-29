import React from "react";
import { Avatar, Menu, Dropdown, Layout, Row, Col, Typography } from "antd";
import styles from "../styles/Navbar.module.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { adminAction } from "../../Authenticate/state/actions";

const { Header } = Layout;
const { Text } = Typography;

/**
 * @function Navbar
 * @returns {Object} JSX.element
 * Navbar component which is rendered for all protected routes
 */

function Navbar() {
  const dispatch = useDispatch();
  const { signUpEventData, logOutRedirect } = useSelector(
    (state) => state.authenticate
  );

  if (logOutRedirect) return <Navigate replace to="/login" />;
  let UserName = localStorage.getItem("adminName");

  const logout = () => {
    dispatch(adminAction.logOut());
  };

  const menu = (
    <Menu>
      <Menu.Item key="0" disabled>
        Hi {UserName}
      </Menu.Item>
      <Menu.Item key="2" onClick={logout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      className="site-layout-background"
      style={{
        padding: "0 0.5rem",
        maxHeight: "50px",
        lineHeight: "50px",
        background: "unset",
      }}
    >
      <Row>
        <Col xs={0} sm={0} md={4} lg={4} xl={4}></Col>
        <Col xs={6} sm={6} md={14} lg={16} xl={16}></Col>
        <Col xs={18} sm={18} md={6} lg={4} xl={4} style={{ textAlign: "end" }}>
          <Row>
            <Col xs={18} sm={18} md={16} lg={16} xl={16}>
              <Text
                ellipsis={true}
                key="7"
                style={{
                  color: "#fff",
                  textTransform: "capitalize",
                }}
              >
                {UserName}
              </Text>
            </Col>
            <Col xs={6} sm={6} md={8} lg={8} xl={8}>
              <Dropdown key="4" overlay={menu} trigger={["click", "hover"]}>
                <Avatar key="5" size="large" icon={<UserOutlined />} />
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
}
export { Navbar };
